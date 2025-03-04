// Função para mostrar pop-up
function mostrarPopUp(id) {
    var popup = document.getElementById(id);
    if (popup) {
        popup.style.display = "block";
    } else {
        console.error("Pop-up não encontrado: " + id);
    }
}

// Função para fechar pop-up
function fecharPopUp(id) {
    var popup = document.getElementById(id);
    if (popup) {
        popup.style.display = "none";
    } else {
        console.error("Pop-up não encontrado: " + id);
    }
}

// Fechar pop-up ao clicar fora da área do conteúdo
window.onclick = function (event) {
    if (event.target.classList.contains('popup')) {
        event.target.style.display = "none";
    }
}
