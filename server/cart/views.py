from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework import status
from product.models import Product
from .models import Cart

# @csrf_exempt  # This will exempt CSRF for this view.
# @api_view(['POST'])
# @authentication_classes([JWTAuthentication])
# @permission_classes([IsAuthenticated])
def add_to_cart(request):
    
    product_id = request.data.get('product_id')
    # user = request.user
    
    try:
        product = Product.objects.get(id=product_id)
        cart_item, created = Cart.objects.get_or_create( product=product)

        if not created:
            cart_item.quantity += 1
            cart_item.save()

        return Response({'message': 'Product added to cart'}, status=status.HTTP_201_CREATED)

    except Product.DoesNotExist:
        return Response({'error': 'Product not found'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
