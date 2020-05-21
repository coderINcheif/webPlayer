from rest_framework import viewsets
from . import serializers as song_serializers
from song import models as song_models


class SongViewSet(viewsets.ModelViewSet):
    queryset = song_models.Song.objects.all()
    serializer_class = song_serializers.SongSerializer
