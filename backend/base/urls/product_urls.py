
from django.urls import path
from base.views import product_views as views

# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
# ) // bcos TokenObtainPairView has been customized in our views

urlpatterns = [
    
    path('', views.getProducts, name='products'),
    path('<str:pk>', views.getProduct, name='product'),
]
