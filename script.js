
const slides = document.querySelectorAll(".slide");
const contador = document.getElementById("contador");
const anterior = document.getElementById("anterior");
const proximo = document.getElementById("proximo");
const pontos = document.getElementById("pontos");

const modal = document.getElementById("modal");
const modalArea = document.getElementById("modalArea");
const modalTitulo = document.getElementById("modalTitulo");
const fecharModal = document.getElementById("fecharModal");
const voltarModal = document.getElementById("voltarModal");

let slideAtual = 0;

function mostrarSlide(indice) {
    slideAtual = Math.max(0, Math.min(indice, slides.length - 1));

    slides.forEach((slide, i) => {
        slide.classList.toggle("ativo", i === slideAtual);
    });

    contador.textContent =
        String(slideAtual + 1).padStart(2, "0") +
        " / " +
        String(slides.length).padStart(2, "0");

    anterior.disabled = slideAtual === 0;
    proximo.disabled = slideAtual === slides.length - 1;

    document.querySelectorAll(".ponto").forEach((ponto, i) => {
        ponto.classList.toggle("ativo", i === slideAtual);
    });
}

slides.forEach((slide, i) => {
    const ponto = document.createElement("button");

    ponto.className = "ponto";
    ponto.setAttribute("aria-label", "Ir para o slide " + (i + 1));

    ponto.addEventListener("click", () => {
        mostrarSlide(i);
    });

    pontos.appendChild(ponto);
});

anterior.addEventListener("click", () => {
    mostrarSlide(slideAtual - 1);
});

proximo.addEventListener("click", () => {
    mostrarSlide(slideAtual + 1);
});

function abrirEixo(area, eixo) {
    modalArea.textContent = area.toUpperCase();
    modalTitulo.textContent = eixo;
    modal.classList.add("aberto");
}

function fecharJanela() {
    modal.classList.remove("aberto");
}

fecharModal.addEventListener("click", fecharJanela);
voltarModal.addEventListener("click", fecharJanela);

modal.addEventListener("click", (evento) => {
    if (evento.target === modal) {
        fecharJanela();
    }
});

document.addEventListener("keydown", (evento) => {
    if (modal.classList.contains("aberto")) {
        if (evento.key === "Escape") {
            fecharJanela();
        }
        return;
    }

    if (evento.key === "ArrowRight") {
        mostrarSlide(slideAtual + 1);
    }

    if (evento.key === "ArrowLeft") {
        mostrarSlide(slideAtual - 1);
    }
});

mostrarSlide(0);
