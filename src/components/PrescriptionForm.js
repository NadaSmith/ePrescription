import React, { useState } from "react";
import { addPrescription } from "../data/Prescription";


function PrescriptionForm() {

    //get form data and crete new prescription object
    const handleSubmit = () => {

    }

    //add new prescription to local storage

    //clear the form or perform other necessary actions


    return (
        <div>
            <h1>Add Prescription</h1>

            <div>
                <div>Medication</div>
                <div>Supply</div>
                <div>Compound</div>
            </div>

           <div>
                <div className="steps">
                    <h2>Step 1</h2>

                    <label>Search for a Diagnosis by name or ICD10 to select it. </label>
                    <input type="text" value={medicationName} onChange={} />

                    <label>Search for a medication </label>
                    <input type="text" value={medicationName} onChange={} />
                </div>

                {/*display med info from openFDA*/}

                <div className="my-favorites">

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

