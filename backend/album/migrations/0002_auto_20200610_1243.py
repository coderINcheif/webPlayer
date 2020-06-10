# Generated by Django 3.0.6 on 2020-06-10 12:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('artist', '0001_initial'),
        ('song', '0001_initial'),
        ('album', '0001_initial'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='album',
            unique_together={('name', 'owner')},
        ),
        migrations.AlterUniqueTogether(
            name='albumsong',
            unique_together={('album', 'song')},
        ),
    ]
