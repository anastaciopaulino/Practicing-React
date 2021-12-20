import React from 'react'
import { useState } from 'react'

import Card from '../UI/Card'
import Button from '../UI/Button'

import classes from './AddUser.module.css'

const AddUser = (props) => {
    const [enteredUsername, setUsername] = useState('')
    const [enteredAge, setAge] = useState('')

    const addUserHandler = (event) => {
        event.preventDefault()

        if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
            return
        }

        if(enteredAge < 0) {
            return
        }

        console.log(enteredUsername, enteredAge)
        
        setUsername('')
        setAge('')
    }

    const userChangeHandler = (event) => {
        setUsername(event.target.value)
    }

    const AgeChangeHandler = (event) => {
        setAge(event.target.value)
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" value={enteredUsername} onChange={userChangeHandler} />

                <label htmlFor="age">Age (Years)</label>
                <input type="number" name="age" value={enteredAge} onChange={AgeChangeHandler} />

                <Button type='submit'>Add user</Button>
            </form>
        </Card>
    )
}

export default AddUser