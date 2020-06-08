# models
import artist.models as artist_models
import song.models as song_models

# django utils
from django.db import models

# Create your models here.


class Album(models.Model):
    name = models.CharField(max_length=100, blank=False, null=False)
    owner = models.ForeignKey(artist_models.Artist, on_delete=models.CASCADE)
    songs = models.ManyToManyField(song_models.Song, through='AlbumSong')


class AlbumSong(models.Model):
    album = models.ForeignKey(Album, on_delete=models.CASCADE)
    song = models.ForeignKey(song_models.Song, on_delete=models.CASCADE)
