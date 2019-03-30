from django.db import models

# Create your models here.
from django.db import models

class Code(models.Model):
  title_text = models.CharField(max_length=200)
  code_text = models.TextField()

class Comments(models.Model):
  title = models.ForeignKey(Code, on_delete=models.CASCADE)
  comment_text = models.TextField()
  votes = models.IntegerField(default=0)
