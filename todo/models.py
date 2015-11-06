from django.db import models
from django.contrib.auth.models import User as BaseUser


class Item(models.Model):
    note = models.CharField(max_length=120)
    done_date = models.DateTimeField(null=True)
    due_bye = models.DateTimeField(null=True)
    creation_date = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(BaseUser, null=True)
    color = models.ForeignKey('Color', null=True)
    
    
class Color(models.Model):
    name = models.CharField(max_length=60)
    color_code = models.CharField(max_length=20)
