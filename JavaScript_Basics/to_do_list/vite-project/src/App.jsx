import { useState } from 'react'
import './App.css'
import Form from './components/form'
import Display from './components/display'

function App() {

  const [createdList, onCreatedList] = useState([]);
  const handleForm = (list) => {
    const updatedList = [...createdList, String(list)];
    onCreatedList(updatedList);
  }
  return (
    <div>
      <Form onCreatedList={handleForm} createdList={createdList}/>
      <Display createdList={createdList} />
    </div>
  )
}

export default App;
