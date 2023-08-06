import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import "./PendingMedication.css";

function PendingMedication() {
    const { drugInfo } = useContext(AppContext);

    //fetch pending medication data (from local storage or API)
    function fetchPendingMeidcationData() {
        if (storedData) {
            return JSON.parse(storedData);
        } else {
            return [];   //return an empty arra if no data found
        }
    };

    const pendingMedicationData = fetchPendingMeidcationData();

    //function to handle edit medication
    function handleEditMedication(medicationID) {
        //redirect to "Add Prescription" page with medicationId as a URL parameter
        //use history.push method
    }

    //function to handle delete medication
    function handleDeleteMedication(medicationId) {
        //show a confirmation message and then remove the medication from the list
        const updatedPendingMedicationData = pendingMedicationData.filter(
            (medication) => medication.id !== medicationId
        );
        //update the local storage with the updated list
        localStorage.setItem(
            "pendingMedications", JSON.stringify(updatedPendingMedicationData)
        );
    };

    return (
        <div>
            <h2> Pending Medication</h2>

            <div>
                {/* put check box with select all option*/}
            </div>

            <table>

                <tr>
                    <th></th>
                    <th>Medication</th>
                    <th>Dispense</th>
                    <th>Date</th>
                    <th>Refills</th>
                    <th>Prescriber</th>
                    <th>Pharmacy</th>
                    <th></th>

                    {/*Map through pending medicaiton data and display rows*/}
                </tr>

                <tbody>
                    {/*Display medication data in rows*/}

                    <tr>
                        {/*Display medication data in column*/}
                        <td>{/*Display medication information*/}</td>
                        <td>
                            <select>
                                <option>Actions</option>
                                <option onClick={() => handleEditMedication(medication.id)}>Edit</option>
                                <option onClick={() => handleDeleteMedication(medication.id)}>Delete</option>
                            </select>
                        </td>
                    </tr>   
               </tbody>
            </table>
        </div>
    );
};

export default PendingMedication;