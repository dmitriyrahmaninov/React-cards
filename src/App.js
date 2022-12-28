import Form from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import { users } from './data/user';
import { useState } from 'react';

function App() {

  const [user, setUser] = useState(users)

  const createCards = (first_name, last_name) => setUser(
    [...user,
    {
      id: Date.now(),
      avatar: `https://i.pravatar.cc/300?img=${Math.random() * 70}`,
      first_name,
      last_name,
      status: true
    }
    ]
  );

  const del = id => setUser(user.filter(person => person.id !== id));
  
  const clearCards = (id) => 
    setUser(user.map(clickUser => {
      (clickUser.id === id)
        ? clickUser.status = !clickUser.status
        : clickUser.status = clickUser.status;
      return clickUser
    }));
  
  

  return (
    <div>
      <Form createCards={createCards} />
      <ToDoList users={user} del={del} clearCards={clearCards} /> 
    </div>
  );
}

export default App;
