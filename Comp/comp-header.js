function headerComponent(el){

    const headerContent = document.createElement("div")
    headerContent.innerHTML = ` 
    <header class="header">
        <div class="logo">M
        </div>

        <button class="boton-abrir-ventana">
            <i class="fa-solid fa-bars"></i>
        </Button>

        <div class="contenedor-ventana">
            <div class="ventana">
                <button class="boton-cerrar-ventana">
                    <i class="fa-solid fa-xmark"></i>
                </button>
        
                <div class="ventana_links">
                    <a href="../index.html" class="link-home">Home</a>
                    <a href="../portfolio.html">Portfolio</a>
                    <a href="../services.html">Servicios</a>
                    <a href="../contact.html">Contacto</a>
                </div>
            </div>
        </div>
        
        <div class="contenedor-links">
            <a href="../portfolio.html">Portfolio</a>
            <a href="../services.html">Servicios</a>
            <a href="../contact.html">Contacto</a>
        </div>

    </header>`;
    el.appendChild(headerContent)

    const botonAbrirEl = document.querySelector(".boton-abrir-ventana")
    const botonCerrarEl = document.querySelector(".boton-cerrar-ventana")
    const contenedorVentana = document.querySelector(".contenedor-ventana")

    botonAbrirEl.addEventListener("click", ()=>{
        contenedorVentana.style.display = "block";
    });
    botonCerrarEl.addEventListener("click", ()=>{
        contenedorVentana.style.display = "none";
    });
}

headerComponent()