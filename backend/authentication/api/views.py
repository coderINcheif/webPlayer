# models
from authentication import models as auth_models
from rest_framework.authtoken.models import Token

# views
from rest_framework.viewsets import GenericViewSet, mixins
from rest_framework.generics import CreateAPIView

# serializers
from . import serializers as auth_serializers

# rest_framework utils
from rest_framework.decorators import action, api_view, permission_classes
from rest_framework import status, permissions
from rest_framework.response import Response

# django utils
from django.shortcuts import redirect, reverse, get_object_or_404
from django.contrib.auth import get_user_model
from django.conf import settings


class UserViewSet(
    mixins.ListModelMixin,
    mixins.UpdateModelMixin,
    mixins.RetrieveModelMixin,
    mixins.DestroyModelMixin,
    GenericViewSet
):
    """
    the create url provided by ModelViewSet did not fit convention
    as /register is more preferable than '/user with post request'
    thus this workaround
    """

    queryset = auth_models.CustomUser.objects.all()

    def get_serializer_class(self):
        if self.action == 'retrieve' or self.action == 'update' or self.action == 'partial_update':
            return auth_serializers.UserUpdateSerializer
        if self.action == 'reset_password':
            return auth_serializers.ResetPasswordSerializer
        return auth_serializers.UserSerializer

    @action(detail=True, methods=['post'], url_path='reset-password', url_name='user-reset-password')
    def reset_password(self, request, pk):
        user = self.get_object()
        serializer = auth_serializers.ResetPasswordSerializer(
            data=request.data,
            instance=user
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response("Password updated", status=status.HTTP_200_OK)


class UserRegisterView(CreateAPIView):
    serializer_class = auth_serializers.UserSerializer
    queryset = auth_models.CustomUser.objects.all()
    permission_classes = [permissions.AllowAny]

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['register_view'] = True
        return context


@api_view(http_method_names=['POST'])
@permission_classes((permissions.AllowAny,))
def login_view(request, *args, **kwargs):
    email: str = request.POST.get('email')
    password: str = request.POST.get('password')
    user: auth_models.CustomUser = get_object_or_404(
        get_user_model(), email=email)

    if user.check_password(password):
        token: Token = Token.objects.get_or_create(user=user)[0]
        return Response({"token": token.key}, status=status.HTTP_302_FOUND)
    else:
        return Response({'password': "Invalid password"}, status=status.HTTP_400_BAD_REQUEST)


@api_view(http_method_names=['POST'])
@permission_classes((permissions.IsAuthenticated,))
def logout_view(request, *args, **kwargs):
    Token.objects.get(user=request.user).delete()
    return Response('success', status=status.HTTP_200_OK)
