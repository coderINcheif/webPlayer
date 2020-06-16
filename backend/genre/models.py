from django.db import models

# Create your models here.


class Genre(models.Model):
    name = models.CharField(unique=True, max_length=100,
                            null=False, blank=False)
