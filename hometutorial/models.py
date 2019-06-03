from django.db import models
from django.utils.text import slugify
from ckeditor_uploader.fields import RichTextUploadingField
from django.urls import reverse
from django.utils import timezone


class PublishedManager(models.Manager):
	def get_queryset(self):
		return super(PublishedManager,self).get_queryset().filter(status='published')


class Registration(models.Model):

    username = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    phone = models.CharField(max_length=50)


class UpcomingEvents(models.Model):

    STATUS_CHOICES = (
        ('draft', 'Draft'), ('published', 'Published'),)

    organizer = models.CharField(max_length=50)
    Date = models.DateField(null=True, blank=True)
    starttime = models.TimeField(null=True,blank=True)
    endtime = models.TimeField(null=True)
    title = models.CharField(max_length=255, blank=True, null=True)
    address = models.CharField(max_length=100,null=True)
    description = RichTextUploadingField(blank=True, null=True)
    image = models.ImageField(null=True)
    ticketprice = models.IntegerField(null=True)
    publish = models.DateTimeField(default=timezone.now)

    slug = models.SlugField(max_length=250, unique_for_date='publish')

    objects = models.Manager()
    published = PublishedManager()


    def __str__(self):
        return self.title

    # Use get_absolute_url() method in our templates to link to specific posts.
    def get_absolute_url(self):
        """Method added to the Model returns the canocial URL of the object."""
        return reverse('event_details', args=[self.slug])

    def save(self):
        self.slug = slugify(self.title)
        super(UpcomingEvents, self).save()

