function validarLogin() {

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (email === "" || senha === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        
        window.location.href = "index2.html"; //muda pro nome da página inicial
    }
}