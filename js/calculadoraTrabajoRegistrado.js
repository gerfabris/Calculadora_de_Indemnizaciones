class Usuario{
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
class DespidoTrabajoRegistrado {
        constructor (antiguedad,salario,preaviso,diasTrabajados){
            this.antiguedad = antiguedad;
            this.salario = salario;
            this.preaviso = preaviso;
            this.diasTrabajados = diasTrabajados;
        };
        calcDosCuarentayCinco(){
            this.dosCuarentayCinco = this.salario * this.antiguedad;
            this.dosCuarentayCinco = +this.dosCuarentayCinco.toFixed(2);
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
            this.antiguedadParaPreaviso = +this.antiguedadParaPreaviso.toFixed(2);
            return this.antiguedadParaPreaviso;
        };
        calcParaPreaviso(){
            this.preavisoTotal = this.antiguedadParaPreaviso * this.salario;
            this.preavisoTotal = +this.preavisoTotal.toFixed(2);
            return this.preavisoTotal;
        };
        calcIntegracion(){
            this.integracion = (30 - this.diasTrabajados) * (this.salario/30);
            this.integracion = +this.integracion.toFixed(2);
            return this.integracion;
        };
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
const despidosTrabajoRegistrado  = [];
const datosUsuariosTrabajoRegistrado = [];
const datosUsuarioYDespidoTrabajoRegistrado = [];
const desestructuradoUnidos = [];
const obtenerFormularioTrabajoRegistrado = document.getElementById("formularioTrabajoRegistrado");
const obtenerInputs = document.querySelectorAll("#formularioTrabajoRegistrado input");
const obtenerSubmitTrabajoRegistrado = document.getElementById("submitTrabajoRegistrado");
const validarCalculadoraTrabajoRegistrado = obtenerSubmitTrabajoRegistrado.addEventListener("click", (e) =>{
    e.preventDefault();
    //valida datos l??gicos de cada input
    let datosLogicos = false;
    validarDatosLogicos = () =>{
        salario = document.getElementById("salario");
        antiguedad = document.getElementById("antiguedad");
        diasTrabajados = document.getElementById("diasTrabajados");
        validadoSalario = salario.value.length < 4 ? false : salario.value < 1000 ? false : true;
        validadoAntiguedad = antiguedad.value < 1 ? false : true;
        validadoDiasTrabajados = diasTrabajados.value < 0 ? false : diasTrabajados.value > 31 ? false : true;
        validadoSalario && validadoAntiguedad && validadoDiasTrabajados ? datosLogicos = true : datosLogicos = false;
    }
    validarDatosLogicos();
    //valida env??o de formulario vac??o
    validarFormularioCompleto = () =>{
        let validar = false;
        let paraValidar = [];    
        obtenerInputs.forEach((input) => {
            input.value.length < 1 ? validar = false : validar = true + paraValidar.push(validar)
        });
        paraValidar.length == obtenerInputs.length ? ejecutarCalculadoraTrabajoRegistrado() : mensajeError(); //operador ternario
    };
    datosLogicos == true ? validarFormularioCompleto() : mensajeErrorDatosInvalidos();
});
const ejecutarCalculadoraTrabajoRegistrado = () => {
    obtenerByID ();
    const nuevoUsuarioTrabajoRegistrado = new Usuario(
        obtenerNombres.toUpperCase(),
        obtenerApellidos.toUpperCase(),
        obtenerEmail.toUpperCase(),
        obtenerTrabajo.toUpperCase(),
    );
    nuevoUsuarioTrabajoRegistrado.idUsuarios();
    const agregarUsuariosTrabajoRegistrados = () =>{
        datosUsuariosTrabajoRegistrado.push(nuevoUsuarioTrabajoRegistrado); 
        localStorage.setItem("UsuarioTrabajoRegistrado", JSON.stringify(datosUsuariosTrabajoRegistrado));
    };   
    agregarUsuariosTrabajoRegistrados();
    const nuevoDespidoTrabajoRegistrado = new DespidoTrabajoRegistrado(
        obtenerAntiguedad,
        obtenerSalario,
        obtenerPreaviso,
        obtenerDiasTrabajados
    );    
    nuevoDespidoTrabajoRegistrado.calcDosCuarentayCinco();
    nuevoDespidoTrabajoRegistrado.calcIntegracion();
    nuevoDespidoTrabajoRegistrado.calcParaAntiguedadParaPreaviso();
    nuevoDespidoTrabajoRegistrado.calcParaPreaviso();
    nuevoDespidoTrabajoRegistrado.calcTotalDespido();
    nuevoDespidoTrabajoRegistrado.id();
    nuevoDespidoTrabajoRegistrado.calcTotalMostrar();
    const agregarDespidosRegistrados = () =>{
        despidosTrabajoRegistrado.push(nuevoDespidoTrabajoRegistrado);
        localStorage.setItem("DespidosTrabajoRegistrado", JSON.stringify(despidosTrabajoRegistrado));
    };
    agregarDespidosRegistrados();
    const formularioTrabajoRegistrado = document.getElementById("formularioTrabajoRegistrado");
    formularioTrabajoRegistrado.addEventListener("submit", (e) =>{
        e.preventDefault();
    })
    const obtenerSectionMostrarResultadoTrabajoRegistrado = document.querySelector("#mostrarResultadosFormularioTrabajoRegistrado")
    crearResultadoTrabajoRegistrado = () => {
        obtenerSectionMostrarResultadoTrabajoRegistrado.innerHTML = "";
        let divResultadoTrabajoRegistrado =  document.createElement("div");
        divResultadoTrabajoRegistrado.classList = ("calculadora__contenedorRespuesta");
        divResultadoTrabajoRegistrado.id = "contenedorRespuesta";
        divResultadoTrabajoRegistrado.innerHTML = `<h3>Aqu?? tus resultados ${nuevoUsuarioTrabajoRegistrado.nombre}</h3>
        <ul><li>Te corresponde una indemnizaci??n por despido de $ <b> ${nuevoDespidoTrabajoRegistrado.totalDespido} </b>.</li>
        <li>La misma est?? compuesta por los siguientes rubros:</li>
        <li>- Indemnizaci??n por antig??edad: $ ${nuevoDespidoTrabajoRegistrado.dosCuarentayCinco}.</li>
        <li>- Indemnizaci??n por falta de preaviso: $ ${nuevoDespidoTrabajoRegistrado.preavisoTotal}.</li>
        <li>- Indemnizaci??n por integraci??n mes de despido: $ ${nuevoDespidoTrabajoRegistrado.integracion}.</li></ul>
        <button id="botonImprimir" class="boton__Imprimir">Imprimir</button>`;
        obtenerSectionMostrarResultadoTrabajoRegistrado.appendChild(divResultadoTrabajoRegistrado);  
    };
    crearResultadoTrabajoRegistrado();
    const obtenerCalculadoraContenedorRespuesta = document.getElementById("contenedorRespuesta");
    obtenerCalculadoraContenedorRespuesta.scrollIntoView();
    obtenerCalculadoraContenedorRespuesta.scrollIntoView(true);
    obtenerCalculadoraContenedorRespuesta.scrollIntoView({behavior: "smooth"});
    imprimirDocumento();
    unidos = {
        ...nuevoDespidoTrabajoRegistrado,
        ...nuevoUsuarioTrabajoRegistrado
    };
    agregarUnidos = () =>{
        datosUsuarioYDespidoTrabajoRegistrado.push(unidos); 
        localStorage.setItem("TodosDatosTrabajoRegistrado", JSON.stringify(datosUsuarioYDespidoTrabajoRegistrado));
    }; 
    agregarUnidos();
    const desestructurar = ( {id, email, salario,totalMostrar} ) => {
        mezcla = {id, email, salario,totalMostrar};
        desestructuradoUnidos.push(mezcla);
        localStorage.setItem("DesestructuradoTrabajoRegistrado", JSON.stringify(desestructuradoUnidos));
    };
    desestructurar(unidos);    
};