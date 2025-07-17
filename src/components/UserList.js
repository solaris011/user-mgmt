import React from "react";
import UserCard from "./UserCard";

const UserList = (props) => {
   // console.log(props);

   const renderUserList = props.users.map((user) => {
      return (
         <UserCard user={user}></UserCard>
      );
   });
   return <div className="ui celled list">{renderUserList}</div>;
}

export default UserList;