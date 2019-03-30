from django.urls import path

from . import views

urlpatterns = [
  path('', views.index, name='index'),
   # ex: /polls/5/
   path('<int:code_id>/', views.detail, name='detail'),
   # ex: /polls/5/results/
   path('<int:comment_id>/results/', views.results, name='results'),
   # ex: /polls/5/vote/
   path('<int:code_id>/vote/', views.vote, name='vote'),
]