from django.db import models


class Registration(models.Model):

    username = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    phone = models.CharField(max_length=50)
    session_key = models.CharField(max_length=50)


class Login(models.Model):

    username = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    phone = models.CharField(max_length=50)

