function contactComponent(el){
    const contactContent = document.createElement("div")
    contactContent.innerHTML = `
    <div class="contenedor_contacto">
        <form action="submit" class="contenido-formulario">
            <h1 class="formulario-titulo">Escribime</h1>

            <div class="formulario-inputs">
                <div class="contenedor__nombre-email">
                    <label class="label">
                        Nombre
                        <input class="nombre" type="text" placeholder="Tu nombre">
                    </label>
                    <label class="label">
                        Email
                        <input class="email" type="text" placeholder="Tu@email.com">
                    </label>
                </div>
                <label class="mensaje">
                    Mensaje
                    <textarea id="textarea" type="text"></textarea>
                </label>
                <button type="submit" class="formulario-boton">
                    Enviar  
                    <i class="fa-regular fa-paper-plane"></i>
                </button>
            </div>

        </form>
    </div>`;
    el.appendChild(contactContent)

}

contactComponent()