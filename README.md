# 🌊 Oceano Vivo

Site institucional criado para conscientizar sobre a **ODS 14 – Vida na Água**, um dos 17 Objetivos de Desenvolvimento Sustentável da ONU. O projeto reúne informações sobre preservação dos oceanos, dados ambientais em tempo real e um sistema de login/cadastro para engajar visitantes na causa.

## 🎯 Sobre o projeto

O **Oceano Vivo** foi desenvolvido para:

- Conscientizar sobre a importância da preservação dos oceanos;
- Divulgar os objetivos da ODS 14 e como cada pessoa pode contribuir;
- Exibir indicadores ambientais reais, consumidos diretamente da API da ONU;
- Oferecer uma área de conta (login/cadastro) para visitantes acompanharem o projeto.

## 📄 Páginas

| Página | Arquivo | Descrição |
|---|---|---|
| Home | `home.html` | Página inicial com banner, objetivos do projeto e números sobre os oceanos |
| Sobre Nós | `sobre-nos.html` | Missão do projeto, objetivos e curiosidades sobre a ODS 14 |
| Conheça o Projeto | `conheça.html` | Detalhes da missão, importância dos oceanos e dicas de como ajudar |
| Contato | `contato.html` | Formulário de contato e informações da equipe |
| Login | `login.html` | Autenticação de usuários já cadastrados |
| Cadastro | `cadastro.html` | Criação de nova conta de usuário |
| Impacto Ambiental | `impacto-ambiental.html` | Painel com indicadores ambientais em tempo real, conectado à API da ONU |

## 🚀 Funcionalidades

- **Login e Cadastro:** validação de formulário em JavaScript puro, com dados de usuários salvos em `localStorage`.
- **Painel de Impacto Ambiental:** consome a [UN SDG API](https://unstats.un.org/SDGAPI/swagger/) para exibir, em tempo real:
  - Visão geral do Objetivo 14 – Vida na Água;
  - Indicador 14.1.1 (poluição e eutrofização marinha), sob responsabilidade da **UNEP**;
  - Indicador 14.4.1 (estoques pesqueiros sustentáveis), sob responsabilidade da **FAO Fisheries**.
- **Design responsivo:** todas as páginas se adaptam a telas menores (menu, cards e formulários reorganizados).
- **Chat de atendimento:** integração com o widget **BlipChat** em todas as páginas.

## 🛠️ Tecnologias utilizadas

- **HTML5** — estrutura semântica das páginas
- **CSS3** — estilização, gradientes, grid e flexbox, responsividade
- **JavaScript (Vanilla)** — validação de formulários, consumo de API e `localStorage`
- **[UN SDG API](https://unstats.un.org/SDGAPI/swagger/)** — dados oficiais da ONU sobre a ODS 14
- **BlipChat** — widget de atendimento via chat

## 📁 Estrutura de pastas

```
oceano-vivo/
├── home.html
├── home.css
├── sobre-nos.html
├── sobre-nos.css
├── conheça.html
├── conheça.css
├── contato.html
├── contato.css
├── login.html
├── login.css
├── login.js
├── cadastro.html
├── cadastro.css
├── cadastro.js
├── impacto-ambiental.html
├── impacto-ambiental.css
├── impacto-ambiental.js
├── js/
│   └── script.js
```
## ▶️ Como executar o projeto

Este é um site estático, sem necessidade de build ou instalação de dependências.

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/oceano-vivo.git
   ```
2. Entre na pasta do projeto:
   ```bash
   cd oceano-vivo
   ```
3. Abra o arquivo `home.html` diretamente no navegador, ou utilize uma extensão como o **Live Server** (VS Code) para melhor experiência de desenvolvimento.

## 🔌 Sobre a API utilizada

A página **Impacto Ambiental** se conecta à API pública da ONU para Objetivos de Desenvolvimento Sustentável:

```
https://unstats.un.org/SDGAPI/v1/sdg/
```

Não é necessária chave de API. As requisições buscam:
- `Goal/List` — lista de todos os Objetivos, filtrando o Objetivo 14;
- `Indicator/List` — lista de indicadores, filtrando os códigos `14.1.1` e `14.4.1`.

## 👥 Autoria

Projeto desenvolvido com fins educacionais, em apoio à **ODS 14 — Vida na Água** da Agenda 2030 da ONU.

## 📝 Licença

Este projeto pode ser usado livremente para fins de estudo e conscientização ambiental.
