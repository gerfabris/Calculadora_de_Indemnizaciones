//Creación de clases para cálculos de indemnizaciones
//Creación clase datos del usuario
class Usuario{
    //Constructor Usuario
    constructor(nombre,apellido,email,trabajo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.trabajo = trabajo;
    };
    idUsuarios(){
        this.id = datosUsuariosRenuncia.length + 1;
    }
};
//Cierra clase datos personales del usuario
//Clase rubros correspondientes en caso de renuncia
class Renuncia{
    //Constructor rubros en caso de Renuncia
    constructor(diasTrabajadosAnual,salario,antiguedad,diasTrabajados){
        this.diasTrabajadosAnual = diasTrabajadosAnual;
        this.salario = salario;
        this.antiguedad = antiguedad;
        this.diasTrabajados = diasTrabajados;
    };
    //Métodos para cálculo rubros en caso de Renuncia
    //Método para calcular sueldo anual complementario
    calcSueldoAnualComplementario(){
        this.sueldoAnualComplementario = ((this.salario/2) /180) * this.diasTrabajadosAnual;
        this.sueldoAnualComplementario = this.sueldoAnualComplementario.toFixed(2);
        return this.sueldoAnualComplementario;
    };
    //Método para calcular cantidad de días que le corresponden por vacaciones
    calcCantidadDiasVacaciones(){
        this.cantidadDiasVacaciones = 0;
        if (this.antiguedad < 5){
            this.cantidadDiasVacaciones = 14;
        }else if (this.antiguedad >= 5 && this.antiguedad < 10){
            this.cantidadDiasVacaciones = 21;
        }else if (this.antiguedad >= 10 && this.antiguedad < 20){
            this.cantidadDiasVacaciones = 28;
        }else if (this.antiguedad < 20){
            this.cantidadDiasVacaciones = 35;
        };
        return this.cantidadDiasVacaciones;
    };
    //Método para calcular rubro correspondiente a indemnización
    calcVacaciones(){
        this.vacaciones = this.cantidadDiasVacaciones*this.salario;
        this.vacaciones = this.vacaciones.toFixed(2);
        return this.vacaciones;
    };
    //Método para calcular rubro correspondiente a integración de días trabajados
    calcIntegracion(){
        this.integracion = (30 - this.diasTrabajados) * (this.salario/30);
        this.integracion = this.integracion.toFixed(2);
        return this.integracion;
    };
    //Método para calcular la totalidad de los rubros correspondientes en caso de renuncia
    calcTotalRenuncia(){
        this.totalRenuncia = this.integracion + this.vacaciones + this.sueldoAnualComplementario;
        this.totalRenuncia = this.totalRenuncia.toFixed(2)
        return this.totalRenuncia;
    };
    id(){
        this.id = indemnizacionesRenuncias.length + 1;
    };
    calcTotalMostrar(){
        this.totalMostrar = this.totalRenuncia;
    };
};
//Cierra clase renuncias
// Constantes Array para simular creación base de datos con los datos que ingrese el usuario
const indemnizacionesRenuncias  = [];
const datosUsuariosRenuncia = [];
const datosUsuarioYDespidoRenuncias = [];
const desestructuradoUnidos = [];
//Obtención de elementos HTML para verificar formulario
const obtenerFormularioRenuncias = document.getElementById("formularioRenuncias");
const obtenerInputs = document.querySelectorAll("#formularioRenuncias input");
const obtenerSubmitRenuncias = document.getElementById("submitRenuncias");
//Abre variable para verificar formulario
const validarCalculadoraRenuncia = obtenerSubmitRenuncias.addEventListener("click", (e) =>{
    e.preventDefault();
    //valida envío de formulario vacío
    let validar = false
    let paraValidar = []    
    obtenerInputs.forEach((input) => {
        if(input.value <= 0){
            validar = false;
        }else{
            validar = true
            paraValidar.push(validar)
        }
//fin if validación contenido usuario
    });//fin for each
    //revisa lenght y si ambos son iguales ejecuta la función de la calculadora 
    paraValidar.length == obtenerInputs.length ? ejecutarCalculadoraRenuncias() : mensajeError(); //operador ternario
}); //fin submit addEventListener
//variable para ejecución de la calculadora
const ejecutarCalculadoraRenuncias = () => {
    //Funcion para obtención de elementos del html a utilizar en las clases en archivo funciones.js
    obtenerByID ();
    //Obtención de los datos personales
    const nuevoUsuarioRenuncia = new Usuario(
        obtenerNombres,
        obtenerApellidos,
        obtenerEmail,
        obtenerTrabajo,
    );
    //Crea id usuario
    nuevoUsuarioRenuncia.idUsuarios();
    //Función Push a base datos del usuario en localStorage
    const agregarUsuariosRenuncia = () =>{
        datosUsuariosRenuncia.push(nuevoUsuarioRenuncia);  
        localStorage.setItem("DatosUsuariosRenuncia", JSON.stringify(datosUsuariosRenuncia));
    };       
    agregarUsuariosRenuncia();
    // Creación nuevo objeto despidoRegistrado
    const nuevaRenuncia = new Renuncia(
        obtenerSueldoAnualComplementario,
        obtenerSalario,
        obtenerAntiguedad,
        obtenerDiasTrabajados
    );    
    // Funciones para cálculos
    nuevaRenuncia.calcSueldoAnualComplementario();
    nuevaRenuncia.calcCantidadDiasVacaciones();
    nuevaRenuncia.calcVacaciones();
    nuevaRenuncia.calcIntegracion();
    nuevaRenuncia.calcTotalRenuncia();
    nuevaRenuncia.id();
    nuevaRenuncia.calcTotalMostrar();
    //Función para Push al array base datos de los despidos por trabajo registrado o en blanco en localStorage
    const agregarIndemnizacionesRenuncias = () =>{
        indemnizacionesRenuncias.push(nuevaRenuncia);
        localStorage.setItem("IndemnizacionesRenuncias", JSON.stringify(indemnizacionesRenuncias));
    };
    agregarIndemnizacionesRenuncias();    
    //envío Formulario configuración prevent de refresh
    const formularioRenuncias = document.getElementById("formularioRenuncias");
    formularioRenuncias.addEventListener("submit", (e) =>{
        e.preventDefault();
    })
    //Creación del Resultado
    const obtenerSectionMostrarResultadoRenuncias = document.querySelector("#mostrarResultadoRenuncias")
    const crearResultadoRenuncias = () => {
        obtenerSectionMostrarResultadoRenuncias.innerHTML = "";
        let divResultadoRenuncias =  document.createElement("div");
        divResultadoRenuncias.id = ("contenedorRespuesta")
        divResultadoRenuncias.classList = ("calculadora__contenedorRespuesta")
        divResultadoRenuncias.innerHTML = `<h3>Aquí tus resultados ${nuevoUsuarioRenuncia.nombre}</h3>
        <ul><li>Corresponde que te abonen un total de $ ${nuevaRenuncia.totalRenuncia}</li>
        <li>La misma está compuesta por los siguientes rubros:</li>
        <li>Vacaciones no gozadas: $ ${nuevaRenuncia.vacaciones}</li>
        <li>Sueldo Anual Complementario: $ ${nuevaRenuncia.sueldoAnualComplementario}</li>
        <li>Integración mes trabajado: $ ${nuevaRenuncia.integracion}</li></ul>`
        obtenerSectionMostrarResultadoRenuncias.appendChild(divResultadoRenuncias);
    };
    //Mostrar Resultado
    crearResultadoRenuncias()
    const obtenerCalculadoraContenedorRespuesta = document.getElementById("contenedorRespuesta");
    //Para hacer que al mostrar el resultado creado baje hasta el mismo    
    obtenerCalculadoraContenedorRespuesta.scrollIntoView();
    obtenerCalculadoraContenedorRespuesta.scrollIntoView(true);
    obtenerCalculadoraContenedorRespuesta.scrollIntoView({behavior: "smooth"});
    //utilización de spread para crear usuario con todos los datos
    unidos = {
        ...nuevaRenuncia,
        ...nuevoUsuarioRenuncia
    };
    agregarUnidos = () =>{
        datosUsuarioYDespidoRenuncias.push(unidos); 
        localStorage.setItem("TodosDatosRenuncias", JSON.stringify(datosUsuarioYDespidoRenuncias));
    }; 
    agregarUnidos();
    //desestructurar por parámetro objeto unidos
    const desestructurar = ( {id, email, salario,totalMostrar} ) => {
        mezcla = {id, email, salario,totalMostrar};
        desestructuradoUnidos.push(mezcla);
        localStorage.setItem("DesestructuradoRenuncias", JSON.stringify(desestructuradoUnidos));
    };
    desestructurar(unidos);    
};
