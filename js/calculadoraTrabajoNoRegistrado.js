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
class DespidoTrabajoNoRegistrado{
    constructor (antiguedad,salario,preaviso,diasTrabajados,salarioConvenio,mesesNoAbonados,diasTrabajadosAnual){
        this.antiguedad = antiguedad;
        this.salario = salario;
        this.preaviso = preaviso;
        this.diasTrabajados = diasTrabajados;
        this.salarioConvenio = salarioConvenio;
        this.mesesNoAbonados = mesesNoAbonados;
        this.diasTrabajadosAnual = diasTrabajadosAnual;
    };
    calcDosCuarentayCinco(){
        this.dosCuarentayCinco = this.salario * this.antiguedad;
        this.dosCuarentayCinco = this.dosCuarentayCinco.toFixed(2);
        return this.dosCuarentayCinco;
    };
    calcParaAntiguedadParaPreaviso(){
        this.antiguedadParaPreaviso = 0;
        if (this.antiguedad < 5){
            this.antiguedadParaPreaviso = 1;
        }else if (this.antiguedad >= 5){
            this.antiguedadParaPreaviso = 2;
        }else if(this.preaviso == "no"){
            this.antiguedadParaPreaviso = 0;
        };
        this.antiguedadParaPreaviso = this.antiguedadParaPreaviso.toFixed(2);
        return this.antiguedadParaPreaviso;
    };
    calcParaPreaviso(){
        this.preavisoTotal = this.antiguedadParaPreaviso * this.salario;
        this.preavisoTotal = this.preavisoTotal.toFixed(2);
        return this.preavisoTotal;
    };
    calcIntegracion(){
        this.integracion = (30 - this.diasTrabajados) * (this.salario/30);
        this.integracion = this.integracion.toFixed(2);
        return this.integracion;
    };
    calcTotalRubrosIndemnizatorios(){
        return this.totalRubrosIndemnizatorios = this.dosCuarentayCinco + this.integracion;
    };
    calcParaAntiguedadTope(){
        if (this.antiguedad > 2) {
            this.antiguedadTope = 2;
        }else {
            this.antiguedadTope = this.antiguedad
        };
        return this.antiguedadTope;
    };
    calcDiferenciasSalariales(){
        this.diferenciasSalariales = (this.salarioConvenio - this.salario) * this.antiguedadTope * 12;
        this.diferenciasSalariales = this.diferenciasSalariales.toFixed(2);
        return this.diferenciasSalariales;
    };
    calcMesesNoAbonados(){
        this.mesesNoAbonadosTotal = this.mesesNoAbonados * this.salarioConvenio;
        this.mesesNoAbonadosTotal = this.mesesNoAbonadosTotal.toFixed(2);
        return this.mesesNoAbonadosTotal;
    };
    calcSueldoAnualComplementario(){
        this.sueldoAnualComplementario = ((this.salario/2) /180) * this.diasTrabajadosAnual;
        this.sueldoAnualComplementario = this.sueldoAnualComplementario.toFixed(2)
        return this.sueldoAnualComplementario;
    };
    calcTotalRubrosNoRetenibles(){
        this.totalRubrosNoRetenibles = this.sueldoAnualComplementario + this.diferenciasSalariales + this.mesesNoAbonadosTotal;
        this.totalRubrosNoRetenibles = this.totalRubrosNoRetenibles.toFixed(2);
        return this.totalRubrosNoRetenibles;
    };
    calcTotalTrabajoNoRegistrado(){
        this.totalTrabajoNoRegistrado = this.totalRubrosIndemnizatorios + this.totalRubrosNoRetenibles;
        this.totalTrabajoNoRegistrado = this.totalTrabajoNoRegistrado.toFixed(2);
        return this.totalTrabajoNoRegistrado;
    };
    id(){
        this.id = despidosTrabajoNoRegistrado.length +1;
    };
    calcTotalMostrar(){
        this.totalMostrar = this.totalTrabajoNoRegistrado;
    };
};
const despidosTrabajoNoRegistrado  = [];
const datosUsuariosTrabajoNoRegistrado = [];
const datosUsuarioYDespidoTrabajoNoRegistrado = [];
const desestructuradoUnidos = [];
const obtenerFormularioTrabajoNoRegistrado = document.getElementById("formularioTrabajoNoRegistrado");
const obtenerInputs = document.querySelectorAll("#formularioTrabajoNoRegistrado input");
const obtenerSubmitTrabajoNoRegistrado = document.getElementById("submitTrabajoNoRegistrado");
const validarCalculadoraTrabajoNoRegistrado = obtenerSubmitTrabajoNoRegistrado.addEventListener("click", (e) =>{
    e.preventDefault();
    let validar = false;
    let paraValidar = [];    
    obtenerInputs.forEach((input) => {
        input.value.length < 1 ? validar = false : validar = true + paraValidar.push(validar)
    });
    paraValidar.length == obtenerInputs.length ? ejecutarCalculadoraTrabajoNoRegistrado() : mensajeError(); //operador ternario
});
const ejecutarCalculadoraTrabajoNoRegistrado = () => {
    obtenerByID ();
    const nuevoUsuarioTrabajoNoRegistrado = new Usuario(
        obtenerNombres,
        obtenerApellidos,
        obtenerEmail,
        obtenerTrabajo,
    );
    nuevoUsuarioTrabajoNoRegistrado.idUsuario();
    let agregarUsuariosTrabajoNoRegistrados = () =>{
        datosUsuariosTrabajoNoRegistrado.push(nuevoUsuarioTrabajoNoRegistrado); 
        localStorage.setItem("UsuarioTrabajoNoRegistrado", JSON.stringify(datosUsuariosTrabajoNoRegistrado));
    };   
    agregarUsuariosTrabajoNoRegistrados();    
    const nuevoDespidoTrabajoNoRegistrado = new DespidoTrabajoNoRegistrado(
        obtenerAntiguedad,
        obtenerSalario,
        obtenerPreaviso,
        obtenerDiasTrabajados,
        obtenerSalarioConvenio,
        obtenerCantidadMesesNoAbonados,
        obtenerSueldoAnualComplementario,
    );    
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
    let agregarDespidosNoRegistrados = () =>{
        despidosTrabajoNoRegistrado.push(nuevoDespidoTrabajoNoRegistrado);
        localStorage.setItem("DespidosTrabajoNoRegistrado", JSON.stringify(despidosTrabajoNoRegistrado));
    };
    agregarDespidosNoRegistrados();    
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