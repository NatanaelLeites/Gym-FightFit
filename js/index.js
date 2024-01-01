const btnMenu = document.getElementById('btn__menu')
const menu = document.getElementById('menu')
btnMenu.addEventListener('click', ()=>{
    btnMenu.classList.toggle('rotate')
    menu.classList.toggle('activo')
})

