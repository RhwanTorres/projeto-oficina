function login() {
  const matricula = document.getElementById("matricula").value.trim();
  const senha = document.getElementById("senha").value.trim();

  if (matricula === "" || senha === "") {
    alert("Preencha matrícula e senha para entrar!");
    return;
  }

  alert("Login realizado com sucesso!");
  window.location.href = "dashboard.html";
}

function irRecuperacao() {
  window.location.href = "recuperacao.html";
}

function irClientes() {
  window.location.href = "clientes.html";
}

function irOrdens() {
  window.location.href = "ordem.html";
}

function sair() {
  window.location.href = "index.html";
}

function irDashboard() {
  window.location.href = "dashboard.html";
}

function toggleMenu() {
  const menu = document.getElementById("dropdown");

  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

function irPerfil() {
  window.location.href = "perfil.html";
}

function cadastrarCliente() {
  const nome = document.getElementById("nomeCliente").value;
  const placa = document.getElementById("placaCliente").value;
  const modelo = document.getElementById("modeloCliente").value;
  const telefone = document.getElementById("telefoneCliente").value;

  if (nome === "" || placa === "" || modelo === "" || telefone === "") {
    alert("Preencha todos os campos!");
    return;
  }

  alert("Cliente cadastrado com sucesso!");
  window.location.href = "ordem.html";
}

function irCadastroCliente() {
  window.location.href = "cadastro-cliente.html";
}

function irListaClientes() {
  window.location.href = "clientes-lista.html";
}

function irAgendamento() {
  window.location.href = "agendamento.html";
}

function cadastrarCliente() {
  const nome = document.getElementById("nomeCliente").value;
  const placa = document.getElementById("placaCliente").value;
  const modelo = document.getElementById("modeloCliente").value;
  const telefone = document.getElementById("telefoneCliente").value;

  if (nome === "" || placa === "" || modelo === "" || telefone === "") {
    alert("Preencha todos os campos!");
    return;
  }

  alert("Cliente cadastrado com sucesso!");
}

function cadastrarAgendamento() {
  const cliente = document.getElementById("clienteAgendamento").value;
  const veiculo = document.getElementById("veiculoAgendamento").value;
  const data = document.getElementById("dataAgendamento").value;
  const hora = document.getElementById("horaAgendamento").value;
  const servico = document.getElementById("servicoAgendamento").value;

  if (cliente === "" || veiculo === "" || data === "" || hora === "" || servico === "") {
    alert("Preencha todos os campos!");
    return;
  }

  alert("Agendamento realizado com sucesso!");
}

function irCadastroOrdem() {
  window.location.href = "cadastro-ordem.html";
}

function irListaOrdens() {
  window.location.href = "lista-ordens.html";
}

function irDetalhes() {
  window.location.href = "detalhes.html";
}

function irOrdens() {
  window.location.href = "ordem.html";
}

function cadastrarOrdem() {
  const cliente = document.getElementById("clienteOrdem").value;
  const veiculo = document.getElementById("veiculoOrdem").value;
  const servico = document.getElementById("servicoOrdem").value;
  const status = document.getElementById("statusOrdem").value;
  const descricao = document.getElementById("descricaoOrdem").value;

  if (cliente === "" || veiculo === "" || servico === "" || status === "" || descricao === "") {
    alert("Preencha todos os campos!");
    return;
  }

  alert("Ordem de serviço cadastrada com sucesso!");
}

function abrirDetalhesOrdem(id) {
  window.location.href = `detalhes.html?id=${id}`;
}

function recuperarSenha() {
  const email = document.getElementById("emailRecuperacao").value;

  if (email === "") {
    alert("Digite seu e-mail!");
    return;
  }

  alert("Instruções de recuperação enviadas para o e-mail informado!");
}

function voltarLogin() {
  window.location.href = "index.html";
}