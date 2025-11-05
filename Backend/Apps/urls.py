from django.urls import path
from . import views


urlpatterns = [
    path("index/" , views.index , name="index"),
# ----------------- Students -------------------
    path("list/" , views.StudentListAPIView.as_view()),
    path("create/" , views.StudentCreateAPIView.as_view()),
    path("detail/<int:pk>/" , views.StudentDetailAPIView.as_view()),
    path("update/<int:pk>/" , views.StudentUpdateAPIView.as_view()),
    path("delete/<int:pk>/" , views.StudentDeleteAPIView.as_view()),
# ----------------- Educational_background -------------------
    path("educational_background/" , views.Educational_backgroundListAPIView.as_view()),
# ----------------- Field_of_studey -------------------
    path("field_of_studey/" , views.Field_of_studeyListAPIView.as_view()),
# ----------------- Gender -------------------
    path("gender/" , views.GenderListAPIView.as_view()),
# ----------------- Teacher -------------------
    path("teacher/" , views.TeacherListAPIView.as_view()),
    path("teacherdelete/<int:pk>/" , views.TeacherDeleteAPIView.as_view()),
    path("teacherupdate/<int:pk>/" , views.TeacherUpdateAPIView.as_view()),
    path("teachercreate/" , views.TeacherCreateAPIView.as_view()),
# ----------------- Score -------------------
    path("Score/" , views.ScoreListAPIView.as_view()),
    path("Scorecreate/" , views.ScoreCreateAPIView.as_view()),
    path("Scoreupdate/<int:pk>/" , views.ScoreUpdateAPIView.as_view()),
    path("Scoredelete/<int:pk>/" , views.ScoreDeleteAPIView.as_view()),
# ----------------- Lesson -------------------
    path("lesson/" , views.LessonListAPIView.as_view()),
    path("lessoncreate/" , views.LessonCreateAPIView.as_view()),
    path("lessonupdate/<int:pk>/" , views.LessonUpdateAPIView.as_view()),
    path("lessondelete/<int:pk>/" , views.LessonDeleteAPIView.as_view()),
# ----------------- School -------------------
    path("School/" , views.SchoolListAPIView.as_view()),
# ----------------- City -------------------
    path("City/" , views.CityListAPIView.as_view()),
]