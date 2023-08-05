import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PatientListPage.css";
import PatientData from "../data/PatientData";

function PatientListPage() {
    const [patientData, setPatientData] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    //fetch patient data from local storage during component mount
    useEffect(() => {
        const storedData = localStorage.getItem("patientData");
        if (storedData) {
            setPatientData(JSON.parse(storedData));
        }
    }, []);

    //function to handle search
    const handleSearch = () => {
        //filter the patientData based on the searchValue
        const filteredData = patientData.filter((patient) => 
        patient.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        //update the patientData state with filteredData
        setPatientData(filteredData);
    };

    //function to add a new patient from data
    const handleAddPatient = () => {
        const updatedData = [...patientData, patientData];
        setPatientData(updatedData);
        localStorage.setItem("patientData", JSON.stringify(updatedData));
    };

    //function to delete a patient from local storage
    const handleDeletePatient = (patientId) => {
        const updatedData = patientData.filter((patient) => patient.id !== patientId);
        setPatientData(updatedData);
        localStorage.setItem("patientData", JSON.stringify(updatedData));
    }

    //function to edit a patient data
    const handleEditPatient = (patientID, newData) => {
        const updatedData = patientData.map((patient) =>
            patient.id === patientID ? { ...patient, ...newData} : patient
        );
        setPatientData(updatedData);
        localStorage.setItem("patientData", JSON.stringify(updatedData))
    };

    //function to view patient details
    function handleViewPatient(patientID) {
        //redirect tot he dashboard page, pass the pt ID as a URL parameter
        navigate(`/dashboard/${patientID}`);
    }
    
    return (
        <div className="patient-list">
            <h1>Patient List</h1>

            <div className="patient-list-form">

                <h2 className="find-a-patient">Find A Patient</h2>

                <form className="search-patient">
                    <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                    <button onClick={handleSearch}>Search</button>
                    <p>Show Recent Patients</p>
                </form>

                <div className="recent-patient">
                    <h2>My Recent Patients</h2>
                    <button onClick={handleAddPatient}>Add New Patient</button>
                </div>

                {/*place table with 5 rows (Name, Age, Gender, Birth Date, row for button)*/}
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Birth Date</th>
                            <th>
                                <></>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {patientData.map((patient) => (
                            <tr key={patient.id}>
                                <td>{patient.name}</td>
                                <td>{patient.age}</td>
                                <td>{patient.gender}</td>
                                <td>{patient.birthDate}</td>
                                <td>
                                    <button onClick={() => handleViewPatient(patient.id)}>View</button>
                                    <button onClick={() => handleEditPatient(patient.id, {name: "New Name", age: "New Age"})}>Edit</button>
                                    <button onClick={() => handleDeletePatient(patient.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default PatientListPage;


//When click on view button in chart will go to dashboardpage
//When press search button after inputting will got to dshboardpage




//This page is shown after logging in
//
//Add new patient feature will be built later