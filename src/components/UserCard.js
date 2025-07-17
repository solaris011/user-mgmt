import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const CardUser = (props) => {
   const { id, name, email } = props.user;

   return (
      <div className="item" style={{ 
         display: 'flex', 
         alignItems: 'center', 
         position: 'relative', 
         backgroundColor: props.backgroundColor || '#ffffff',
         padding: '10px',
         borderRadius: '5px',
         marginBottom: '5px'
      }}>
         <img className="ui avatar image" src={user} alt="user" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
         <div className="content" style={{ flex: 1 }}>
            <div className="header">{name}</div>
            <div>{email}</div>
         </div>
         <i 
            className="trash alternate outline icon large" style={{ color: 'red', cursor: 'pointer', position: 'absolute', right: '15px' }}
            onClick={() => props.clickHandler(id)}
         ></i>
      </div>
   );
}

export default CardUser;