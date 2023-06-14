import './App.css';
import {useState} from 'react';
import DisplayBoxes from './components/displayBoxes';
import NewBox from './components/NewBox';


function App() {
  //* Using react you want to generally have it be components
  const [boxes, setBoxes] = useState([{color:"red", height:100, width:100},{color:"blue", height:100, width:100}]);
  return (
    <div className="App">
      <DisplayBoxes
      boxes={boxes}>
      </DisplayBoxes>
      <NewBox setBoxes = {setBoxes} boxes={boxes}></NewBox>
      {/* This is creating a new box but also adding it the list, setBoxes creates the new box but boxes adds it to the list of created boxes in the session */}
    </div>
  );
}

export default App;
