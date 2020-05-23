from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class CustomUser(AbstractUser):
    email = models.EmailField(max_length=254, null=False, unique=True)
    username = models.CharField(
        max_length=254, null=True, unique=False, blank=True
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
