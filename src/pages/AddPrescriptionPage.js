import React, { useEffect, useState } from "react";

const AddPrescriptionPage = () => {
    //sample state to hold patient's med info
    const [medication, setMedication] = useState(null);

    //function to fetch medication data from an external API
    const fetchMedicationData = async () => {
        try {
            const response = await fetch('API_ENDPOINT')    //replace with my endpoint
            if (!response.ok) {
                throw new Error('Failed to fetch');
            }
            const data = await response.json();
            setMedication(data);
        }   catch (error) {
            console.error('Error fecthcing medication data:', error);
        }
    };

    //useEffect hook to fetch medication data when the componenet mounts
    useEffect(() => {
        fetchMedicationData();
    }, []);

    return (
        <div>
            <h2 className="first-bar">Add Prescription</h2>

            <div className="second-bar">
                <button className="clicked-button">Medication</button>
                <button>Supply</button>
                <button>Compound</button>
            </div>

            <div className="third-bar">
                <label>Search for a Diagnosis by name or ICD10 to select it.</label>
                <input></input>
            </div>

            <div className="fourth-bar">
                <label>Search for a medication by name, then click the meidcation name to select it.</label>
                <input></input>
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
                
            </div>



            
        </div>
    );
}

export default AddPrescriptionPage;