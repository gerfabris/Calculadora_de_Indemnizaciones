//redirección  index a pages/calculadora trabajo Registrado
const obtenerDireccionTrabajoRegistrado = document.getElementById("trabajoRegistrado");
obtenerDireccionTrabajoRegistrado.addEventListener("click", () =>{
    window.location.href = './pages/calculadoraTrabajoRegistrado.html';
});
//redirección a pages/calculadora trabajo no Registrado
const obtenerDireccionTrabajoNoRegistrado = document.getElementById("trabajoNoRegistrado");
obtenerDireccionTrabajoNoRegistrado.addEventListener("click", () =>{
    window.location.href ='./pages/calculadoraTrabajoNoRegistrado.html';
});
//redirección a pages/calculadora indemnizaciones por renuncias
const obtenerDireccionRenuncias = document.getElementById("renuncia");
obtenerDireccionRenuncias.onclick = () =>{
    window.location.href = './pages/calculadoraRenuncias.html';
};


