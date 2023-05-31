var num, palpites;

export function init() {
  num = Math.floor (Math.random()*999) + 1;
  palpites = 0;
}

export function checkForEntry(event) {
  if (event.key == "Enter") {
    compareGuess();
  }
}

export function compareGuess() {
  var palpite=document.querySelector('#palpite').value;
  var result=document.querySelector('#result');
  palpites++;
  if (palpite < num) {
    result.textContent="Maior que " + palpite;
  } else if (palpite > num) {
    result.textContent="Menor que " + palpite;
  } else {
    document.querySelector('#palpite').disabled=true;
    document.querySelector('#button').disabled=true;
    document.querySelector('#reset').style.display='block';
    result.textContent="Você acertou com " + palpites + " palpites! Eu escolhi o " + num + "!";
  }
}


export function reset() {
  document.querySelector('#reset').style.display='none';
  document.querySelector('#result').textContent='';
    document.querySelector('#button').disabled=false;
  var palpite = document.querySelector('#palpite');
  palpite.disabled=false;
  palpite.value='';
  palpite.focus();
  init();
}
