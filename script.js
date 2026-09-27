function classificarIdade() {

    let idade = Number(document.getElementById("idade").value);

    let resultado = document.getElementById("resultado");

    if (document.getElementById("idade").value === "") {
        resultado.textContent = "Digite uma idade.";
        return;
    }

    if (idade < 0 || !Number.isInteger(idade)) {
        resultado.textContent = "Digite uma idade válida.";
        return;
    }

    if (idade <= 12) {
        resultado.textContent = "Classificação: Criança";
    } else if (idade <= 17) {
        resultado.textContent = "Classificação: Adolescente";
    } else if (idade <= 59) {
        resultado.textContent = "Classificação: Adulto";
    } else {
        resultado.textContent = "Classificação: Idoso";
    }
}