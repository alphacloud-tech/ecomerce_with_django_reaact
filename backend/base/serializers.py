# from ast import If
# from lib2to3.pgen2 import token
# from turtle import mode
# from unicodedata import name

from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *

from rest_framework_simplejwt.tokens import RefreshToken


class UserSerializer(serializers.ModelSerializer):
    '''
    to use method get_name() we nid to let the UserSerializer knw abt it 
    i.e by doing dis name = serializers.serializerMethodField(read_only=True)
    '''
    name = serializers.SerializerMethodField(read_only=True) 
    _id = serializers.SerializerMethodField(read_only=True) 
    isAdmin = serializers.SerializerMethodField(read_only=True) 
    class Meta:
        model = User
        fields = ['id', '_id', 'username', 'email', 'name', 'isAdmin']
        # fields = '__all__'
        
    def get_isAdmin(self, obj):
        return obj.is_staff
    
    def get__id(self, obj):
        return obj.id
       
    def get_name(self, obj): # this is d actual method of d serializer method above
        name = obj.first_name
        if name == "" :
            name = obj.email
        return name
        

class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True) 
    
    class Meta:
        model = User
        fields = ['id', '_id', 'username', 'email', 'name', 'isAdmin', 'token']
        
    def get_token(self, obj):
        '''
        As we r generating or serializer users we r going to take dat user object
        n we r going to return back another token with initial response
        so in d frontend we r goin to hv two token
        '''
        token = RefreshToken.for_user(obj)
        return str(token.access_token)
        

class ProductSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Product
        # fields = ['id', 'account_name', 'users', 'created']
        fields = '__all__'
  
  
  
        
class ShippingAddressSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = ShippingAddress
        # fields = ['id', 'account_name', 'users', 'created']
        fields = '__all__'
        
class OrderItemSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = OrderItem
        # fields = ['id', 'account_name', 'users', 'created']
        fields = '__all__'
        
class OrderSerializer(serializers.ModelSerializer): # We are only using our order serializer in the view.
    
    orderItem       = serializers.SerializerMethodField(read_only=True) 
    shppingAddress  = serializers.SerializerMethodField(read_only=True) 
    user            = serializers.SerializerMethodField(read_only=True) 
    
    class Meta:
        model = Order
        # fields = ['id', 'account_name', 'users', 'created']
        fields = '__all__'
        
    def get_orderItem(self, obj):
        items = obj.orderitem_set.all()
        serializer = OrderItemSerializer(items, many=True)
        return serializer.data
    
    def get_shppingAddress(self, obj):
        '''
        And I want to write a condition here to actually see if we have one.
        If we don't, then I want to return back false.
        If we do, then I want to serialize that and then return it.
        So they try and in here we'll set the value of address.
        '''
        try:
            '''
             obj.shppingAddress: 
            So this is a one to one field.
            So that's why we can get it by just obj.shppingAddress.
            And if we have that, then we just want to serialize that 
            data so we can get that shipping address serializer.
            
            And then many is going to be to false because we only have one shipping address.
            '''
            address = ShippingAddressSerializer(obj.shippingaddress, many=False).data
        except:
            address = False
        return address
    
    def get_user(self, obj):
        user = obj.user
        serializer = UserSerializer(user, many=False)
        return serializer.data