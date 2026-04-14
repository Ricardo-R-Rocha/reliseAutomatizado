document.getElementById("formOcorrencia").addEventListener("submit", function (e) {
e.preventDefault();
const formData = new FormData(this);
const dados = Object.fromEntries(formData.entries());

// Garante a captura dos campos com lógica especial
dados.acusado = document.getElementById("acusado").value;
dados.numeroOcorrencia = document.getElementById("numOc").value;

localStorage.setItem("ocorrencia", JSON.stringify(dados));
window.location.href = "preview.html";
});