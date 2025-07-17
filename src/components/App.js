// import logo from '../logo.svg';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../App.css';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom'
import Header from './Header';
import AddUserWithNavigate from './AddUser';
import UserList from './UserList';
import UserDetail from './UserDetail';

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
    },
    {
      id: 7,
      name: 'Stanley Hudson',
      email: 'stanley.hudson@dundermifflin.com'
    },
    {
      id: 8,
      name: 'Angela Martin',
      email: 'angela.martin@dundermifflin.com'
    },
    {
      id: 9,
      name: 'Oscar Martinez',
      email: 'oscar.martinez@dundermifflin.com'
    },
    {
      id: 10,
      name: 'Phyllis Vance',
      email: 'phyllis.vance@dundermifflin.com'  
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
    setUsers([...users, { id: uuidv4(), ...user }]);
    alert('User added successfully!');
  }

  const removeUserHandler = (id) => {
    const userToDelete = users.find((user) => user.id === id);
    if (window.confirm(`Are you sure you want to delete ${userToDelete?.name || 'this user'}?`)) {
      const newUserList = users.filter((user) => user.id !== id);
      setUsers(newUserList);
      alert('User deleted successfully!');
    }
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
              <AddUserWithNavigate 
                addUserHandler={addUserHandler} 
                existingUsers={users}
              />
            } 
          />
          <Route 
            path="/user/:id" 
            element={<UserDetailWrapper users={users} />} 
          />
        </Routes>
      </Router>
      
    </div>
  );
}

// Wrapper to extract user from id param and pass to UserDetail
;
function UserDetailWrapper({ users }) {
  const { id } = useParams();
  const user = users.find(u => String(u.id) === String(id));
  return <UserDetail user={user || {}} />;
}

export default App;
