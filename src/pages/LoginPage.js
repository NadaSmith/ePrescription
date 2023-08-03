import React from "react";
import { Link } from "react-router-dom";
import './LoginPage.css';


function LoginPage() {
    return (
        <div>
            {/*add the button to navigate to PatientListPage*/}
            <Link to="/patientlistpage">
                <button>Log in</button>
            </Link>
        </div>
    );
}

export default LoginPage;

//Will update this component to a sign-in form with user authentication