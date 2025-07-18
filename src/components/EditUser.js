import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

class EditUser extends React.Component {
   constructor(props) {
      super(props)

      // React Router provides the user data through location state
      const { id, name, email } = props.location?.state?.contact || {};
      this.state = {
         id: id || '',
         name: name || '',
         email: email || ''
      }
   }

   update = (e) => {
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
      
      // Check if user with this email already exists (but allow the current user to keep their email)
      if (this.props.existingUsers && this.props.existingUsers.some(user => 
         user.email.toLowerCase() === this.state.email.toLowerCase() && user.id !== this.state.id)) {
         alert("A user with this email already exists!");
         return;
      }
      
      this.props.editUserHandler(this.state);

      // Navigate back to home page after updating user
      if (this.props.navigate) {
         this.props.navigate('/');
      }
   }

   render() {
      // If no user data is available, show error message
      if (!this.props.location?.state?.contact) {
        return (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
            <div style={{ textAlign: 'center' }}>
              <h2>No User Selected</h2>
              <p>Please select a user to edit from the user list.</p>
              <button className="ui button" onClick={() => this.props.navigate('/')}>
                Go Back Home
              </button>
            </div>
          </div>
        );
      }
      
      return (
         <>
           <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
             <button className="ui button" onClick={() => this.props.navigate('/')}>Go Back to Home</button>
           </div>
           <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
             <div className="ui main" style={{ width: '350px', backgroundColor: 'rgb(211, 211, 211)', padding: '24px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
               <div style={{ marginBottom: '20px' }}>
                 <h2 style={{ margin: 0, textAlign: 'center' }}>Edit User</h2>
               </div>

               {/* Change to Update form */}
               <form className="ui form" onSubmit={this.update}>
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
                 <button className="ui button blue" type="submit" style={{ width: '100%' }}>Update User</button>
               </form>
             </div>
           </div>
         </>
      );
   }
};

const EditUserWithNavigate = (props) => {
   const navigate = useNavigate();
   const location = useLocation();
   return <EditUser {...props} navigate={navigate} location={location} />;
};

export default EditUserWithNavigate;