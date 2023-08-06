import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PatientListPage.css";
import PatientData from "../data/PatientData";
import NewPatientForm from "./NewPatientForm";
import PatientInfo from "../components/PatientInfo";


function PatientListPage() {
    const [patientData, setPatientData] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [isFormVisible, setIsFormVisible] = useState(false);    
    const [isEditMode, setIsEditMode] = useState(false);    
    const [editingPatient, setEditingPatient] = useState(null);
    const [name, setName] = useState(""); // Declare the state setters here
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const navigate = useNavigate();

    //function to show the form in add mode
    const showAddForm = () => {
        setIsFormVisible(true);
        setIsEditMode(false);
    };

    //function to show form in edit mode with selected pt
    const showEditForm = (patient) => {
        if (patient) {
            setIsFormVisible(true);
            setIsEditMode(true);

            // Set the form fields with the selected patient data
            setEditingPatient(patient);
        }
    };

    //function to hide the form
    const hideForm = () => {
        setIsFormVisible(false);

        //reset form fields
        setName('');
        setAge('');
        setGender('');
        setBirthDate('');
    };

    //fetch patient data from local storage during component mount
    useEffect(() => {
        const storedData = localStorage.getItem("patientData");
        if (storedData) {
            setPatientData(JSON.parse(storedData));
        } else {
            //use imported pt data if no data in local storage
            setPatientData(PatientData);
        }
    }, []);

    //function to handle search
    const handleSearch = () => {
        //finds the first patient that matches the search value
        const foundPatient = patientData.find((patient) => 
        patient.name.toLowerCase() === searchValue.toLowerCase()
        );
        
        if (foundPatient) {
            //pt found then navigate to dashboard page w/ pt Id as URL parameter
            navigate(`/dashboardpage/${foundPatient.id}`);
        } else {
            //pt not found then alert 
            alert("Patient not found.");
        }
    };

    //function to add a new patient from data
    const handleAddPatient = (newPatient) => {
        //assign a unique ID to the new pt object
        const uniqueID = Math.random();
        const newPatientWithID = { ...newPatient, id: uniqueID };

        //add the new pt w/ unique ID to the patientData array
        const updatedData = [...patientData, newPatientWithID];
        
        //save the updated patientData arry to local storage
        setPatientData(updatedData);
        localStorage.setItem("patientData", JSON.stringify(updatedData));
        
        setIsFormVisible(false);     //hide form after adding a new
    };

    //function to delete a patient from local storage
    const handleDeletePatient = (patientId) => {
        const updatedData = patientData.filter((patient) => patient.id !== patientId);
        setPatientData(updatedData);
        localStorage.setItem("patientData", JSON.stringify(updatedData));
    }

    // Function to handle editing a patient
    const handleEditPatient = (patientID, newData) => {
        const updatedData = patientData.map((patient) =>
            patient.id === patientID ? { ...patient, ...newData } : patient
        );
        setPatientData(updatedData);
        localStorage.setItem("patientData", JSON.stringify(updatedData));
        setIsFormVisible(false);
    };

    //function to handle clicking edit button
    const handleAddNewPatientClick = () => {
        setIsFormVisible(true);    //shows form when add new pt button is clicked
    }

    //function to set the pt to be edited
    const handleEditClick = (patient) => {
        setEditingPatient(patient);
        setIsFormVisible(true);    //shows form when edit button is clicked
    };

    function handleViewPatient(patientID) {
        // Redirect to the dashboard page, pass the pt ID as a URL parameter
        navigate(`/dashboardpage/${patientID}`);
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
                    <button onClick={showAddForm}>Add New Patient</button>
                </div>
                

                {/*place table with 5rows (Name, Age, Gender, Birth Date, row for button)*/}
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
                            <tr key={patient.id} patientData={patient}>
                                <td>{patient.name}</td>
                                <td>{patient.age}</td>
                                <td>{patient.gender}</td>
                                <td>{patient.birthDate}</td>
                                <td>
                                    <button onClick={() => handleViewPatient(patient.id)}>View</button>
                                    <button onClick={() => showEditForm(patient)}>Edit</button>
                                    <button onClick={() => handleDeletePatient(patient.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {isFormVisible && (
                <NewPatientForm 
                    onAddPatient={handleAddPatient} 
                    onEditPatient={handleEditPatient} 
                    onCancel={hideForm} 
                    isEditMode={isEditMode} 
                    initialPatientData={editingPatient}
                    name={name}
                    setName={setName}
                    age={age}
                    setAge={setAge}
                    gender={gender}
                    setGender={setGender}
                    birthDate={birthDate}
                    setBirthDate={setBirthDate}
                />
                )}
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