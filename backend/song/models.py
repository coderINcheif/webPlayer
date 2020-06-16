from django.db import models
from genre import models as genre_models

# Create your models here.


class Song(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False)
    genre = models.ManyToManyField(genre_models.Genre, through='SongGenre')


class SongGenre(models.Model):
    song = models.ForeignKey(Song, on_delete=models.CASCADE)
    genre = models.ForeignKey(genre_models.Genre, on_delete=models.CASCADE)
