import { useState } from 'react'
import './App.css'
import Form from './components/userForm'

function App() {
  const [createdUser, setCreatedUser] = useState();

  const handleForm = (user) => {
    setCreatedUser(user);
  };
  return (
    <>
      <div>
        <Form onUserCreate={handleForm} createdUser={createdUser} />
      </div>
    </>
  )
}

export default App
