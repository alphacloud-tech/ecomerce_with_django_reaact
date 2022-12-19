    

from django.urls import path
from base.views import user_views as views

# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
# ) // bcos TokenObtainPairView has been customized in our views

urlpatterns = [
    # path('users/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'), # before or default
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'), #after or customized
    
    path('register/', views.registerUser, name='register'),
    
    path('', views.getUsers, name='users'),
    path('profile/', views.getUserProfile, name='user-profile'), 
    path('profile/update/', views.UpdateUserProfile, name='user-profile-update'), 
    
]
