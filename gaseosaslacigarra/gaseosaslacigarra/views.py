
from django.shortcuts import render,redirect
from django.contrib.auth import authenticate#permite autenticar usuarios
from django.contrib.auth import login#permite crear sesiones
from django.contrib import messages #modulo para trabajar con mensajes

def index(request):
    return render(request,'index.html',{
        'titulo':'Listado de articulos',
        'productos':[
            {'nombre':'gaseosa','precio':1500,'stock':True},
            {'nombre':'galletas','precio':1200,'stock':False},]
    })


def login_view(request):
    
    if request.method == 'POST':
        us = request.POST.get('usuario')
        passw = request.POST.get('password')
        
        usuario = authenticate(username = us,password=passw)
       
       
       
        if usuario:
            login(request,usuario)
            messages.success(request,'Usuario autenticado exitosamente')
            return redirect ('index')
        else:
            messages.danger(request,'Error en el proceso de autenticación')
                
    return render(request,'usuarios/login.html',{
        
    })