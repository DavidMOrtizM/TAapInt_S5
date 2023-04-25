/*import * as elementos from 'https://davidmortizm.github.io/js/elementos.js';*/
/*import * as elementos from '../js/elementos.js'*/

var Categorias="";
if (window.localStorage.length === 0) {
    var List_Noticias = [
    {
        "ID" :"N01",
        "titulo": "Cierran todo el borde costero de San Pedro de la Paz por sospecha de gripe aviar: hay aves muertas",
        "categoria":"nacional",
        "foto":"../resources/images/gripe-aviar.jpg",
        "texto":"El municipio de San Pedro de la Paz informó la tarde de este miércoles que se cerró todo el borde costero de la comuna, ante la sospecha de gripe aviar.Lo anterior por la presencia de más de 20 aves muertas en la playa de la zona.Tal como señala el propio municipio a través de sus redes sociales, esta es una medida preventiva ante el hallazgo de ejemplares en la playa.Esto se mantendrá hasta que el Servicio Agrícola y Ganadero descarte que se trate efectivamente de gripe aviar.Nelson Sanhueza, inspector municipal del Departamento de Medio Ambiente, señaló que se encuentran en Alerta Roja preventiva, por la aparición de las aves muertas.“Le pedimos a los vecinos que no se acerquen a la playa”, llamó el funcionario municipal. También solicitó no soltar perros en la playa.",
        "audio":"",
        "video":"",
        "fecha":"2023-03-29"
    },
    {
        "ID" :"N02",
        "titulo": "Detienen a hombre en situación de calle acusado de robar cafetería en el centro de Temuco",
        "categoria":"nacional",
        "foto":"../resources/images/detienen-hombre.jpg",
        "texto":"Un hombre en situación de calle fue detenido por detectives de la Brigada Investigadora de Robos (BIRO), como presunto autor por el delito de robo en lugar habitado, en una cafetería ubicada en avenida Alemania, Temuco, región de La Araucanía.Las especies recuperadas están avaluadas en casi medio millón de pesos, las cuales fueron sustraídas por el sujeto la madrugada del pasado domingo, según detalló el comisario, Leonardo Álvarez.“Los primeros antecedentes dicen relación con la participación de un sujeto que en horas de la noche, mientras el local se encontraba cerrado fracturó una puerta de vidrio por la cual hizo ingreso, y desde el interior sustrajo productos alimenticios, una bicicleta y dinero en efectivo“, afirmó.Del trabajo en el sitio del suceso, se obtuvo por parte de los oficiales declaraciones de testigos, además de que se efectuó el análisis de imágenes a cámaras de seguridad internas y externas al local, lo que permitió individualizar al responsable de este hecho delictual, dando con la identidad del hombre, quien mantiene antecedentes por delitos semejantes.Se comunicó las diligencias al fiscal de turno de la Fiscalía de Flagrancia y Primera Diligencias, quien intruyó que el detenido pasara a control de detención en el Juzgado de Garantía de Temuco.",
        "audio":"resources/audios/Audio.mp3",
        "video":"",
        "fecha":"2023-03-20"
    },
    {
        "ID" :"N03",
        "titulo": "Aguas Andinas crea servidor de Minecraft para concientizar sobre sequía en Chile: Revisa cómo jugarlo",
        "categoria":"nacional",
        "foto":"",
        "texto":"La empresa chilena de servicios sanitarios, Aguas Andinas, creó un servidor para Minecraft que recrea lugares icónicos de Santiago, para concientizar sobre la actual sequía y los efectos del cambio climático en la naturaleza. Se trata de un videojuego de “mundo abierto” que cuenta con más de 12 años de trayectoria y que cuenta con la distinción de ser el más vendido en toda la historia, con 238 millones de copias distribuidas.Además de ser medios de entretención, los videojuegos pueden servir de herramientas para poder llegar de mejor forma a niños y jóvenes, implementando, por ejemplo, servidores temáticos en algunos títulos populares.Es algo que la compañía chilena Aguas Andinas realizó con el videojuego Minecraft, bajo una campaña llamada “Ciudad Resiliente”, la cual busca concientizar sobre los problemas hídricos que afectan al mundo en la actualidad y, específicamente, a la región Metropolitana.                  El proyecto fue implementado en el videojuego de la empresa Mojang con el fin de involucrar y educar a las personas sobre la mega sequía, informando acerca de cuáles son las obras de infraestructura que han permitido enfrentar los efectos del cambio climático sin impactos en el suministro de agua potable.                Se trata de una problemática que afecta a varias regiones del país, como la capital, que lleva más de 14 años de extrema sequía, la más grave desde que se tiene registro.En el mencionado servidor de Minecraft de Aguas Andinas, los jugadores podrán realizar un viaje virtual en tren por distintas estaciones de la ciudad.Por ejemplo, se puede recorrer lugares como el embalse “El Yeso”, los megaestanques de Pirque, la planta de producción de agua potable Las Vizcachas, el edificio corporativo de Aguas Andinas y la Biofactoría, entre otras.                Todo en busca de educar sobre el trabajo que ha hecho la compañía, además de contar con mecanismos de Minecraft y memes escondidos en diferentes rincones del mapa.Sumergirte en el mundo de esta versión nacional del videojuego es bastante fácil. Primero debes obtenerlo, por ejemplo, desde el mismo Una vez que lo tengas, debes agregar el servidor de “Ciudad Resiliente”, escribiendo: “minecraft.aguasandinas.cl”, donde dice Dirección IP y listo.",
        "audio":"",
        "video":"../resources/videos/Video.mp4",
        "fecha":"2023-03-30"
    },
    {
        "ID" :"N04",
        "titulo": "Con un chileno en el podio: en México se bajó el telón a la serie Red Bull Cerro Abajo",
        "categoria":"deportes",
        "foto":"../resources/images/Deportes red bull.jpg",
        "texto":"La fiesta deportiva del descenso urbano, Red Bull Cerro Abajo terminó su recorrido por Latinoamérica este domingo luego de pasar por Valparaíso, Medellín y ahora en Guanajuato, una experiencia que tuvo a decenas de riders de todo el mundo bajando a toda velocidad en sus bicicletas en las pintorescas calles de cada uno de estos países. En la última parada en México, los competidores dieron el máximo de su rendimiento, pero nadie pudo igualar al colombiano Camilo Sánchez, quien logró un impresionante tiempo de 1:55.766 minutos, llevándose el primer lugar de la fecha. La carrera que constaba de 1.2 kilómetros de rampas, callejones y curvas cerradas; emocionó a miles de personas que llegaron a vivir la competencia que se realizaba por primera vez en este lugar.",
        "audio":"",
        "video":"",
        "fecha":"2023-03-27"
    },
    {
        "ID" :"N05",
        "titulo": "El campeón domina: Enzo Montecinos se alza con victoria en la primera fecha del karting nacional",
        "categoria":"deportes",
        "foto":"../resources/images/campeon karting-deportes.jpg",
        "texto":"El quíntuple campeón nacional de karting, Enzo Montecinos (21 años), se adjudicó la principal prueba de DD2 Seniors en la primera fecha del Campeonato Rotax Max Challenge 2023, llevada a cabo en el kartódromo de Melipilla en una intensa carrera a 13 giros en el circuito de 1.600 metros. El joven piloto largó desde la pole position y en ningún momento entregó la posición de privilegio, defendiendo con su talento y experiencia las arremetidas de su escolta Max Jaeger, quien llegó a solo 395 milésimas del vencedor. El crono de Montecinos fue de 15’44”048. Completó el podio Francisco Pérez, quien de lugares posteriores logró alcanzar con un buen rendimiento el tercer puesto.",
        "audio":"",
        "video":"",
        "fecha":"2023-03-26"
    },
    {
        "ID" :"N06",
        "titulo": "Selknam aplasta a American Raptors y debuta con victoria en la Súper Rugby Americas",
        "categoria":"deportes",
        "foto":"../resources/images/rugby-deportes.jpg",
        "texto":"Un sólido debut el equipo chileno Selknam en la Súper Rugby Americas, luego de aplastar a American Raptors de Estados Unidos en la primera jornada del certamen que agrupa a lo mejor de la disciplina a nivel continental. Los dirigidos por Nicolás Bruzzone no dejaron espacio a dudas y, con un 45-10, con punto bonus incluido, demostraron por qué fueron finalistas en la última edición de la Superliga Americana. Matías Garafulic y Joaquín Milesi fueron los más destacados en la franquicia nacional, aportando con varios trys cada uno que encaminaron la victoria chilena en el estadio Municipal de La Pintana. Ya en la mitad del partido la diferencia era 19-3, pero Selknam no bajó los brazos y siguió sumando anotaciones en el segundo tiempo. Milesi, elegido, MVP del partido, destacó que “esto es gracias a todo el equipo que tengo adelante. Es un buen inicio de temporada, pero falta mucho”. “Lo ideal es ganar el torneo y todo lo que se nos viene por delante. Es una temporada corta, pero muy dura”, agregó la figura de la franquicia chilena a las cámaras de ESPN. El próximo desafío del conjunto nacional en la SRA será ante Pampas XV de Argentina.",
        "audio":"",
        "video":"",
        "fecha":"2023-02-19"
    },
    {
        "ID" :"N07",
        "titulo": "Emprendedores de la Universidad de Chile son seleccionados por Mucker Lab",
        "categoria":"negocios",
        "foto":"../resources/images/premiacion emprendedores-negocio.jpg",
        "texto":"   Los emprendedores de EmbedX, que pertenecen al portafolio de OpenBeauchef, centro de innovación y emprendimiento de la Facultad de Ciencias Físicas y Matemáticas de la Universidad de Chile, fueron seleccionados para trabajar con la aceleradora estadounidense Mucker Lab, la segunda más importante de Estados Unidos. El 2011 en Los Ángeles, Estados Unidos, se creó Mucker Lab, con el objetivo de apoyar a los emprendedores tecnológicos. Esto, les permitiría a ellos mejorar sus productos y recaudar fondos para seguir adelante con sus iniciativas. Ha pasado poco más de una década desde su creación y hoy un equipo de chilenos, dedicado a la innovación se encuentra trabajando con ellos. Se trata de EmbedX, que permite a las tiendas de e-commerce y otras plataformas digitales, ofrecer seguros, garantías extendidas y otros servicios para aumentar sus márgenes y ampliar su propuesta de valor. Una noticia que los tiene orgullosos y agradecidos, porque les brindará nuevas oportunidades para su startup, surgida al alero de OpenBeauchef de la FCFM de la Universidad de Chile.",
        "audio":"",
        "video":"",
        "fecha":"2023-03-24"
    },
    {
        "ID" :"N08",
        "titulo": "Banco de Chile presenta nueva versión de La Feria Huertera, una vitrina para el emprendimiento sustentable",
        "categoria":"negocios",
        "foto":"../resources/images/feria-huertera-negocios.jpg",
        "texto":"Se espera la asistencia de más de 10 mil personas, quienes podrán participar de distintas actividades como charlas, talleres, conversatorios, yoga, cocina y gastronomía en vivo, y diversos panoramas para los niños. La entidad financiera desarrolló una serie de beneficios para que los emprendedores puedan impulsar sus negocios. El evento contará también con emprendedores que forman parte del Programa Pymes para Chile, de Banco de Chile, quienes podrán dar a conocer sus proyectos sustentables. Con el fin de apoyar e impulsar aquellos emprendimientos con impacto social y ambiental que están dejando huella en sus comunidades, Banco de Chile presenta La Feria Huertera, evento que busca reunir en un solo lugar a pequeños productores agroecológicos y emprendedores que están trabajando por mejorar y aportar al planeta.",
        "audio":"",
        "video":"",
        "fecha":"2023-03-20"
    },
    {
        "ID" :"N09",
        "titulo": "Abren convocatoria de concurso que premia a emprendimientos tecnológicos con $10 millones",
        "categoria":"negocios",
        "foto":"../resources/images/convocatoria-negocios.jpg",
        "texto":"El 6 de abril se lanzará una nueva edición de los Premios Actitud, concurso que busca entregar herramientas y dar visibilidad a innovaciones tecnológicas que entreguen soluciones a problemáticas sociales o ambientales. En esta, la iniciativa ganadora tendrá un premio de 10 millones de pesos y será la representante nacional en la final internacional los Global eAwards, que se celebra en Madrid durante la NTT DATA TALENT WEEK en octubre de 2023, donde podrá optar a un premio de 100.000 euros y un programa de aceleración.",
        "audio":"",
        "video":"",
        "fecha":"2023-03-29"
    },
    ]
    localStorage.setItem('Noticias', JSON.stringify(List_Noticias));
} else {
    var List_Noticias = JSON.parse(localStorage.getItem('Noticias'));
}


