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
        this.id = datosUsuariosTrabajoRegistrado.length + 1; 
    }
};
//Cierra clase datos personales del usuario
//Clase despidos en caso de Trabajo Registrado
class DespidoTrabajoRegistrado {
        // Constructor Despido trabajo registrado o en blanco 
        constructor (antiguedad,salario,preaviso,diasTrabajados){
            this.antiguedad = antiguedad;
            this.salario = salario;
            this.preaviso = preaviso;
            this.diasTrabajados = diasTrabajados;
        };
        // Métodos Despido trabajo registrado o en blanco 
        // Método para determinar indemnización art. 245
        calcDosCuarentayCinco(){
            this.dosCuarentayCinco = this.salario * this.antiguedad;
            return this.dosCuarentayCinco;
        };
        // Método para determinar antiguedad para cálculo del total de preaviso     
        calcParaAntiguedadParaPreaviso(){
            this.antiguedadParaPreaviso = 0;
            if (this.antiguedad < 5){
                this.antiguedadParaPreaviso = 1;
            }else if (this.antiguedad >= 5){
                this.antiguedadParaPreaviso = 2;
            }else if(this.preaviso == "no"){
                this.antiguedadParaPreaviso = 0;
            };
            return this.antiguedadParaPreaviso;
        };
        // Método para determinar indemnización por falta de preaviso  
        calcParaPreaviso(){
            this.preavisoTotal = this.antiguedadParaPreaviso * this.salario;
            return this.preavisoTotal;
        };
        // Método para determinar indemnización integración mes de despido
        calcIntegracion(){
            this.integracion = (30 - this.diasTrabajados) * (this.salario/30);
            return this.integracion;
        };
        // Método para determinar indemnización total por despido registrado o en blanco
        calcTotalDespido(){
            return this.totalDespido = this.dosCuarentayCinco + this.integracion;
        };
        id(){
            this.id = despidosTrabajoRegistrado.length + 1;
        };
        calcTotalMostrar(){
            this.totalMostrar = this.totalDespido;
        };
};
//Cierra clase despidos trabajo registrado
// Constantes Array para simular creación base de datos con los datos que ingrese el usuario
const despidosTrabajoRegistrado  = [];
const datosUsuariosTrabajoRegistrado = [];
const datosUsuarioYDespidoTrabajoRegistrado = [];
const desestructuradoUnidos = [];
//Obtención de elementos HTML para verificar formulario
const obtenerFormularioTrabajoRegistrado = document.getElementById("formularioTrabajoRegistrado");
const obtenerInputs = document.querySelectorAll("#formularioTrabajoRegistrado input");
const obtenerSubmitTrabajoRegistrado = document.getElementById("submitTrabajoRegistrado");
//Abre variable para validar formulario
const validarCalculadoraTrabajoRegistrado = obtenerSubmitTrabajoRegistrado.addEventListener("click", (e) =>{
    e.preventDefault();
    //valida envío de formulario vacío
    let validar = false;
    let paraValidar = [];    
    obtenerInputs.forEach((input) => {
        if(input.value <= 0){
            validar = false;
        }else{
            validar = true
            paraValidar.push(validar)
        };
//fin if validación contenido usuario
    });//fin for each
    //revisa lenght y si ambos son iguales ejecuta la función de la calculadora 
    paraValidar.length == obtenerInputs.length ? ejecutarCalculadoraTrabajoRegistrado() : mensajeError(); //operador ternario
}); //fin submit addEventListener
//variable para ejecución de la calculadora
const ejecutarCalculadoraTrabajoRegistrado = () => {
    //Funcion para obtención de elementos del html a utilizar en las clases en archivo funciones.js
    obtenerByID ();
    //Obtención de los datos personales
    const nuevoUsuarioTrabajoRegistrado = new Usuario(
        obtenerNombres,
        obtenerApellidos,
        obtenerEmail,
        obtenerTrabajo,
    );
    //Crea id usuario
    nuevoUsuarioTrabajoRegistrado.idUsuarios();
    //Función Push a base datos del usuario en localStorage
    const agregarUsuariosTrabajoRegistrados = () =>{
        datosUsuariosTrabajoRegistrado.push(nuevoUsuarioTrabajoRegistrado); 
        localStorage.setItem("UsuarioTrabajoRegistrado", JSON.stringify(datosUsuariosTrabajoRegistrado));
    };   
    agregarUsuariosTrabajoRegistrados();
    // Creación nuevo objeto despidoRegistrado
    const nuevoDespidoTrabajoRegistrado = new DespidoTrabajoRegistrado(
        obtenerAntiguedad,
        obtenerSalario,
        obtenerPreaviso,
        obtenerDiasTrabajados
    );    
    // Funciones para cálculos
    nuevoDespidoTrabajoRegistrado.calcDosCuarentayCinco();
    nuevoDespidoTrabajoRegistrado.calcIntegracion();
    nuevoDespidoTrabajoRegistrado.calcParaAntiguedadParaPreaviso();
    nuevoDespidoTrabajoRegistrado.calcParaPreaviso();
    nuevoDespidoTrabajoRegistrado.calcTotalDespido();
    nuevoDespidoTrabajoRegistrado.id();
    nuevoDespidoTrabajoRegistrado.calcTotalMostrar();
    //Función para Push al array base datos de los despidos por trabajo registrado o en blanco en localStorage
    const agregarDespidosRegistrados = () =>{
        despidosTrabajoRegistrado.push(nuevoDespidoTrabajoRegistrado);
        localStorage.setItem("DespidosTrabajoRegistrado", JSON.stringify(despidosTrabajoRegistrado));
    };
    agregarDespidosRegistrados();
    //envío Formulario
    const formularioTrabajoRegistrado = document.getElementById("formularioTrabajoRegistrado");
    formularioTrabajoRegistrado.addEventListener("submit", (e) =>{
        e.preventDefault();
    })
    //Creación del Resultado
    const obtenerSectionMostrarResultadoTrabajoRegistrado = document.querySelector("#mostrarResultadosFormularioTrabajoRegistrado")
    crearResultadoTrabajoRegistrado = () => {
        obtenerSectionMostrarResultadoTrabajoRegistrado.innerHTML = "";
        let divResultadoTrabajoRegistrado =  document.createElement("div");
        divResultadoTrabajoRegistrado.classList = ("calculadora__contenedorRespuesta")
        divResultadoTrabajoRegistrado.id = "contenedorRespuesta"
        divResultadoTrabajoRegistrado.innerHTML = `<h3>Aquí tus resultados ${nuevoUsuarioTrabajoRegistrado.nombre}</h3>
        <ul><li>Te corresponde una indemnización por despido de $ ${nuevoDespidoTrabajoRegistrado.totalDespido}.</li>
        <li>La misma está compuesta por los siguientes rubros:</li>
        <li>Indemnización por antigûedad: $ ${nuevoDespidoTrabajoRegistrado.dosCuarentayCinco}</li>
        <li>Indemnización por falta de preaviso: $ ${nuevoDespidoTrabajoRegistrado.preavisoTotal}</li>
        <li>Indemnización por integración mes de despido: $ ${nuevoDespidoTrabajoRegistrado.integracion}</li></ul>`
        obtenerSectionMostrarResultadoTrabajoRegistrado.appendChild(divResultadoTrabajoRegistrado);  
    };
    //Mostrar Resultado
    crearResultadoTrabajoRegistrado();
    const obtenerCalculadoraContenedorRespuesta = document.getElementById("contenedorRespuesta");
    //Para hacer que al mostrar el resultado creado baje hasta el mismo    
    obtenerCalculadoraContenedorRespuesta.scrollIntoView();
    obtenerCalculadoraContenedorRespuesta.scrollIntoView(true);
    obtenerCalculadoraContenedorRespuesta.scrollIntoView({behavior: "smooth"});
    //utilización de spread para crear usuario con todos los datos
    unidos = {
        ...nuevoDespidoTrabajoRegistrado,
        ...nuevoUsuarioTrabajoRegistrado
    };
    agregarUnidos = () =>{
        datosUsuarioYDespidoTrabajoRegistrado.push(unidos); 
        localStorage.setItem("TodosDatosTrabajoRegistrado", JSON.stringify(datosUsuarioYDespidoTrabajoRegistrado));
    }; 
    agregarUnidos();
    //desestructurar por parámetro objeto unidos
    const desestructurar = ( {id, email, salario,totalMostrar} ) => {
        mezcla = {id, email, salario,totalMostrar};
        desestructuradoUnidos.push(mezcla);
        localStorage.setItem("DesestructuradoTrabajoRegistrado", JSON.stringify(desestructuradoUnidos));
    };
    desestructurar(unidos);    
};