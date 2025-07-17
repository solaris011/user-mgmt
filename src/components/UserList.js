import React from "react";
import UserCard from "./UserCard";

const UserList = (props) => {
   // console.log(props);

   const deleteUserHandler = (id) => {
      props.getUserId(id);
   };

   const renderUserList = props.users.map((user) => {
      return <UserCard user={user} clickHandler={deleteUserHandler} key={user.id}></UserCard>;
   });
   return <div className="ui celled list">{renderUserList}</div>;
}

export default UserList;