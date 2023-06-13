import './App.css';
import PersonCard from './components/personCard';


function App() {
  return (
    <div className="App">
      <PersonCard
      firstName = {"Doe"}
      lastName = {"Jane"}
      age = {45}
      hairColor = {"Black"}></PersonCard>
      <PersonCard
      firstName = {"Smith"}
      lastName = {"John"}
      age = {50}
      hairColor = {"Brown"}></PersonCard>
      <PersonCard
      firstName = {"Smith"}
      lastName = {"Maria"}
      age = {62}
      hairColor = {"Brown"}></PersonCard>
    </div>
  );
}

export default App;
