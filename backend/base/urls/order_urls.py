    

from django.urls import path
from base.views import order_views as views

# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
# ) // bcos TokenObtainPairView has been customized in our views

urlpatterns = [
    path('add/', views.addOrderItem, name='orders-add'),
    path('<str:pk>/', views.getOrderById, name='user-order'),
]
