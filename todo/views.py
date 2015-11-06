from django.shortcuts import render

from .models import Item


def todo(request):
    return render(request, 'todo/random_template.html')


def all_notes(request):
    all_items = Item.objects.all()
    context = {'all_items': all_items}
    return render(request, 'todo/all_notes.html', context)
