# models
import song.models as song_models


# django utils
from django.db import models
from django.conf import settings

# Create your models here.


class Playlist(models.Model):
    name = models.CharField(max_length=100, blank=False, null=False)
    owner = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )
    songs = models.ManyToManyField(song_models.Song, through='PlaylistSong')


class PlaylistSong(models.Model):
    playlist = models.ForeignKey(Playlist, on_delete=models.CASCADE)
    song = models.ForeignKey(song_models.Song, on_delete=models.CASCADE)
