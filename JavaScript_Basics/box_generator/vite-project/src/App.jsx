import { useState } from 'react'
import Box from './components/box'
import DisplayBoxes from './components/displayBoxes';
import './App.css'


function App() {
  const [boxes, setBoxes] = useState([{}]);
  const [boxesExist, setBoxesExist] = useState(false);
  return (
    <div className="App">
      <h1>Create a Box!</h1>
      <DisplayBoxes boxes={boxes} boxesExist={boxesExist} />
      <Box setBoxes={setBoxes} boxes={boxes} setBoxesExist={setBoxesExist}/>
    </div>
  );
}

export default App;
