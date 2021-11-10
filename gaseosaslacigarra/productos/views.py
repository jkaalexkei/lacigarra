from django.shortcuts import render

# Create your views here.


def productos(request):
    
    return render(request,'productos/productos.html',{
        
        'mensaje1':'soy el mensaje de la aplicacion productos'
        
    })
