function showModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
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

  // Validar que los campos no estén vacíos
  if (
    nombre === "" ||
    apellido === "" ||
    telefono === "" ||
    email === "" ||
    adulto === ""
  ) {
    alert("Campos obligatorios");
    return false;
  }

  // Validar que el nombre y el apellido contengan solo caracteres alfabéticos
  let regexAlfabetico = /^[a-zA-Z\s]+$/;
  if (!(nombre.match(regexAlfabetico) && apellido.match(regexAlfabetico))) {
    alert(
      "El nombre y el apellido solo pueden contener caracteres alfabéticos y espacios"
    );
    return false;
  }

  let regexNumerico = /^[0-9]+$/;
  // Validar que el teléfono solo contenga caracteres numéricos
  if (!telefono.match(regexNumerico)) {
    alert("El teléfono solo puede contener caracteres numéricos");
    return false;
  }

  // Validar el formato del correo electrónico
  let regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(regexMail)) {
    alert("Formato de correo electrónico inválido");
    return false;
  }

  //validacion de tipo de habitacion
  let selectRoom = document.querySelector('select[name="room"]');
  let selectedRoom = selectRoom.options[selectRoom.selectedIndex].value;
  if (selectedRoom === "Tipo de Habitacion") {
    alert("Seleccione tipo de habitacion");
    return false;
  }

  //validar el checkbox
  if (!checkbox.checked) {
    alert("Debe aceptar términos y condiciones");
    return false;
  }
  /**************************************************************************** */
  // Obtener la cantidad de adultos y niños
  let adultos = parseInt(adulto, 10);
  let menores = parseInt(document.getElementById("kids").value, 10) || 0;

  // Definir los precios por tipo de habitación
  let precioClasica = 100;
  let precioSuite = 200;
  let precioEjecutiva = 150;

  // Calcular el precio total
  //let precioTotal = 0;

  if (selectedRoom === "Clasica") {
    precioTotal = precioClasica * (adultos + menores);
  } else if (selectedRoom === "Suite") {
    precioTotal = precioSuite * (adultos + menores);
  } else if (selectedRoom === "Ejecutiva") {
    precioTotal = precioEjecutiva * (adultos + menores);
  }
  //Mostrar el precio total
  //alert(`Precio Total: $${precioTotal} USD`);
  console.log(precioTotal);

  /***************************************************************************************** */
  //Mostrar el modal
  showModal();
  //alert("El formulario se envió exitosamente!");
  // Resetear el formulario
  //document.getElementById("form").reset();
  return true; // Si todas las validaciones pasan, se envia el formulario
}

/******************************************************************************************** */
//Obtener las celdas de promoción
const promResidente = document.getElementById("residente");
const promNoResidente = document.getElementById("no-residente");

//Obtener el input donde se mostrará el resultado
const inputResultado = document.querySelector("#aply-input");

// Variables para el precio total y el descuento
let precioTotal = 0;
let descuento = 0;

// Función para aplicar el descuento
function aplicarDescuento(celda) {
  const descuentoCelda = parseFloat(celda.getAttribute("data-descuento"));
  descuento += descuentoCelda;
  // Actualizar el precio total restando el descuento
  precioTotal -= precioTotal * descuentoCelda;
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
  // Mostrar el resultado en el input
  inputResultado.value = `$${precioTotal.toFixed(2)} USD`;
});