function Click_link(){
    localStorage.setItem('ID', JSON.stringify(""));
}




function Click_Card(Id_noticias,seccion_id){
    localStorage.setItem('ID', JSON.stringify(Id_noticias));
    localStorage.setItem('Sec', JSON.stringify(seccion_id));
    console.log(seccion_id);
  /*  Listar_Noticias(seccion_id);*/
    window.location.href = seccion_id + ".html"

    /*
    Listar_Noticias(JSON.parse(localStorage.getItem('Sec').toString));
    window.location.href = JSON.parse(localStorage.getItem('Sec').toString) + ".html";*/
    /*window.location.reload()*/

}


function Listar_Noticias(Categoria){
    Categorias=Categoria;
    var LocalStorage_Noticas = JSON.parse(localStorage.getItem('Noticias'));
    LocalStorage_Noticas.sort(function(a, b){
        var fechaA = new Date(a.fecha);
        var fechaB = new Date(b.fecha);
        return fechaB - fechaA;
      });
        if(Categorias=="principal"){
            const ObjFPrincipal1 = new Fila("F1","principal_1");
            var List_Pri = LocalStorage_Noticas.slice(0, 1);
            List_Pri.forEach((elemento)=>{
                const ObjTarjetaT2 = new Tarjeta("T1",elemento.ID, elemento.titulo,elemento.categoria,elemento.foto,elemento.texto,elemento.audio,elemento.video,elemento.fecha);
            });
            const ObjFPrincipal2 = new Fila("F2","principal_2");
            var List_Seg_Ter = LocalStorage_Noticas.slice(1, 3);
            List_Seg_Ter.forEach((elemento)=>{
                const ObjTarjetaT2 = new Tarjeta("T2",elemento.ID, elemento.titulo,elemento.categoria,elemento.foto,elemento.texto,elemento.audio,elemento.video,elemento.fecha);
            });
            const ObjFilaNacional = new Fila("F3","nacional");
            const ObjFilaNegocio = new Fila("F3","negocios");
            const ObjFilaDeporte = new Fila("F3","deportes");
            LocalStorage_Noticas.forEach((elemento)=>{
                const ObjTarjetaT3 = new Tarjeta("T3",elemento.ID, elemento.titulo,elemento.categoria,elemento.foto,elemento.texto,elemento.audio,elemento.video,elemento.fecha);
            });
        }
        if(Categorias=="nacional"){
            var ID = JSON.parse(localStorage.getItem('ID'));
            const ObjFPrincipal1 = new Fila("F1","principal_1");
            var List_Filtrado = LocalStorage_Noticas.filter(function(noticia) {
                return noticia.categoria === Categorias;
              });
            if(ID==""){
                var List_Pri = List_Filtrado.slice(0, 1);
                List_Pri.forEach((elemento)=>{
                    const ObjTarjetaT2 = new Tarjeta("T1",elemento.ID, elemento.titulo,elemento.categoria,elemento.foto,elemento.texto,elemento.audio,elemento.video,elemento.fecha);
                    ID=elemento.ID
                    console.log(ID);
                });
            }else[
                List_Filtrado.forEach((elemento)=>{
                    if(elemento.ID==ID){
                        const ObjTarjetaT2 = new Tarjeta("T1",elemento.ID, elemento.titulo,elemento.categoria,elemento.foto,elemento.texto,elemento.audio,elemento.video,elemento.fecha);
                        ID=elemento.ID
                    }})
            ];
            const ObjFilaNacional = new Fila("F3",Categorias);
            List_Filtrado.forEach((elemento)=>{
                if(elemento.ID!=ID){
                    const ObjTarjetaT2 = new Tarjeta("T3",elemento.ID, elemento.titulo,elemento.categoria,elemento.foto,elemento.texto,elemento.audio,elemento.video,elemento.fecha);
                };
            });
        }
        if(Categorias=="deportes"){
            var ID = JSON.parse(localStorage.getItem('ID'));
            const ObjFPrincipal1 = new Fila("F1","principal_1");
            var List_Filtrado = LocalStorage_Noticas.filter(function(noticia) {
                return noticia.categoria === Categorias;
              });
            if(ID==""){
                var List_Pri = List_Filtrado.slice(0, 1);
                List_Pri.forEach((elemento)=>{
                    const ObjTarjetaT2 = new Tarjeta("T1",elemento.ID, elemento.titulo,elemento.categoria,elemento.foto,elemento.texto,elemento.audio,elemento.video,elemento.fecha);
                    ID=elemento.ID
                    console.log(ID);
                });
            }else[
                List_Filtrado.forEach((elemento)=>{
                    if(elemento.ID==ID){
                        const ObjTarjetaT2 = new Tarjeta("T1",elemento.ID, elemento.titulo,elemento.categoria,elemento.foto,elemento.texto,elemento.audio,elemento.video,elemento.fecha);
                        ID=elemento.ID
                    }})
            ];
            const ObjFilaNacional = new Fila("F3",Categorias);
            List_Filtrado.forEach((elemento)=>{
                if(elemento.ID!=ID){
                    const ObjTarjetaT2 = new Tarjeta("T3",elemento.ID, elemento.titulo,elemento.categoria,elemento.foto,elemento.texto,elemento.audio,elemento.video,elemento.fecha);
                };
            });
        }
        if(Categorias=="negocios"){
            var ID = JSON.parse(localStorage.getItem('ID'));
            const ObjFPrincipal1 = new Fila("F1","principal_1");
            var List_Filtrado = LocalStorage_Noticas.filter(function(noticia) {
                return noticia.categoria === Categorias;
              });
            if(ID==""){
                var List_Pri = List_Filtrado.slice(0, 1);
                List_Pri.forEach((elemento)=>{
                    const ObjTarjetaT2 = new Tarjeta("T1",elemento.ID, elemento.titulo,elemento.categoria,elemento.foto,elemento.texto,elemento.audio,elemento.video,elemento.fecha);
                    ID=elemento.ID
                    console.log(ID);
                });
            }else[
                List_Filtrado.forEach((elemento)=>{
                    if(elemento.ID==ID){
                        const ObjTarjetaT2 = new Tarjeta("T1",elemento.ID, elemento.titulo,elemento.categoria,elemento.foto,elemento.texto,elemento.audio,elemento.video,elemento.fecha);
                        ID=elemento.ID
                    }})
            ];
            const ObjFilaNacional = new Fila("F3",Categorias);
            List_Filtrado.forEach((elemento)=>{
                if(elemento.ID!=ID){
                    const ObjTarjetaT2 = new Tarjeta("T3",elemento.ID, elemento.titulo,elemento.categoria,elemento.foto,elemento.texto,elemento.audio,elemento.video,elemento.fecha);
                };
            });
        }











    /*
    while (NoticiasObj.firstChild) {NoticiasObj.removeChild(NoticiasObj.firstChild)};
    LocalStorage_Noticas.forEach((elemento)=>{
        if(elemento.categoria==Categorias){
            contador++;
            let ArticulosObj = document.createElement("div");
            ArticulosObj.setAttribute("class", "art");
            let TituloObj = document.createElement("h2");
            let CategoriaObj = document.createElement("h4");
            ArticulosObj.appendChild(TituloObj);
            ArticulosObj.appendChild(CategoriaObj);
            if(elemento.foto!=""){
                let FotoObj = document.createElement("img");
                FotoObj.src=elemento.foto;
                ArticulosObj.appendChild(FotoObj);
            }
            if(elemento.video!=""){
                var VideoObj = document.createElement("video");
                VideoObj.setAttribute("src", elemento.video);
                VideoObj.setAttribute("controls", "");
                VideoObj.setAttribute("type", "video/mp4");
                ArticulosObj.appendChild(VideoObj);
            }        
            let TextoObj = document.createElement("p");
            TituloObj.innerHTML=elemento.titulo;
            CategoriaObj.innerHTML=elemento.categoria;
            TextoObj.innerHTML=elemento.texto;
            ArticulosObj.appendChild(TextoObj);
            if(elemento.audio!=""){
                var AudioObj = document.createElement("audio");
                AudioObj.setAttribute("src", elemento.audio);
                AudioObj.setAttribute("controls", "");
                ArticulosObj.appendChild(AudioObj);
            }  
            NoticiasObj.appendChild(ArticulosObj);
        }
    });
    let ContadorObj = document.getElementById('contar');
    let ContadorTxtaObj = document.createElement("h4");
    ContadorTxtaObj.innerHTML="Actualmente hay " + contador +" noticias";
    ContadorObj.appendChild(ContadorTxtaObj); 
    */
}





