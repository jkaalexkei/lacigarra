function ampliarimagen(){
    let imagen1 = document.getElementById('imagen1');

    imagen1.addEventListener('mouseover',function(){
        // imagen1.style.width='400px';
        imagen1.style.height='500px';
        imagen1.style.transitionProperty='with','height';
        imagen1.style.transition='1s','1s';
    })
    imagen1.addEventListener('mouseout',function(){
        // imagen1.style.width='300px';
        imagen1.style.height='400px';
        imagen1.style.transitionProperty='with','height';
        imagen1.style.transition='1s','1s';
    })

    // ----------------------------------------------------
    let imagen2 = document.getElementById('imagen2');

    imagen2.addEventListener('mouseover',function(){
        // imagen2.style.width='400px';
        imagen2.style.height='500px';
        imagen2.style.transitionProperty='with','height';
        imagen2.style.transition='1s','1s';
    })
    imagen2.addEventListener('mouseout',function(){
        // imagen2.style.width='300px';
        imagen2.style.height='400px';
        imagen2.style.transitionProperty='with','height';
        imagen2.style.transition='1s','1s';
    })

    // ----------------------------------------------------
    let imagen3 = document.getElementById('imagen3');

    imagen3.addEventListener('mouseover',function(){
        // imagen3.style.width='400px';
        imagen3.style.height='500px';
        imagen3.style.transitionProperty='with','height';
        imagen3.style.transition='1s','1s';
    })
    imagen3.addEventListener('mouseout',function(){
        // imagen3.style.width='300px';
        imagen3.style.height='400px';
        imagen3.style.transitionProperty='with','height';
        imagen3.style.transition='1s','1s';
    })

    // ----------------------------------------------------
    let imagen4 = document.getElementById('imagen4');

    imagen4.addEventListener('mouseover',function(){
        // imagen4.style.width='400px';
        imagen4.style.height='500px';
        imagen4.style.transitionProperty='with','height';
        imagen4.style.transition='1s','1s';
    })
    imagen4.addEventListener('mouseout',function(){
        // imagen4.style.width='300px';
        imagen4.style.height='400px';
        imagen4.style.transitionProperty='with','height';
        imagen4.style.transition='1s','1s';
    })

    
}

window.onload=ampliarimagen;

