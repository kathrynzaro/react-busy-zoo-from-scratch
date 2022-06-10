import './App.css';
import { useState } from 'react';
import OpenSign from './OpenSign';
import Festival from './Festival';
import backgroundImg from './halloween.png';

function App() {

  const [festivalOpen, setFestivalOpen] = useState(true);
  const [monsters, setMonsters] = useState('vampire', 'witch', 'frankenstein', 'ghost');
  const [batSize, setBatSize] = useState(11);
  const [catSize, setCatSize] = useState(10);
  
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <OpenSign festivalOpen={festivalOpen} />
      <button onClick={() => setFestivalOpen(!festivalOpen)}>festival?</button>
      <div className='fight'>
        <div className='competitor'>
          <img src='bat.png' width={11 * batSize} />
          <div className='fight-buttons'>
            <button onClick={() => setBatSize(batSize + 1)}>grow bat</button>
            <button onClick={() => setCatSize(catSize - 1)}>shrink cat</button>
          </div>
        </div>
        <div className='competitor'>
          <img src='cat.png' width={10 * catSize} />
          <div className='fight-buttons'>
            <button onClick={() => setCatSize(catSize + 1)}>grow cat</button>
            <button onClick={() => setBatSize(batSize - 1)}>shrink bat</button>
          </div>
        </div>
      </div>
      <Festival monsters={monsters} />
      <div className='buttons'>
        <button>vampire</button>
        <button>witch</button>
        <button>frankenstein</button>
        <button>ghost</button>
      </div>
    </div>
  );
}

export default App;
