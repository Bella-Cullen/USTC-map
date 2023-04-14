from django.urls import path
from . import views
from . import Dijkstra2

urlpatterns = [
    path('wx_login/', views.loginView.as_view()),
    path('map/',Dijkstra2.MapView.as_view())
]