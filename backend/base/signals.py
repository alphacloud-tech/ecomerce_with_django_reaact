from turtle import update
from django.db.models.signals import pre_save

from django.contrib.auth.models import User


def updateUser(sender, instance, **kwargs): # dis we fire off when that user model get save
    '''
    sender : is dat sends d signal
    instance : is d actual object
    
    '''
    print('signal triger')
    
    user = instance
    if user.email != '':
        user.username = user.email
    
pre_save.connect(updateUser,sender=User,) # to fire dis function, anytime d user model is saved, we're gong to use pre_save

    