(function() {
	const buttons = document.querySelectorAll('.btn-submit');
  
	buttons.forEach(function(button) {
	  button.addEventListener('click', function() {
		if (!button.classList.contains('loading')) {
		  button.classList.add('loading');
		  setTimeout(function() {
			button.classList.remove('loading');
			button.classList.add('checked');
			
		  }, 1500);
  
		  setTimeout(function() {
			button.classList.remove('checked');
			 
			 alert('Reserva exitosa! Le enviaremos un mail con un código de confirmacion');
			 
			 window.location.reload();
		  }, 3000);
		}
	  });
	});
  })();
  