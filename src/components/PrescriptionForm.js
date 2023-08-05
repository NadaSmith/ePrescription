import React, { useState } from "react";
import { addPrescription } from "../data/Prescription";
import "./PrescriptionForm.css";
import add from "../images/add.png";
import star from "../images/star.png";


function PrescriptionForm() {

    //get form data and crete new prescription object
    const handleSubmit = () => {

    }

    //add new prescription to local storage

    //clear the form or perform other necessary actions


    return (
        <div className="prescription-form">
            <form onSubmit={handleSubmit} className="prescription-form-data">
                <div className="third-bar">
                    <label>Search for a Diagnosis by name or ICD10 to select it.</label>
                    <input type="text"  placeholder="Diagnosis"></input>
                </div>

                <div className="fourth-bar">
                    <label>Search for a medication by name, then click the meidcation name to select it.</label>
                    <input type="text"  placeholder="Medication Name" required></input>
                </div>

                <div className="fifth-bar">
                    <label>Current Strength:</label>
                    <input type="text"  placeholder="Strength"></input>
                </div>

                <div className="sixth-bar">
                    <label>Effective Date</label>
                    <input type="text"  placeholder="Date"></input>
                </div>

                <div className="seventh-bar">
                    <label>Patient Directions</label>
                    <textarea type="text"  placeholder="Patient Directions" ></textarea>
                    <p>140 Characters remaining</p>
                </div>

                <div className="eigth-row">

                    <div className="eigth-bar">
                        <label>Dispense</label>
                        <input type="text"  placeholder="Dispense"></input>
                    </div>

                    <div className="ninth-bar">
                        <label>Dispense Unit</label>
                        <input type="text"  placeholder="Capsule"></input>
                    </div>
                    
                    <div className="tenth-bar">
                        <label>Refills</label>
                        <input type="text"  placeholder="Number"></input>
                    </div>

                    <div className="eleventh-bar">
                        <label>Days Supply</label>
                        <input type="text"  placeholder="Amount of Days"></input>
                    </div>

                </div>

                <div className="actions">
                    <div className="add">
                        <img src={add}></img>
                        <p>Show Pharmacy Notes</p>
                    </div>

                    <div className="subs">
                        <button></button>
                        <p>No Substitutions</p>
                    </div>

                    <div className="favs">
                        <img src={star}></img>
                        <p>Save As Favorite</p>
                    </div>
                </div>


                <div className="twelfth-bar">
                    <button type="submit">Save Prescription</button>
                </div>
            </form>
            
            <div className="vertical-line"></div>

            <div className="drug-info">

                <p className="section-title">Plan Selected For This Medication</p>

                <div className="part-one">

                    <p>PBMA</p>
                    <p>Refresh</p>

                </div>

                <p className="next-title">Formulary Status</p>

                <div className="part-two">
                    <p>Formulary Status:</p>
                    <p>On Formulary (Not Preferred)</p>
                </div>

                <p>Copay Details</p>

                <div className="copay-details">

                    <p>Plan Specifc (Retail Pharamacy):</p>

                    <div className="part-three">
                        <p>Copay: 20%</p>
                        <p>Min: $20, Max: $0</p>
                        <p>Out of Pocket Range: $20 and Up</p>
                        <p>Supply: 30 Days</p>
                        <p>Plan Specific (Mail Order Pharamacy):</p>
                    </div>
                    
                    <div className="part-four">
                        <p>Copay: $30</p>
                        <p>Supply: 90 Days</p>
                    </div>
                    
                </div>

                <p className="bold">Alternative Medications</p>

                <p>Therapeutic Alternatives:</p>

                <div className="alternatives"> 
                    <p>Omeprazole 20 mg (oral - delayed release capsule)</p>
                    <p>Preferred Level 1</p>
                    <p>Reatil 20% 30D-5/0</p>
                    <p>Omeprazole 10mg (oral - delayed release capsule)</p>
                    <p>Preferred Level 1</p>
                    <p>Reatil 20% 30D-5/0</p>
                </div>
            </div>

        </div>
    );
}

export default PrescriptionForm;


//add medication input field
//when providers type med name, call the getMedicationInfo function from medication.js
//create form using JSX
//export function
//style form according to dosespot application's UI








//form creation: contains fields for 

