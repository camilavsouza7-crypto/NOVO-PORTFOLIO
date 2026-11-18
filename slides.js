
const portfolioSlides = document.querySelector(".portfolio-slides");

if (portfolioSlides) {
    const slides = Array.from(
        portfolioSlides.querySelectorAll(".slide")
    );

    const dots = Array.from(
        portfolioSlides.querySelectorAll(".slide-dot")
    );

    const previousButton = portfolioSlides.querySelector("#slidePrev");
    const nextButton = portfolioSlides.querySelector("#slideNext");
    const count = portfolioSlides.querySelector("#slideCount");

    let currentSlide = 0;

    function showSlide(index) {
        currentSlide = Math.max(
            0,
            Math.min(index, slides.length - 1)
        );

        slides.forEach((slide, slideIndex) => {
            const isActive = slideIndex === currentSlide;

            slide.classList.toggle("active", isActive);
            slide.setAttribute("aria-hidden", String(!isActive));
        });

        dots.forEach((dot, dotIndex) => {
            const isActive = dotIndex === currentSlide;

            dot.classList.toggle("active", isActive);
            dot.setAttribute(
                "aria-current",
                isActive ? "step" : "false"
            );
        });

        previousButton.disabled = currentSlide === 0;
        nextButton.disabled = currentSlide === slides.length - 1;

        count.textContent =
            `${String(currentSlide + 1).padStart(2, "0")} / ` +
            `${String(slides.length).padStart(2, "0")}`;
    }

    previousButton.addEventListener("click", () => {
        showSlide(currentSlide - 1);
    });

    nextButton.addEventListener("click", () => {
        showSlide(currentSlide + 1);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showSlide(index);
        });
    });

    document.addEventListener("keydown", event => {
        if (event.key === "ArrowRight") {
            showSlide(currentSlide + 1);
        }

        if (event.key === "ArrowLeft") {
            showSlide(currentSlide - 1);
        }
    });

    showSlide(0);


const visualizador = document.getElementById("visualizador");
const imagemAmpliada = document.getElementById("imagemAmpliada");
const fecharVisualizador = document.getElementById("fecharVisualizador");

document.getElementById("conteudo").addEventListener("click", (evento) => {

    const imagem = evento.target.closest(".foto img");

    if (imagem) {
        imagemAmpliada.src = imagem.src;
        visualizador.classList.add("ativo");
        document.body.style.overflow = "hidden";
    }

});

function fecharImagem() {
    visualizador.classList.remove("ativo");
    imagemAmpliada.src = "";
    document.body.style.overflow = "";
}

fecharVisualizador.addEventListener("click", fecharImagem);

visualizador.addEventListener("click", (evento) => {
    if (evento.target === visualizador) {
        fecharImagem();
    }
});

document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") {
        fecharImagem();
    }
});

}

