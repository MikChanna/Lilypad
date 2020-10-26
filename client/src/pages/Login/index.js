import React from "react";
import "./style.css";

function Login () {


return <div className = "credForm">
    <form className = "ui form">
        <div className = "field">
            <label>Email Address</label>
            <input type = "text" name="email" placeholder = "Email Address" id="email-input" />
        </div>
        <div className = "field">
            <label>Password</label>
            <input type = "text" name = "password" placeholder = "Password" id="password-input" />
        </div>
        <button class="ui button" type="submit">Log in</button>
    </form>
    <br/>
    <p>Or sign up <a href="/signup">here</a></p>
</div>

}

export default Login;


