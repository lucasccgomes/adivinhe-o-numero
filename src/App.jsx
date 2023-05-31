import { useEffect } from 'react'
import { init, checkForEntry, compareGuess, reset } from './function.js';
import './App.css'

function handleKeyDown(event) {
  const input = event.target;
  const value = parseInt(input.value + event.key, 10);
  const isNumberOutOfRange = value < input.min || value > input.max;

  if (isNaN(value) || isNumberOutOfRange) {
    event.preventDefault();
  }
}


function App() {
  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <div className="center">
        <h1>Adivinhe o Numero</h1>
        <div className="bot">
          <img src="https://cdn.dribbble.com/users/37530/screenshots/2937858/media/658636eccf753ce27bb6c83ba136928a.gif" alt="Robo" />
          <p className='fala-bot'>Olá eu selecionei um número entre 1 e 999 e quero que você adivinhe qual escolhi.</p>
        </div>
        <div className="palpite">
          <label for='palpite'>Seu palpite aqui: </label>
          <input id='palpite' type='number' min="1" max="999" onKeyPress={checkForEntry} onKeyDown={handleKeyDown} autofocus />
          <button id='button' onClick={compareGuess}>Check</button>
        </div>
        <p></p>
        <div className='result-palpite' id='result'></div>
        <p></p>
        <div className="reset">
          <button id='reset' onClick={reset}>Resetar</button>
        </div>
      </div>
    </>
  )
}

export default App
