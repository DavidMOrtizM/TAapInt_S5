export class Tarjeta {
    constructor(ID, titulo,categoria,foto,texto,audio,video,fecha) {
      this.ID = ID;
      this.titulo = titulo;
      this.categoria = categoria;
      this.foto = foto;
      this.texto = texto;
      this.titulo = titulo;
      this.audio = audio;
      this.video = video;
      this.fecha = fecha;
    }
  
    CrearT3() {
        const ObjContenedor = document.createElement("div");
        ObjContenedor.classList.add("col-md-4");
        
        const ObjTarjeta = document.createElement("div");
        ObjTarjeta.classList.add("card");
        
        const ObjCuerpo = document.createElement("div");
        ObjCuerpo.classList.add("card-body");
        
        const ObjTitulo = document.createElement("h5");
        ObjTitulo.classList.add("card-title");
        ObjTitulo.textContent = this.titulo;
        
        const ObjFoto = document.createElement("img");
        ObjFoto.classList.add("card-img-top", "img-fluid");
        ObjFoto.src = this.foto;
        ObjFoto.alt = "Imagen de la Noticia";

        const [day, month, year] = fecha.split("-");
        const date = new Date(year, month - 1, day);
        const ObjFecha = document.createElement("p");
        ObjFecha.classList.add("card-text");
        ObjFecha.textContent = this.date;

        ObjCuerpo.appendChild(ObjTitulo);
        ObjCuerpo.appendChild(ObjFoto);
        ObjCuerpo.appendChild(ObjFecha);
        ObjTarjeta.appendChild(ObjCuerpo);
        ObjContenedor.appendChild(ObjTarjeta);
        return ObjContenedor;
    }
  

}

