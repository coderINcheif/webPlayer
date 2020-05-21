from rest_framework import serializers
from song import models as song_models


class SongSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = song_models.Song
        fields = "__all__"
