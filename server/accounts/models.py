from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    username = None  # Remove the username field
    email = models.EmailField(unique=True)  # Use email as the unique identifier
    role = models.CharField(max_length=50, default='user')  # Role field

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email

    # Add related_name to avoid clashes with Django's default User model
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='custom_user_set',  # Change the related name
        blank=True,
        help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.',
        verbose_name='groups',
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='custom_user_permissions_set',  # Change the related name
        blank=True,
        help_text='Specific permissions for this user.',
        verbose_name='user permissions',
    )

   
