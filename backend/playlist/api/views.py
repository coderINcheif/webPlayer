# models
from playlist import models as playlist_models

# views
from rest_framework.viewsets import ModelViewSet

# serializers
from playlist.api import serializers as playlist_serializers


class PlaylistViewSet(ModelViewSet):
    queryset = playlist_models.Playlist.objects.all()
    serializer_class = playlist_serializers.PlaylistSerializer
