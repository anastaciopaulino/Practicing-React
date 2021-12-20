import React, {useState, } from 'react';

import AddUser from './components/User/AddUser'
import UsersList from './components/User/UsersList'

function App() {
  const [userList, setUserList] = useState([])

  const addUserListHandler = (name, age) => {
    setUserList((prevUserList) => {
      return [...prevUserList, {name: name, age: age, id: Math.random().toString() }]
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUserListHandler} />
      <UsersList users={userList} />
    </div>
  );
}

export default App;
