import React from "react";

function PendingMedication() {
    //fetch pending medication data (from local storage or API)

    function handleEditMedication(medicationID) {
        //redirect to "Add Prescription" page with medicationId as a URL parameter
    }

    function handleDeleteMedication(medicationId) {
        //delete message and then show message confirming deletion
    }

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