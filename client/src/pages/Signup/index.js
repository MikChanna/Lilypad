import React, {useState} from "react";
import "./style.css";
import API from "../../utils/UserAPI"



function Signup () {

  const [userObject, setUserObject] = useState({email:"", password:""});

  function handleInputChange(event) {
      const { name, value } = event.target;
      setUserObject({...userObject, [name]: value})
    };

//   // Does a post to the signup route. If successful, we are redirected to the members page
//   // Otherwise we log any errors
  function signUpUser(event) {
    event.preventDefault();
    console.log("sign up button clicked");

     // Handles updating component state when the user types into the input field
 

    if (!userObject.email || !userObject.password) {
      return;
    }
    console.log("calling API");
    API.createUser({
      email: userObject.email,
      password: userObject.password
    })
      .then(function() {
        
        window.location.replace("/");
        
      //   // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(err => console.log(err));
  }




    return <div className = "credForm">
        <form className = "ui form ">
            <div className = "field">
                <label>Email Address</label>
                <input onChange={handleInputChange} value= {userObject.email} type = "text" name="email" placeholder = "Email Address" id="email-input" />
            </div>
            <div className = "field">
                <label>Password</label>
                <input onChange={handleInputChange} value={userObject.password} type = "password" name = "password" placeholder = "Password" id="password-input" />
            </div>
            <button onClick ={signUpUser} className="ui button signup" type="submit">Sign Up</button>
        </form>
        <br/>
        <p>Or log in <a href="/login">here</a></p>
    </div>


}


export default Signup;