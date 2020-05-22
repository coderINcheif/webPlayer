# models
from authentication import models as auth_models

# serializers
from . import serializers as auth_serializers

# utils
from rest_framework.viewsets import ModelViewSet
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from rest_framework import status
from rest_framework.response import Response


class UserViewSet(ModelViewSet):
    queryset = auth_models.CustomUser.objects.all()

    def get_serializer_class(self):
        if self.action == 'retrieve' or self.action == 'update' or self.action == 'partial_update':
            return auth_serializers.UserUpdateSerializer
        if self.action == 'reset_password':
            return auth_serializers.ResetPasswordSerializer
        return auth_serializers.UserSerializer

    @action(detail=True, methods=['post'], url_path='reset-password')
    def reset_password(self, request, pk):
        user = self.get_object()

        serializer = auth_serializers.ResetPasswordSerializer(
            data=request.data,
            instance=user
        )
        if serializer.is_valid():
            serializer.save()
            return Response("Password updated", status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
