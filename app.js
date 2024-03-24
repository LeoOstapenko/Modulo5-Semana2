function clickProduto(evento) {
    evento.preventDefault()
    alert('PRODUTO INDISPONÍVEL!')
  }
  let celular = document.getElementById('cel')
  celular.onclick = clickProduto

  let computador = document.getElementById('note')
  computador.onclick = clickProduto

  let mouse = document.getElementById('rato')
  mouse.onclick = clickProduto

  let monitor = document.getElementById('tela')
  monitor.onclick = clickProduto