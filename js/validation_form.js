//Funcion para mostrar la ventana modal 
function showModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "block";
}
//Funcion que cierra la ventana modal
function closeModal() {
  const confirmacion = confirm("¿Seguro desea salir? Se perderán los cambios");
  if (confirmacion) {
    window.location.reload();
  }
}

function validarFormulario(event) {
  event.preventDefault();
 // Obtener los valores de los campos del formulario
  let nombre = document.getElementById("name").value.trim();
  let apellido = document.getElementById("lastName").value.trim();
  let adulto = document.getElementById("adulto").value;
  let telefono = document.getElementById("phone").value;
  let email = document.getElementById("email").value.trim();
  let checkbox = document.getElementById("checkbox");

  //Mensajes en el documento cuando falta completar un campo
  const mensajeNombre = document.getElementById("mensajeNombre");
  const mensajeApellido = document.getElementById("mensajeApellido");
  const roomMessage = document.getElementById("roomMessage");
  const mensajeTel = document.getElementById("mensajeTel");
  const mensajeMail = document.getElementById("mensajeMail");
  const mensajeAdulto = document.getElementById("mensajeAdulto");
  const mensajeMenor = document.getElementById("mensajeMenor");
  const mensajeCheck = document.getElementById("mensajeCheck");

  //Validar que los campos no queden vacíos
  if (
    nombre === "" ||
    apellido === "" ||
    telefono === "" ||
    email === "" ||
    adulto === ""
  ) {
    alert("Complete todos los campos");
    return false;
  }

  //Validar que el nombre contenga sólo carácteres alfabéticos
  let regexAlfabetico = /^[a-zA-Z\s]+$/;
  if (!nombre.match(regexAlfabetico)) {
    alert("El nombre  solo puede contener caracteres alfabéticos y espacios");
    mensajeNombre.textContent = "Complete este campo";
    mensajeNombre.style.color = "red";
    let inputNombre = document.getElementById("name");
    inputNombre.style.borderColor = "red";
    return false;
  }

  //Validar que el apellido sólo contenga carácteres alfabéticos
  if (!apellido.match(regexAlfabetico)) {
    alert("El apellido solo puede contener caracteres alfabéticos y espacios");
    mensajeApellido.textContent = "Complete este campo";
    mensajeApellido.style.color = "red";
    let inputApellido = document.getElementById("lastName");
    inputApellido.style.borderColor = "red";
    return false;
  }

  // Validar que el teléfono solo contenga caracteres numéricos
  let regexNumerico = /^[0-9]+$/;//expresión regular en js
  if (!telefono.match(regexNumerico)) {
    alert("El teléfono solo puede contener caracteres numéricos");
    //Mensaje en el documento y estilo en el input
    mensajeTel.textContent = "Complete este campo";
    mensajeTel.style.color = "red";
    let inputTel = document.getElementById("phone");
    inputTel.style.borderColor = "red";
    return false;
  } else if (telefono.length < 10 || telefono.length > 15) {
    alert("Ingrese un número de teléfono válido con entre 10 y 15 dígitos");
    //Mensaje en el documento y estilo en el input
    mensajeTel.textContent = "Complete este Campo";
    mensajeTel.style.color = "red";
    inputTel.style.borderColor = "red";
    return false;
  }

  //Validar el formato del correo electrónico
  let regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;//expresion regular en js
  if (!email.match(regexMail)) {
    alert("Formato de correo electrónico inválido");
    mensajeMail.textContent = "Complete este campo";
    mensajeMail.style.color = "red";
    inputMail = document.getElementById("email");
    inputMail.style.borderColor = "red";
    return false;
  }

  //validacion de tipo de habitación
  let selectRoom = document.querySelector('select[name="room"]');
  let selectedRoom = selectRoom.options[selectRoom.selectedIndex].value;
  if (selectedRoom === "Tipo de Habitacion") {
    alert("Seleccione tipo de habitacion");
    roomMessage.textContent = "Complete este campo";
    roomMessage.style.color = "red";
    let inputRoom = document.getElementById("room");
    inputRoom.style.borderColor = "red";
    return false;
  }

  //validar cantidad de adultos y niños
  let menor = document.getElementById("kids").value;
  if (adulto > 4) {
    alert("Se excede la capacidad, debe reservar mas de una habitación");
    mensajeAdulto.textContent = "Complete este campo";
    mensajeAdulto.style.color = "red";
    let inputAdulto = document.getElementById("adulto");
    inputAdulto.style.borderColor = "red";
    return false;
  } else if (menor === "") {
    menor = 0;//Si la cantidad de menores es dejada en blanco, le asigna un valor de cero y me aseguro de tener un valor válido en la variable 
  } else if (menor > 5) {
    alert("Se excede la capacidad, debe reservar más de una habitación");
    //Mensaje en el documento y estilo en el input
    mensajeMenor.textContent = "Complete este campo";
    mensajeMenor.style.color = "red";
    let inputMenor = document.getElementById("kids");
    inputMenor.style.borderColor = "red";
    return false;
  }

  //validar el checkbox
  if (!checkbox.checked) {
    alert("Debe aceptar términos y condiciones");
    mensajeCheck.textContent = "Aceptar términos y condiciones";
    mensajeCheck.style.color = "red";
    return false;
  }

  /**************************************************************************** */
  /*En esta porción del código hago la cuenta del monto total
  según la cantidad de personas y la habitacion seleccionada*/
  
  // Obtener la cantidad de adultos y niños
  let adultos = parseInt(adulto, 10);//porque ya declaré y accedí a adulto
  let menores = parseInt(document.getElementById("kids").value, 10) || 0;

  // Definir los precios por tipo de habitación y guardarlos en sus variables
  let precioClasica = 100;
  let precioSuite = 200;
  let precioEjecutiva = 150;

  if (selectedRoom === "Clasica") {
    precioTotal = precioClasica * (adultos + menores);
  } else if (selectedRoom === "Suite") {
    precioTotal = precioSuite * (adultos + menores);
  } else if (selectedRoom === "Ejecutiva") {
    precioTotal = precioEjecutiva * (adultos + menores);
  }
  /***************************************************************************************** */
 // Una vez que se hace el cálculo se llama al  modal
  showModal();

  //muestro en el documento un detalle con las valores de las variables
  let detalle = document.getElementById("detalle");
  detalle.innerHTML = `Nombre: ${nombre}<br>
                      Apellido: ${apellido}<br>
                      Email: ${email}<br>
                      Telefono: ${telefono}<br>
                      Adultos: ${adulto}<br>
                      Menores: ${menor}<br>
                      Habitacion: ${selectedRoom}`;
return true; // Si todas las validaciones pasan, se envia el formulario
}

