function logar() {
    const login = document.getElementById("login").value.trim();
    const senha = document.getElementById("senha").value;

    if (
        (login === "admin@senai" && senha === "123") ||
        (login === "PROFESSOR" && senha !== "123")
    ) {
        alert("Login realizado com sucesso!");
        window.location.href = "indexx.html";
    } else {
        alert("Usuário ou senha inválidos!");
    }
}

function cancelar() {
    document.getElementById("login").value = "";
    document.getElementById("senha").value = "";
}