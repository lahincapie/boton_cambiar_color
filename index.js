const botonColor = document.getElementById('btnColor')

function cambiarColor() {
    document.body.style.backgroundColor = 'green';
}

botonColor.addEventListener('click', cambiarColor);
