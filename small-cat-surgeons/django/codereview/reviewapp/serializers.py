from rest_framework import serializers
from .models import Code, Comments

class CodeSerializer(serializers.ModelSerializer):
  class Meta:
    model = Code
    fields = ('id', 'title_text', 'code_text')

class CommentSerializer(serializers.ModelSerializer):
  class Meta:
    model = Comments
    fields = ('id', 'comment_text', 'title','votes')
