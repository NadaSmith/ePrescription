import { useNavigate } from "react-router-dom";
import React from "react";
import './LoginPage.css';


function LoginPage() {
    const navigate = useNavigate();

    function handleLogin() {
        navigate('/patient-ist');
    }

    return (
        <div className="login">
            <h1>Log In</h1>

            <form className="login-box">

                <div className="username">
                    <label>Username</label>
                    <input type="text"></input>
                </div>

                <div className="password"> 
                    <label>Password</label>
                    <input type="text"></input>
                </div>

            </form>

            <div className="checkbox"> 
                <button></button>
                <p>Remember me next time</p>
            </div>

            <div className="button">
                {/*add the button to navigate to PatientListPage*/}
                <button onClick={handleLogin}>Log In</button>
                <button>Forgot Password</button>
            </div>
        </div>
    );
}

export default LoginPage;

//Will update this component to a sign-in form with user authentication