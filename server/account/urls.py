from django.urls import path, include
from .views import *
from rest_framework.routers import DefaultRouter



router=DefaultRouter()
router.register(r'users',UserViewSet,basename='user')

urlpatterns=[
    
    path('users/login',CustomTokenObtainPairView.as_view(),name='login'),
    path('', include(router.urls)), 
]

