window.onload = function() {
  //write your code here
};

var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];

function generarCombinaciones() {
  var domains = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let adjetivo of adj) {
      noun.forEach(nombre => {
        domains.push(pronoun[i] + adjetivo + nombre + ".com");
      });
    }
  }
  return domains;
}

console.log(generarCombinaciones());

/*for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    console.log(`${pronoun[0]}${adj[i]}${noun[j]}.com`);
    console.log(pronoun[1] + adj[i] + noun[j] + ".com");
  }
}
mi primera forma de hacer el ejercicio


formas de arnaldo
function generarCombinaciones() {
  let domains = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        domains.push(pronoun[i] + adj[j] + noun[k] + ".com");
      }
    }
  }
  return domains;
}

function generarCombinaciones2() {
  let domains = [];
  for (let pronombre of pronoun) {
    for (let adjetivo of adj) {
      for (let nombre of noun) {
        domains.push(pronombre + adjetivo + nombre + ".com");
      }
    }
  }
  return domains;
}

function generarCombinaciones3() {
  let domains = [];
  pronoun.forEach(pronombre => {
    adj.forEach(adjetivo => {
      noun.forEach(nombre => {
        domains.push(pronombre + adjetivo + nombre + ".com");
      });
    });
  });
  return domains;
}

*/
