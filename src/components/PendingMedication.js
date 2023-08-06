import React, { useEffect, useState } from "react";
import { useAppContext } from "./AppContext";
import "./PendingMedication.css";
import ReactModal from "react-modal";
import Modal from "react-modal"
import { Link } from "react-router-dom";

function PendingMedication({  }) {
    const [pendingMedicationData, setPendingMedicationData] = useState([]);
    const { fetchedData, drugInfo, isModalOpen, setIsModalOpen, setDrugInfo } = useAppContext();

    const handleViewMedication = (medication) => {
        //set druginfo in the context
        setDrugInfo(medication);
        //opens the modal
        setIsModalOpen(true);
    };
   
    const handleDeleteMedication = (medicationId) => {
        //show confirmation message and then remove the medication from list
        if (window.confirm("Are you sure you want to delete this medication?")) {
            const updatedPendingMedicationData = pendingMedicationData.filter(
                (medication) => medication.id !== medicationId
            );
            //update the local stat with the updated list
            setPendingMedicationData(updatedPendingMedicationData);
            //updated the local storage with updated list
            localStorage.setItem(
                "pendingMedications",
                JSON.stringify(updatedPendingMedicationData)
            );
        }
    };

    useEffect(() => {
        const storedData = localStorage.getItem("pendingMedications");
        if (storedData) {
            setPendingMedicationData(JSON.parse(storedData));
        }
    }, []);

    return (
        <ReactModal
            isOpen={true}
            onRequestClose={() => setIsModalOpen(false)}
            contentLabel="Pending Medication"
        >
            <div className="pending-medication">
                <p> Pending Medications</p>
            </div>
            

            <div className="select">
                
                <div className="select-all">
                    <button></button>
                    <p>Select All</p>
                </div>

                <div className="search-bar">
                    <label>Search:</label>
                    <input type="text"></input>
                </div>
            </div>

            <table className="pending-table">

                <tr>
                    <th>
                        <></>
                    </th>
                    <th>Medication</th>
                    <th>Dispense</th>
                    <th>Date</th>
                    <th>Refills</th>
                    <th>Prescriber</th>
                    <th>Pharmacy</th>
                    <th>
                        <></>
                    </th>

                    {/*Map through pending medicaiton data and display rows*/}
                </tr>

                <tbody>
                    {/*Display medication data in rows*/}
                    {fetchedData &&
                        fetchedData.results.map((medication, index) => (
                        <tr key={index}>
                            <td className="select-all">
                                <button></button>
                            </td>
                            <td>{medication.term}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <select>
                                    <option>Actions</option>
                                    <option onClick={() => handleViewMedication(medication)}>Edit</option>
                                    <option onClick={() => handleDeleteMedication(medication.id)}>Delete</option>
                                </select>
                            </td>
                        </tr>  
                    ))}
                     
               </tbody>
            </table>

            <div >
                <button>
                    <Link to="/dashboardpage/:patientID">Finish</Link>
                </button>
            </div>

            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                contentLabel="Medication Details"
            >
                <h2>Medication Details</h2>
                {/* Display the selected medication information here */}
                {/* For example: */}
                {drugInfo && <p>Medication Name: {drugInfo.name}</p>}

                <button onClick={() => setIsModalOpen(false)}>Close Modal</button>
            </Modal>
        </ReactModal>
    );
};

export default PendingMedication;