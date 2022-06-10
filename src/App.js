import './App.css';
import { useState } from 'react';
import OpenSign from './OpenSign';
import Festival from './Festival';
import backgroundImg from './halloween.png';

function App() {

  const [festivalOpen, setFestivalOpen] = useState(true);
  const [monsters, setMonsters] = useState(['vampire', 'witch', 'frankenstein', 'ghost']);
  const [batSize, setBatSize] = useState(12);
  const [catSize, setCatSize] = useState(11);
  
  function handleVampireClick() {
    monsters.push('vampire');
    setMonsters(monsters.slice());
  }
  function handleWitchClick() {
    monsters.push('witch');
    setMonsters(monsters.slice());
  }
  function handleFrankensteinClick() {
    monsters.push('frankenstein');
    setMonsters(monsters.slice());
  }
  function handleGhostClick() {
    monsters.push('ghost');
    setMonsters(monsters.slice());
  }

  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <OpenSign festivalOpen={festivalOpen} />
      <button onClick={() => setFestivalOpen(!festivalOpen)}>wanna go?</button>
      <div className='fight'>
        <div className='competitor'>
          <img src='bat.png' width={12 * batSize} />
          <div className='fight-buttons'>
            <button onClick={() => setBatSize(batSize + 1)}>grow bat</button>
            <button onClick={() => setCatSize(catSize - 1)}>shrink cat</button>
          </div>
        </div>
        <div className='competitor'>
          <img src='cat.png' width={11 * catSize} />
          <div className='fight-buttons'>
            <button onClick={() => setCatSize(catSize + 1)}>grow cat</button>
            <button onClick={() => setBatSize(batSize - 1)}>shrink bat</button>
          </div>
        </div>
      </div>
      <Festival monsters={monsters} />
      <div className='buttons'>
        <button onClick={handleVampireClick}>vampire</button>
        <button onClick={handleWitchClick}>witch</button>
        <button onClick={handleFrankensteinClick}>frankenstein</button>
        <button onClick={handleGhostClick}>ghost</button>
      </div>
    </div>
  );
}

export default App;
