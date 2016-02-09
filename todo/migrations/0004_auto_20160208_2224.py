# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0003_auto_20151105_1823'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='color',
            field=models.ForeignKey(blank=True, to='todo.Color', null=True),
        ),
        migrations.AlterField(
            model_name='item',
            name='done_date',
            field=models.DateTimeField(null=True, blank=True),
        ),
        migrations.AlterField(
            model_name='item',
            name='due_bye',
            field=models.DateTimeField(null=True, blank=True),
        ),
    ]
