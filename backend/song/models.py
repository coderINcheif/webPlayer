from django.db import models

# Create your models here.


class Genere(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False)


class Song(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False)
    genere = models.ManyToManyField(Genere, through='SongGenere')


class SongGenere(models.Model):
    song = models.ForeignKey(Song, on_delete=models.CASCADE)
    genere = models.ForeignKey(Genere, on_delete=models.CASCADE)
