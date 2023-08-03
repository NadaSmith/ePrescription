import React from "react";
import { Link } from "react-router-dom";


function LoginPage() {
    return (
        <div className="login-page">
            {/*Add the button to navigate to PatientListPage*/}
            <Link to="/patientlistpage">
                <h2>Log In</h2>
                <button className="login">Log in</button>
            </Link>
        </div>
    );
}

export default LoginPage;

//Will update this component to a sign-in form with user authentication