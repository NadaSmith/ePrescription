//Dashboard will contain most of the components here: footer, header, medication history, prescription form, inactive and active meds, and drug allergy
import React from "react";
import { Link } from "react-router-dom";


//place to store all dashboard components
function DashboardPage()  {
    return (
        <div>
            <header>
                <img></img>
                <h1>DASHBOARD</h1>
                <h1>PATIENTS</h1>
            </header>
            <div>
                <h1>Welcome username</h1>
                <img></img>
                <button></button>
            </div>
            <div>
                <h1>Clinic Name</h1>
            </div>
            <div className="patient-info-section">
                <div>
                    <h1>Mr Patient's name, sex, age</h1>
                    <button>PLUS SIGN</button>
                    <div>
                        <button>Edit Patient Info</button>
                    </div>
                    <div>
                        <button>Add/Edit Drug Allergies</button>
                    </div>
                    <div>
                        <button>Add/Edit Pharmacies</button>
                    </div>
                </div>
                <div>
                    <h1>Coverage Details</h1>
                    <img></img>
                    <button>PLUS SIGN</button>
                </div>
                <div>
                    <button>Add Prescription</button>
                    <button>Add Patient Reported</button>
                </div>
            </div>
            <div className="add-medication">

            </div>
            {/*table of pending meds; in table add link to add prescription button*/}
            <div className="Pending medications">

            </div>
        </div>
    );
}

export default DashboardPage;

//these will be links