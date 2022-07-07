import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Riddle1 = () => {
  function isNumber(char) {
    if (typeof char !== 'string') {
      return false;
    }
  
    if (char.trim() === '') {
      return false;
    }
  
    return !isNaN(char);
  }

  const [answer, setAnswer] = React.useState("")

  const correct = "9281643"

  function handleChange(event) {
    const {value} = event.target
    if (isNumber(value.slice(-1)))
      setAnswer(value)
    if (isNumber(answer[0]) && value === "")
      setAnswer(value)
  }

  function submit(event) {
    event.preventDefault()
    if (answer === correct) {
      const error = document.getElementById("alert")
      error.innerHTML = ""
      error.className=""

      const newPanel = document.getElementById("correct")
      newPanel.className = "password"
    } else {
      const error = document.getElementById("alert")
      error.innerHTML = `Nieprawidłowa odpowiedź :C`
      error.className = "alert"

      const newPanel = document.getElementById("correct")
      newPanel.className = "correct"
    }
  }

  const navigate = useNavigate();

  const navigateRiddle = (event) => {
    navigate(`/`);
  };

  return (
    <div className="panel">
      <div className="title extra">
        Zagadka nr 12
      </div>
      <div className="password">
        <div>Wpisz hasło</div>
        <form>
          <input type="text" id="answer" name="answer" onChange={handleChange} value={answer} maxLength="7">
          </input>
          <button className="submitButton" onClick={submit}>
            Sprawdź
          </button>
        </form>
        <div className="alert" id="alert"></div>
      </div>

      <div className="correct" id="correct">
        Przeczytajcie paragraf B28.
      </div>

      <div className="goBack" onClick={navigateRiddle}>
        Wróć do panelu głównego
      </div>
    </div>
  );
}

export default Riddle1;