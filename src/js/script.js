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