class Tarjeta {
    constructor(tipo, ID, titulo, categoria, foto, texto, audio, video, fecha) {
      this.tipo=tipo;
      this.ID = ID;
      this.titulo = titulo;
      this.categoria = categoria;
      this.foto = foto;
      this.texto = texto;
      this.audio = audio;
      this.video = video;
      this.fecha = fecha;
/*    }*/

    if(this.tipo=="T1"){

        const ObjContenedor = document.createElement("div");
        ObjContenedor.classList.add("col-lg-8", "col-md-12", "custom-col");

        // Crear el elemento div con clase card w-100 h-100
        const ObjTarjeta = document.createElement("div");
        ObjTarjeta.classList.add("card", "w-100", "h-100");
        if(Categorias=="principal"){ObjTarjeta.classList.add("cardhover")};

        // Crear el elemento div con clase card-body
        const ObjCuerpo = document.createElement("div");
        ObjCuerpo.classList.add("card-body");

        // Crear el elemento h1 con clase card-title y texto "Título de la noticia"
        const ObtTitulo = document.createElement("h1");
        ObtTitulo.classList.add("card-title", "mb-4");
        ObtTitulo.style.fontSize = "2.5rem";
        ObtTitulo.textContent = this.titulo;

        // Crear el elemento img con clase card-img-top y src "imagen-destacada.jpg"
        const ObjFoto = document.createElement("img");
        ObjFoto.classList.add("card-img-top", "w-800");
        ObjFoto.src = this.foto;
        ObjFoto.alt = "Imagen de la noticia";

        const ObjVideo = document.createElement("video");
        ObjVideo.setAttribute("class", "embed-responsive-item", "w-800");
        ObjVideo.setAttribute("controls", "");
        var source = document.createElement("source");
        source.setAttribute("src", this.video);
        source.setAttribute("type", "video/mp4");
        ObjVideo.appendChild(source);

        // Crear el elemento h4 con clase card-subtitle y texto "Categoría"
        const ObjCategoria = document.createElement("h3");
        ObjCategoria.classList.add("card-subtitle", "mb-2", "text-muted");
        /*ObjCategoria.style.fontSize = "1.5rem";*/

 /*       let Categ = this.categoria;
        this.categoria = this.categoria.charAt(0).toUpperCase() + this.categoria.slice(1) // "Algo"*/

        ObjCategoria.textContent = this.categoria;

        // Crear el elemento h4 con clase card-subtitle y texto "Fecha"
        const fechaNoticia = new Date(this.fecha);
        const ObjFecha = document.createElement("h2");
        ObjFecha.classList.add("card-subtitle", "mb-2", "text-muted");
        /*ObjFecha.style.fontSize = "1.5rem";*/
        ObjFecha.textContent = fechaNoticia.toDateString();;

        // Crear el elemento p con clase card-text y texto "Texto breve de la noticia importante."
        const ObjParrafo = document.createElement("p");
        ObjParrafo.classList.add("card-text");
        if(Categorias=="principal"){ObjParrafo.classList.add("text-truncate");}


        ObjParrafo.style.fontSize = "1.25rem";
        ObjParrafo.textContent = this.texto;

        // Añadir los elementos hijos al elemento principal
        ObjCuerpo.appendChild(ObtTitulo);
        ObjCuerpo.appendChild(ObjCategoria);
        if(this.foto!==""){
                ObjTarjeta.appendChild(ObjFoto);
            } else{
                ObjTarjeta.appendChild(ObjVideo);
            };
        ObjCuerpo.appendChild(ObjFecha);
        ObjCuerpo.appendChild(ObjParrafo);
        ObjTarjeta.appendChild(ObjCuerpo);
        ObjContenedor.appendChild(ObjTarjeta);

        // Añadir el elemento colDiv al elemento con id principal_2

        const NoticiasObj = document.getElementById("principal_1");
        NoticiasObj.appendChild(ObjContenedor);


    }



    if (this.tipo=="T2"){
        // Crear un elemento div con la clase col-lg-12 y col-md-6
        const ObjContenedor = document.createElement("div");
        ObjContenedor.classList.add("col-lg-12", "col-md-6", "custom-col");

        // Crear un elemento card
        const ObjTarjeta = document.createElement("div");
        ObjTarjeta.classList.add("card", "cardhover");

        // Crear un elemento h2 con la clase card-title y el texto "Título de la noticia"
        const ObjTitulo = document.createElement("h2");
        ObjTitulo.classList.add("card-title", "mb-4");
        ObjTitulo.style.fontSize = "1.75rem";
        ObjTitulo.textContent = this.titulo

        // Crear un elemento img con la clase card-img-top y el atributo src "imagen-destacada.jpg"
        const ObjFoto = document.createElement("img");
        ObjFoto.classList.add("card-img-top", "w-800");
        ObjFoto.src = this.foto;
        ObjFoto.alt = "Imagen de la Noticia";

        const ObjVideo = document.createElement("video");
        ObjVideo.setAttribute("class", "embed-responsive-item", "w-800");
        ObjVideo.setAttribute("controls", "");
        var source = document.createElement("source");
        source.setAttribute("src", this.video);
        source.setAttribute("type", "video/mp4");
        ObjVideo.appendChild(source);

        // Crear un elemento h5 con la clase card-subtitle y el texto "Categoría"
        const categoria = document.createElement("h4");
        categoria.classList.add("card-subtitle", "mb-2", "text-muted");
        /*categoria.style.fontSize = "1rem";*/
        categoria.textContent =  this.categoria;

        // Crear un elemento h5 con la clase card-subtitle y el texto "Fecha"
        const fechaNoticia = new Date(this.fecha);
        const ObjFecha = document.createElement("h5");
        ObjFecha.classList.add("card-subtitle", "mb-2", "text-muted");
        ObjFecha.style.fontSize = "1rem";
        ObjFecha.textContent = fechaNoticia.toDateString();
        // Agregar los elementos a la card y la card al div
        ObjTarjeta.appendChild(ObjTitulo);
        ObjTarjeta.appendChild(categoria);
            if(this.foto!==""){
                ObjTarjeta.appendChild(ObjFoto);
            } else{
                ObjTarjeta.appendChild(ObjVideo);
        };
        
        ObjTarjeta.appendChild(ObjFecha);
        ObjContenedor.appendChild(ObjTarjeta);

        // Agregar el div al documento
        const NoticiasObj = document.getElementById("principal_2");
        NoticiasObj.appendChild(ObjContenedor);
    }
  
    if (this.tipo=="T3"){
        const ObjContenedor = document.createElement("div");
        ObjContenedor.classList.add("col-md-4", "custom-col");
    
        const ObjTarjeta = document.createElement("div");
        ObjTarjeta.classList.add("card", "cardhover");
        ObjTarjeta.classList.add("h-100");
        var noticia_id=this.ID; var seccion_id=this.categoria
        console.log(seccion_id);
        ObjTarjeta.addEventListener("click", function() {Click_Card(noticia_id,seccion_id)});
    
        const ObjCuerpo = document.createElement("div");
        ObjCuerpo.classList.add("card-body");
    
        const ObjTitulo = document.createElement("h4");
        ObjTitulo.classList.add("card-title");
        /*ObjTitulo.classList.add("h-100");*/
        /*ObjTitulo.classList.add("text-truncate");*/

        ObjTitulo.textContent = this.titulo;
    
        const ObjFoto = document.createElement("img", "h-80");
        ObjFoto.classList.add("card-img-top", "img-fluid", "object-fit-cover");
        ObjFoto.src = this.foto;
        ObjFoto.alt = "Imagen de la Noticia";
    
        const fechaNoticia = new Date(this.fecha);
        const ObjFecha = document.createElement("h5");
        ObjFecha.classList.add("card-text");
        ObjFecha.textContent = fechaNoticia.toDateString();

        const ObjVideo = document.createElement("video");
        ObjVideo.setAttribute("class", "embed-responsive-item", );
        ObjVideo.setAttribute("controls", "");
        var source = document.createElement("source");
        source.setAttribute("src", this.video);
        source.setAttribute("type", "video/mp4");
        ObjVideo.appendChild(source);
    
        ObjCuerpo.appendChild(ObjTitulo);
        ObjTarjeta.appendChild(ObjTitulo);
            if(this.foto!==""){
                ObjTarjeta.appendChild(ObjFoto);
            } else{
                ObjTarjeta.appendChild(ObjVideo);
            };
        ObjCuerpo.appendChild(ObjFecha);
        ObjTarjeta.appendChild(ObjCuerpo);
        ObjContenedor.appendChild(ObjTarjeta);
          console.log(this.categoria)
            
        const NoticiasObj = document.getElementById(this.categoria);
        NoticiasObj.appendChild(ObjContenedor);
    }



    }
}


