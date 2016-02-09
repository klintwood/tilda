from django.shortcuts import render

from .models import Item


def todo(request, num):
	if request.method == 'POST':
		data = request.POST.get('data')
		print "Data: "
		print data
		i = Item.objects.get(id=num)
		i.note = data
		i.save()
	return render(request, 'todo/random_template.html')


def all_notes(request):
	if request.method == 'POST':
		i = Item()
		i.note = " ajhskd"
		i.save()

	all_items = Item.objects.all().order_by('-last_edit')
	context = {'all_items': all_items}
	return render(request, 'todo/all_notes.html', context)
