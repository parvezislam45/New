from django.db import models
from category.models import Category
from django.urls import reverse

class Product(models.Model):
    product_name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100,unique = True)
    description = models.CharField(max_length=400,blank = True)
    price = models.IntegerField()
    stock = models.IntegerField()
    images = models.ImageField(upload_to='photos/products',blank=True)
    is_available = models.BooleanField(default=True)
    category        = models.CharField(max_length=100)
    created_date    = models.DateTimeField(auto_now_add=True)
    modified_date   = models.DateTimeField(auto_now=True)
    
    
    def get_url(self):
        return reverse('product_detail', args=[self.category.slug,self.slug])
    
    def __str__(self):
        return self.product_name