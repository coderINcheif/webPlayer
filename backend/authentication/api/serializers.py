from rest_framework import serializers
from authentication import models as auth_models
from django.contrib.auth.password_validation import validate_password
from django.core import exceptions


class UserSerializer(serializers.ModelSerializer):

    password2 = serializers.CharField(
        write_only=True,
        label='Confirm password'
    )

    def validate_password(self, value, *args, **kwargs):
        try:
            validate_password(password=value)
            return value
        except exceptions.ValidationError as e:
            raise serializers.ValidationError({"password": e.error_list})

    def validate(self, attrs):
        validated_data = super().validate(attrs)
        if validated_data['password2'] != validated_data['password']:
            raise serializers.ValidationError(
                {'password2': ["Passwords do not match"]}
            )
        return validated_data

    def create(self, validated_data):
        password = validated_data['password']
        email = validated_data['email']
        first_name = validated_data['first_name']
        last_name = validated_data['last_name']

        user = auth_models.CustomUser()
        user.email = email
        user.first_name = first_name
        user.last_name = last_name
        user.set_password(password)
        user.save()
        return user

    class Meta:
        model = auth_models.CustomUser
        fields = ('first_name', 'last_name', 'email', 'password', 'password2')
        extra_kwargs = {
            'password': {'write_only': True},
        }


class UserUpdateSerializer(serializers.ModelSerializer):

    class Meta:
        model = auth_models.CustomUser
        fields = ('first_name', 'last_name', 'email')


class ResetPasswordSerializer(serializers.ModelSerializer):

    old_password = serializers.CharField(write_only=True)
    new_password = serializers.CharField(write_only=True)

    def update(self, instance, validated_data):
        old_password = validated_data.get('old_password')
        new_password = validated_data.get('new_password')

        if not instance.check_password(old_password):
            raise serializers.ValidationError(
                {'old_password': ["Password did not match"]}
            )

        try:
            validate_password(password=new_password, user=self.instance)
            instance.set_password(new_password)
            instance.save()
            return instance
        except exceptions.ValidationError as e:
            raise serializers.ValidationError(
                {'new_password': e.error_list}
            )

    class Meta:
        model = auth_models.CustomUser
        fields = ('old_password', 'new_password',)
