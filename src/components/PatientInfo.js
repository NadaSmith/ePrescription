import React from "react";
import add from "../images/add.png"
import "./PatientInfo.css"
import PatientData from "../data/PatientData";

function PatientInfo() {
    return(
        <div className="patient-info">
            <div className="top">
            <h1>{PatientData[0].name}, {PatientData[0].gender}, {PatientData[0].age} </h1>
                <img src={add}></img>
            </div>

            <div className="bottom">
                <button className="drug">Add/Edit Drug Allergies</button>
                <button className="pharm">Add/Edit Pharmacies</button>
            </div>

        </div>
    ); 
}

export default PatientInfo;