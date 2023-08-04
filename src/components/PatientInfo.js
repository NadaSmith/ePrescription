import React from "react";
import add from "../images/add.png"
import "./PatientInfo.css"

function PatientInfo() {
    return(
        <div className="patient-info">
            <div className="top">
                <h1>Fred A Jockey, Male, 99 yrs</h1>
                <img src={add}></img>
            </div>

            <div className="bottom">
                <button>Add/Edit Drug Allergies</button>
                <button>Add/Edit Pharmacies</button>
            </div>

        </div>
    );
}

export default PatientInfo;