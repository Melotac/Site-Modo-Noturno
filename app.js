'use strict'
const switcher = document.querySelector('.troca');
switcher.addEventListener('click', function() {

    document.body.classList.toggle('tema-dark');
var className = document.body.className;
if(className == "tema-MEUS-OLHOS") {
    this.textContent = "Noite";
}
else { this.textContent = "ficar cego dnv"}

console.log('current class name: ' + className);

});