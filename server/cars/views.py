
from rest_framework import  viewsets
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
import math
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
from rest_framework.parsers import MultiPartParser, FormParser
from .filters import CarFilter
from .serializers import CarSerializer
from .models import Car
class CarPagination(PageNumberPagination):
    page_size = 9
    def get_paginated_response(self, data):
        return Response({
            'count': self.page.paginator.count,  
            'total_pages': math.ceil(self.page.paginator.count / self.page_size), 
            'next': self.get_next_link(),
            'previous': self.get_previous_link(),
            'results': data
        })

class CarViewSet(viewsets.ModelViewSet):
    serializer_class = CarSerializer
    permission_classes = []
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_class = CarFilter
    pagination_class = CarPagination
    ordering_fields = ['price', 'mileage', 'created_at']
    ordering = ['-created_at']
    parser_classes = [MultiPartParser, FormParser]

    def get_queryset(self):
        filter_type = self.request.query_params.get('type')

        if self.action in ['update', 'partial_update', 'destroy']:
            return Car.objects.filter(user=self.request.user)

        if filter_type == 'featured':
            self.filter_backends = [] 
            return Car.objects.filter(is_featured=True)[:3]

        if filter_type == 'latest':
            self.filter_backends = [] 
            return Car.objects.order_by('-created_at')[:3]

        return Car.objects.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def perform_destroy(self, instance):
        instance.images.all().delete()
        instance.delete()