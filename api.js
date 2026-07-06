const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxv4SYgLwYNYpRWtBmzZY4qCFwOrC1YlKwZWkEkp6iqUTWn-m_6d4rN-eAg_W5wWsvA/exec';

async function chamarBackend(acao, params = {}) {
  const resposta = await fetch(APPS_SCRIPT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({ acao, ...params })
  });
  return resposta.json();
}

const api = {
  login: (email, nome) => chamarBackend('loginOuCadastrar', { email, nome }),
  gerarPacoteDiario: (usuarioId) => chamarBackend('gerarPacoteDiario', { usuarioId }),
  getAlbum: (usuarioId) => chamarBackend('getAlbumUsuario', { usuarioId }),
  getRepetidas: (usuarioId) => chamarBackend('getRepetidasUsuario', { usuarioId }),
  getFaltantes: (usuarioId) => chamarBackend('getFaltantesUsuario', { usuarioId }),
  listarOfertas: (usuarioId) => chamarBackend('listarOfertasAtivas', { usuarioId }),
  publicarOferta: (usuarioId, ofereceId, desejaId) =>
    chamarBackend('publicarOferta', { usuarioId, ofereceFigurinhaId: ofereceId, desejaFigurinhaId: desejaId }),
  toparOferta: (ofertaId, usuarioId, figOferecida) =>
    chamarBackend('toparOferta', { ofertaId, usuarioInteressadoId: usuarioId, figurinhaOferecidaEmTroca: figOferecida }),
  cancelarOferta: (ofertaId, usuarioId) => chamarBackend('cancelarOferta', { ofertaId, usuarioId }),
  criarProposta: (deUsuario, paraUsuario, oferecidos, pedidos) =>
    chamarBackend('criarPropostaTroca', { deUsuario, paraUsuario, itensOferecidos: oferecidos, itensPedidos: pedidos }),
  responderProposta: (propostaId, resposta) => chamarBackend('responderProposta', { propostaId, resposta }),
  confirmarTroca: (propostaId) => chamarBackend('confirmarTroca', { propostaId })
};
