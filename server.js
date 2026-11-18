
const http = require("http");
const fs = require("fs");
const path = require("path");

const pasta = __dirname;
const porta = 3000;

const tipos = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".svg": "image/svg+xml"
};

const servidor = http.createServer((req, res) => {
    let caminho = decodeURIComponent(req.url.split("?")[0]);

    if (caminho === "/") {
        caminho = "/login.html";
    }

    const arquivo = path.join(pasta, caminho);

    if (!arquivo.startsWith(pasta + path.sep)) {
        res.writeHead(403);
        return res.end("Acesso negado");
    }

    fs.readFile(arquivo, (erro, conteudo) => {
        if (erro) {
            res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
            return res.end("Arquivo não encontrado.");
        }

        const extensao = path.extname(arquivo).toLowerCase();

        res.writeHead(200, {
            "Content-Type": tipos[extensao] || "application/octet-stream"
        });

        res.end(conteudo);
    });
});

servidor.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});
