nomedoestudanteArray = [];

function enviar() {
  var mostrarArrayEstudante = [];
  for (var j = 1; j <= 4; j++) {
    var nomedoestudante = document.getElementById("nomedoestudante" + j).value;
    console.log(nomedoestudante);
    nomedoestudanteArray.push(nomedoestudante);
  }

  console.log(nomedoestudanteArray);
  var comprimentoListaEstudantes = nomedoestudanteArray.length;
  console.log(comprimentoListaEstudantes);
  for (var k = 0; k < comprimentoListaEstudantes; k++) {
    mostrarArrayEstudante.push(
      "<h4> Nome - " + nomedoestudanteArray[k] + "</h4>"
    );
    console.log(mostrarArrayEstudante);
  }
  console.log(mostrarArrayEstudante);

  document.getElementById("mostrarnomes").innerHTML = mostrarArrayEstudante;

  var removerVirgulas = mostrarArrayEstudante.join("");
  console.log(removerVirgulas);
  document.getElementById("mostrarnomessemvirgula").innerHTML = removerVirgulas;

  document.getElementById("botaoenviar").style.display = "none";
  document.getElementById("botaoOrganizar").style.display = "inline-block";
}

function organizar() {
  nomedoestudanteArray.sort();
  console.log(nomedoestudanteArray);

  var mostrarArrayEstudanteOrganizado = [];
  var comprimentoListaEstudantes = nomedoestudanteArray.length;
  console.log(comprimentoListaEstudantes);

  for (var k = 0; k < comprimentoListaEstudantes; k++) {
    mostrarArrayEstudanteOrganizado.push(
      "<h4> Nome - " + nomedoestudanteArray[k] + "</h4>"
    );
    console.log(mostrarArrayEstudanteOrganizado);
  }

  document.getElementById("mostrarnomes").innerHTML =
    mostrarArrayEstudanteOrganizado;

  var removerVirgulas = mostrarArrayEstudanteOrganizado.join("");
  console.log(removerVirgulas);

  document.getElementById("mostrarnomessemvirgula").innerHTML = removerVirgulas;
}
