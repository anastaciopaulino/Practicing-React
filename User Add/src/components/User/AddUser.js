import React from 'react'

const AddUser = (props) => {

    const addUserHandler = (event) => {
        event.preventDefault()
    }

    return (
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" />

            <label htmlFor="age">Age (Years)</label>
            <input type="number" name="age" />

            <input type="submit" name="Add user" />
        </form>
    )
}

export default AddUser