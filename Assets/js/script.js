const nav_bar = document.querySelector('.nav_bar');
const hamburguer = document.querySelector('.hamburguer');
const ul = document.querySelector('ul')

hamburguer.addEventListener('click', ()=>{
    hamburguer.classList.toggle('clicked');
    ul.classList.toggle('open');
})

document.addEventListener('click', (e)=>{
    if(e.target.parentElement !== nav_bar && e.target.parentNode !== hamburguer){
        hamburguer.classList.remove('clicked');
        ul.classList.remove('open');
    }
})