// LOGIN
function login() {
  const matricula = document.getElementById("matricula").value.trim();
  const senha = document.getElementById("senha").value.trim();

  if (matricula === "" || senha === "") {
    alert("Preencha matrícula e senha para entrar!");
    return;
  }

  localStorage.setItem("usuarioLogado", matricula);
  window.location.href = "dashboard.html";
}

function sair() {
  localStorage.removeItem("usuarioLogado");
  window.location.href = "index.html";
}

// NAVEGAÇÃO
function irDashboard() { window.location.href = "dashboard.html"; }
function irClientes() { window.location.href = "clientes.html"; }
function irCadastroCliente() { window.location.href = "cadastro-cliente.html"; }
function irListaClientes() { window.location.href = "clientes-lista.html"; }
function irAgendamento() { window.location.href = "agendamento.html"; }
function irOrdens() { window.location.href = "ordem.html"; }
function irCadastroOrdem() { window.location.href = "cadastro-ordem.html"; }
function irListaOrdens() { window.location.href = "lista-ordens.html"; }
function irPerfil() { window.location.href = "perfil.html"; }
function irRecuperacao() { window.location.href = "recuperacao.html"; }
function voltarLogin() { window.location.href = "index.html"; }

// MENU
function toggleMenu() {
  const menu = document.getElementById("dropdown");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// CLIENTES
function cadastrarCliente() {
  const nome = document.getElementById("nomeCliente").value.trim();
  const placa = document.getElementById("placaCliente").value.trim();
  const modelo = document.getElementById("modeloCliente").value.trim();
  const telefone = document.getElementById("telefoneCliente").value.trim();

  if (!nome || !placa || !modelo || !telefone) {
    alert("Preencha todos os campos!");
    return;
  }

  const clientes = JSON.parse(localStorage.getItem("clientes")) || [];

  clientes.push({
    id: Date.now(),
    nome,
    placa,
    modelo,
    telefone,
    status: "Ativo"
  });

  localStorage.setItem("clientes", JSON.stringify(clientes));

  alert("Cliente cadastrado com sucesso!");
  window.location.href = "clientes-lista.html";
}

function carregarClientes() {
  const tabela = document.getElementById("corpoTabelaClientes");
  if (!tabela) return;

  const clientes = JSON.parse(localStorage.getItem("clientes")) || [];

  tabela.innerHTML = "";

  clientes.forEach(cliente => {
    tabela.innerHTML += `
      <tr>
        <td>${cliente.nome}</td>
        <td>${cliente.placa}</td>
        <td>${cliente.modelo}</td>
        <td>${cliente.telefone}</td>
        <td><span class="status-ativo">${cliente.status}</span></td>
      </tr>
    `;
  });
}

// AGENDAMENTO
function cadastrarAgendamento() {
  const cliente = document.getElementById("clienteAgendamento").value.trim();
  const veiculo = document.getElementById("veiculoAgendamento").value.trim();
  const data = document.getElementById("dataAgendamento").value;
  const hora = document.getElementById("horaAgendamento").value;
  const servico = document.getElementById("servicoAgendamento").value.trim();

  if (!cliente || !veiculo || !data || !hora || !servico) {
    alert("Preencha todos os campos!");
    return;
  }

  const agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];

  agendamentos.push({
    id: Date.now(),
    cliente,
    veiculo,
    data,
    hora,
    servico
  });

  localStorage.setItem("agendamentos", JSON.stringify(agendamentos));

  alert("Agendamento realizado com sucesso!");
}

// ORDENS
function cadastrarOrdem() {
  const cliente = document.getElementById("clienteOrdem").value.trim();
  const veiculo = document.getElementById("veiculoOrdem").value.trim();
  const servico = document.getElementById("servicoOrdem").value.trim();
  const status = document.getElementById("statusOrdem").value;
  const descricao = document.getElementById("descricaoOrdem").value.trim();

  if (!cliente || !veiculo || !servico || !status || !descricao) {
    alert("Preencha todos os campos!");
    return;
  }

  const ordens = JSON.parse(localStorage.getItem("ordens")) || [];

  ordens.push({
    id: Date.now(),
    cliente,
    veiculo,
    servico,
    status,
    descricao
  });

  localStorage.setItem("ordens", JSON.stringify(ordens));

  alert("Ordem cadastrada com sucesso!");
  window.location.href = "lista-ordens.html";
}

function carregarOrdens() {
  const tabela = document.getElementById("corpoTabelaOrdens");
  if (!tabela) return;

  const ordens = JSON.parse(localStorage.getItem("ordens")) || [];

  tabela.innerHTML = "";

  ordens.forEach(ordem => {
    tabela.innerHTML += `
      <tr onclick="abrirDetalhesOrdem(${ordem.id})">
        <td>${ordem.cliente}</td>
        <td>${ordem.veiculo}</td>
        <td>${ordem.servico}</td>
        <td><span class="status-ativo">${ordem.status}</span></td>
      </tr>
    `;
  });
}

function abrirDetalhesOrdem(id) {
  window.location.href = `detalhes.html?id=${id}`;
}

function carregarDetalhesOrdem() {
  const area = document.getElementById("areaDetalhesOrdem");
  if (!area) return;

  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));

  const ordens = JSON.parse(localStorage.getItem("ordens")) || [];
  const ordem = ordens.find(item => item.id === id);

  if (!ordem) {
    area.innerHTML = "<p>Ordem não encontrada.</p>";
    return;
  }

  area.innerHTML = `
    <div class="detalhes-titulo">
      <div>
        <h3>${ordem.veiculo}</h3>
        <p>Ordem de Serviço #${ordem.id}</p>
      </div>
      <span class="status-ativo">${ordem.status}</span>
    </div>

    <div class="detalhes-grid-info">
      <div><strong>Cliente</strong><span>${ordem.cliente}</span></div>
      <div><strong>Veículo</strong><span>${ordem.veiculo}</span></div>
      <div><strong>Serviço</strong><span>${ordem.servico}</span></div>
      <div><strong>Status</strong><span>${ordem.status}</span></div>
    </div>

    <div class="servicos-card">
      <h3>Descrição do problema</h3>
      <p>${ordem.descricao}</p>
    </div>

    <button class="btn-principal" onclick="irListaOrdens()">Voltar para lista</button>
  `;
}

// RECUPERAÇÃO
function recuperarSenha() {
  const email = document.getElementById("emailRecuperacao").value.trim();

  if (email === "") {
    alert("Digite seu e-mail!");
    return;
  }

  alert("Instruções de recuperação enviadas!");
}

// CARREGAMENTO AUTOMÁTICO
document.addEventListener("DOMContentLoaded", () => {
  carregarClientes();
  carregarOrdens();
  carregarDetalhesOrdem();
});