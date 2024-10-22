from django.urls import path
from .views import ProductCreateAPIView,ProductListAPIView,product_detail

urlpatterns = [
    path('create/', ProductCreateAPIView.as_view(), name='product_create_api'),
    path('all/', ProductListAPIView.as_view(), name='product-list'),
    path('product/<int:id>/',product_detail, name='product_detail'),
]
