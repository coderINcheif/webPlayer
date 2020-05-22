from rest_framework import serializers
from authentication import models as auth_models


class UserSerializer(serializers.ModelSerializer):

    password2 = serializers.CharField(
        write_only=True,
        label='Confirm password'
    )

    def validate_password(self, value, *args, **kwargs):
        if len(value) < 8:
            raise serializers.ValidationError(
                {"password1": ["Password must be atleast 8 characters long"]}
            )
        return value

    def validate(self, attrs):
        validated_data = super().validate(attrs)
        if validated_data['password2'] != validated_data['password']:
            raise serializers.ValidationError(
                {'password2': ["Passwords do not match"]}
            )

    def create(self, validated_data):
        email = validated_data['email']
        password = validated_data['password']

        user = auth_models.CustomUser()
        user.email = email
        user.set_password = password
        user.save()
        return user

    class Meta:
        model = auth_models.CustomUser
        fields = ('first_name', 'last_name', 'email', 'password', 'password2')
        extra_kwargs = {
            'password': {'write_only': True},
        }


class UserUpdateSerializer(serializers.ModelSerializer):

    def update(self, instance, validated_data):
        email = validated_data.get(email)
        first_name = validated_data.get(first_name)
        last_name = validated_data.get(last_name)

    class Meta:
        model = auth_models.CustomUser
        fields = ('first_name', 'last_name', 'email')
