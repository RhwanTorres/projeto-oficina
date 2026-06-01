// =========================
// LOGIN
// =========================

function login() {
  const matricula = document.getElementById("matricula").value.trim();
  const senha = document.getElementById("senha").value.trim();

  const usuarios = [
    {
      matricula: "2026001",
      senha: "123456",
      nome: "Rhwan Torres",
      email: "rhwan@email.com",
      perfil: "Administrador"
    },
    {
      matricula: "2026002",
      senha: "654321",
      nome: "Usuário Teste",
      email: "usuario@email.com",
      perfil: "Atendente"
    }
  ];

  if (matricula === "" || senha === "") {
    alert("Preencha matrícula e senha para entrar!");
    return;
  }

  const usuarioValido = usuarios.find(usuario =>
    usuario.matricula === matricula && usuario.senha === senha
  );

  if (!usuarioValido) {
    alert("Matrícula ou senha incorreta!");
    return;
  }

  localStorage.setItem("usuarioLogado", JSON.stringify(usuarioValido));
  window.location.href = "dashboard.html";
}

function sair() {
  localStorage.removeItem("usuarioLogado");
  window.location.href = "index.html";
}

// =========================
// NAVEGAÇÃO
// =========================

function irDashboard() { window.location.href = "dashboard.html"; }
function irClientes() { window.location.href = "clientes.html"; }
function irCadastroCliente() { window.location.href = "cadastro-cliente.html"; }
function irListaClientes() { window.location.href = "clientes-lista.html"; }
function irOrdens() { window.location.href = "ordem.html"; }
function irCadastroOrdem() { window.location.href = "cadastro-ordem.html"; }
function irListaOrdens() { window.location.href = "lista-ordens.html"; }
function irPerfil() { window.location.href = "perfil.html"; }
function irRecuperacao() { window.location.href = "recuperacao.html"; }
function voltarLogin() { window.location.href = "index.html"; }

// =========================
// MENU CONFIGURAÇÕES
// =========================

function toggleMenu() {
  const menu = document.getElementById("dropdown");

  if (!menu) return;

  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// =========================
// RECUPERAÇÃO DE SENHA
// =========================

function recuperarSenha() {
  const email = document.getElementById("emailRecuperacao").value.trim();

  if (email === "") {
    alert("Digite seu e-mail!");
    return;
  }

  alert("Instruções de recuperação enviadas para o e-mail informado!");
  window.location.href = "index.html";
}

// =========================
// PERFIL POR MATRÍCULA
// =========================

function carregarPerfil() {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

  if (!usuario) return;

  const nomeTitulo = document.getElementById("perfilNomeTitulo");
  const tipoTitulo = document.getElementById("perfilTipoTitulo");
  const nome = document.getElementById("perfilNome");
  const email = document.getElementById("perfilEmail");
  const tipo = document.getElementById("perfilTipo");
  const matricula = document.getElementById("perfilMatricula");

  if (nomeTitulo) nomeTitulo.textContent = usuario.nome;
  if (tipoTitulo) tipoTitulo.textContent = usuario.perfil;
  if (nome) nome.textContent = usuario.nome;
  if (email) email.textContent = usuario.email;
  if (tipo) tipo.textContent = usuario.perfil;
  if (matricula) matricula.textContent = usuario.matricula;
}

// =========================
// CLIENTES
// =========================

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

  if (clientes.length === 0) {
    tabela.innerHTML = `
      <tr>
        <td colspan="5">Nenhum cliente cadastrado.</td>
      </tr>
    `;
    return;
  }

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

// =========================
// ORDENS DE SERVIÇO
// =========================

function cadastrarOrdem() {
  const cliente = document.getElementById("clienteOrdem").value.trim();
  const veiculo = document.getElementById("veiculoOrdem").value.trim();
  const servico = document.getElementById("servicoOrdem").value.trim();
  const status = document.getElementById("statusOrdem").value;
  const descricao = document.getElementById("descricaoOrdem").value.trim();
  const fotoInput = document.getElementById("fotoOrdem");

  if (!cliente || !veiculo || !servico || !status || !descricao) {
    alert("Preencha todos os campos!");
    return;
  }

  const salvarOrdem = (fotoBase64 = "") => {
    const ordens = JSON.parse(localStorage.getItem("ordens")) || [];

    ordens.push({
      id: Date.now(),
      cliente,
      veiculo,
      servico,
      status,
      descricao,
      foto: fotoBase64
    });

    localStorage.setItem("ordens", JSON.stringify(ordens));

    alert("Ordem cadastrada com sucesso!");
    window.location.href = "lista-ordens.html";
  };

  if (fotoInput && fotoInput.files.length > 0) {
    const leitor = new FileReader();

    leitor.onload = function(evento) {
      salvarOrdem(evento.target.result);
    };

    leitor.readAsDataURL(fotoInput.files[0]);
  } else {
    salvarOrdem();
  }
}

function carregarOrdens() {
  const tabela = document.getElementById("corpoTabelaOrdens");

  if (!tabela) return;

  const ordens = JSON.parse(localStorage.getItem("ordens")) || [];

  tabela.innerHTML = "";

  if (ordens.length === 0) {
    tabela.innerHTML = `
      <tr>
        <td colspan="4">Nenhuma ordem cadastrada.</td>
      </tr>
    `;
    return;
  }

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

  const parametros = new URLSearchParams(window.location.search);
  const id = Number(parametros.get("id"));

  const ordens = JSON.parse(localStorage.getItem("ordens")) || [];
  const ordem = ordens.find(item => item.id === id);

  if (!ordem) {
    area.innerHTML = `
      <div class="servicos-card">
        <h3>Ordem não encontrada</h3>
        <p>Não foi possível encontrar os dados dessa ordem.</p>
      </div>

      <button class="btn-principal" onclick="irListaOrdens()">Voltar para lista</button>
    `;
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

    ${
      ordem.foto
        ? `<img src="${ordem.foto}" class="foto-veiculo" alt="Foto do veículo">`
        : ""
    }

    <div class="detalhes-grid-info">
      <div>
        <strong>Cliente</strong>
        <span>${ordem.cliente}</span>
      </div>

      <div>
        <strong>Veículo</strong>
        <span>${ordem.veiculo}</span>
      </div>

      <div>
        <strong>Serviço</strong>
        <span>${ordem.servico}</span>
      </div>

      <div>
        <strong>Status</strong>
        <span>${ordem.status}</span>
      </div>
    </div>

    <div class="servicos-card">
      <h3>Descrição do problema</h3>
      <p>${ordem.descricao}</p>
    </div>

    <button class="btn-principal" onclick="irListaOrdens()">Voltar para lista</button>
  `;
}

// =========================
// PREVIEW DA FOTO
// =========================

function configurarPreviewFoto() {
  const fotoInput = document.getElementById("fotoOrdem");
  const preview = document.getElementById("previewFoto");

  if (!fotoInput || !preview) return;

  fotoInput.addEventListener("change", function () {
    const arquivo = this.files[0];

    if (!arquivo) {
      preview.style.display = "none";
      return;
    }

    const leitor = new FileReader();

    leitor.onload = function (evento) {
      preview.src = evento.target.result;
      preview.style.display = "block";
    };

    leitor.readAsDataURL(arquivo);
  });
}

// =========================
// INICIAR AO ABRIR A PÁGINA
// =========================

document.addEventListener("DOMContentLoaded", () => {
  configurarPreviewFoto();
  carregarClientes();
  carregarOrdens();
  carregarDetalhesOrdem();
  carregarPerfil();
});