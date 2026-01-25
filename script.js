document.getElementById("formOcorrencia").addEventListener("submit", function (e) {
e.preventDefault();
const formData = new FormData(this);
const dados = Object.fromEntries(formData.entries());

// Captura direta para garantir campos marcados como readonly/disabled
dados.acusado = document.getElementById("acusado").value;
dados.numeroOcorrencia = document.getElementById("numOc").value;

localStorage.setItem("ocorrencia", JSON.stringify(dados));
window.location.href = "preview.html";
});