from rest_framework import serializers
from .models import *


# ------------------ Student -------------------------------
class StudentSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Students
        fields = "__all__"


    def validate_age(self , value) :
        if int(value) < 7 or int(value) > 25 :
            raise serializers.ValidationError("Please give a age between 7 and 25!!!")
        return value
    
    def validate_phonenumber(self , value) :
        if len(value) != 11 :
            raise serializers.ValidationError("This phonenumber doesn't correct!!!")
        return value
    
    def validate_GPA(self , value) :
        if int(value) > 20 :
            raise serializers.ValidationError("Don't have this number!!!")
        return value


class OneStudentSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Students
        fields = "__all__"


    def validate_age(self , value) :
        if int(value) < 7 or int(value) > 25 :
            raise serializers.ValidationError("Please give a age between 7 and 25!!!")
        return value
    
    def validate_phonenumber(self , value) :
        if len(value) != 11 :
            raise serializers.ValidationError("This phonenumber doesn't correct!!!")
        return value
    
    def validate_GPA(self , value) :
        if int(value) > 20 :
            raise serializers.ValidationError("Don't have this number!!!")
        return value


# ------------------ Educational background -------------------------------
class Educational_backgroundSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Educational_background
        fields = ["title"]


# ------------------ Field of studey -------------------------------
class Field_of_studeySerializer(serializers.ModelSerializer) :
    class Meta :
        model = Field_of_studey
        fields = ["title"]


# ------------------ Gender -------------------------------
class GenderSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Gender
        fields = ["title"]


# ------------------ Type of teaching -------------------------------
class TypeteachingSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Typeteaching
        fields = ["title"]

class OneTypeteachingSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Typeteaching
        fields = ["title"]


# ------------------ Teacher -------------------------------
class TeacherSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Teacher
        fields = ["id" , "title" , "type"]


class OneTeacherSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Teacher
        fields = "__all__"


# ------------------ Score -------------------------------
class ScoreSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Score
        fields = "__all__"


class OneScoreSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Score
        fields = "__all__"


    def validate_grade(self , value) :
        if int(value) > 20 :
            raise serializers.ValidationError("This grade is not correct!!!")
        return value


# ------------------ Lesson -------------------------------
class LessonSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Lesson
        fields = "__all__"


class OneLessonSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Lesson
        fields = "__all__"


# ------------------ School -------------------------------
class SchoolSerializer(serializers.ModelSerializer) :
    class Meta :
        model = School
        fields = "__all__"


# ------------------ City -------------------------------
class CitySerializer(serializers.ModelSerializer) :
    class Meta :
        model = City
        fields = "__all__"