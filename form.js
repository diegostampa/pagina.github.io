const form = document.getElementById('contact-form')
const errorContainer = document.getElementById('error-list')

function mostrarMensaje(mensaje) {
const errorElement = document.createElement('p')
errorElement.textContent = mensaje;
errorContainer.appendChild(errorElement)
}

function validarFormulario(event) {
event.preventDefault();

errorContainer.innerHTML = ''

const nombre = document.getElementById('nombre').value
const email = document.getElementById('mail').value
const numero = document.getElementById('numero').value
const mensaje = document.getElementById('mensaje').value

if(nombre.trim() === '' && email.trim() === '' && numero.trim() === '' && mensaje.trim() === ''){
    mostrarMensaje('Por favor, rellene todos los campos antes de enviar el formulario.')
    return
}

if (nombre.trim() === '') {
    mostrarMensaje('Por favor, ingrese su nombre.')
    return
}else if (!validarNombre(nombre)) {
    mostrarMensaje('Por favor, ingrese un nombre válido.')
    return
}

if (email.trim() === '') {
    mostrarMensaje('Por favor, ingrese su correo electrónico.')
    return
} else if (!validarEmail(email)) {
    mostrarMensaje('Por favor, ingrese un correo electrónico válido.')
    return
}

if (numero.trim() === '') {
    mostrarMensaje('Por favor, ingrese su numero')
    return
}else if (!validarNumero(numero)) {
    mostrarMensaje('el formato de numero debe ser: Ej: 2664000000')
    return
}

if (mensaje.trim() === ''){
    mostrarMensaje('debe escribir un mensaje')
    return
}
mostrarMensaje(
    'El formulario fue enviado correctamente ' + 
    'Datos enviados: ' + 'Nombre: ' + nombre +', Email: ' + email + ', Numero: ' + numero)
}

function validarEmail(email) {
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
return emailRegex.test(email)
}

function validarNombre(nombre) {
    const regExLetra = /^[a-z A-Z]{0,20}$/
    return regExLetra.test(nombre)
}

function validarNumero(numero) {
    const regex_tel = /^[1-9]\d{9}$/;
    return regex_tel.test(numero)
}

form.addEventListener('submit', validarFormulario)