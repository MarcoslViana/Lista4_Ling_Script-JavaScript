document.addEventListener('DOMContentLoaded', function () {
    // Carregar itens do localStorage ao carregar a página
    if (localStorage.getItem('listaCompras')) {
      listaCompras = JSON.parse(localStorage.getItem('listaCompras'));
      atualizarTabela();
    }
  });
  /*
  function adicionarItem() {
    const codigoBarra = document.getElementById('codigoBarra').value;
    const nomeItem = document.getElementById('nomeItem').value;
    const preco = parseFloat(document.getElementById('preco').value);
    const comprado = false;
  
    const novoItem = { codigoBarra, nomeItem, preco, comprado };
  
    adicionar(novoItem);
    atualizarTabela();
  }
  */
  function adicionarItem() {
    const codigoBarraInput = document.getElementById('codigoBarra');
    const nomeItemInput = document.getElementById('nomeItem');
    const precoInput = document.getElementById('preco');
  
    const codigoBarra = codigoBarraInput.value;
    const nomeItem = nomeItemInput.value;
    const preco = parseFloat(precoInput.value);
    const comprado = false;
  
    const novoItem = { codigoBarra, nomeItem, preco, comprado };
  
    adicionar(novoItem);
    atualizarTabela();
  
    // Limpar os campos após adicionar um item
    codigoBarraInput.value = '';
    nomeItemInput.value = '';
    precoInput.value = '';
  }
  
  function atualizarTabela() {
    const corpoTabela = document.getElementById('corpoTabela');
    corpoTabela.innerHTML = '';
  
    const itens = listar();
  
    itens.forEach(item => {
      const novaLinha = document.createElement('tr');
      novaLinha.innerHTML = `
        <td>${item.codigoBarra}</td>
        <td>${item.nomeItem}</td>
        <td>${item.preco}</td>
        <td>${item.comprado ? 'Sim' : 'Não'}</td>
        <td>
          <button onclick="marcarItem('${item.codigoBarra}')">Marcar</button>
          <button onclick="desmarcarItem('${item.codigoBarra}')">Desmarcar</button>
          <button onclick="removerItem('${item.codigoBarra}')">Remover</button>
        </td>
      `;
  
      corpoTabela.appendChild(novaLinha);
    });
  }
  
  function marcarItem(codigoBarra) {
    const item = listaCompras.find(i => i.codigoBarra === codigoBarra);
    if (item) {
      marcar(item);
      atualizarTabela();
    }
  }
  
  function desmarcarItem(codigoBarra) {
    const item = listaCompras.find(i => i.codigoBarra === codigoBarra);
    if (item) {
      desmarcar(item);
      atualizarTabela();
    }
  }
  
  function removerItem(codigoBarra) {
    const item = listaCompras.find(i => i.codigoBarra === codigoBarra);
    if (item) {
      remover(item);
      atualizarTabela();
    }
  }
  