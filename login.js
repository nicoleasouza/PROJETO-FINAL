const form = document.querySelector(".login");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.querySelector('input[type="email"]').value.trim();
    const senha = document.querySelector('input[type="password"]').value.trim();

    if (email === "" || senha === "") {
        alert("Preencha todos os campos!");
        return;
    }

    // Usuário de teste
    const emailCorreto = "admin@oceanovivo.com";
    const senhaCorreta = "123456";

    if (email === emailCorreto && senha === senhaCorreta) {
        alert("Login realizado com sucesso!");

        // Redireciona para a página principal
        window.location.href = "home.html";
    } else {
        alert("Email ou senha incorretos!");
    }

});
