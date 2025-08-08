from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status

from .models import CustomUser
from .serializers import UserSerializer, CustomTokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import viewsets

from django.conf import settings
from django.core.mail import send_mail


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]





# @api_view (['POST'])
# def SignUpUserView(request):

#     serializer = UserSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#         return Response({"message":"User created successfully."},status=status.HTTP_201_CREATED)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# @api_view(['GET'])
# @permission_classes([IsAuthenticated])
# def UserInfo(request):
#     serializer=UserSerializer(request.user)
#     return Response(serializer.data)

# @api_view(['PUT'])
# @permission_classes([IsAuthenticated])
# def UpdateUserView(request):
#     user=request.user
#     serializer=UserSerializer(user,data=request.data,partial=True)
#     if serializer.is_valid():
#         serializer.save()
#         return Response({"message": "User updated successfully."})
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
