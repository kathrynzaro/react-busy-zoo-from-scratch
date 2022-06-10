import './App.css';
import { useState } from 'react';
import OpenSign from './OpenSign';
import Festival from './Festival';
import backgroundImg from './halloween.png';

function App() {

  const [festivalOpen, setFestivalOpen] = useState(true);
  const [monsters, setMonsters] = useState('vampire', 'witch', 'frankenstein', 'ghost');
  const [batSize, setBatSize] = useState(10);
  const [catSize, setCatSize] = useState(10);
  
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <OpenSign festivalOpen={festivalOpen} />
      <button onClick={() => setFestivalOpen(!festivalOpen)}>festival?</button>
      <div className='fight'>
        <div className='competitor'>
          <img src='bat.png' width={100} />
          <div className='fight-buttons'>
            <button>grow bat</button>
            <button>shrink cat</button>
          </div>
        </div>
        <div className='competitor'>
          <img src='cat.png' width={100}/>
          <div className='fight-buttons'>
            <button>grow cat</button>
            <button>shrink bat</button>
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
