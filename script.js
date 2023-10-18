document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("loginBtn");

    loginBtn.addEventListener("click", function () {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Aqui você pode adicionar lógica de autenticação
        if (username === "seu_usuario" && password === "sua_senha") {
            alert("Login bem-sucedido!");
        } else {
            alert("Usuário ou senha incorretos. Tente novamente.");
        }
    });
});
