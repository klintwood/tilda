# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='item',
            old_name='text',
            new_name='note',
        ),
        migrations.AlterField(
            model_name='item',
            name='color',
            field=models.ForeignKey(to='todo.Color', null=True),
        ),
        migrations.AlterField(
            model_name='item',
            name='creation_date',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='item',
            name='done_date',
            field=models.DateTimeField(null=True),
        ),
        migrations.AlterField(
            model_name='item',
            name='due_bye',
            field=models.DateTimeField(null=True),
        ),
    ]
