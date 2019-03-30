from django.http import HttpResponse
from .models import Code
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
    return HttpResponse("You're voting on question %s." % code_id)