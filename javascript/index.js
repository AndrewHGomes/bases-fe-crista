import versiculos from "../versiculos/versiculos.js";

const verTopico = document.querySelectorAll(".ver-topico");
const assuntos = document.querySelectorAll(".assunto");

verTopico.forEach((topico) => {
  topico.addEventListener("click", () => {
    assuntos.forEach((assunto) => {
      if (assunto.style.display === "none") {
        assunto.style.display = "block";
      } else {
        assunto.style.display = "none";
      }
    });
  });
});

const spans = document.querySelectorAll("span");

spans.forEach((span) => {
  span.addEventListener("click", () => {
    const livro = span.innerText.split(" ")[0];
    const verso = span.innerText.split(" ")[1];
    const capitulo = verso.split(":")[0];
    const versiculo = verso.split(":")[1];

    console.log(livro, capitulo, versiculo);

    versiculos.filter((v) => {
      if (
        v.livro === livro &&
        v.capitulo === Number(capitulo) &&
        v.versiculo === Number(versiculo)
      ) {
        alert(`${v.livro} ${v.capitulo}:${v.versiculo} - ${v.texto}`);
      }
    });
  });
});
