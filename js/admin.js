const emailLogin = document.querySelector("#emailLogin");
const contrasenaLogin = document.querySelector("#contrasenaLogin");
const btnLogin = document.querySelector("btnLogin");
const nombreRegister = document.querySelector("#nombreRegister");
const usuarioRegister = document.querySelector("#usuarioRegister");
const emailRegister = document.querySelector("#emailRegister");
const contrasenaRegister = document.querySelector("#contrasenaRegister");
const btnRegister = document.querySelector("btnRegister");
let obtenerEmailLogin = [];
let obtenerContrasenaLogin = [];
let obtenerNombreRegister = [];
let obtenerUsuarioRegister = [];
let obtenerEmailRegister = [];
let obtenerContrasenaRegister = [];
//funciones register
let registerValido;
const validarRegister = (e) => {
    if (e.target[0].value == ""){
        registerValido = false;;
        mensajeErrorDatosIncompletos();
    }else if (e.target[1].value == ""){
        registerValido = false;
        mensajeErrorDatosIncompletos()
    }else if (e.target[2].value == ""){
        registerValido = false;
        mensajeErrorDatosIncompletos();
    }else if (e.target[3].value == ""){
        registerValido = false;
        mensajeErrorDatosIncompletos();
    }else{
        mensajeRegisterValido();
        registerValido = true;
    };
};
formularioRegister.addEventListener("submit", (e)=>{
    e.preventDefault();
    validarRegister(e);
    registerValido == true ? agregarDato(obtenerNombreRegister,e,0) + agregarDato(obtenerUsuarioRegister,e,1) + agregarDato(obtenerEmailRegister,e,2) + agregarDato(obtenerContrasenaRegister,e,3) : console.log("sinRE");
});
//funciones login
let loginValido;
const validarLogin = (e) => {
    if (e.target[0].value == ""){
        loginValido = false;
        mensajeErrorDatosIncompletos();
    }else if(e.target[1].value == ""){
        mensajeErrorDatosIncompletos();
        loginValido = false;
    }else{
        loginValido = true;
    };
};
const agregarDato = (array,e,n) => {
    array.push(e.target[n].value);
}; 
let coincidirLoginRegister = () =>{
    let emailCoincide;
    let contrasenaCoincide;
    for (let emailLogin of obtenerEmailLogin){
        for(let emailRegister of obtenerEmailRegister){
            if (emailLogin == emailRegister){
                emailCoincide = true;
            }else{
                emailCoincide = false;
            };
        };
    };
    for (let contrasenaLogin of obtenerContrasenaLogin){
        for (let contrasenaRegister of obtenerContrasenaRegister){
            if (contrasenaLogin == contrasenaRegister){
                contrasenaCoincide = true;
            }else{
                contrasenaCoincide = false;
            };     
        };
    };
    (emailCoincide) && (contrasenaCoincide) ? enviarLoginAlLocalStorage() + redireccionar() : mensajeErrorRegistrarse(); 
};
formularioLogin.addEventListener ("submit", (e) => {
    e.preventDefault();
    validarLogin(e);
    loginValido == true ? agregarDato(obtenerEmailLogin,e,0) + agregarDato(obtenerContrasenaLogin,e,1) + enviarLoginJSON() : console.log("sinLo");
    coincidirLoginRegister()
});
enviarLoginAlLocalStorage = () =>{
    localStorage.setItem("LoginCorrectoUsuario", JSON.stringify(obtenerEmailLogin));
    localStorage.setItem("LoginCorrectoContraseña", JSON.stringify(obtenerContrasenaLogin));   
};
enviarLoginJSON = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Login',
            body: `${obtenerEmailLogin}
            ${obtenerContrasenaLogin}`,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
};
redireccionar = () =>{
    mensajeIngresoValido();
    setTimeout(() => {
        window.location.href = './basesDatos.html';
    }, 3000);
};




