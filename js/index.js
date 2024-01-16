/* menu resp. */
const btnMenu = document.getElementById('btn__menu')
const menu = document.getElementById('menu')
btnMenu.addEventListener('click', () => {
    btnMenu.classList.toggle('rotate')
    menu.classList.toggle('activo')
})

/* tienda */
let url = ('https://jsonplaceholder.typicode.com/photos')
fetch(url)
    .then(res => res.json())
    .then(data => mostrarFotos(data))
    .catch(error => console.log(error))

const mostrarFotos = (data) => {
    
    listado = ''
    for (let i = 0; i < 15; i++) {
        listado += `
        <div class="card">
        <img src="${data[i].url}">
        <h4>${data[i].title}</h4>
        <button>Agregar al Carrito</button>
        </div>
        `
    }
    document.getElementById('lista').innerHTML = listado
}