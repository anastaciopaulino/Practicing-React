import React from 'react';
import classes from './App.module.css'

import Card from './components/UI/Card'
import UserAddList from './components/User/UserAddList'


function App() {
  return (
    <div>
      <Card className={classes.card}>
      <h1 className={classes.title}>Welcome to your Task List</h1>
        <UserAddList />
      </Card>
    </div>
  );
}

export default App;
