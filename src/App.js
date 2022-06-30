import './App.css';
import { useState } from 'react';
import OpenSign from './OpenSign';
import Festival from './Festival';
import backgroundImg from './halloween.png';
import CustomButton from './CustomButton';

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
      <CustomButton onClick={() => setFestivalOpen(!festivalOpen)}>wanna go?</CustomButton>
      <div className='fight'>
        <div className='competitor'>
          <img src='bat.png' width={12 * batSize} />
          <div className='fight-buttons'>
            <CustomButton onClick={() => setBatSize(batSize + 1)}>grow bat</CustomButton>
            <CustomButton onClick={() => setCatSize(catSize - 1)}>shrink cat</CustomButton>
          </div>
        </div>
        <div className='competitor'>
          <img src='cat.png' width={11 * catSize} />
          <div className='fight-buttons'>
            <CustomButton onClick={() => setCatSize(catSize + 1)}>grow cat</CustomButton>
            <CustomButton onClick={() => setBatSize(batSize - 1)}>shrink bat</CustomButton>
          </div>
        </div>
      </div>
      <Festival monsters={monsters} />
      <div className='buttons'>
        <CustomButton onClick={handleVampireClick}>add vampire</CustomButton>
        <CustomButton onClick={handleWitchClick}>add witch</CustomButton>
        <CustomButton onClick={handleFrankensteinClick}>add frankenstein</CustomButton>
        <CustomButton onClick={handleGhostClick}>add ghost</CustomButton>
      </div>
    </div>
  );
}

export default App;
