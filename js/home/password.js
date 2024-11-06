function validarSenha() {
    const senha = document.getElementById("password").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem!");
        return false; // Impede o envio do formulário
    }
    return true; // Permite o envio do formulário
}