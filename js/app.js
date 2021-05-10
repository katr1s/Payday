var open1 = document.querySelector('#open');
var open2 = document.querySelector('#open2');
var open3 = document.querySelector('#open3');
var open4 = document.querySelector('#open4');
var contain = document.querySelector('#contain');
var contain2 = document.querySelector('#contain2');
var contain3 = document.querySelector('#contain3');
var contain4 = document.querySelector('#contain4');
var contain5 = document.querySelector('#contain5');



open1.onclick = () => {
    contain.classList.toggle("show");
    contain2.classList.toggle("show2");
    contain3.classList.toggle("show2");
    contain4.classList.toggle("show2");
    contain5.classList.toggle("show2");
  };


  open2.onclick = () => {
    contain2.classList.toggle("show");
    contain.classList.toggle("show2");
    contain3.classList.toggle("show2");
    contain4.classList.toggle("show2");
    contain5.classList.toggle("show2");
  };

  open3.onclick = () => {
    contain3.classList.toggle("show");
    contain2.classList.toggle("show2");
    contain.classList.toggle("show2");
    contain4.classList.toggle("show2");
    contain5.classList.toggle("show2")
  };

  open4.onclick = () => {
    contain4.classList.toggle("show");
    contain2.classList.toggle("show2");
    contain3.classList.toggle("show2");
    contain.classList.toggle("show2");
    contain5.classList.toggle("show2")
  };

