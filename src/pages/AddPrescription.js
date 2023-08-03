import React, { useEffect, useState } from "react";

const addPrescription = () => {
    //sample state to hold patient's med info
    const [patient, setPatient] = useState({
        name: 'Ibuprofen',
        dosage: '800mg',
        frequency: 'Every 4-6 hours',
    });

    //fetches pt's med info from API
    useEffect(() => {
        //
        fetchMedicationData()
            .then((data) => {
                setMedication(data);
            });
    }, []);

    //function to change patient info
    const medicationChange = () => {
        //update the state with new pt info
        setPatient({
            name: "Jane Smith",
            age: 42,
            diagnosis: "Diabetes",
        });
    }

    return (
        <div>
            <h2>Patient Medication</h2>
            <p>Name: {medication.name}</p>
            <p>Dosage: {medication.dosage}</p>
            <p>Frequency: {medication.frequency}</p>
        </div>
    );
}

export default addPrescription;