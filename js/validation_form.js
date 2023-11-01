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
  let adulto = document.getElementById("adulto").value.trim();
  let telefono = document.getElementById("phone").value.trim();
  let email = document.getElementById("email").value.trim();
  let checkbox = document.getElementById('checkbox');
  
  

  // Validar que los campos no estén vacíos
  if (nombre === "" || apellido === "" || telefono === "" || email === "" || adulto ==="") {
    alert('Campos obligatorios');
    return false;
  }

  // Validar que el nombre y el apellido contengan solo caracteres alfabéticos
  let regexAlfabetico = /^[a-zA-Z\s]+$/;
  if (!(nombre.match(regexAlfabetico) && apellido.match(regexAlfabetico))) {
    alert('El nombre y el apellido solo pueden contener caracteres alfabéticos y espacios');
    return false;
  }

  let regexNumerico = /^[0-9]+$/;
  // Validar que el teléfono solo contenga caracteres numéricos
  if (!telefono.match(regexNumerico)) {
    alert('El teléfono solo puede contener caracteres numéricos');
    return false;
  }

 // Validar el formato del correo electrónico
 let regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 if (!email.match(regexMail)) {
   alert('Formato de correo electrónico inválido');
   return false;
 }

//validacion de tipo de habitacion
 let selectRoom = document.querySelector('select[name="room"]');
 let selectedRoom = selectRoom.options[selectRoom.selectedIndex].value;
 if (selectedRoom === "Tipo de Habitacion") {
  alert("Seleccione tipo de habitacion")
  return false; 
} 

//validar el checkbox
  if (!checkbox.checked) {
  alert('Debe aceptar términos y condiciones');
   return false
}
showModal();
 //alert("El formulario se envió exitosamente!");
// Resetear el formulario
document.getElementById("form").reset();
return true; // Si todas las validaciones pasan, se envia el formulario
 }


  

 
  



