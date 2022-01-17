menu = document.querySelector('.menu')
navbar = document.querySelector('.navbar')
list = document.querySelector('.list')


menu.addEventListener('click', ()=>{
    navbar.classList.toggle('r-height');
    list.classList.toggle('r-visibility');
})