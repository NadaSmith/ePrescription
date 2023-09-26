import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegistrationPage.css";
import { axiosInstance } from "../axiosConfig";


function RegistrationPage() {

    const [credentials, setCredentials] = useState({
        firstname: "",
        lastname: "",
        email: "",
        location: "",
        occupation: "",
        username: "",
        password: "",
    });

    const navigate = useNavigate();

    function handleChange(e) {
        const { name, value } = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value,
        }));
    }

    async function handleRegistration() {
        try {
            // Send a POST request to your backend's registration endpoint
            const response = await axiosInstance.post("/api/auth/register", credentials);

            // Assuming your backend sends back a success message upon successful registration
            const successMessage = response.data.message;
            console.log("Registration Success:", successMessage);

            // Redirect to the login page or any other appropriate page
            navigate("/patientlistpage");

        } catch (error) {
            console.error("Registration failed:", error);
            // Handle registration failure, show an error message, etc.
        }
    }
    
   

    // function handleLogin() {
    //     //navigate to the patientlistpage when the "Log In" button is clicked
    //     navigate("/patientlistpage");
    // }

    return (
        <div className="registration">

            <h1>Registration Form</h1>

            <form autoComplete="off" className="registration-box">
                
                <div className="username"> 
                    <label>First Name</label>
                    <input 
                        type="text"
                        name="firstname"
                        value={credentials.firstname}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="username"> 
                    <label>Last Name</label>
                    <input 
                        type="text"
                        name="lastname"
                        value={credentials.lastname}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="username"> 
                    <label>Email</label>
                    <input 
                        type="text"
                        name="email"
                        value={credentials.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <div className="username">
                    <label>Office Location</label>
                    <input 
                        type="text"
                        name="location"
                        value={credentials.location}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="username"> 
                    <label>Occupation</label>
                    <input 
                        type="text"
                        name="occupation"
                        value={credentials.occupation}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="username"> 
                    <label>Username</label>
                    <input 
                        type="text"
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="password"> 
                    <label>Password</label>
                    <input 
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                    />
                </div>

            </form>

            <div className="registration-button">
                
                <button className="first-button" onClick={handleRegistration}>Register</button>
                
            
            </div>
        </div>
    );
}

export default RegistrationPage;

