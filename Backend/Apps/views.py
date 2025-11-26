from django.shortcuts import render
from rest_framework.generics import CreateAPIView , RetrieveAPIView , ListAPIView , UpdateAPIView , DestroyAPIView
from rest_framework.permissions import AllowAny , IsAdminUser , IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter , OrderingFilter
from .models import *
from .serializers import *
from .permissions import *
from .pagination import *
from .filters import StudentsFilters



def index(request) :
    return render(request , "Apps/index.html")


# ----------------- Students -------------------
class StudentListAPIView(ListAPIView):
    queryset = Students.objects.all()
    serializer_class = StudentSerializer
    pagination_class = StudentPagination
    filter_backends = [DjangoFilterBackend , SearchFilter , OrderingFilter]
    filterset_class = StudentsFilters
    search_fields = ["firstname" , "=school" , "city"]
    ordering_fields = ["lastname"]
    ordering = ["-GPA" , "firstname"]
    # authentication_classes = [JWTAuthentication]


class StudentCreateAPIView(CreateAPIView):
    serializer_class = StudentSerializer
    queryset = Students.objects.all()
    # authentication_classes = [JWTAuthentication]


class StudentDetailAPIView(RetrieveAPIView):
    queryset = Students.objects.all()
    serializer_class = OneStudentSerializer
    # permission_classes = [IsAdminUser]
    # authentication_classes = [JWTAuthentication]


class StudentUpdateAPIView(UpdateAPIView):
    queryset = Students.objects.all()
    serializer_class = OneStudentSerializer
    # permission_classes = [IsAdminUser]
    # authentication_classes = [JWTAuthentication]



class StudentDeleteAPIView(DestroyAPIView):
    queryset = Students.objects.all()
    serializer_class = OneStudentSerializer
    # permission_classes = [IsSuperUser]
    # authentication_classes = [JWTAuthentication]


# ----------------- Educational_background -------------------
class Educational_backgroundListAPIView(ListAPIView):
    queryset = Educational_background.objects.all()
    serializer_class = Educational_backgroundSerializer
    ordering = ["educational_background__title"]


# ----------------- Field_of_studey -------------------
class Field_of_studeyListAPIView(ListAPIView):
    queryset = Field_of_studey.objects.all()
    serializer_class = Field_of_studeySerializer
    ordering = ["field_of_studey__title"]


# ----------------- Gender -------------------
class GenderListAPIView(ListAPIView):
    queryset = Gender.objects.all()
    serializer_class = GenderSerializer


# ----------------- Type of teaching -------------------
class TeachListAPIView(ListAPIView):
    queryset = Typeteaching.objects.all()
    serializer_class = TypeteachingSerializer
    # permission_classes = [IsAuthenticated]
    search_fields = ["=teacher__type__title"]
    ordering = ["teacher__type__title"]


class TeachDeleteAPIView(DestroyAPIView):
    queryset = Typeteaching.objects.all()
    serializer_class = OneTypeteachingSerializer
    permission_classes = [IsSuperUser , IsAdminUser]


class TeachUpdateAPIView(UpdateAPIView):
    queryset = Typeteaching.objects.all()
    serializer_class = OneTypeteachingSerializer
    permission_classes = [IsSuperUser , IsAdminUser]


class TeachCreateAPIView(CreateAPIView):
    queryset = Typeteaching.objects.all()
    serializer_class = OneTypeteachingSerializer
    permission_classes = [IsSuperUser , IsAdminUser]


# ----------------- Teacher -------------------
class TeacherListAPIView(ListAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
    # permission_classes = [IsAuthenticated]
    pagination_class = TeacherPagination
    search_fields = ["=teacher__title"]
    ordering = ["teacher__title"]
    # authentication_classes = [JWTAuthentication]


class TeacherDeleteAPIView(DestroyAPIView):
    queryset = Teacher.objects.all()
    serializer_class = OneTeacherSerializer
    permission_classes = [IsSuperUser]
    authentication_classes = [JWTAuthentication]


class TeacherUpdateAPIView(UpdateAPIView):
    queryset = Teacher.objects.all()
    serializer_class = OneTeacherSerializer
    permission_classes = [IsSuperUser]
    authentication_classes = [JWTAuthentication]


class TeacherCreateAPIView(CreateAPIView):
    queryset = Teacher.objects.all()
    serializer_class = OneTeacherSerializer
    permission_classes = [IsSuperUser]
    authentication_classes = [JWTAuthentication]


# ----------------- Score -------------------
class ScoreListAPIView(ListAPIView):
    queryset = Score.objects.all()
    serializer_class = ScoreSerializer
    # permission_classes = [IsAdminUser]
    ordering = ["-score__grade"]


class ScoreUpdateAPIView(UpdateAPIView):
    queryset = Score.objects.all()
    serializer_class = OneScoreSerializer
    permission_classes = [IsAdminUser]


class ScoreDeleteAPIView(DestroyAPIView):
    queryset = Score.objects.all()
    serializer_class = OneScoreSerializer
    permission_classes = [IsAdminUser , IsSuperUser]


class ScoreCreateAPIView(CreateAPIView):
    queryset = Score.objects.all()
    serializer_class = OneScoreSerializer
    permission_classes = [IsAdminUser , IsSuperUser]

# ----------------- Lesson -------------------
class LessonListAPIView(ListAPIView):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer
    permission_classes = [IsAdminUser , IsAuthenticated]
    ordering = ["-score__lesson__title"]


class LessonUpdateAPIView(UpdateAPIView):
    queryset = Lesson.objects.all()
    serializer_class = OneLessonSerializer
    permission_classes = [IsAdminUser]


class LessonDeleteAPIView(DestroyAPIView):
    queryset = Lesson.objects.all()
    serializer_class = OneLessonSerializer
    permission_classes = [IsAdminUser , IsSuperUser]


class LessonCreateAPIView(CreateAPIView):
    queryset = Lesson.objects.all()
    serializer_class = OneLessonSerializer
    permission_classes = [IsAdminUser]


# ----------------- School -------------------
class SchoolListAPIView(ListAPIView) :
    queryset = School.objects.all()
    serializer_class = SchoolSerializer
    # permission_classes = [IsSuperUser , IsAdminUser]
    pagination_class = SchoolPagination
    ordering = ["school__title"]


# ----------------- City -------------------
class CityListAPIView(ListAPIView) :
    queryset = City.objects.all()
    serializer_class = CitySerializer
    # permission_classes = [IsSuperUser , IsAdminUser]
    pagination_class = CityPagination
    ordering = ["city__title"]