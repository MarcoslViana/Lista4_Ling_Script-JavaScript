let listaCompras = [];

function adicionar(item) {
  listaCompras.push(item);
  atualizarLocalStorage();
}

function remover(item) {
  const index = listaCompras.findIndex(i => i.codigoBarra === item.codigoBarra);
  if (index !== -1) {
    listaCompras.splice(index, 1);
    atualizarLocalStorage();
  }
}

function marcar(item) {
  const index = listaCompras.findIndex(i => i.codigoBarra === item.codigoBarra);
  if (index !== -1) {
    listaCompras[index].comprado = true;
    atualizarLocalStorage();
  }
}

function desmarcar(item) {
  const index = listaCompras.findIndex(i => i.codigoBarra === item.codigoBarra);
  if (index !== -1) {
    listaCompras[index].comprado = false;
    atualizarLocalStorage();
  }
}

function listar() {
  return listaCompras;
}

function atualizarLocalStorage() {
  localStorage.setItem('listaCompras', JSON.stringify(listaCompras));
}
