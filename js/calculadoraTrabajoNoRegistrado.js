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
    idUsuario(){
        this.id = datosUsuariosTrabajoNoRegistrado.length + 1;
    }
};
//Cierra clase datos personales del usuario
//Clase despidos en caso de Trabajo NO registrado
class DespidoTrabajoNoRegistrado{
    //Constructor Despidos trabajo no registrado o en negro
    constructor (antiguedad,salario,preaviso,diasTrabajados,salarioConvenio,mesesNoAbonados,diasTrabajadosAnual){
        this.antiguedad = antiguedad;
        this.salario = salario;
        this.preaviso = preaviso;
        this.diasTrabajados = diasTrabajados;
        this.salarioConvenio = salarioConvenio;
        this.mesesNoAbonados = mesesNoAbonados;
        this.diasTrabajadosAnual = diasTrabajadosAnual;
    };
    //Métodos Despidos trabajo no registrado o en negro
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
    calcTotalRubrosIndemnizatorios(){
        return this.totalRubrosIndemnizatorios = this.dosCuarentayCinco + this.integracion;
    };
    // Método para determinar antiguedad Tope por prescripción 
    calcParaAntiguedadTope(){
        if (this.antiguedad > 2) {
            this.antiguedadTope = 2;
        }else {
            this.antiguedadTope = this.antiguedad
        };
        return this.antiguedadTope;
    };
    // Método para cálculo de diferencias salariales
    calcDiferenciasSalariales(){
        this.diferenciasSalariales = (this.salarioConvenio - this.salario) * this.antiguedadTope * 12;
        return this.diferenciasSalariales;
    };
    // Método para cálculo de meses no abonados
    calcMesesNoAbonados(){
        this.mesesNoAbonadosTotal = this.mesesNoAbonados * this.salarioConvenio;
        return this.mesesNoAbonadosTotal;
    };
    //Método para cálculo de sueldo anual complementario
    calcSueldoAnualComplementario(){
        this.sueldoAnualComplementario = ((this.salario/2) /180) * this.diasTrabajadosAnual;
        return this.sueldoAnualComplementario;
    };
    // Método para determinar total de indemnización por trabajo no registrado
    calcTotalRubrosNoRetenibles(){
        this.totalRubrosNoRetenibles = this.sueldoAnualComplementario + this.diferenciasSalariales + this.mesesNoAbonadosTotal;
        return this.totalRubrosNoRetenibles;
    };
    calcTotalTrabajoNoRegistrado(){
        this.totalTrabajoNoRegistrado = this.totalRubrosIndemnizatorios + this.totalRubrosNoRetenibles;
        return this.totalTrabajoNoRegistrado;
    };
    id(){
        this.id = despidosTrabajoNoRegistrado.length +1;
    };
    calcTotalMostrar(){
        this.totalMostrar = this.totalTrabajoNoRegistrado;
    };
};
//Cierra clase desódps em caso de trabajo NO registrado
// Constantes Array para simular creación base de datos con los datos que ingrese el usuario
const despidosTrabajoNoRegistrado  = [];
const datosUsuariosTrabajoNoRegistrado = [];
const datosUsuarioYDespidoTrabajoNoRegistrado = [];
const desestructuradoUnidos = [];
//Obtención de elemento submit para ejecutar el código
const obtenerFormularioTrabajoNoRegistrado = document.getElementById("formularioTrabajoNoRegistrado");
const obtenerInputs = document.querySelectorAll("#formularioTrabajoNoRegistrado input");
const obtenerSubmitTrabajoNoRegistrado = document.getElementById("submitTrabajoNoRegistrado");
//Abre variable para validar formulario
const validarCalculadoraTrabajoNoRegistrado = obtenerSubmitTrabajoNoRegistrado.addEventListener("click", (e) =>{
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
    paraValidar.length == obtenerInputs.length ? ejecutarCalculadoraTrabajoNoRegistrado() : mensajeError(); //operador ternario
}); //fin submit addEventListener
//variable para ejecución de la calculadora
const ejecutarCalculadoraTrabajoNoRegistrado = () => {
    //Funcion para obtención de elementos del html a utilizar en las clases en archivo funciones.js
    obtenerByID ();
    //Obtención de los datos personales
    const nuevoUsuarioTrabajoNoRegistrado = new Usuario(
        obtenerNombres,
        obtenerApellidos,
        obtenerEmail,
        obtenerTrabajo,
    );
    //Crea id usuario
    nuevoUsuarioTrabajoNoRegistrado.idUsuario();
    //Función Push a base datos del usuario en localStorage
    let agregarUsuariosTrabajoNoRegistrados = () =>{
        datosUsuariosTrabajoNoRegistrado.push(nuevoUsuarioTrabajoNoRegistrado); 
        localStorage.setItem("UsuarioTrabajoNoRegistrado", JSON.stringify(datosUsuariosTrabajoNoRegistrado));
    };   
    agregarUsuariosTrabajoNoRegistrados();    
    // Creación nuevo objeto despidoRegistrado
    const nuevoDespidoTrabajoNoRegistrado = new DespidoTrabajoNoRegistrado(
        obtenerAntiguedad,
        obtenerSalario,
        obtenerPreaviso,
        obtenerDiasTrabajados,
        obtenerSalarioConvenio,
        obtenerCantidadMesesNoAbonados,
        obtenerSueldoAnualComplementario,
    );    
    // Funciones para cálculos
    nuevoDespidoTrabajoNoRegistrado.calcDosCuarentayCinco();
    nuevoDespidoTrabajoNoRegistrado.calcIntegracion();
    nuevoDespidoTrabajoNoRegistrado.calcParaAntiguedadParaPreaviso();
    nuevoDespidoTrabajoNoRegistrado.calcParaPreaviso();
    nuevoDespidoTrabajoNoRegistrado.calcTotalRubrosIndemnizatorios();
    nuevoDespidoTrabajoNoRegistrado.calcParaAntiguedadTope();
    nuevoDespidoTrabajoNoRegistrado.calcDiferenciasSalariales();
    nuevoDespidoTrabajoNoRegistrado.calcMesesNoAbonados();
    nuevoDespidoTrabajoNoRegistrado.calcSueldoAnualComplementario();
    nuevoDespidoTrabajoNoRegistrado.calcTotalRubrosNoRetenibles();
    nuevoDespidoTrabajoNoRegistrado.calcTotalTrabajoNoRegistrado();
    nuevoDespidoTrabajoNoRegistrado.id();
    nuevoDespidoTrabajoNoRegistrado.calcTotalMostrar();
    //Función para Push al array base datos de los despidos por trabajo registrado o en blanco en localStorage
    let agregarDespidosNoRegistrados = () =>{
        despidosTrabajoNoRegistrado.push(nuevoDespidoTrabajoNoRegistrado);
        localStorage.setItem("DespidosTrabajoNoRegistrado", JSON.stringify(despidosTrabajoNoRegistrado));
    };
    agregarDespidosNoRegistrados();    
    //envío Formulario con prevención de refresh
    const formularioTrabajoNoRegistrado = document.getElementById("formularioTrabajoNoRegistrado");
    formularioTrabajoNoRegistrado.addEventListener("submit", (e) =>{
        e.preventDefault();
    });
    //Creación del Resultado
    const obtenerSectionMostrarResultadoTrabajoNoRegistrado = document.querySelector("#mostrarResultadosFormularioTrabajoNoRegistrado")
    function crearResultadoTrabajoNoRegistrado () {
        obtenerSectionMostrarResultadoTrabajoNoRegistrado.innerHTML = "";
        let divResultadoTrabajoNoRegistrado =  document.createElement("div");
        divResultadoTrabajoNoRegistrado.id = ("contenedorRespuesta");
        divResultadoTrabajoNoRegistrado.classList = ("calculadora__contenedorRespuesta")
        divResultadoTrabajoNoRegistrado.innerHTML = `<h3>Aquí tus resultados ${nuevoUsuarioTrabajoNoRegistrado.nombre}</h3>
        <ul><li>Te corresponde una indemnización por despido de $ ${nuevoDespidoTrabajoNoRegistrado.totalRubrosIndemnizatorios}.</li>
        <li>La misma está compuesta por los siguientes rubros:</li>
        <li>Indemnización por antigûedad: $ ${nuevoDespidoTrabajoNoRegistrado.dosCuarentayCinco}.</li>
        <li>Indemnización por falta de preaviso: $ ${nuevoDespidoTrabajoNoRegistrado.preavisoTotal}.</li>
        <li>Indemnización por integración mes de despido: $ ${nuevoDespidoTrabajoNoRegistrado.integracion}.</li>
        <li>Te corresponde además en concepto de indemnización por rubros no retenibles de $ ${nuevoDespidoTrabajoNoRegistrado.totalRubrosNoRetenibles}</li>
        <li>La misma está compuesta por los siguientes rubros:</li>
        <li>Diferencias salariales: $ ${nuevoDespidoTrabajoNoRegistrado.diferenciasSalariales}</li>
        <li>Sueldo Anual Complementario: $ ${nuevoDespidoTrabajoNoRegistrado.sueldoAnualComplementario}</li>
        <li>Meses trabajados y no percibidos: $ ${nuevoDespidoTrabajoNoRegistrado.mesesNoAbonadosTotal}</li></ul>
        <p>En total, tu indemnización es de $ ${nuevoDespidoTrabajoNoRegistrado.totalMostrar}</p>`;
        obtenerSectionMostrarResultadoTrabajoNoRegistrado.appendChild(divResultadoTrabajoNoRegistrado);   
    };
    //Mostrar Resultado
    crearResultadoTrabajoNoRegistrado();
    const obtenerCalculadoraContenedorRespuesta = document.getElementById("contenedorRespuesta");
    //Para hacer que al mostrar el resultado creado baje hasta el mismo    
    obtenerCalculadoraContenedorRespuesta.scrollIntoView();
    obtenerCalculadoraContenedorRespuesta.scrollIntoView(true);
    obtenerCalculadoraContenedorRespuesta.scrollIntoView({behavior: "smooth"});
    //utilización de spread para crear usuario con todos los datos
    unidos = {
        ...nuevoDespidoTrabajoNoRegistrado,
        ...nuevoUsuarioTrabajoNoRegistrado
    };
    agregarUnidos = () =>{
        datosUsuarioYDespidoTrabajoNoRegistrado.push(unidos); 
        localStorage.setItem("TodosDatosTrabajoNoRegistrado", JSON.stringify(datosUsuarioYDespidoTrabajoNoRegistrado));
    }; 
    agregarUnidos();
    //desestructurar por parámetro objeto unidos
    const desestructurar = ( {id, email, salario,totalMostrar} ) => {
        mezcla = {id, email, salario,totalMostrar};
        desestructuradoUnidos.push(mezcla);
        localStorage.setItem("DesestructuradoTrabajoNoRegistrado", JSON.stringify(desestructuradoUnidos));
    };
    desestructurar(unidos);
};