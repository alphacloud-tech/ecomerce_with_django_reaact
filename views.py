# # from ast import If
# # import email
# # from email import message
# # from itertools import product
# # from urllib import response

# from django.shortcuts import render

# from django.http import JsonResponse
# from rest_framework.decorators import api_view, permission_classes
# from rest_framework.permissions import IsAuthenticated, IsAdminUser


# from rest_framework.response import Response
# from .models import *
# from .serializers import *

# from .products import products


# # Create your views here.

# from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
# from rest_framework_simplejwt.views import TokenObtainPairView

# from django.contrib.auth.hashers import make_password
# from rest_framework import status

# class MyTokenObtainPairSerializer(TokenObtainPairSerializer): # for customizing our web to our choices
#     # @classmethod
#     # def get_token(cls, user): // dis is d default method bcos we dnt wnt nid it dat is y i override it with validation method 
#     #     token = super().get_token(user)

#     #     # Add custom claims
#     #     token['username'] = user.username
#     #     token['message'] = "hellow adams"
#     #     # ...
#         # return token
        
#     def validate(self, attrs):
#         ''' 
#         we r overridin d validation method n we r serilizing more 
#         infomation about our users in order to make our login more 
#         easier i.e we dnt nid to decode the token.
#         We r just going to get back this information i.e the username and email 
#         we right away in our initial response n its make much senses for login
#         '''
#         data                = super().validate(attrs)

#         # data['username']    = self.user.username
#         # data['email']       = self.user.email
        
#         '''
#         Instead of gettin all d data one by one i.e d field like 
#         username n email lk above we cn loop throught
#         our UserSerializerWithToken to get all d field out
#         '''
#         serializer = UserSerializerWithToken(self.user).data # to return back more data
        
#         for key, value in serializer.items():
#             data[key] = value
        
#         return data

# class MyTokenObtainPairView(TokenObtainPairView):
#     serializer_class = MyTokenObtainPairSerializer
    
    
# @api_view(['GET'])
# def getRoute(request):
#     routes = [
#         '/api/products/',
#         '/api/products/create/',
        
#         '/api/products/upload/',
        
#         '/api/products/<id>/reviews/',
        
#         '/api/products/top/',
#         '/api/products/<id>',
        
#         '/api/products/delete/<id>/',
#         '/api/products/<update>/<id>/',
#     ]
#     return Response(routes)





# @api_view(['POST'])
# def registerUser(request):
    
#     data = request.data
#     # print('DATA', data)
    
#     try:
#         user = User.objects.create(
#             first_name = data['name'],
#             username = data['email'],
#             email = data['email'],
#             password = make_password(data['password'])
#         )
    
#         serializer = UserSerializerWithToken(user, many=False)
#         return Response(serializer.data)
    
#     except:
#         message = {
#             'detail':'User with this email already exists!'
#         }
#         return Response(message, status=status.HTTP_400_BAD_REQUEST)



# @api_view(['GET'])
# @permission_classes([IsAuthenticated])

# def getUserProfile(request):
#     user        = request.user
    
#     serializer  = UserSerializer(user, many=False) # many=True means i we serializing multiple object or single object
#     return Response(serializer.data)



# @api_view(['GET'])
# @permission_classes([IsAdminUser])
# def getUsers(request):
#     users    = User.objects.all()
#     serializer  = UserSerializer(users, many=True) # many=True means i we serializing multiple object or single object
#     return Response(serializer.data)



# @api_view(['GET'])
# def getProducts(request):
#     products    = Product.objects.all()
#     serializer  = ProductSerializer(products, many=True) # many=True means i we serializing multiple object or single object
#     return Response(serializer.data)


# @api_view(['GET'])
# def getProduct(request, pk):
#     product     = Product.objects.get(_id=pk)
#     serializer  = ProductSerializer(product, many=False)
#     # for i in products:
#     #     if i['_id'] == pk:
#     #         product = i
#     #         break
#     return Response(serializer.data)