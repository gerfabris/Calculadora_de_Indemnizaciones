//función obtener by id en calculadoras
obtenerByID = () => {
    //class usuarios
    obtenerNombres = document.getElementById("nombres")?.value;
    obtenerApellidos = document.getElementById("apellidos")?.value;
    obtenerEmail = document.getElementById("email")?.value;
    obtenerTrabajo = document.getElementById("trabajo")?.value; 
    //class despido/renuncia
    obtenerAntiguedad = document.getElementById("antiguedad")?.value;           
    obtenerSalario = document.getElementById("salario")?.value;
    obtenerPreaviso = document.getElementById("preaviso")?.value;
    obtenerDiasTrabajados = document.getElementById("diasTrabajados")?.value;
    obtenerSalarioConvenio = document.getElementById("salarioConvenio")?.value;
    obtenerCantidadMesesNoAbonados = document.getElementById("cantidadMesesNoAbonados")?.value;
    obtenerSueldoAnualComplementario = document.getElementById("sueldoAnualComplementario")?.value;
};
//crea mensaje error formulario
mensajeError = () =>{
    Swal.fire({
        icon: 'error',
        title: 'Formulario Incompleto',
        text: 'Completa todo el formulario',
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
};
// función para obtener parse de localStorage | prueba en basedatos.js linea 10
jsonParse = (a,arrayStringly) => {
    a = JSON.parse(localStorage.getItem(arrayStringly));
    return a
};
//FILTROS
filtrarMayorTotalMostrar = (obtener,arrayParaFiltrar,monto,contenedorResultado) => {
    filtrarMayorMonto = obtener.addEventListener("click", () =>{
        let filtroMayorMonto = arrayParaFiltrar.filter(mayor =>{
            if(mayor.totalMostrar > monto){
                return true
            }else{
                return false
            }
        });
    contenedorResultado.innerHTML = "";
    for (let filtradoMayor of filtroMayorMonto){
        let filtroAñadir = document.createElement("div");
        filtroAñadir.innerHTML = `<ul><li>El ID es: ${filtradoMayor.id} y su monto total es: $ ${filtradoMayor.totalMostrar}</li></ul>`;
        contenedorResultado.appendChild(filtroAñadir);
        };
    });
}; 
filtrarMenorTotalMostrar = (obtener,arrayParaFiltrar,monto,contenedorResultado) => {
    montoMenor = obtener.addEventListener("click", () =>{
        let filtroMenorMonto = arrayParaFiltrar.filter(menor =>{
            if (menor.totalMostrar < monto){
                return true;
            }else{
                return false;
            };
        });
        contenedorResultado.innerHTML = "";
        for (let filtradoMenor of filtroMenorMonto){
            let filtroAñadir = document.createElement("div");
            filtroAñadir.innerHTML = `<ul><li>El ID es: ${filtradoMenor.id} y su monto es: $ ${filtradoMenor.totalMostrar}</li></ul>`;
            contenedorResultado.appendChild(filtroAñadir);
        };
    }); 
};
volverMostrarTodos = (obtener,arrayParaFiltrar,contenedorResultado) => {
    todos = obtener.addEventListener("click", () =>{
        contenedorResultado.innerHTML = "";
        for (let objeto of arrayParaFiltrar){
            let objetoAñadir = document.createElement("div");
            objetoAñadir.innerHTML = `<ul><li>El ID es: ${objeto.id} y su monto total es: $ ${objeto.totalMostrar}</li></ul>`;
            contenedorResultado.appendChild(objetoAñadir);
        };
    });
};
filtrarMayorAntiguedad = (obtener,arrayParaFiltrar,monto,contenedorResultado) => {
    mayorAntiguedad = obtener.addEventListener("click", () =>{
        let filtroMayorAntiguedad = arrayParaFiltrar.filter(mayor =>{
            if(mayor.antiguedad > monto){
                return true
            }else{
                return false
            }
        });
    contenedorResultado.innerHTML = "";
    for (let filtradoMayor of filtroMayorAntiguedad){
        let filtroAñadir = document.createElement("div");
        filtroAñadir.innerHTML = `<ul><li>El ID es: ${filtradoMayor.id} y su antigüedad es: ${filtradoMayor.antiguedad}</li></ul>`;
        contenedorResultado.appendChild(filtroAñadir);
        };
    });
};
filtrarMenorAntiguedad = (obtener,arrayParaFiltrar,monto,contenedorResultado) => {
    menorAntiguedad = obtener.addEventListener("click", () =>{
        let filtroMenorAntiguedad = arrayParaFiltrar.filter(menor =>{
            if (menor.antiguedad < monto){
                return true;
            }else{
                return false;
            };
        });
        contenedorResultado.innerHTML = "";
        for (let filtradoMenor of filtroMenorAntiguedad){
            let filtroAñadir = document.createElement("div");
            filtroAñadir.innerHTML = `<ul><li>El ID es: ${filtradoMenor.id} y su antiguedad es: ${filtradoMenor.antiguedad}</li></ul>`;
            contenedorResultado.appendChild(filtroAñadir);
        };
    }); 
};
filtrarTodosUsuarios = (obtener,arrayParaFiltrar,contenedorResultado) =>{
    todoUsuarios = obtener.addEventListener("click", () =>{
        contenedorResultado.innerHTML = "";
        for (let objeto of arrayParaFiltrar){
            let objetoAñadir = document.createElement("div");
            objetoAñadir.innerHTML = `<ul><li>El nombre es: ${objeto.nombre}, su apellido es ${objeto.apellido}, su email es: $ ${objeto.email} y su trabajo es: ${objeto.trabajo}</li></ul>`;
            contenedorResultado.appendChild(objetoAñadir);
        };
    });
};
filtrarninguno = (obtener,contenedorResultado) =>{
        ninguno = obtener.addEventListener("click", () =>{
            contenedorResultado.innerHTML = "";
        });
};
filtrarEmails = (obtener,arrayParaFiltrar,contenedorResultado) => {
    obtenerEmail = obtener.addEventListener("click", () =>{
        let emailsGlobal = []; 
        arrayParaFiltrar.forEach(email => {
            emailsGlobal.push(email.email);    
        });
        contenedorResultado.innerHTML = "";
        for (let email of emailsGlobal){
            let emailAñadir = document.createElement("div");
            emailAñadir.innerHTML = `<ul><li> Email: ${email}</li></ul>`;
            contenedorResultadosGlobales.appendChild(emailAñadir);
        };    
    });
};
//ORDENAR
ordenarPorTrabajo = (obtener,arrayParaFiltrar,contenedorResultados) => {
    porTrabajo = obtener.addEventListener("click", () =>{
        contenedorResultados.innerHTML = "";
        let ordenar = arrayParaFiltrar.sort(function (a,b){
            if (a.trabajo > b.trabajo) return 1;
            if (a.trabajo == b.trabajo) return 0;
            if (a.trabajo < b.trabajo) return -1;
        });
        for (let objeto of ordenar){
            let objetoAñadir = document.createElement("div");
            objetoAñadir.innerHTML = `<ul><li>Su trabajo es: ${objeto.trabajo}, el nombre es: ${objeto.nombre}, su apellido es ${objeto.apellido}, su email es: $ ${objeto.email}</li></ul>`;
            contenedorResultados.appendChild(objetoAñadir);
        };
    });
};
ordenarPorNombre = (obtener,arrayParaFiltrar,contenedorResultados) => {
    porNombre = obtener.addEventListener("click", () =>{
        contenedorResultados.innerHTML = "";
        let ordenar = arrayParaFiltrar.sort(function (a,b){
            if (a.nombre > b.nombre) return 1;
            if (a.nombre == b.nombre) return 0;
            if (a.nombre < b.nombre) return -1;
        });
        for (let objeto of ordenar){
            let objetoAñadir = document.createElement("div");
            objetoAñadir.innerHTML = `<ul><li>Su nombre es: ${objeto.nombre}, el trabajo es: ${objeto.trabajo}, su apellido es ${objeto.apellido}, su email es: $ ${objeto.email}</li></ul>`;
            contenedorResultados.appendChild(objetoAñadir);
        };
    });
};
ordenarPorApellido = (obtener,arrayParaFiltrar,contenedorResultados) => {
    porApellido = obtener.addEventListener("click", () =>{
        contenedorResultados.innerHTML = "";
        let ordenar = arrayParaFiltrar.sort(function (a,b){
            if (a.apellido > b.apellido) return 1;
            if (a.apellido == b.apellido) return 0;
            if (a.apellido < b.apellido) return -1;
        });
        for (let objeto of ordenar){
            let objetoAñadir = document.createElement("div");
            objetoAñadir.innerHTML = `<ul><li>Su apellido es ${objeto.apellido}, su  nombre es: ${objeto.nombre}, su trabajo es: ${objeto.trabajo}, su email es: $ ${objeto.email}</li></ul>`;
            contenedorResultados.appendChild(objetoAñadir);
        };
    });
};    
ordenarPorEmail = (obtener,arrayParaFiltrar,contenedorResultados) => {
    porEmail = obtener.addEventListener("click", () =>{
        contenedorResultados.innerHTML = "";
        let ordenar = arrayParaFiltrar.sort(function (a,b){
            if (a.email > b.email) return 1;
            if (a.email == b.email) return 0;
            if (a.email < b.email) return -1;
        });
        for (let objeto of ordenar){
            let objetoAñadir = document.createElement("div");
            objetoAñadir.innerHTML = `<ul><li>Su  email es: $ ${objeto.email}, su  nombre es: ${objeto.nombre}, su apellido es ${objeto.apellido}, su trabajo es: ${objeto.trabajo}</li></ul>`;
            contenedorResultados.appendChild(objetoAñadir);
        };
    });
}; 
ordenarPorID = (obtener,arrayParaFiltrar,contenedorResultados) => {
    porID = obtener.addEventListener("click", () =>{
        contenedorResultados.innerHTML = "";
        let ordenar = arrayParaFiltrar.sort(function (a,b){
            if (a.id > b.id) return 1;
            if (a.id == b.id) return 0;
            if (a.id < b.id) return -1;
        });
        for (let objeto of ordenar){
            let objetoAñadir = document.createElement("div");
            objetoAñadir.innerHTML = `<ul><li>Su id es: $ ${objeto.id}, la indemnización es: ${objeto.totalMostrar}, su antigUedad es ${objeto.antiguedad}, su salario es: ${objeto.salario}</li></ul>`;
            contenedorResultados.appendChild(objetoAñadir);
        };
    });
}; 
ordenarPorTotal = (obtener,arrayParaFiltrar,contenedorResultados) => {
    porTotal = obtener.addEventListener("click", () =>{
        contenedorResultados.innerHTML = "";
        let ordenar = arrayParaFiltrar.sort(function (a,b){
            if (a.totalMostrar < b.totalMostrar) return 1;
            if (a.totalMostrar == b.totalMostrar) return 0;
            if (a.totalMostrar > b.totalMostrar) return -1;
        });
        for (let objeto of ordenar){
            let objetoAñadir = document.createElement("div");
            objetoAñadir.innerHTML = `<ul><li>La indemnización es: ${objeto.totalMostrar}, su id es: $ ${objeto.id}, su antigUedad es ${objeto.antiguedad}, su salario es: ${objeto.salario}</li></ul>`;
            contenedorResultados.appendChild(objetoAñadir);
        };
    });
}; 
ordenarPorSalario = (obtener,arrayParaFiltrar,contenedorResultados) => {
    porSalario = obtener.addEventListener("click", () =>{
        contenedorResultados.innerHTML = "";
        let ordenar = arrayParaFiltrar.sort(function (a,b){
            if (a.salario > b.salario) return 1;
            if (a.salario == b.salario) return 0;
            if (a.salario < b.salario) return -1;
        });
        for (let objeto of ordenar){
            let objetoAñadir = document.createElement("div");
            objetoAñadir.innerHTML = `<ul><li>Su salario es: ${objeto.salario}, la indemnización es: ${objeto.totalMostrar}, su id es: $ ${objeto.id}, su antigUedad es ${objeto.antiguedad}</li></ul>`;
            contenedorResultados.appendChild(objetoAñadir);
        };
    });
};


