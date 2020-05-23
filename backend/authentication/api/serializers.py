from rest_framework import serializers
from authentication import models as auth_models
from django.contrib.auth.password_validation import validate_password
from django.core import exceptions


class UserSerializer(serializers.ModelSerializer):

    confirm_password = serializers.CharField(write_only=True)

    class PasswordConfirmationError(Exception):
        message = "Passwords do not match"

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
        extra_kwargs = {'password': {'write_only': True}}
        fields = ('id', 'first_name', 'last_name',
                  'email', 'password', 'confirm_password')


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
