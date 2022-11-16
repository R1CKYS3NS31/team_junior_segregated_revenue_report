from django.shortcuts import render

from .models import Revenue
from django.contrib.auth.models import User
from .serializers import RevenueSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

   
class RevenueList(APIView):
    def get(self, request, format=None):
        queryset = Revenue.objects.all()
        serializer = RevenueSerializer(queryset, many=True)
        return Response(serializer.data)


    def post(self, request, format=None):
        serializer = RevenueSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RevenueDetail(APIView):
    def get_object(self, pk):
        try:
            return Revenue.objects.get(pk=pk)
        except Revenue.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        queryset = self.get_object(pk)
        serializer = RevenueSerializer(queryset)
        return Response(serializer.data)

class RegistrationTotal(APIView):
    def get(self, request, format=None):
        queryset = Revenue.objects.exclude(registration=0.00)
        serializer = RevenueSerializer(queryset, many=True)
        return Response(serializer.data)

class PharmacyTotal(APIView):
    def get(self, request, format=None):
        queryset = Revenue.objects.exclude(pharmacy=0.00)
        serializer = RevenueSerializer(queryset, many=True)
        return Response(serializer.data)


class LaboratoryTotal(APIView):
    def get(self, request, format=None):
        queryset = Revenue.objects.exclude(laboratory=0.00)
        serializer = RevenueSerializer(queryset, many=True)
        return Response(serializer.data)


class RadiologyTotal(APIView):
    def get(self, request, format=None):
        queryset = Revenue.objects.exclude(radiology=0.00)
        serializer = RevenueSerializer(queryset, many=True)
        return Response(serializer.data)


class ProceduresTotal(APIView):
    def get(self, request, format=None):
        queryset = Revenue.objects.exclude(procedure=0.00)
        serializer = RevenueSerializer(queryset, many=True)
        return Response(serializer.data)


class PaymentMethodCount(APIView):
    def get(self, request, method, format=None):
        payment_method = Revenue.objects.filter(payment_method=method.upper())
        total_payments = Revenue.objects.all()
        counter = {f"{method}":payment_method.count(), "Out of":total_payments.count()}
        return Response(counter)

class DateFilter(APIView):
    def get(self, request, From, To, format=None):
        queryset = Revenue.objects.filter(date__range = [From, To])
        serializer = RevenueSerializer(queryset, many=True)
        return Response(serializer.data)
   
       