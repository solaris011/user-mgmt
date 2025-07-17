import React from "react";
import { useNavigate } from "react-router-dom";

class AddUser extends React.Component {
   state = {
      name: '',
      email: ''
   }

   add = (e) => {
      e.preventDefault();
      if (this.state.name === "" || this.state.email === "") {
         alert("All the fields are required!");
         return;
      }
      // Validate name field - only letters and spaces allowed
      const nameRegex = /^[a-zA-Z\s]+$/;
      if (!nameRegex.test(this.state.name)) {
         alert("Name field should only contain letters and spaces!");
         return;
      }
      // Validate email field - must start with letter, have @, period in domain, and specific extensions
      const emailRegex = /^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const allowedDomains = /\.(com|net|edu|mx)$/;
      if (!emailRegex.test(this.state.email)) {
         alert("Email must start with a letter and have a valid format!");
         return;
      }
      if (!allowedDomains.test(this.state.email)) {
         alert("Email domain must end with .com, .net, .edu, or .mx!");
         return;
      }
      this.props.addUserHandler(this.state);
      this.setState({ name: '', email: '' });
      // Navigate back to home page after adding user
      if (this.props.navigate) {
         this.props.navigate('/');
      }
   }

   render() {
      return (
         <div className="ui main" style={{ marginTop: '20px', padding: '20px' }}>
            <h2>Add User</h2>
            <form className="ui form" onSubmit={this.add}>
               <div className="field">
                  <label>Name:</label>
                  <input type="text" name="name" 
                  placeholder="Name" 
                  value={this.state.name}
                  onChange={ (e) => this.setState({name: e.target.value})}/>  
               </div>
               <div className="field">
                  <label>Email:</label>
                  <input type="text" name="email" 
                  placeholder="Email" 
                  value={this.state.email}
                  onChange={ (e) => this.setState({email: e.target.value})}/>  
               </div>
               <button className="ui button blue" type="submit">Add User</button>
            </form>
         </div>
      );   
   }
}

// Wrapper component to use useNavigate with class component
const AddUserWithNavigate = (props) => {
   const navigate = useNavigate();
   return <AddUser {...props} navigate={navigate} />;
};

export default AddUserWithNavigate;