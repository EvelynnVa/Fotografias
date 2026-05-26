emailjs.init(CONFIG.publicKey);

// Envio de correo //

document.getElementById('form-contacto').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const templateParams = {
        nombre: document.getElementById('nombre').value,
        telefono: document.getElementById('telefono').value,
        fecha: document.getElementById('fecha').value,
        descripcion: document.getElementById('descripcion').value,
    };

    emailjs.send(CONFIG.serviceId, CONFIG.templateId, templateParams)
        .then(function() {
            document.getElementById('form-contacto').innerHTML = 
                '<p class="confirmacion">Correo enviado. Me pondré en contacto pronto.</p>';
        })
        .catch(function(error) {
            console.error('Error:', error);
            alert('Hubo un error al enviar, intenta de nuevo');
        });
});