from django.shortcuts import render

from .models import Item, Color


def todo(request, num):
	if request.method == 'POST':
		print "num"
		print num
		if num == "-1":
			print "make new one!"
			i = Item()
			i.note = request.POST.get('data')
			i.save()
		else:
			data = request.POST.get('data')
			i = Item.objects.get(id=num)
			i.note = data
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
