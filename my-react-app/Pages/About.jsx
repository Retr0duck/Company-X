const About = () => {
    return (
        <div id="carouselExampleDark" class="carousel carousel-dark slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                    <img src="./src/assets/wqw.webp" class="d-block w-100" alt="SAS" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Nos preocupamos por ti</h5>
                        <p>En company X nos preocupamos por que tengas una buena experiencia</p>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src="./src/assets/ssw.avif" class="d-block w-100" alt="SAS___Carrusel" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Calidad de las herramientas </h5>
                        <p>En esta empresa procuramos que todo tipo de herramienta este en buen estado.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="./src/assets/wwe.avif" class="d-block w-100" alt="pop" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Lo mas importante eres tu</h5>
                        <p>Siempre lo mas importante sera la exxperiencia que tengan los clientes por el servicio.</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}
export default About;