// import logo from '../logo.svg';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../App.css';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import AddUserWithNavigate from './AddUser';
import UserList from './UserList';

function App() {
  const LOCAL_STORAGE_KEY = 'users';
  
  // Default users to show if localStorage is empty
  const defaultUsers = [
    {
      id: 1,
      name: 'Michael Scott',
      email: 'michael.scott@dundermifflin.com'
    },
    {
      id: 2,
      name: 'Dwight Schrute',
      email: 'dwight.schrute@dundermifflin.com'
    },
    {
      id: 3,
      name: 'Jim Halpert',
      email: 'jim.halpert@dundermifflin.com'
    },
    {
      id: 4,
      name: 'Pam Beesly',
      email: 'pam.beesly@dundermifflin.com'
    },
    {
      id: 5,
      name: 'Ryan Howard',
      email: 'ryan.howard@dundermifflin.com'
    },
    {
      id: 6,
      name: 'Kelly Kapoor',
      email: 'kelly.kapoor@dundermifflin.com'
    }
  ];

  const [users, setUsers] = useState(defaultUsers);

  useEffect(() => {
    const retrievedUsers = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrievedUsers && retrievedUsers.length > 0) {
      setUsers(retrievedUsers);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users));
  }, [users]);

  

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
    <div style={{ backgroundColor: '#909090', minHeight: '100vh', padding: '0', margin: '0' }}>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Router>
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={
              <UserList 
                users={users} 
                getUserId={removeUserHandler} 
              />
            } 
          />
          <Route 
            path="/add" 
            element={
              <AddUserWithNavigate addUserHandler={addUserHandler} />
            } 
          />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
