# Calculadora_de_Indemnizaciones
Calculadora de Indemnizaciones laborales
Autor: Germán Fabris
Proyecto para Entrega Final del curso de Javascript en CoderHouse - 2da Etapa en carrera FullStack

Agradezco a este curso por la cantidad de herramientas y conocimientos brindados, por el acompañamiento de los tutores, la excelente predisposición y nivel del profesor y la unión entre los compañeros del cursado.

El proyecto consiste en 3 calculadoras online de indemnizaciones laborales integradas en una aplicación web, con una interfaz de administrador, que permite tener un acceso a la base de datos de las indemnizaciones cargadas por el usuario y mostrarlas de forma dinámica.
A su vez, también tiene la posibilidad tanto el usuario como el administrador de imprimir en formato PDF para optimizar la experiencia.

En particular hay algunos detalles que me gustaría nombrar:
- En index, se realizó el linkeo a las calculadoras con JS, para redireccionar al realizar clicks en cada calculadora a su respectiva página.
- En cada calculadora, se detalla lo necesario para calcular las indemnizaciones que correspondan, combinando dos mundos, la abogacía y la programación.
  Para optimizar código, se creo un script aparte de funciones, entre las cuales hay algunas que me gustaron mucho realizarlas:
    - Función que obtiene los elementos del html por su ID, de todos los formularios de cada una de las páginas, sin devolver error ya que algunos inputs no figurar en todos los formularios,
    - Función para obtener datos del local storage.
    - Función que imprime en PDF.
    - Funciones para aplicar filtros y ordenar de manera práctica y fácil en base de datos.
- En interfaz admin, se utilizó JS para podificar estilos e interactuar con CSS, generando efectos interesantes visualmente.
Además, se generó una simulación de envío del register y login al servidor, donde para ver la base de datos sí o sí hay que estar logueado, utilizando la API JSONholder y localStorage para llevar a cabo esas simulaciones.
- Para la interfaz base de datos, se aplicaron las funciones mencionadas anteriormente para filtros y ordenar, permitiendo ahorrar mucho código.
A lo largo del proyecto, hay múltiples validaciones, ya sea para validar si los formularios están vacíos, como para validar si son lógicos los datos introducidos por el usuario, y demás.

Espero sea de su agrado la experiencia por este proyecto. ¡Muchas gracias!
Germán Fabris
