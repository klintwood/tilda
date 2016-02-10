from django.shortcuts import render

from .models import Item, Color


def todo(request, num):
	if request.method == 'POST':
		
		if num == "-1":
			print "make new one!"
			i = Item()
			i.note = request.POST.get('note')
			i.save()
		else:
			note = request.POST.get('note')
			color= request.POST.get('color')

			i = Item.objects.get(id=num)
			i.note = note
			i.color = color
			i.save()
	return render(request, 'todo/random_template.html')


def all_notes(request):
	if request.method == 'POST':
		i = Item()
		i.note = "New Note"
		i.save()

	all_items = Item.objects.all().order_by('-last_edit')
	colors = Color.objects.all()
	context = {'all_items': all_items, 'colors': colors}
	return render(request, 'todo/all_notes.html', context)
