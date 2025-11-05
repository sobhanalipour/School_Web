from django_filters import rest_framework as filters
from .models import Students


class StudentsFilters(filters.FilterSet) :
    min_GPA = filters.NumberFilter(field_name="GPA" , lookup_expr="gte")
    max_GPA = filters.NumberFilter(field_name="GPA" , lookup_expr="lte")

    min_age = filters.NumberFilter(field_name="age" , lookup_expr="gte")
    max_age = filters.NumberFilter(field_name="age" , lookup_expr="lte")


    class Meta :
        model = Students
        fields = ["GPA" , "age" , "educational_background__title" , "field_of_studey__title" , "gender__title"]