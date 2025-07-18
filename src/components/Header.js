import React from 'react';
import logo from '../logo.svg';


const Header = () => {
  return (

    <div className="ui menu" style={{ backgroundColor: '#909090', border: 'none', textAlign: 'center',
      padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src={logo} alt="Logo" style={{ height: '50px', marginRight: '5px' }} />
      <h1 style={{ margin: '0', fontSize: '28px', color: 'black' }}>
        Welcome to the User Manager System, Admin!
      </h1>
    </div>
  );
};

export default Header;
