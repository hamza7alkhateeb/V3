

import django_filters

from .models import Car


class CarFilter(django_filters.FilterSet):

    price_range = django_filters.CharFilter(method='filter_price_range')
    mileage_range = django_filters.CharFilter(method='filter_mileage_range')

    def filter_price_range(self, queryset, name, value):
        if value:
            min_price, max_price = value.split('-')
            queryset = queryset.filter(price__gte=min_price, price__lte=max_price)
        return queryset

    def filter_mileage_range(self, queryset, name, value):
        if value:
            min_mileage, max_mileage = value.split('-')
            queryset = queryset.filter(mileage__gte=min_mileage, mileage__lte=max_mileage)
        return queryset
    
    model = django_filters.CharFilter(field_name='model', lookup_expr='icontains')
    year = django_filters.NumberFilter(field_name='year')
    fuel_type = django_filters.CharFilter(field_name='fuel_type', lookup_expr='iexact')
    color = django_filters.CharFilter(field_name='color', lookup_expr='iexact')
    keyword = django_filters.CharFilter(field_name='title', lookup_expr='icontains')

    class Meta:
        model = Car
        fields = ['price_range', 'mileage_range', 'model', 'year', 'fuel_type', 'color', 'keyword']