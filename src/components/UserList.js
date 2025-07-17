import React from "react";

const UserList = (props) => {
   console.log(props);

   const renderUserList = props.users.map((user) => {
      return (
         <div className="item" style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
            <div className="content" style={{ flex: 1 }}>
               <div className="header">{user.name}</div>
               <div>{user.email}</div>
            </div>
            <i className="trash alternate outline icon large" style={{ color: 'red', cursor: 'pointer', position: 'absolute', right: '15px' }}></i>
         </div>
      );
   });
   return <div className="ui celled list">{renderUserList}</div>;
}

export default UserList;