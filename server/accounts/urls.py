from django.urls import path
from .views import SaveUserView,get_csrf

urlpatterns = [
     path('api/save-user/', SaveUserView.as_view(), name='save_user'),
     path("csrf/", get_csrf, name="api-csrf"),
]
