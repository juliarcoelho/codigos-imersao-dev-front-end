var cartaJulia = {
  nome: "Ursinho Pimpão",
  imagem: "https://i.pinimg.com/originals/45/98/12/4598127c091f25d245aaf2612882e0f5.png",
  atributos:{
    ataque:70,
    defesa:65,
    magia:85
  }
}

var cartaFlavia = {
  nome: "Ellie",
  imagem: "https://assets.papelpop.com/wp-content/uploads/2020/06/last-uslii.png",
  atributos:{
    ataque:60,
    defesa:80,
    magia:30
  }
}

var cartaGui = {
  nome:"Lorde Darth Vader",
  imagem: "https://images-na.ssl-images-amazon.com/images/I/51VJBqMZVAL._SX328_BO1,204,203,200_.jpg",
  atributos:{
    ataque:88,
    defesa:62,
    magia:90 
  }
}
var cartaMaquina
var cartaJogador
var cartas = [cartaJulia, cartaGui, cartaFlavia]

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3)
  cartaMaquina = cartas[numeroCartaMaquina]
  
  var numeroCartaJogador = parseInt(Math.random() * 3)
  while(numeroCartaJogador == numeroCartaMaquina){
    numeroCartaJogador = parseInt(Math.random() * 3)
  }
  cartaJogador = cartas[numeroCartaJogador]
  console.log(cartaJogador)
  
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  exibeCartaJogador()
}

function exibeCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador")
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  
  divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`
  
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  
  var opcoesTexto = ""
  
  for (var atributo in cartaJogador.atributos){
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
  }
  
  
  var html = "<div id+'opcoes' class='carta-status'>"
  
  divCartaJogador.innerHTML = moldura+nome+html+opcoesTexto+'</div>'
  
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName('atributo')
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value
    }
  }
}

function jogar() {
  var divResultado = document.getElementById("resultado")
  var atributoSelecionado = obtemAtributoSelecionado()
 
  if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
    
    htmlResultado = '<p class="resultado-final">VENCEU</p>'
    
  } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
    
    htmlResultado = '<p class="resultado-final">PERDEU</p>'
    
  } else {
    
    htmlResultado = '<p class="resultado-final">EMPATOU</p>'
    
  }
  
  divResultado.innerHTML = htmlResultado
  exibeCartaMaquina()
} 

function exibeCartaMaquina() {
   var divCartaMaquina = document.getElementById("carta-maquina")
   var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  
  divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`
  
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  
  var opcoesTexto = ""
  
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p><br>"
  }
  
  var html = "<div id+'opcoes' class='carta-status'>"
  
  divCartaMaquina.innerHTML = moldura+nome+html+opcoesTexto+'</div>'
  
}