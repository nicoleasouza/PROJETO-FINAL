// cadastro.js - Lógica de cadastro para o Oceano Vivo
// Salva o usuário no localStorage para ser usado por login.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.cadastro');
    const nomeInput = form.querySelector('input[type="text"]');
    const emailInput = form.querySelector('input[type="email"]');
    const telefoneInput = form.querySelector('input[type="tel"]');
    const senhaInputs = form.querySelectorAll('input[type="password"]');
    const senhaInput = senhaInputs[0];
    const confirmarSenhaInput = senhaInputs[1];
    const botao = form.querySelector('button[type="submit"]');

    const mensagemEl = document.createElement('p');
    mensagemEl.classList.add('cadastro-mensagem');
    mensagemEl.style.display = 'none';
    mensagemEl.style.marginBottom = '15px';
    mensagemEl.style.fontSize = '14px';
    mensagemEl.style.textAlign = 'center';
    form.insertBefore(mensagemEl, botao);

    function mostrarMensagem(texto, tipo = 'erro') {
        mensagemEl.textContent = texto;
        mensagemEl.style.display = 'block';
        mensagemEl.style.color = tipo === 'erro' ? '#e63946' : '#2a9d8f';
    }

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function buscarUsuarios() {
        const dados = localStorage.getItem('oceanoVivo_usuarios');
        return dados ? JSON.parse(dados) : [];
    }

    function salvarUsuarios(usuarios) {
        localStorage.setItem('oceanoVivo_usuarios', JSON.stringify(usuarios));
    }

    form.addEventListener('submit', (evento) => {
        evento.preventDefault();
        mensagemEl.style.display = 'none';

        const nome = nomeInput.value.trim();
        const email = emailInput.value.trim();
        const telefone = telefoneInput.value.trim();
        const senha = senhaInput.value;
        const confirmarSenha = confirmarSenhaInput.value;

        if (!nome || !email || !telefone || !senha || !confirmarSenha) {
            mostrarMensagem('Preencha todos os campos.');
            return;
        }

        if (!validarEmail(email)) {
            mostrarMensagem('Digite um email válido.');
            return;
        }

        if (senha.length < 6) {
            mostrarMensagem('A senha deve ter pelo menos 6 caracteres.');
            return;
        }

        if (senha !== confirmarSenha) {
            mostrarMensagem('As senhas não coincidem.');
            return;
        }

        const usuarios = buscarUsuarios();
        const jaExiste = usuarios.some(
            (u) => u.email.toLowerCase() === email.toLowerCase()
        );

        if (jaExiste) {
            mostrarMensagem('Já existe uma conta cadastrada com este email.');
            return;
        }

        botao.disabled = true;
        botao.textContent = 'Cadastrando...';

        setTimeout(() => {
            usuarios.push({ nome, email, telefone, senha });
            salvarUsuarios(usuarios);

            mostrarMensagem('Conta criada com sucesso! Redirecionando para o login...', 'sucesso');

            setTimeout(() => {
                window.location.href = 'login.html';
            }, 1200);
        }, 500);
    });
});
