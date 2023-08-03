import { useNavigate } from "react-router-dom";
import React from "react";
import './LoginPage.css';


function LoginPage() {
    const navigate = useNavigate();

    function handleLogin() {
        navigate('/patient-list');
    }

    return (
        <div>
            {/*add the button to navigate to PatientListPage*/}
            <h1>Login Page</h1>
            <button onClick={handleLogin}>Log in</button>
           
        </div>
    );
}

export default LoginPage;

//Will update this component to a sign-in form with user authentication