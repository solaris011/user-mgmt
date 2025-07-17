// import logo from '../logo.svg';
import React from 'react';
import '../App.css';
import Header from './Header';
import AddUser from './AddUser';
import UserList from './UserList';

function App() {
  const users = [
    {
      id: 1,
      name: 'Michael Scott',
      email: 'michael@dundermifflin.com'
    },
    {
      id: 2,
      name: 'Dwight Schrute',
      email: 'dwight@dundermifflin.com'
    },
    {
      id: 3,
      name: 'Jim Halpert',
      email: 'jim@dundermifflin.com'
    },
    {
      id: 4,
      name: 'Pam Beesly',
      email: 'pam@dundermifflin.com'
    },
    {
      id: 5,
      name: 'Ryan Howard',
      email: 'ryan@dundermifflin.com'
    },
    {
      id: 6,
      name: 'Kelly Kapoor',
      email: 'kelly@dundermifflin.com'
    }
  ]
  return (
    <div className="ui container">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Header />
      <AddUser />
      <UserList users={users} />
    </div>
  );
}

export default App;
