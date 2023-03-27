let miImage = document.querySelector('img');
miImage.onclick = function () {
 let miSrc = miImage.getAttribute('src');
 if (miSrc ==='images/mi imagen e prueba 2.jpg') {
  miImage.setAttribute('src','images/mi imagen de prueba 3.jpg');
 } else {
 miImage.setAttribute('src', 'images/mi imagen e prueba 2.jpg');
 }
} 
