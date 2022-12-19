from django.shortcuts import render

from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser


from rest_framework.response import Response
from base.models import *
from base.serializers import *

from base.products import products


# Create your views here.

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from django.contrib.auth.hashers import make_password
from rest_framework import status




@api_view(['GET'])
def getProducts(request):
    products    = Product.objects.all()
    serializer  = ProductSerializer(products, many=True) # many=True means i we serializing multiple object or single object
    return Response(serializer.data)


@api_view(['GET'])
def getProduct(request, pk):
    product     = Product.objects.get(_id=pk)
    serializer  = ProductSerializer(product, many=False)
    # for i in products:
    #     if i['_id'] == pk:
    #         product = i
    #         break
    return Response(serializer.data)