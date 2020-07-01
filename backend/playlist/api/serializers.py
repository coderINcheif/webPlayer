# models
from playlist import models as playlist_models

# serializers
from rest_framework import serializers
from authentication.api import serializers as auth_serializers


class PlaylistSerializer(serializers.HyperlinkedModelSerializer):

    id = serializers.IntegerField(read_only=True)

    def validate_name(self, data):
        try:
            playlist_models.Playlist.objects.get(name=data)
            raise serializers.ValidationError("Playlist already exist")
        except playlist_models.Playlist.DoesNotExist:
            return data

    def create(self, validated_data):
        owner = self.context.get('request').user
        return playlist_models.Playlist.objects.create(**validated_data, owner=owner)

    class Meta:
        model = playlist_models.Playlist
        fields = '__all__'
        extra_kwargs = {
            'owner': {'view_name': 'user-detail', 'read_only': True},
        }
