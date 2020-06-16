# model
from genre import models as genre_models

# serializers
from genre.api import serializers as genre_serializers

# rest framework
from rest_framework import viewsets


class GenreViewSet(viewsets.ModelViewSet):

    queryset = genre_models.Genre.objects.all()
    serializer_class = genre_serializers.GenreSerializer
