// impacto-ambiental.js
// Conexões com a UN SDG API para três indicadores relacionados ao ODS 14:
//  1) Visão geral do Objetivo 14 (Vida na Água)
//  2) UNEP - indicador 14.1.1 (agência responsável / "custodian agency": UNEP)
//  3) FAO Fisheries - indicador 14.4.1 (agência responsável: FAO)
//
// Todos os três usam o mesmo endpoint público da ONU, sem necessidade de chave:
// https://unstats.un.org/SDGAPI/v1/sdg/

const SDG_BASE = 'https://unstats.un.org/SDGAPI/v1/sdg/';

/* ==========================================================
   Função utilitária: busca um indicador específico na lista
   completa de indicadores da SDG API.
========================================================== */

async function buscarIndicador(codigo) {
    const resposta = await fetch(`${SDG_BASE}Indicator/List`);

    if (!resposta.ok) throw new Error('Erro HTTP ' + resposta.status);

    const dados = await resposta.json();

    // A API pode retornar o campo de código como "code" ou "indicator"
    const encontrado = dados.find(
        (item) => item.code === codigo || item.indicator === codigo
    );

    if (!encontrado) {
        throw new Error(`Indicador ${codigo} não encontrado na resposta da API.`);
    }

    return encontrado;
}

/* ==========================================================
   1) ODS 14 - Vida na Água (visão geral do objetivo)
========================================================== */

async function carregarODS14() {
    const resultado = document.getElementById('resultado-ods14');

    try {
        const resposta = await fetch(`${SDG_BASE}Goal/List?includechildren=true`);

        if (!resposta.ok) throw new Error('Erro HTTP ' + resposta.status);

        const dados = await resposta.json();
        const ods14 = dados.find((item) => item.code === '14');

        if (!ods14) throw new Error('Objetivo 14 não encontrado na resposta.');

        resultado.innerHTML = `
            <p class="sucesso">Conectado à API da ONU.</p>
            <h3>${ods14.title}</h3>
            <p><strong>Código:</strong> ${ods14.code}</p>
            <p>${ods14.description || 'Objetivo relacionado à Vida na Água.'}</p>
        `;
    } catch (erro) {
        resultado.innerHTML = `<p class="erro">Erro ao carregar dados da ODS 14.</p>`;
        console.log(erro);
    }
}

/* ==========================================================
   2) UNEP - Indicador 14.1.1
   (Índice de eutrofização costeira e densidade de detritos
   plásticos flutuantes — a UNEP é a agência responsável por
   este indicador dentro do ODS 14)
========================================================== */

async function carregarUNEP() {
    const resultado = document.getElementById('resultado-unep');

    try {
        const indicador = await buscarIndicador('14.1.1');

        resultado.innerHTML = `
            <p class="sucesso">Conectado à API da ONU (indicador sob responsabilidade da UNEP).</p>
            <h3>Indicador ${indicador.code || indicador.indicator}</h3>
            <p>${indicador.description}</p>
            <p><strong>Tier:</strong> ${indicador.tier || 'não informado'}</p>
        `;
    } catch (erro) {
        resultado.innerHTML = `<p class="erro">Erro ao carregar dados da UNEP: ${erro.message}</p>`;
        console.log(erro);
    }
}

/* ==========================================================
   3) FAO Fisheries - Indicador 14.4.1
   (Proporção de estoques pesqueiros em níveis biologicamente
   sustentáveis — a FAO é a agência responsável por este
   indicador dentro do ODS 14)
========================================================== */

async function carregarFAO() {
    const resultado = document.getElementById('resultado-fao');

    try {
        const indicador = await buscarIndicador('14.4.1');

        resultado.innerHTML = `
            <p class="sucesso">Conectado à API da ONU (indicador sob responsabilidade da FAO Fisheries).</p>
            <h3>Indicador ${indicador.code || indicador.indicator}</h3>
            <p>${indicador.description}</p>
            <p><strong>Tier:</strong> ${indicador.tier || 'não informado'}</p>
        `;
    } catch (erro) {
        resultado.innerHTML = `<p class="erro">Erro ao carregar dados da FAO Fisheries: ${erro.message}</p>`;
        console.log(erro);
    }
}

/* ========================================================== */

document.addEventListener('DOMContentLoaded', () => {
    carregarODS14();
    carregarUNEP();
    carregarFAO();
});