# django
from django.db import models

# models
from genre import models as genre_models
from artist import models as artist_models
from album import models as album_models

# Create your models here.


class Song(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False)
    genre = models.ManyToManyField(genre_models.Genre, through='SongGenre')
    owner = models.ForeignKey(artist_models.Artist,
                              on_delete=models.CASCADE, null=False)
    album = models.ForeignKey(album_models.Album,
                              on_delete=models.CASCADE, null=False)


class SongGenre(models.Model):
    song = models.ForeignKey(Song, on_delete=models.CASCADE)
    genre = models.ForeignKey(genre_models.Genre, on_delete=models.CASCADE)
    date_created = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = (('song', 'genre'),)
