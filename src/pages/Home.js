import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const navigateRiddle = (event) => {
    let id = event.target.innerHTML
    let id2 = parseInt(id.slice(1))
    navigate(`/riddle/${id2}`);
  };

  return (
    <div>
        <div className="title">
        Wybierzcie numer zagadki:
      </div>

      <div className="tiles">
        <div className="row">
          <div className="odd" onClick={navigateRiddle}>G01</div>
          <div className="even" onClick={navigateRiddle}>G02</div>
          <div className="odd" onClick={navigateRiddle}>G03</div>
          <div className="even" onClick={navigateRiddle}>G04</div>
        </div>
        <div className="row">
          <div className="even" onClick={navigateRiddle}>G05</div>
          <div className="odd" onClick={navigateRiddle}>G06</div>
          <div className="even" onClick={navigateRiddle}>G07</div>
          <div className="odd" onClick={navigateRiddle}>G08</div>
        </div>
        <div className="row">
          <div className="odd" onClick={navigateRiddle}>G09</div>
          <div className="even" onClick={navigateRiddle}>G10</div>
          <div className="odd" onClick={navigateRiddle}>G11</div>
          <div className="even" onClick={navigateRiddle}>G12</div>
        </div>
        <div className="row">
          <div className="even" onClick={navigateRiddle}>G13</div>
          <div className="odd" onClick={navigateRiddle}>G14</div>
          <div className="even" onClick={navigateRiddle}>G15</div>
          <div className="odd" onClick={navigateRiddle}>G16</div>
        </div>
      </div>
    </div>
  );
}

export default Home;