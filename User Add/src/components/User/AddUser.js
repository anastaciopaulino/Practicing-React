import React from 'react'
import { useState } from 'react'

import Card from './../UI/Card'
import Button from './../UI/Button'
import ErrorModal from './../UI/ErrorModal'

import classes from './AddUser.module.css'

const AddUser = (props) => {
    const [enteredUsername, setUsername] = useState('')
    const [enteredAge, setAge] = useState('')

    const [error, setError] = useState()

    const addUserHandler = (event) => {
        event.preventDefault()

        if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age (mon-emply values)."
            })
            return
        }

        if(enteredAge < 0) {
            setError({
                title: "Invalid age",
                message: "Please enter a valid age (>0)."
            })
            return
        }

        props.onAddUser(enteredUsername, enteredAge)
        
        setUsername('')
        setAge('')
    }

    const userChangeHandler = (event) => {
        setUsername(event.target.value)
    }

    const AgeChangeHandler = (event) => {
        setAge(event.target.value)
    }

    const errorHandler = (event) => {
        setError(null)
    }

    return (
        <div>
            { error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" value={enteredUsername} onChange={userChangeHandler} />

                    <label htmlFor="age">Age (Years)</label>
                    <input type="number" name="age" value={enteredAge} onChange={AgeChangeHandler} />

                    <Button type='submit'>Add user</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser