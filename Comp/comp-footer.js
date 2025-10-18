function footerComponent(el){

    const footerContent = document.createElement("div")
    footerContent.innerHTML = `
    <div class="contenedor">
        <div class="logo">M</div>
        
        <div class="contenedor-link-redes">  
            <div class="links">
                <a href="../index.html" class="link-home">
                    <i class="fa-solid fa-house"></i>
                    <p>Home</p>
                </a>
                <a href="../portfolio.html" class="link-portfolio">
                    <i class="fa-solid fa-user"></i>
                    <p>Portfolio</p>
                </a>
                <a href="../contact.html" class="link-contacto">
                    <i class="fa-solid fa-phone"></i>
                    <p>Contacto</p>
                </a>
            </div>

            <div class="redes">
                <a href="" class="redes-linkedin">
                    <i class="fa-brands fa-linkedin"></i>   
                </a>
                <a href="" class="redes-github">
                    <i class="fa-brands fa-github"></i>  
                </a>
                <a href="" class="redes-instagram">
                    <i class="fa-brands fa-instagram"></i>
                </a>
            </div>
        </div>

        <p class="firma">©2022 - https://apx.school</p>
    </div>`;
    el.appendChild(footerContent)
}

footerComponent()