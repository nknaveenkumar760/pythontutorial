from django.db import models

# Create your models here.


class Contact(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email_address = models.CharField(max_length=50)
    subject = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)

    def __str__(self):

        return self.first_name

    
