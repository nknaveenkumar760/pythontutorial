# Create your views here.
from __future__ import unicode_literals

from django.shortcuts import render, get_object_or_404
from .models import Post, Comment
from .forms import CommentForm, EmailPostForm
from django import template
from django.template.loader import get_template 
from taggit.models import Tag
from django.db.models import Count
from django.core.mail import send_mail
from django.core.paginator import Paginator, EmptyPage, \
    PageNotAnInteger


def post_list(request, tag_slug=None):
    object_list = Post.published.all()

    tag = None

    if tag_slug:
        tag = get_object_or_404(Tag, slug=tag_slug)
        object_list = object_list.filter(tags__in=[tag])

    paginator = Paginator(object_list, 3)  # 3 posts in each page.
    page = request.GET.get('page')  # Indicates current page number.
    try:
        posts = paginator.page(page)  # Obtain objects for the desired page.
    except PageNotAnInteger:
        #  If page is not an integer deliver the first page.
        posts = paginator.page(1)
    except EmptyPage:
        #  If page is out of range deliver last page of results
        posts = paginator.page(paginator.num_pages)
    return render(request,
                  'blog.html',
                  {'page': page,
                   'posts': posts,
                   'tag': tag})


def post_detail(request, post):
	
    post = get_object_or_404(Post, slug=post, status='published')

    # List of active comments for this post
    comments = post.comments.filter(active=True)

    new_comment = None

    if request.method == 'POST':
        # A comment was posted
        comment_form = CommentForm(data=request.POST)

        if comment_form.is_valid():
            
            # Create Comment object but don't save to database yet
            new_comment = comment_form.save(commit=False)

            # Assign the current post to the comment
            new_comment.post = post

            # Save the comment to the database
            new_comment.save()
    else:
        comment_form = CommentForm()

    # List of similar posts
    post_tags_ids = post.tags.values_list('id', flat=True)
    similar_posts = Post.published.filter(tags__in=post_tags_ids)\
                                  .exclude(id=post.id)
    similar_posts = similar_posts.annotate(same_tags=Count('tags'))\
        .order_by('-same_tags', '-publish')[:4]

    return render(request,
                  'post_details.html',
                  {'post': post,
                   'comments': comments,
                   'new_comment': new_comment,
                   'comment_form': comment_form,
                   'similar_posts': similar_posts})

# def post_detail(request, post):

# 	print(post)
# 	post = get_object_or_404(Post, slug=post, status='published')
# 	print(post)
# 	comments = post.comments.filter(active=True)
# 	print(comments)
# 	# for comment in comments:
# 	# 	for reply in comment.replies.all():
# 	# 		print reply.body
# 	# 		# print reply.__dict__

# 	# rpy = Comment.objects.filter(active=True)
# 	if request.method == 'POST':
# 		comment_form = CommentForm(data=request.POST)
# 		if comment_form.is_valid():
# 			new_comment = comment_form.save(commit=False)
# 			# Assign the current post to the comment
# 			new_comment.post = post
# 			# Save the comment to the database
# 			new_comment.save()
# 	else:
# 		comment_form = CommentForm()

# 	return render(request, 'post_details.html', {'post': post, 'comments': comments, 'comment_form': comment_form})


def post_share(request, post_id):
    """The View that shares the Post via email."""
    # Retrieve post by ID
    post = get_object_or_404(Post, id=post_id, status='published')
    sent = False

    if request.method == 'POST':
        # Form was submitted
        form = EmailPostForm(request.POST)
        if form.is_valid():
            # Form fields passed validation
            cd = form.cleaned_data
            post_url = request.build_absolute_uri(
                post.get_absolute_url())

            subject = '{} ({}) recommends you reading "{}"' \
                .format(cd['name'], cd['email'], post.title)

            message = 'Read "{}" at {}\n\n{}\'s comments: {}' \
                .format(post.title, post_url, cd['name'], cd['comments'])

            send_mail(subject, message, 'nknaveenkumar760@gmail.com', [cd['to']])

            sent = True
    else:
        form = EmailPostForm()
    return render(request, 'share.html', {'post': post, 'form': form, 'sent': sent})
