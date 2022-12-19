# from itertools import product
# from django.shortcuts import render

# from ast import If
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


@api_view(["POST"]) # I want to use this API Vue decorator's. So we want to make this an API call.
# So this is going to be for an authenticated user. So any kind of 
# user can place an order. This is going to be a customer or an admin.
@permission_classes([IsAuthenticated]) 
def addOrderItem (request):
    '''
    1. And let's go down to the actual view, so the first 
        thing we want in this view is to get the user data i.e  user = request.user
    2. Then we want to get the actual data and that's going 
        to be sent in that post data so we can do request i.e data = request.data
        
    3. So let's just do order items now and we want to get all 
        the order items sent in that data or in that post request .
        So we'll just do order items or pull those out. We'll send out from the front end.
        i.e orderItem = data['orderItem']
        And once we get that, I want to first create a condition here.
        So after that, what I want to do is first check if we have order items to actually process.
        So if we have the order items and the length of this list, so this is 
        going to be a list sent from frontend

    '''
    user = request.user # get dis from token 
    data = request.data
    
    orderItems = data['orderItem'] # dis is going to be JSON data
    
    if orderItems and len(orderItems) == 0:
        # So if we don't have any order items or the length of that order 
        # items list is zero will send out a response.
        return Response({'detail': 'No Order Item '}, status=status.HTTP_400_BAD_REQUEST)
    else:
        # here's where we can process that order.
        
        # (1) Create Order 
        order = Order.objects.create(
            # all dis is cumin from frontend
            
            user            = user, # to no d user buying it
            paymentMethod   = data['paymentMethod'], 
            taxPrice        = data['taxPrice'], 
            shippingPrice   = data['shippingPrice'], 
            totalPrice      = data['totalPrice'], 
        )
        # (2) Create Shipping address : And once we create that shipping address,
        # we want to loop through our order items, we want to create the order 
        # items, actually make those items, and then we'll connect them to the order.
        
        shipping = ShippingAddress.objects.create(
            # all dis is cumin from frontend
            
            order = order, # That's going to be the order we just created.
            
            # And then inside of data, we're going to take in the shipping address object.
            # So shipping address, kind of like our state and then inside of shipping address.
            # We want to pull out the actual address or just the address like that.
            address         = data["shippingAddress"]["address"],
            city            = data["shippingAddress"]["city"],
            postalCode      = data["shippingAddress"]["postalCode"],
            country         = data["shippingAddress"]["country"],
            
        )
         
        # (3) Create Order items and set order to orderItem relationship. 
        # So we'll have to go through add these to the database and set 
        # the order to order item relationship.
        # So we're going to have to loop through each order items inside 
        # of our array or list, whatever you call
        
        for i in orderItems:
            # And the first thing we need to do is actually get the product 
            # by its ID because in our orderItem, we need to connect it to 
            # the product and create that relationship.
            # So we need to know what the order item to product relationship is.
            product = Product.objects.get(_id=i['product']) # i: is object and product is d id value
            
            item = OrderItem.objects.create(
                product     = product, # set to that product that we just queried from the database and then we need our order.
                order       = order, 
                name        = product.name,
                
                qty         = i['qty'], # that's going to be set to what's inside of that object
                price       = i['price'], # that's going to be set to what's inside of that object
                image       = product.image.url,
            )     
            
            
            # (4) Update stock inside d loop. So once we create this, we want to go into
            # product model and we want to update that product stock, because 
            # once these items are added to the order, that stock needs to 
            # change, because somebody is about to buy those items. countInStock
            
            product.countInStock -= item.qty # So we're taking the item quantity and we already created that item.
            product.save()
            
        # (5) And what I want to do next is actually serialize my order, my shipping 
        # address and then the actual orderItem.
        # So to use this and react, we need this to be serialized and turned into JSON data.
        serializer = OrderSerializer(order, many=False)
        return Response(serializer.data)
    


@api_view(["GET"])
@permission_classes([IsAuthenticated]) 
def getOrderById (request, pk):
     
    '''
        1. get d user
        2. get Order by id
        3. So we're going to have to write a condition here.
        So once we get the order, there are two types of 
        users that can see in order.
        3a. user that wants to see information about their order 
        3b. a staff or an admin user inside of our account that wants to maybe see a customer's order.
        4. serializer  data if d condition is true.his serializer is going to be the order serializer.
        5. throw d order u get into d serializer
    
    '''
    user = request.user
    
    try: # if order didnt exists at all
        order = Order.objects.get(_id=pk)
        
        if user.is_staff or order.user == user: # current user dat we pass d token
            serializer = OrderSerializer(order, many=False)
            
            return Response(serializer.data)
        else:
            return Response({'detail': "Not authorized to view this order"}, 
                            status=status.HTTP_400_BAD_REQUEST)
    except:
        return Response({'detail': "Order does not exist"}, 
                            status=status.HTTP_400_BAD_REQUEST)
    