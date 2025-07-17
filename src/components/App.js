// import logo from '../logo.svg';
import React, { use } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import '../App.css';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import AddUser from './AddUser';
import UserList from './UserList';

function App() {
  const LOCAL_STORAGE_KEY = 'users';
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const retrievedUsers = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrievedUsers) {
      setUsers(retrievedUsers);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users));
  }, [users]);

  // const users = [
  //   {
  //     id: 1,
  //     name: 'Michael Scott',
  //     email: 'michael.scott@dundermifflin.com'
  //   },
  //   {
  //     id: 2,
  //     name: 'Dwight Schrute',
  //     email: 'dwight.schrute@dundermifflin.com'
  //   },
  //   {
  //     id: 3,
  //     name: 'Jim Halpert',
  //     email: 'jim.halpert@dundermifflin.com'
  //   },
  //   {
  //     id: 4,
  //     name: 'Pam Beesly',
  //     email: 'pam.beesly@dundermifflin.com'
  //   },
  //   {
  //     id: 5,
  //     name: 'Ryan Howard',
  //     email: 'ryan.howard@dundermifflin.com'
  //   },
  //   {
  //     id: 6,
  //     name: 'Kelly Kapoor',
  //     email: 'kelly.kapoor@dundermifflin.com'
  //   }
  // ]

  const addUserHandler = (user) => {
    console.log(user);
    setUsers([...users, { id: uuidv4(), ...user }]);
  }

  const removeUserHandler = (id) => {
    const newUserList = users.filter((user) => {
      return user.id !== id;
    });
    setUsers(newUserList);
  }


  return (
    <div className="ui container">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Header />
      <AddUser addUserHandler={addUserHandler} />
      <UserList users={users} getUserId={removeUserHandler} />
    </div>
  );
}

export default App;
