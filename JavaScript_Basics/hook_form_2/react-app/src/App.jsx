import React, {useState} from 'react';
import UserForm from './components/userForm';

function App() {
  const [createdUser, setCreatedUser] = useState();

  const handleForm = (user) => {
    setCreatedUser(user);
  };

  return (
    <div className="App">
      <UserForm onUserCreate={handleForm} createdUser={createdUser}></UserForm>
    </div>
  );
}

export default App;
