const contenedorPosterior = document.getElementById("contenedorPosterior");
const contenedorPosteriorLogin = document.getElementById("contenedorPosteriorLogin");
const contenedorPosteriorRegister = document.getElementById("contenedorPosteriorRegister");
const contenedorLoginRegister = document.getElementById("contenedorLoginRegister");
const formularioLogin = document.getElementById("formulario__login");
const formularioRegister = document.getElementById("formulario__register");
const botonLogin = document.getElementById("botonLogin");
const botonRegister = document.getElementById("botonRegister");
const register = registrar = () =>{
    if(window.innerWidth > 850){
        formularioRegister.style.display = "block";
        contenedorLoginRegister.style.left = "410px";
        formularioLogin.style.display = "none";
        contenedorPosteriorRegister.style.opacity = "0";
        contenedorPosteriorLogin.style.opacity = "1";    
    }else{
        formularioRegister.style.display = "block";
        contenedorLoginRegister.style.left = "0px";
        formularioLogin.style.display = "none";
        contenedorPosteriorRegister.style.display = "none";
        contenedorPosteriorLogin.style.display = "block";
        contenedorPosteriorLogin.style.opacity = "1";    
    };
};
const login = iniciarSesion = () =>{
    if(window.innerWidth > 850){
        formularioRegister.style.display = "none";
        contenedorLoginRegister.style.left = "10px";
        formularioLogin.style.display = "block";
        contenedorPosteriorRegister.style.opacity = "1";
        contenedorPosteriorLogin.style.opacity = "0";    
    }else{
        formularioRegister.style.display = "none";
        contenedorLoginRegister.style.left = "0px";
        formularioLogin.style.display = "block";
        contenedorPosteriorRegister.style.display = "block";
        contenedorPosteriorLogin.style.display = "none";
    };
};
const anchoPage = anchoPagina = () => {
    if(window.innerWidth > 850){
        contenedorPosteriorLogin.style.display = "block";
        contenedorPosteriorRegister.style.display = "block";
    }else{
        contenedorPosteriorRegister.style.display = "block";
        contenedorPosteriorRegister.style.opacity = "1";
        contenedorPosteriorLogin.style.display = "none";
        formularioLogin.style.display = "block";
        formularioRegister.style.display = "none";
        contenedorLoginRegister.style.left = "0px";
    }
};
botonRegister.addEventListener("click", register)
botonLogin.addEventListener("click", login)
window.addEventListener("resize", anchoPage)
anchoPage; // para ejecutarlo sin resize y acomodar elementos independientemente