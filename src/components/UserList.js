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
         <h2 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>User list</span>
            <Link to="/add">
               <button className="ui button blue">Add User</button>
            </Link>
         </h2>
         <div className="ui celled list">{renderUserList}</div>
   </div>
   );
};

export default UserList;