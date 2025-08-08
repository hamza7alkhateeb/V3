
# #=============== models.py
# from django.db import models
# from django.conf import settings

# class Car(models.Model):
#     FUEL_CHOICES = [
#         ('gasoline', 'Gasoline'),
#         ('diesel', 'Diesel'),
#         ('electric', 'Electric'),
#         ('hybrid', 'Hybrid')
#     ]

#     user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
#     title = models.CharField(max_length=255)
#     price = models.DecimalField(max_digits=10, decimal_places=2)
#     is_featured = models.BooleanField(default=False)
#     created_at = models.DateTimeField(auto_now_add=True)
#     model = models.CharField(max_length=100)
#     year = models.IntegerField()
#     mileage = models.IntegerField(help_text="Mileage in kilometers")
#     fuel_type = models.CharField(max_length=20, choices=FUEL_CHOICES)
#     color = models.CharField(max_length=50)
#     description = models.TextField()
#     features = models.TextField()

#     def __str__(self):
#         return self.title

# class CarImage(models.Model):
#     car = models.ForeignKey(Car, related_name='images', on_delete=models.CASCADE)
#     image = models.ImageField(upload_to='car_images/')

#     def __str__(self):
#         return f"Image for {self.car.title}"


# #=============== serializers.py
# from rest_framework import serializers
# from .models import Car,CarImage

# class CarImageSerializer(serializers.ModelSerializer):
#     class Meta:
#         model= CarImage
#         fields = ['id','image']

# class CarSerializer(serializers.ModelSerializer):
#     images = serializers.ListField(child=serializers.ImageField(), write_only=True, required=False)
#     existing_images = CarImageSerializer(source='images', many=True, read_only=True)
#     user = serializers.PrimaryKeyRelatedField(read_only=True)

#     class Meta:
#         model= Car
#         fields = '__all__'

#     def create(self, validated_data):
#         images=validated_data.pop('images',[])
#         car = Car.objects.create(**validated_data)
#         for image in images:
#             CarImage.objects.create(car=car,image=image)
#         return car
    
#     def update(self, instance, validated_data):
#         images = validated_data.pop('images', [])
#         for attr, value in validated_data.items():
#             setattr(instance, attr, value)
#         instance.save()

#         for image in images:
#             CarImage.objects.create(car=instance, image=image)

#         return instance
# #=============== filters.py


# import django_filters

# from .models import Car


# class CarFilter(django_filters.FilterSet):
#     price__lt = django_filters.NumberFilter(field_name='price', lookup_expr='lt')
#     price__gt = django_filters.NumberFilter(field_name='price', lookup_expr='gt')
#     model = django_filters.CharFilter(field_name='model', lookup_expr='icontains')
#     year = django_filters.NumberFilter(field_name='year')
#     fuel_type = django_filters.CharFilter(field_name='fuel_type', lookup_expr='iexact')
#     color = django_filters.CharFilter(field_name='color', lookup_expr='iexact')
#     mileage__lt = django_filters.NumberFilter(field_name='mileage', lookup_expr='lt')
#     mileage__gt = django_filters.NumberFilter(field_name='mileage', lookup_expr='gt')
#     keyword = django_filters.CharFilter(field_name='title', lookup_expr='icontains')

#     class Meta:
#         model = Car
#         fields = [
#             'price__lt', 'price__gt', 'model', 'year', 'fuel_type', 'color',
#             'mileage__lt', 'mileage__gt', 'keyword'
#         ]
# #=============== views.py

# from rest_framework import  viewsets
# from rest_framework.pagination import PageNumberPagination
# from django_filters.rest_framework import DjangoFilterBackend
# from rest_framework.filters import OrderingFilter
# from rest_framework.parsers import MultiPartParser, FormParser
# from .filters import CarFilter
# from .serializers import CarSerializer
# from .models import Car
# class CarPagination(PageNumberPagination):
#     page_size = 2

# class CarViewSet(viewsets.ModelViewSet):
#     serializer_class = CarSerializer
#     permission_classes = []
#     filter_backends = [DjangoFilterBackend, OrderingFilter]
#     filterset_class = CarFilter
#     pagination_class = CarPagination
#     ordering_fields = ['price', 'mileage', 'created_at']
#     ordering = ['-created_at']
#     parser_classes = [MultiPartParser, FormParser]

#     def get_queryset(self):
#         queryset = Car.objects.all()
#         filter_type = self.request.query_params.get('type')

#         if self.action in ['update', 'partial_update', 'destroy']:
#             return queryset.filter(user=self.request.user)

#         if filter_type == 'featured':
#             queryset = queryset.filter(is_featured=True)
#         elif filter_type == 'latest':
#             queryset = queryset.order_by('-created_at')[:10]

#         return queryset

#     def perform_create(self, serializer):
#         serializer.save(user=self.request.user)

#     def perform_destroy(self, instance):
#         instance.images.all().delete()
#         instance.delete()
# #=============== carApi.js
# import { createSlice } from "@reduxjs/toolkit";

# const initialState = {
#   token: JSON.parse(localStorage.getItem("token")) || null,
#   user: null,
# };
# export const authSlice = createSlice({
#   name: "auth",
#   initialState,
#   reducers: {
#     setCredentials: (state, action) => {
#       const token = action.payload.token;
#       const user = action.payload.user;
#       state.user = user;
#       state.token = token;
#       localStorage.setItem("token", JSON.stringify(token));
#     },
#     logout: (state) => {
#       state.token = null;
#       state.user = null;
#       localStorage.removeItem("token"); // .clear
#     },
#   },
# });

# export const { setCredentials, logout } = authSlice.actions;
# export default authSlice.reducer;
