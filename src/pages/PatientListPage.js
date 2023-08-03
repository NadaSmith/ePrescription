import React from "react";
import { Link } from "react-router-dom";

function PatientListPage() {
    return (
        <div>
            <form>
                <header>Patient List</header>
                <h1>Find A Patient</h1>
                <input type="text" value={patientName}></input>
                <button>Search</button>
                <button>Show Recent Patient</button>
            </form>

            <div>
                <h2>My Recent Patients</h2>
                <button>Add New Patient</button>
            </div>

            {/*place table with 5 rows (Name, Age, Gender, Birth Date, row for button)*/}

        </div>
    );
}

export default PatientListPage;







//This page is shown after logging in
//
//Add new patient feature will be built later