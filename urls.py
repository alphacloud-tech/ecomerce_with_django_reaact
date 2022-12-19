
# from unicodedata import name
# from django.urls import path
# from . import views

# # from rest_framework_simplejwt.views import (
# #     TokenObtainPairView,
# # ) // bcos TokenObtainPairView has been customized in our views

# urlpatterns = [
#     # path('users/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'), # before or default
#     path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'), #after or customized
    
#     path('users/register/', views.registerUser, name='register'),
    
#     path('', views.getRoute, name='routes'),
    
#     path('users/', views.getUsers, name='users'),
#     path('users/profile/', views.getUserProfile, name='user-profile'), 
    
#     path('products/', views.getProducts, name='products'),
#     path('products/<str:pk>', views.getProduct, name='product'),
# ]
