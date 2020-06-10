# models
from playlist import models as playlist_models

# serializers
from rest_framework import serializers
from authentication.api import serializers as auth_serializers


class PlaylistSerializer(serializers.HyperlinkedModelSerializer):

    def create(self, validated_data):
        validated_data['owner'] = self.context.get('request').user
        return super().create(validated_data)

    class Meta:
        model = playlist_models.Playlist
        fields = '__all__'
        extra_kwargs = {
            'owner': {'view_name': 'user-detail', 'required': False},
        }
