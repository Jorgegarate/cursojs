const pagos = document.getElementById('pagos')
const footer = document.getElementById('footer')
const templateCarrito = document.getElementById('template-carrito').content
const templateFooters = document.getElementById('template-footers').content
const fragment = document.createDocumentFragment()
let carrito={}
document.addEventListener('DOMContentLoaded', e => { 

    carrito = JSON.parse(localStorage.getItem('carrito'))
    pintarCarrito()
    
});

const pintarCarrito = () => {
    items.innerHTML = ''

    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelectorAll('td')[0].textContent = producto.title
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        templateCarrito.querySelector('span').textContent = producto.precio * producto.cantidad
        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
    pintarFooter()
}
const pintarFooter = () => {
    footer.innerHTML = ''
    
    if (Object.keys(carrito).length === 0) {
        footer.innerHTML = `<th scope="row" colspan="5">Carrito vacío</th>`

        return
    }
    
    // sumar cantidad y sumar totales
    const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio ,0)
    console.log(nPrecio)
    templateFooters.querySelectorAll('td')[0].textContent = nCantidad
    templateFooters.querySelector('span').textContent = nPrecio
    const clone = templateFooters.cloneNode(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment)

   

}