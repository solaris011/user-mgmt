import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const UserDetail = (props) => {
   const { id, name, email } = props.user;

   return (
      <>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
          <div style={{
             width: '500px',
             
             display: 'flex',
             alignItems: 'center',
             position: 'relative',
             backgroundColor: props.backgroundColor || '#ffffff',
             padding: '20px',
             borderRadius: '10px',
             marginBottom: '5px',
             boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
             boxSizing: 'border-box',
      
          }}>
             <img src={user} alt="user" style={{ width: '100px', height: '100px', marginRight: '10px' }} />
             <div style={{ flex: 1, textAlign: 'center', marginBottom: '10px' }}>
               <div style={{ marginBottom: '8px' }}>
                 <strong style={{ display: 'block', fontSize: '25px', color: '#444', padding: '5px' }}>User ID: {id}</strong>
               </div>
               <div style={{ fontWeight: 'bold', fontSize: '20px', padding: '5px' }}>{name}</div>
               <div style={{ color: '#555',  fontSize: '18px', padding: '5px' }}>{email}</div>
             </div>
          </div>
        </div>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'blue' }}>
            <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Go Back Home
            </button>
          </Link>
        </div>
      </>
   );
}

export default UserDetail;