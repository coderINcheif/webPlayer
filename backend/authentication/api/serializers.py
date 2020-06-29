# models
from authentication import models as auth_models

# rest_framework utils
from rest_framework import serializers, status
from rest_framework.exceptions import APIException
from rest_framework.authtoken.models import Token

# django utils
from django.contrib.auth.password_validation import validate_password
from django.core import exceptions
from django.core.exceptions import ValidationError


class ValidationError422(APIException):
    status_code = status.HTTP_422_UNPROCESSABLE_ENTITY


class UserSerializer(serializers.ModelSerializer):

    confirm_password = serializers.CharField(write_only=True)
    token = serializers.CharField(read_only=True)

    class PasswordConfirmationError(Exception):
        message = "Passwords do not match"

    def to_representation(self, instance):
        rep = super().to_representation(instance)
        register_view = self.context.get('register_view')
        rep.pop('token') if not register_view else None
        return rep

    def validate(self, attrs):
        validated_data = super().validate(attrs)
        password = validated_data.get('password')
        password2 = validated_data.get('confirm_password')

        try:
            validate_password(password=password)
            if password != password2:
                raise UserSerializer.PasswordConfirmationError
            return validated_data
        except exceptions.ValidationError as e:
            raise serializers.ValidationError({"password": e.error_list})
        except UserSerializer.PasswordConfirmationError as e:
            raise serializers.ValidationError({'confirm_password': e.message})

    def create(self, validated_data):
        validated_data.pop('confirm_password')
        user = auth_models.CustomUser.objects.create(**validated_data)
        return user

    class Meta:
        model = auth_models.CustomUser
        fields = (
            'id',
            'first_name',
            'last_name',
            'email',
            'password',
            'token',
            'confirm_password'
        )
        extra_kwargs = {
            'password': {'write_only': True},
        }


class UserUpdateSerializer(serializers.ModelSerializer):

    class Meta:
        model = auth_models.CustomUser
        fields = ('id', 'first_name', 'last_name', 'email')


class ResetPasswordSerializer(serializers.ModelSerializer):

    current_password = serializers.CharField(write_only=True)
    new_password = serializers.CharField(write_only=True)

    class InvalidPasswordError(Exception):
        message = "Incorrect Password"

    def validate(self, *args, **kwargs):
        validated_data = super().validate(*args, **kwargs)
        current_password = validated_data.get('current_password')
        new_password = validated_data.get('new_password')

        try:
            if not self.instance.check_password(current_password):
                raise ResetPasswordSerializer.InvalidPasswordError
            validate_password(password=new_password, user=self.instance)
            return validated_data
        except exceptions.ValidationError as e:
            raise serializers.ValidationError({'new_password': e.error_list})
        except self.InvalidPasswordError as e:
            raise serializers.ValidationError({'current_password': e.message})

    def update(self, instance, validated_data):
        new_password = validated_data.get('new_password')
        instance.set_password(new_password)
        instance.save()
        return instance

    class Meta:
        model = auth_models.CustomUser
        fields = ('current_password', 'new_password',)
