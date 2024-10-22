from rest_framework import generics
from .models import Product
from .serializers import ProductSerializer
from django.http import JsonResponse

class ProductCreateAPIView(generics.CreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    
    
class ProductListAPIView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


def product_detail(request, id):
    try:
        product = Product.objects.get(id=id)
        product_data = {
            "id": product.id,
            "product_name": product.product_name,
            "description": product.description,
            "price": product.price,
            "images": product.images.url,  # Assuming images1 is an ImageField
        }
        return JsonResponse(product_data)
    except Product.DoesNotExist:
        return JsonResponse({"error": "Product not found"}, status=404)
