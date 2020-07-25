# Generated by Django 3.0.6 on 2020-07-05 17:33

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('album', '0002_auto_20200610_1243'),
    ]

    operations = [
        migrations.AddField(
            model_name='album',
            name='date_created',
            field=models.DateTimeField(auto_now_add=True, default=datetime.datetime(2020, 7, 5, 17, 33, 38, 649144, tzinfo=utc)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='albumsong',
            name='date_created',
            field=models.DateTimeField(auto_now_add=True, default=datetime.datetime(2020, 7, 5, 17, 33, 51, 803392, tzinfo=utc)),
            preserve_default=False,
        ),
    ]