/*

class Fila {
    constructor(tipo, Seccion) {
        this.Seccion=Seccion;
        this.tipo=tipo;
        let Categ = this.categoria;
        this.categoria = this.categoria.charAt(0).toUpperCase() + this.categoria.slice(1) 
        if(this.tipo=="F1"){
            const ObjCuerpo = document.createElement("div");
            ObjCuerpo.classList.add("row", "align-items-stretch");
            ObjCuerpo.setAttribute("id", this.Seccion);
            const ColumnaObj = document.getElementById("Noticias");
            ColumnaObj.appendChild(ObjCuerpo);
        }
        if (this.tipo=="F2"){
            const ObjCuerpo = document.createElement("div");
            ObjCuerpo.classList.add("col-lg-4", "col-md-12");
            const FilaObj = document.createElement("div");
            FilaObj.classList.add("row");
            FilaObj.setAttribute("id", this.Seccion);
            ObjCuerpo.appendChild(FilaObj);
            const ColumnaObj = document.getElementById("principal_1");
            ColumnaObj.appendChild(ObjCuerpo);
        }
        if(this.tipo=="F3"){
            const ObjCuerpo = document.createElement("div");
            ObjCuerpo.classList.add("my-5","h-100")
            const ObjTitulo = document.createElement("h2");
            ObjTitulo.textContent = this.Seccion;
            const FilaObj = document.createElement("div");
            FilaObj.classList.add("row");
            FilaObj.setAttribute("id", this.Seccion);
            ObjCuerpo.appendChild(ObjTitulo);
            ObjCuerpo.appendChild(FilaObj);
            const ColumnaObj = document.getElementById("Noticias");
            ColumnaObj.appendChild(ObjCuerpo);
        };

    }

  }
*/
        class Fila {
            constructor(tipo, Seccion) {
                this.Seccion = Seccion;
                this.tipo = tipo;
                let Titulo = this.Seccion;
                Titulo = Titulo.charAt(0).toUpperCase() + Titulo.slice(1)      
                const ObjCuerpo = document.createElement("div");
                const ColumnaObj = document.getElementById(this.tipo == "F1" || this.tipo == "F3" ? "Noticias" : "principal_1");
                if (this.tipo == "F1") {
                    ObjCuerpo.classList.add("row", "align-items-stretch");
                    ObjCuerpo.setAttribute("id", this.Seccion);
                    ColumnaObj.appendChild(ObjCuerpo);
                } else if (this.tipo == "F2") {
                    ObjCuerpo.classList.add("col-lg-4", "col-md-12");
                    const FilaObj = document.createElement("div");
                    FilaObj.classList.add("row");
                    FilaObj.setAttribute("id", this.Seccion);
                    ObjCuerpo.appendChild(FilaObj);
                    ColumnaObj.appendChild(ObjCuerpo);
                } else if (this.tipo == "F3") {
                    ObjCuerpo.classList.add("my-5", "h-100")
                    const ObjTitulo = document.createElement("h2");
                    ObjTitulo.textContent = Titulo;
                    const FilaObj = document.createElement("div");
                    FilaObj.classList.add("row");
                    FilaObj.setAttribute("id", this.Seccion);
                    ObjCuerpo.appendChild(ObjTitulo);
                    ObjCuerpo.appendChild(FilaObj);
                    ColumnaObj.appendChild(ObjCuerpo);
                }
            }
        }










