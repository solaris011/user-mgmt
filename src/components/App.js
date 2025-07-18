// import logo from '../logo.svg';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../App.css';
import { useParams } from 'react-router-dom'
import Header from './Header';
import AddUserWithNavigate from './AddUser';
import EditUserWithNavigate from './EditUser';
import UserList from './UserList';
import UserDetail from './UserDetail';

function App() {
  const LOCAL_STORAGE_KEY = 'users';
  
  // Create a default list of users
  const defaultUsers = [
    {
      id: 1,
      name: 'Ana Lopez',
      email: 'ana.lopez@hp.com'
    },
    {
      id: 2,
      name: 'Jorge Santamarina',
      email: 'jorge.santamarina@dell.com.mx'
    },
    {
      id: 3,
      name: 'Paula Benitez',
      email: 'paula-benitez2@coca-cola.com'
    },
    {
      id: 4,
      name: 'Luis Gonzalez',
      email: 'luis.gonzalez5@ibm.com.mx'
    },
    {
      id: 5,
      name: 'Maria Luisa Alvarez',
      email: 'maria.luisa.alvarez@toyota.com.mx'
    },
    {
      id: 6,
      name: 'Jose Alberto Rosas Perez',
      email: 'ja-rosas-p@toshiba-mex.com'
    },
    {
      id: 7,
      name: 'Vanessa Gutierrez',
      email: 'vanessa.gutierrez@gnp-seguros.com'
    },
    {
      id: 8,
      name: 'Pedro Gutierrez Garcia',
      email: 'pedro.gutierrez@atlas.com.mx'
    },
    {
      id: 9,
      name: 'Oscar Martinez',
      email: 'oscar.martinez@dhl.com'
    },
    {
      id: 10,
      name: 'Elena Sanchez',
      email: 'elena.sanchez@adecco.com.mx'
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

  
  // Function to add a new user
  const addUserHandler = (user) => {
    // Find the highest ID among existing users and add 1
    const maxId = users.length > 0 ? Math.max(...users.map(u => Number(u.id) || 0)) : 0;
    const newId = maxId + 1;
    
    setUsers([...users, { id: newId, ...user }]);
    alert('User added successfully!');
  }

  const editUserHandler = (user) => {
    const updatedUsers = users.map(u => u.id === user.id ? user : u);
    setUsers(updatedUsers);
    alert('User updated successfully!');
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
            path="/edit" 
            element={
              <EditUserWithNavigate 
                editUserHandler={editUserHandler} 
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

function UserDetailWrapper({ users }) {
  const { id } = useParams();
  const user = users.find(u => String(u.id) === String(id));
  return <UserDetail user={user || {}} />;
}

export default App;
