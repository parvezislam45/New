from django.http import JsonResponse
from django.middleware.csrf import get_token
from rest_framework import status, generics
from rest_framework.exceptions import ValidationError
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import User  # Replace with your actual user model import
from .serializers import UserSerializer  # Replace with your actual serializer import

# CSRF token view
def get_csrf(request):
    csrf_token = get_token(request)
    return JsonResponse({'csrfToken': csrf_token})

class SaveUserView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
 
    def create(self, request, *args, **kwargs):
        try:
            email = request.data.get('email')
            role = request.data.get('role', 'user')

            if not email:
                raise ValidationError({'error': 'Email is required'})

            user, created = User.objects.get_or_create(email=email, defaults={'role': role})

            if created:
                return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)
            else:
                return Response({'message': 'User already exists'}, status=status.HTTP_200_OK)

        except ValidationError as e:
            return Response(e.detail, status=status.HTTP_400_BAD_REQUEST)

        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    def get(self, request, *args, **kwargs):
        try:
            users = self.get_queryset()
            serializer = self.get_serializer(users, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
