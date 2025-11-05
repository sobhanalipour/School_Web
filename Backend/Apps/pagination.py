from rest_framework.pagination import PageNumberPagination


# ----------------- Student pagination -----------------------
class StudentPagination(PageNumberPagination) :
    page_size = 10
    page_query_param = "page"


# ----------------- Teacher pagination -----------------------
class TeacherPagination(PageNumberPagination) :
    page_size = 5
    page_query_param = "page"


# ----------------- School pagination -----------------------
class SchoolPagination(PageNumberPagination) :
    page_size = 10
    page_query_param = "page"


# ----------------- City pagination -----------------------
class CityPagination(PageNumberPagination) :
    page_size = 10
    page_query_param = "page"