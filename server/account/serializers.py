from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth.password_validation import validate_password
from django.contrib.auth.hashers import check_password
from rest_framework.exceptions import ValidationError
from .models import CustomUser




class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8, required=False)
    confirm_password = serializers.CharField(write_only=True, min_length=8, required=False)
    current_password = serializers.CharField(write_only=True, min_length=8, required=False)
    profile_picture = serializers.ImageField(required=False, use_url=True)
    email = serializers.EmailField(required=True)

    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'password', 'current_password','confirm_password', 'phone_number', 'profile_picture']
        extra_kwargs = {
            'password': {'write_only': True},
            'confirm_password': {'write_only': True},
            'current_password': {'write_only': True},
        }

    def validate_email(self, value):
        if CustomUser.objects.filter(email=value).exists():
            raise serializers.ValidationError("Email is already in use.")
        return value

    def validate(self, data):
        if 'password' in data or 'confirm_password' in data:
            if data.get('password') != data.get('confirm_password'):
                raise serializers.ValidationError("Password and confirm password do not match.")
        return data

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        user = CustomUser(**validated_data)
        if password:
            user.set_password(password)
        else:
            raise serializers.ValidationError({"password": "Password is required for creating a new user."})
        user.save()
        return user

    def update(self, instance, validated_data):
        
        current_password = validated_data.pop('current_password', None)
        password = validated_data.pop('password', None)
        if password:
            if not current_password :
                print('if not current_password ',current_password)
                raise ValidationError({"current_password": ["Current password is required."]})
            if not instance.check_password(current_password):
                raise ValidationError({"current_password": ["Current password is incorrect."]})
            instance.set_password(password)
        print('after')
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance
    


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        token = data["access"]
        tokenRefresh = data["refresh"]
        user = UserSerializer(self.user).data
        return {"token":token, "tokenRefresh":tokenRefresh, "user":user}