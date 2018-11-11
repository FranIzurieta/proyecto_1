'use strict';

// Funcionalidad del dropdown
let btnDropdown = document.querySelector('#dropdown_btn');
let dropdown = document.querySelector('#my_dropdown');

btnDropdown.addEventListener('click', function(){
    if (dropdown.style.display == 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
});

window.onclick = function(e) {    
    if (e.target.id != 'dropdown_btn') {
        if (dropdown.style.display == 'block') {
            dropdown.style.display = 'none';
        }
    }

}

// Funcionalidad para calculo automático de tablas
// let tablas = document.querySelectorAll('.table');
// for (let i = 0; i < tablas.length; i++) {
//     // console.log('--');
//     const tabla = tablas[i];
//     let widthTable = tabla.clientWidth;
//     console.log(widthTable);
//     let tr = tabla.querySelector('tbody tr');
//     // console.log(tr);
    
//     let tds = tr.querySelectorAll('td');
//     // console.log(tds);
    
//     let cantidadTds = tds.length;
//     // console.log(cantidadTds);  

//     let width = widthTable / cantidadTds;
//     // console.log(width);
    
//     tds.forEach(function(td){
//         td.style.width = width + 'px';
//     });
// }