from django.db import models
from django.conf import settings
from product.models import Product

class Cart(models.Model):
    
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    added_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.quantity} of {self.product.product_name} in {self.user.email}'s cart"
