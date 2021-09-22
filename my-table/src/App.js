import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import { Form } from './components/Form';
import { Table } from './components/Table';

const App = () => {
  const [allusers, setAllUsers] = useState([])
  const [users, setUsers] = useState({
    firstname: '',
    lastname: '',
    dateofbirth: '',
    email: '',
    phone: ''
  })

  const handleAddFormChange = event => {
    event.preventDefault()

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newUsersData = { ...users}
    newUsersData[fieldName] = fieldValue
    
    setUsers(newUsersData)
  }

  const handleAddFormSubmit = event => {
    event.preventDefault()

    const newUser = {
      id: nanoid(),
      name: users.firstname + ' ' + users.lastname,
      dateofbirth: users.dateofbirth,
      email: users.email,
      phone: users.phone
    }

    const newUsers = [...allusers, newUser]
    setAllUsers(newUsers)
  }

  const handleDeleteUser = (userId) => {
    const newUsers = [...allusers]

    const index = allusers.findIndex((user) => user.id === userId)
    newUsers.splice(index, 1)
    setAllUsers(newUsers)
  }

  return (
    <div className="container">
      <Form 
        handleAddFormChange={handleAddFormChange}
        handleAddFormSubmit={handleAddFormSubmit}
      />
      <Table 
        allusers={allusers}
        handleDeleteUser={handleDeleteUser}
      />
    </div>
  );
}

export default App;
