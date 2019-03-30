from django.http import HttpResponse
from rest_framework import viewsets
from .serializers import CodeSerializer, CommentSerializer
from .models import Code, Comments
# Create your views here.

def index(request):
	latest_code_list = Code.objects.all()
	output = ', '.join([c.title_text for c in latest_code_list])
	return HttpResponse(output)


def detail(request, code_id):
    return HttpResponse("You're looking at code %s." % code_id)

def results(request, comment_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % comment_id)

def vote(request, question_id):
    return HttpResponse("You're voting on question %s." % question_id)

class CodeView(viewsets.ModelViewSet):
  serializer_class = CodeSerializer
  queryset = Code.objects.all()

class CommentView(viewsets.ModelViewSet):
  serializer_class = CommentSerializer
  queryset = Comments.objects.all()