# models
from genre import models as genre_models

# rest frameword
from rest_framework import serializers


class GenreSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        models = genre_models.Genre
        fields = '__all__'
