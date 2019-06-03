from __future__ import unicode_literals

# Create your models here.
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.urls import reverse
from ckeditor_uploader.fields import RichTextUploadingField
from taggit.managers import TaggableManager


class PublishedManager(models.Manager):
	def get_queryset(self):
		return super(PublishedManager, self).get_queryset().filter(status='published')


class Post(models.Model):
	STATUS_CHOICES = (
		('draft', 'Draft'), ('published', 'Published'),)

	title = models.CharField(max_length=250)
	slug = models.SlugField(max_length=250, unique_for_date='publish')
	author = models.ForeignKey(User, related_name='blog_posts', on_delete=True)
	body = RichTextUploadingField(blank=True, null=True)
	image = models.ImageField(blank=True, null=True)
	publish = models.DateTimeField(default=timezone.now)
	created = models.DateTimeField(auto_now_add=True)
	updated = models.DateTimeField(auto_now=True)
	status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='draft')

	objects = models.Manager()
	published = PublishedManager()
	tags = TaggableManager()  # Tags manager; adds, retrieve & removes tags from Post objects.

	class Meta:
		ordering = ('-publish',)
	
	def __str__(self):
		return self.title

	# Use get_absolute_url() method in our templates to link to specific posts.
	def get_absolute_url(self):
		"""Method added to the Model returns the canocial URL of the object."""
		return reverse('blog:post_detail',args=[self.slug])


class Comment(models.Model):
	post = models.ForeignKey(Post, related_name='comments',on_delete=True)
	reply_to = models.ForeignKey('self', related_name='replies',null=True, blank=True,on_delete=True)
	name = models.CharField(max_length=80)
	email = models.EmailField()
	body = models.TextField()
	created = models.DateTimeField(auto_now_add=True)
	updated = models.DateTimeField(auto_now=True)
	active = models.BooleanField(default=True)
	
	class Meta:
		ordering = ('created',)
	
	def __str__(self):
		return 'Comment by {} on {}'.format(self.name, self.post)

