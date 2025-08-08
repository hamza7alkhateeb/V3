from rest_framework import serializers
from .models import Car,CarImage

class CarImageSerializer(serializers.ModelSerializer):
    class Meta:
        model= CarImage
        fields = ['id','image']

class CarSerializer(serializers.ModelSerializer):
    images = serializers.ListField(child=serializers.ImageField(), write_only=True, required=False)
    existing_images = CarImageSerializer(source='images', many=True, read_only=True)
    user = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model= Car
        fields = '__all__'

    def create(self, validated_data):
        images=validated_data.pop('images',[])
        car = Car.objects.create(**validated_data)
        for image in images:
            CarImage.objects.create(car=car,image=image)
        return car
    
    def update(self, instance, validated_data):
        images = validated_data.pop('images', [])
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()

        for image in images:
            CarImage.objects.create(car=instance, image=image)

        return instance