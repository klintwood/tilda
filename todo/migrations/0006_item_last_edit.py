# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0005_auto_20160208_2238'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='last_edit',
            field=models.DateTimeField(default=datetime.datetime(2016, 2, 9, 9, 32, 47, 607904, tzinfo=utc), auto_now=True),
            preserve_default=False,
        ),
    ]
