# models
import artist.models as artist_models
# import song.models as song_models

# django utils
from django.db import models

# Create your models here.


class Album(models.Model):
    name = models.CharField(max_length=100, blank=False, null=False)
    owner = models.ForeignKey(artist_models.Artist, on_delete=models.CASCADE)
    date_created = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = (('name', 'owner'),)
