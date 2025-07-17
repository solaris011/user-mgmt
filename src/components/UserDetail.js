import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const UserDetail = (props) => {
   const { id, name, email } = props.user;

   return (
      <>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
          <div className="item" style={{
             width: '455px',
             display: 'flex',
             alignItems: 'center',
             position: 'relative',
             backgroundColor: props.backgroundColor || '#ffffff',
             padding: '20px',
             borderRadius: '10px',
             marginBottom: '5px',
             boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
             <img className="ui avatar image" src={user} alt="user" style={{ width: '100px', height: '100px', marginRight: '20px' }} />
             <div style={{ flex: 1, textAlign: 'center', marginBottom: '10px' }}>
               <div style={{ marginBottom: '8px' }}>
                 <strong style={{ display: 'block', fontSize: '25px', color: '#444' }}>User ID: {id}</strong>
               </div>
               <div className="header" style={{ fontWeight: 'bold', fontSize: '20px' }}>{name}</div>
               <div style={{ color: '#555',  fontSize: '18px' }}>{email}</div>
             </div>
          </div>
        </div>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'blue' }}>
            <button className="ui button">
              Go Back Home
            </button>
          </Link>
        </div>
      </>
   );
}

export default UserDetail;