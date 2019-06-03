from django import forms
from django.forms import ModelForm
from .models import Comment


class EmailPostForm(forms.Form):
    """Form to let users share posts by email."""

    name = forms.CharField(max_length=25)
    email = forms.EmailField()
    to = forms.EmailField()
    comments = forms.CharField(required=False, widget=forms.Textarea)


class CommentForm(forms.ModelForm):

	class Meta:
		model = Comment
		fields = ('name', 'email', 'body')

	def clean(self):
		# data from the form is fetched using super function
		#super(CommentForm, self).clean()

		# extract the username and text field from the data
		name = self.cleaned_data.get('name')
		email = self.cleaned_data.get('email')
		body = self.cleaned_data.get('body')
		return super(CommentForm, self).clean()
		