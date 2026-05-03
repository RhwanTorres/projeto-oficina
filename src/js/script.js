function login() {
  alert("Login realizado!");
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