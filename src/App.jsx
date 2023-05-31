import { useState, useEffect } from 'react'
import { init, checkForEntry, compareGuess, reset } from './function.js';
import './App.css'


function App() {
  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <h1>Adivinhe o Numero</h1>
      <p>Selecionei um número entre 1 e 999.</p>
      <label for='palpite'>Seu palpite aqui: </label>
      <input id='palpite' type='number' min='1' max='999' onKeyPress={checkForEntry} autofocus />
      <button id='button' onClick={compareGuess}>Check</button>
      <p></p>
      <div id='result'></div>
      <p></p>
      <button id='reset' onClick={reset}>Resetar</button>
    </>
  )
}

export default App
