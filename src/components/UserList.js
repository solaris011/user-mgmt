import React from "react";
import UserCard from "./UserCard";
import { Link } from "react-router-dom";

const UserList = (props) => {
   // console.log(props);

   const deleteUserHandler = (id) => {
      props.getUserId(id);
   };

   // Always use props.users since App.js now handles the default users
   const users = props.users || [];

   const renderUserList = users.map((user, index) => {
      const backgroundColor = index % 2 === 0 ? '#f0f0f0' : '#d3d3d3'; // Light gray for even indices, darker gray for odd
      return <UserCard user={user}
       clickHandler={deleteUserHandler} 
       key={user.id}
       backgroundColor={backgroundColor}>

       </UserCard>;
   });
   return (
      <div className="ui main" style={{ marginTop: '20px', padding: '20px', backgroundColor: '#909090' }}>
         <div style={{ position: 'relative', marginBottom: '20px', height: '36px' }}>
           <h2 style={{ margin: 0, textAlign: 'center', position: 'absolute', left: '50%', transform: 'translateX(-50%)', width: 'max-content' }}>User list</h2>
           <div style={{ position: 'absolute', right: 0, top: 0 }}>
             <Link to="/add">
               <button className="ui button blue" style={{ height: '36px' }}>Add User</button>
             </Link>
           </div>
         </div>
         <div className="ui celled list">{renderUserList}</div>
   </div>
   );
};

export default UserList;