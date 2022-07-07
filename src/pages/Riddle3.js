import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyImage from '../images/image.png'
import MyImage2 from '../images/image (1).png'
import MyImage3 from '../images/image (2).png'
import MyImage4 from '../images/image (3).png'
import MyImage5 from '../images/image (4).png'
import MyImage6 from '../images/image (5).png'

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

  const correct = "4265"

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
        Zagadka nr 3
      </div>
      <div className="password">
        <div>Wpisz hasło</div>
        <form>
          <input type="text" id="answer" name="answer" onChange={handleChange} value={answer} maxLength="4">
          </input>
          <button className="submitButton" onClick={submit}>
            Sprawdź
          </button>
        </form>
        <div className="alert" id="alert"></div>
      </div>

      <div className="correct" id="correct">
        Przeczytajcie paragraf B08.
      </div>

      <div className="cars">
        <div className="car">
          <img src={MyImage} alt="Car1" width="300" height="300"/>
          <div>1</div>
        </div>
        <div className="car">
          <img src={MyImage2} alt="Car2" width="300" height="300"/>
          <div>4</div>
        </div>
        <div className="car">
          <img src={MyImage3} alt="Car3" width="300" height="300"/>
          <div>6</div>
        </div>
      </div>
      <div className="cars">
        <div className="car">
          <img src={MyImage4} alt="Car4" width="300" height="300"/>
          <div>5</div>
        </div>
        <div className="car">
          <img src={MyImage5} alt="Car5" width="300" height="300"/>
          <div>2</div>
        </div>
        <div className="car">
          <img src={MyImage6} alt="Car6" width="300" height="300"/>
          <div>3</div>
        </div>
      </div>

      <div className="goBack" onClick={navigateRiddle}>
        Wróć do panelu głównego
      </div>
    </div>
  );
}

export default Riddle1;