import React, { useState } from "react";
import classes from "./UserAddList.module.css";

import Card from "../UI/Card";

const UserAddList = (props) => {
  const [task, setTask] = useState('')

  const userAddHandler = (event) => {
    event.preventDefault()
    console.log(task)

    setTask('')
  }

  const changeTask = (event) => {
    setTask(event.target.value)
  }

  return (
    <div>
      <form action="" className={classes.form} onSubmit={userAddHandler}>
        <input type="text" placeholder="Enter the talk" value={task} onChange={changeTask} />
        <button className={classes.btnSend}>Add</button>
      </form>
    </div>
  );
};

export default UserAddList;
