from django.db import models
from django.contrib.auth.models import User
# Create your models here.


# Educational_background models :
class Educational_background(models.Model) :
    title = models.CharField(max_length=255)

    def __str__(self):
        return self.title


# Field of studey :
class Field_of_studey(models.Model) :
    title = models.CharField(max_length=255)

    def __str__(self):
        return self.title


# Gender :
class Gender(models.Model) :
    title = models.CharField(max_length=255)

    def __str__(self):
        return self.title


# Teacher :
class Teacher(models.Model) :
    title = models.CharField(max_length=255)

    def __str__(self):
        return self.title


# Score : 
class Lesson(models.Model):
    title = models.CharField(max_length=255)

    def __str__(self):
        return self.title


class Score(models.Model):
    user = models.ForeignKey(User , on_delete=models.CASCADE , null=True , blank=True)
    lesson = models.ForeignKey(Lesson , on_delete=models.CASCADE , null=True , blank=True)
    grade = models.IntegerField(null=True , blank=True)


# School :
class School(models.Model) :
    title = models.CharField(max_length=255)

    def __str__(self):
        return self.title


# City :
class City(models.Model) :
    title = models.CharField(max_length=255)

    def __str__(self):
        return self.title


# Students models :
class Students(models.Model) :
    firstname = models.CharField(max_length=255 , null=True , blank=True)
    lastname = models.TextField(null=True , blank=True)
    age = models.IntegerField(null=True , blank=True)
    teacher = models.ForeignKey(Teacher , null=True , blank=True , on_delete=models.CASCADE)
    phonenumber = models.IntegerField(null=True , blank=True)
    educational_background = models.ForeignKey(Educational_background , on_delete=models.CASCADE , null=True , blank=True)
    GPA = models.FloatField(null=True , blank=True)
    score = models.ManyToManyField(Score , null=True , blank=True)
    school = models.ForeignKey(School , on_delete=models.CASCADE , null=True , blank=True)
    national_code = models.IntegerField(null=True , blank=True)
    field_of_studey = models.ForeignKey(Field_of_studey , on_delete=models.CASCADE , null=True , blank=True)
    gender = models.ForeignKey(Gender , null=True , blank=True , on_delete=models.CASCADE)
    city = models.ForeignKey(City , on_delete=models.CASCADE , null=True , blank=True)
    created = models.DateField(auto_now=True , null=True , blank=True)

    def __str__(self):
        return self.firstname