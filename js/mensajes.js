mensajeRegisterValido = () => Swal.fire({
    icon: 'success',
    title: 'Usuario Registrado',
    text: 'Puedes iniciar sesión',
    imageUrl: '../assets/img/logos/LOGO Fabris Fernandez-01-recortado.png',
    imageWidth: 300,
    imageHeight: 100,
    imageAlt: 'Logo Estudio Fabris - Fernández Lafi & Asoc.',
    showClass: {
        popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
    }
});
mensajeIngresoValido = () => Swal.fire({
    icon: 'success',
    title: 'Datos correctos',
    text: 'Se redireccionará en unos instantes',
    imageUrl: '../assets/img/logos/LOGO Fabris Fernandez-01-recortado.png',
    imageWidth: 300,
    imageHeight: 100,
    imageAlt: 'Logo Estudio Fabris - Fernández Lafi & Asoc.',
    showClass: {
        popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
    }
});
mensajeErrorDatosIncompletos = () => Swal.fire({
    icon: 'error',
    title: 'Datos incompletos',
    text: 'Completa todos los datos',
    imageUrl: '../assets/img/logos/LOGO Fabris Fernandez-01-recortado.png',
    imageWidth: 300,
    imageHeight: 100,
    imageAlt: 'Logo Estudio Fabris - Fernández Lafi & Asoc.',
    showClass: {
        popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
    }
});
mensajeErrorRegistrarse = () => Swal.fire({
    icon: 'error',
    title: 'Ups',
    text: 'Los datos no coinciden con ningún usuario registrado',
    imageUrl: '../assets/img/logos/LOGO Fabris Fernandez-01-recortado.png',
    imageWidth: 300,
    imageHeight: 100,
    imageAlt: 'Logo Estudio Fabris - Fernández Lafi & Asoc.',
    showClass: {
        popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
    }
});