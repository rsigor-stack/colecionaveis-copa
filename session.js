function salvarSessao(usuario) {
  localStorage.setItem('usuario', JSON.stringify(usuario));
}

function getSessao() {
  const dados = localStorage.getItem('usuario');
  return dados ? JSON.parse(dados) : null;
}

function limparSessao() {
  localStorage.removeItem('usuario');
}