/******************************************************************************************** */
//En esta porcion del código me encargo de aplicar el descuento 
//Obtener las celdas de promoción
const promResidente = document.getElementById("residente");
const promNoResidente = document.getElementById("no-residente");

//Obtener el input donde se mostrará el resultado
const inputResultado = document.querySelector("#apply-input");

//Variables para el precio total y el descuento
let precioTotal = 0;
let descuento = 0;

// Variables para los descuentos
const descuentoResidente = 0.1; // 10% de descuento para residentes
const descuentoNoResidente = 0.2; // 20% de descuento para no residentes

// Función para aplicar el descuento
let descuentoAplicado = null;

function aplicarDescuento(celda) {
  let descuentoValor = 0;

  if (celda === promResidente) {
    descuentoValor = descuentoResidente;
  } else if (celda === promNoResidente) {
    descuentoValor = descuentoNoResidente;
  }

  if (descuentoAplicado === celda) {
    //Si la celda ya está seleccionada, se deselecciona y se elimina el descuento
    descuento -= descuentoValor;
    precioTotal = precioTotal / (1 - descuentoValor);
    celda.classList.remove("selected");
    descuentoAplicado = null;
  } else if (descuentoAplicado !== null) {
    //Si ya se aplicó un descuento, muestra un alerta y no permite aplicar otro
    alert("Ya se ha aplicado un descuento. Desmarque la opción para aplicar otro.");
  } else {
    //Deselecciona la otra celda si está seleccionada
    if (celda === promResidente) {
      promNoResidente.classList.remove("selected");
    } else if (celda === promNoResidente) {
      promResidente.classList.remove("selected");
    }

    //Aplicar el descuento y seleccionar la celda
    descuentoAplicado = celda;
    descuento += descuentoValor;
    precioTotal = precioTotal * (1 - descuentoValor);
    celda.classList.add("selected");
  }
}

// Manejar clic en la celda de promoción de residentes
promResidente.addEventListener("click", () => {
  aplicarDescuento(promResidente);
});

// Manejar clic en la celda de promoción de no residentes
promNoResidente.addEventListener("click", () => {
  aplicarDescuento(promNoResidente);
});

// Manejar clic en el botón "Resumen"
document.querySelector("button.btn.btn-secondary:last-child").addEventListener("click", () => {
  if (descuentoAplicado === null) {
    alert("Debe elegir un tipo de descuento.");
    return;
  }

  // Mostrar el resultado en el input
  inputResultado.value = `${precioTotal.toFixed(2)} USD`;
});




