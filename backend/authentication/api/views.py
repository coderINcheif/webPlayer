from rest_framework.viewsets import ModelViewSet
from authentication import models as auth_models
from . import serializers as auth_serializers
from rest_framework.viewsets import ModelViewSet


class UserViewSet(ModelViewSet):
    queryset = auth_models.CustomUser.objects.all()

    def get_serializer_class(self):
        if self.action == 'retrieve' or self.action == 'update' or self.action == 'partial_update':
            return auth_serializers.UserUpdateSerializer
        return auth_serializers.UserSerializer
