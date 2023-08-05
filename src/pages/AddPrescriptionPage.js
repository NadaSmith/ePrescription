import React, { useState } from "react";
import AddPrescriptionOptions from "../components/AddPrescriptionOptions";
import "./AddPrescriptionPage.css";
import exit from "../images/exit.png";
import PrescriptionForm from "../components/PrescriptionForm";

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
            <div className="add-prescription-page-title">
                <h1 className="first-bar">Add Prescription</h1>
                <img src={exit}></img>
            </div>

            <div className="add-prescription-form">
                <AddPrescriptionOptions />

                <PrescriptionForm />
            </div>

           

            
        </div>
    );
}

export default AddPrescriptionPage;