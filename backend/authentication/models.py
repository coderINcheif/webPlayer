# models
from rest_framework.authtoken.models import Token


# django utils
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.contrib.auth import get_user_model

# Create your models here.


class CustomUser(AbstractUser):
    email = models.EmailField(max_length=254, null=False, unique=True)
    username = models.CharField(
        max_length=254, null=True, unique=False, blank=True
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']


@receiver(post_save, sender=get_user_model())
def login(instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
