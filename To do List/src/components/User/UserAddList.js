import React, { useState } from "react";
import classes from "./UserAddList.module.css";

import Card from "../UI/Card";

const UserAddList = (props) => {
  return (
    <div>
      <form action="" className={classes.form}>
        <input type="text" placeholder="Enter the talk" />
        <button className={classes.btnSend}>Add</button>
      </form>
    </div>
  );
};

export default UserAddList;
