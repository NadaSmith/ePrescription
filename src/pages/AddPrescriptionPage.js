import React, { useState } from "react";
import AddPrescriptionOptions from "../components/AddPrescriptionOptions";
import "./AddPrescriptionPage.css";

const AddPrescriptionPage = () => {
    //sample state to hold patient's med info
    const [medicationName, setMedicationName] = useState("");
    //add other prescription form fields as needed

    //function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        //create a new prescription objecgt with form data
        const newPrescription = {
            medicationName,
            //add other prescription properties here
        };

        //get existing prescription data from local storage or iniatialize an empty array
        const existingPrescriptions = JSON.parse(localStorage.getItem("prescription")) || [];

        //add the new rescriptno to the existing prescription array
        const updatedPrescriptions = [...existingPrescriptions, newPrescription];

        //store the updated prescriptions in local stoarge
        localStorage.setItem("prescriptions", JSON.stringify(updatedPrescriptions));

        //clear the form fields after successful submission
        setMedicationName("");

        //clear other fields as needed
    }

    return (
        <div className="add-prescription-page">
            <h1 className="first-bar">Add Prescription</h1>

            <AddPrescriptionOptions />

            <form onSubmit={handleSubmit}>
                <div className="third-bar">
                    <label>Search for a Diagnosis by name or ICD10 to select it.</label>
                    <input type="text"  placeholder="Diagnosis"></input>
                </div>

                <div className="fourth-bar">
                    <label>Search for a medication by name, then click the meidcation name to select it.</label>
                    <input type="text" value={medicationName} onChange={(e) => setMedicationName(e.target.value)} placeholder="Medication Name" required></input>
                </div>

                <div className="fifth-bar">
                    
                </div>

                <div className="sixth-bar">
                    
                </div>

                <div className="seventh-bar">
                    
                </div>

                <div className="eigth-bar">
                    
                </div>

                <div className="ninth-bar">
                    
                </div>

                <div className="tenth-bar">
                    
                </div>

                <div className="eleventh-bar">
                    <button type="submit">Save Prescription</button>
                </div>
            </form>


            
        </div>
    );
}

export default AddPrescriptionPage;