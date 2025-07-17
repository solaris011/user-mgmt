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
      const allowedDomains = /\.(com|net|edu|org|io|us|mx)$/;
      if (!emailRegex.test(this.state.email)) {
         alert("Email must start with a letter and have a valid format!");
         return;
      }
      if (!allowedDomains.test(this.state.email)) {
         alert("Email domain must end with .com, .net, .org, .edu, .io, .us or .mx!");
         return;
      }
      
      // Check if user with this email already exists
      if (this.props.existingUsers && this.props.existingUsers.some(user => user.email.toLowerCase() === this.state.email.toLowerCase())) {
         alert("A user with this email already exists!");
         this.setState({ name: '', email: '' });
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
         <>
           <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
             <button className="ui button" onClick={() => this.props.navigate('/')}>Go Back to Home</button>
           </div>
           <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
             <div className="ui main" style={{ width: '350px', backgroundColor: '#fff', padding: '24px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
               <div style={{ marginBottom: '20px' }}>
                 <h2 style={{ margin: 0, textAlign: 'center' }}>Add User</h2>
               </div>
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
                 <button className="ui button blue" type="submit" style={{ width: '100%' }}>Add User</button>
               </form>
             </div>
           </div>
         </>
      );
   }
};

const AddUserWithNavigate = (props) => {
   const navigate = useNavigate();
   return <AddUser {...props} navigate={navigate} />;
};

export default AddUserWithNavigate;