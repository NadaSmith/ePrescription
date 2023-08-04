//the header will include logo for login page
//it will include logo, dashboard, and patient list on dashboard page
import React from "react";
import logo from "../images/logo.png";
import "./Header.css";

function Header() {
    return (
        <header>
            <img src={logo} alt="Dose pill spot" />
            <div className="header">
                <h1 className="darkened">Dashbaord</h1>
                <h1 className="lightened">Patients</h1>
                <h1 className="darkened">Logout</h1>
            </div>
        </header>
    );
}

export default Header;