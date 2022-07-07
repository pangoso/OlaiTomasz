import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Riddle1 from './Riddle1';
import Riddle2 from './Riddle2';
import Riddle3 from './Riddle3';
import Riddle4 from './Riddle4';
import Riddle5 from './Riddle5';
import Riddle6 from './Riddle6';
import Riddle7 from './Riddle7';
import Riddle8 from './Riddle8';
import Riddle9 from './Riddle9';
import Riddle10 from './Riddle10';
import Riddle11 from './Riddle11';
import Riddle12 from './Riddle12';
import Riddle13 from './Riddle13';
import Riddle14 from './Riddle14';
import Riddle15 from './Riddle15';
import Riddle16 from './Riddle16';

const Main = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/riddle/1' element={<Riddle1/>}></Route>
      <Route exact path='/riddle/2' element={<Riddle2/>}></Route>
      <Route exact path='/riddle/3' element={<Riddle3/>}></Route>
      <Route exact path='/riddle/4' element={<Riddle4/>}></Route>
      <Route exact path='/riddle/5' element={<Riddle5/>}></Route>
      <Route exact path='/riddle/6' element={<Riddle6/>}></Route>
      <Route exact path='/riddle/7' element={<Riddle7/>}></Route>
      <Route exact path='/riddle/8' element={<Riddle8/>}></Route>
      <Route exact path='/riddle/9' element={<Riddle9/>}></Route>
      <Route exact path='/riddle/10' element={<Riddle10/>}></Route>
      <Route exact path='/riddle/11' element={<Riddle11/>}></Route>
      <Route exact path='/riddle/12' element={<Riddle12/>}></Route>
      <Route exact path='/riddle/13' element={<Riddle13/>}></Route>
      <Route exact path='/riddle/14' element={<Riddle14/>}></Route>
      <Route exact path='/riddle/15' element={<Riddle15/>}></Route>
      <Route exact path='/riddle/16' element={<Riddle16/>}></Route>
    </Routes>
  );
}

export default Main;