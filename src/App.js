import { useState } from 'react'

import './App.css';
import SportsContainer from './components/SportsContainer';
import SportForm from './components/SportForm';

function App() {
  const [ sports, setSports ] = useState([])

  function onAddSport(newSport) {
    setSports([...sports, newSport])
  }

  return (
    <div className="App">
      <SportForm onAddSport={onAddSport} />
      <SportsContainer setSports={setSports} sports={sports}/>
    </div>
  );
}

export default App;
