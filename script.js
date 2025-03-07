document.getElementById('exclusiveForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    alert(`Datos ingresados:\nNombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nMensaje: ${message}`);

    setTimeout(() => {
        alert('Formulario enviado correctamente.');
        document.getElementById('exclusiveForm').reset();
    }, 500);
});