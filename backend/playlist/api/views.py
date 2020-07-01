# models
from playlist import models as playlist_models

# views
from rest_framework.viewsets import ModelViewSet

# serializers
from playlist.api import serializers as playlist_serializers

# rest_framework
from rest_framework.response import Response


class PlaylistViewSet(ModelViewSet):
    queryset = playlist_models.Playlist.objects.all()
    serializer_class = playlist_serializers.PlaylistSerializer

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset().order_by('date_created')
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
