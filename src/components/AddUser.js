import React from "react";

class AddUser extends React.Component {
   render() {
      return (
         <div className="ui main" style={{ marginTop: '20px', padding: '20px' }}>
            <h2>Add User</h2>
            <form className="ui form">
               <div className="field">
                  <label>Name:</label>
                  <input type="text" name="name" placeholder="Name" />  
               </div>
               <div className="field">
                  <label>Email:</label>
                  <input type="text" name="email" placeholder="Email" />  
               </div>
               <button className="ui button blue" type="submit">Add User</button>
            </form>
         </div>
      );   
   }
}

export default AddUser;