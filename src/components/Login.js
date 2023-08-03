import React from "react";
import { Link } from "react-router-dom";


export const Login = () => {
    return (
        <div>
            {/*Add the button to navigate to Dashboard*/}
            <Link to="/dashboard">
                <h2>Log In</h2>
                <button>Log in</button>
            </Link>
        </div>
    );
}


//Will update this component to a sign-in form with user authentication