from django.http import HttpResponse
from rest_framework import viewsets
from .serializers import CodeSerializer, CommentSerializer
from .models import Code, Comments
# Create your views here.


class CodeView(viewsets.ModelViewSet):
  serializer_class = CodeSerializer
  queryset = Code.objects.all()

class CommentView(viewsets.ModelViewSet):
  serializer_class = CommentSerializer
  queryset = Comments.objects.all()