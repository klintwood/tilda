import markdown

from django.db import models
from django.contrib.auth.models import User as BaseUser


class Item(models.Model):
    note = models.TextField()
    done_date = models.DateTimeField(null=True, blank=True)
    due_bye = models.DateTimeField(null=True, blank=True)
    creation_date = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(BaseUser, null=True)
    color = models.ForeignKey('Color', null=True, blank=True)

    def __unicode__(self):
        return self.note

    def get_rendered_note(self):
        return markdown.markdown(self.note)
    
    
class Color(models.Model):
    name = models.CharField(max_length=60)
    color_code = models.CharField(max_length=20)
