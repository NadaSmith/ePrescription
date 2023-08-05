import React, { useState, useEffect } from "react";
import { json } from "react-router-dom";

function PatientList() {
    const [patients, setPatients] = useState([]);
    const [newPatientName, setNewPatientName] = useState("");
    const [editingPatientId, setEditingNewPatientId] = useState(null);

    useEffect(() => {
        //fetch the initial data from local storage when the component mounts
        const storedPatient = JSON.parse(localStorage.getItem("patients")) || []
        setPatients(storedPatient);
    }, []);

    const handledAddPatient = () => {
        //Add a new patient to the list and update local storage
        const newPatient = { id: Date.now(), name: newPatientName };
        setPatients([...patients, newPatient]);
        setNewPatientName('');
        localStorage.setItem("patients", JSON.stringify([...patients, newPatient]));
    };

    const handleDeletePatient = (id) => {
        //delete a patient from the list and update local storage
        const updatedPatients = patients.filter((patient) => patient.id !== id);
        setPatients(updatedPatients);
        localStorage.setItem("patients", JSON.stringify(updatedPatients));
    }
}


export default PatientList;