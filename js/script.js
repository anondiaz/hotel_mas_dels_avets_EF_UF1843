// VALIDACION DEL FORMULARIO

//Vamos a controlar el nombre
let inputNombre = document.querySelector('#nombre')
let errorNombre = document.querySelector('#errorNombre')
// Mensaje de error
const mensajeErrorNombre = "<span>&#9888;</span> Error: por favor, escriba un nombre válido"

// El listener cuando cambie ...
inputNombre.addEventListener('change', () => {
// ... nos lipiará de espacios vacios al principio y final
    let nombre = inputNombre.value.trim()
    // Estableceremos el valor del input
    inputNombre.value = nombre
    // Si la longitud es menor de 2 limpiamos el input ...
    if(nombre.length < 2) {
        inputNombre.value = ""
        // ... y mostramos el mensaje de error llevando otra vez el foco al input
        errorNombre.innerHTML = mensajeErrorNombre
        inputNombre.setAttribute('aria-describedby', "errorNombre")        
        inputNombre.focus()
    }
})

// Repetimos, esto pide a gritos una función !!!
// Pero lo dejamos para otra ocasión...que hay mucho que hacer

//Vamos a controlar el apellido
let inputApellidos = document.getElementById('apellidos')
let errorApellidos = document.getElementById('errorApellidos')
// Mensaje de error
const mensajeErrorApellidos = "<span>&#9888;</span> Error: por favor, escriba un apellido válido"

// El listener cuando cambie ...
inputApellidos.addEventListener('change', () => {
// ... nos lipiará de espacios vacios al principio y final
    let apellidos = inputApellidos.value.trim()
    // Estableceremos el valor del input
    inputApellidos.value = apellidos
    // Si la longitud es menor de 2 limpiamos el input ...
    if (apellidos.length < 2) {
        inputApellidos.value = ""
        // ... y mostramos el mensaje de error llevando otra vez el foco al input
        errorApellidos.innerHTML = mensajeErrorApellidos
        inputApellidos.setAttribute('aria-describedby', "errorApellidos")   
        inputApellidos.focus()  
    }
})

// CONTROL DE LAS FECHAS
// Lo de la reserva, esto en versión 2

// Vamos a establecer las fechas coherentemente, no que remos reservas al pasado...
const entrada = new Date()
let salida = new Date(entrada)
salida.setDate(salida.getDate() + 1)

// Vamos a convertir los valores a formato ISO y cadena de texto, vamos a ISOString
const entradaString = entrada.toISOString().split('T')[0]
let salidaString = salida.toISOString().split('T')[0]

// Nos traemos los elementos y establecemos los valores que definimos antes, lo que decía del pasado
const entradaHTML = document.getElementById('entrada')
entradaHTML.setAttribute('value', entradaString)
entradaHTML.setAttribute('min', entradaString)
const salidaHTML = document.getElementById('salida')
salidaHTML.setAttribute('value', salidaString)
salidaHTML.setAttribute('min', salidaString)

// Nuestro amigo el listener que nos haga algo cuando cambie el dato ...
entradaHTML.addEventListener('change', () => {
    // ... básicamente que cuando cambie la fecha de entrada, que se actualice la de salida
    salida = new Date(entradaHTML.value)
    salida.setDate(salida.getDate() + 1)
    salidaString = salida.toISOString().split('T')[0]
    salidaHTML.setAttribute('value', salidaString)
    salidaHTML.setAttribute('min', salidaString)
})
