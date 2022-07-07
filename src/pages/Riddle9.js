import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Riddle1 = () => {
  const [answer, setAnswer] = React.useState("")

  const correct = "KSMCDOIW"

  function handleChange(event) {
    const {value} = event.target
    setAnswer(value)
  }

  function submit(event) {
    event.preventDefault()
    if (answer.toUpperCase() === correct) {
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
        Zagadka nr 9
      </div>
      <div className="password">
        <div>Wpisz hasło</div>
        <form>
          <input type="text" id="answer" name="answer" onChange={handleChange} value={answer} maxLength="8">
          </input>
          <button className="submitButton" onClick={submit}>
            Sprawdź
          </button>
        </form>
        <div className="alert" id="alert"></div>
      </div>

      <div className="correct" id="correct">
        Przeczytajcie paragraf B23.
      </div>

      <div className="goBack" onClick={navigateRiddle}>
        Wróć do panelu głównego
      </div>
    </div>
  );
}

export default Riddle1;