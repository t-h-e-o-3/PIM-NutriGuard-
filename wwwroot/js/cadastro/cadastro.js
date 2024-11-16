function validarCadastro() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    if (email === "" || senha === "" || confirmarSenha === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (senha !== confirmarSenha) {
        alert("As senhas precisam ser iguais.");
        return;
    }

    window.location.href = "index2.html"; // /muda pro nome da página inicial
}