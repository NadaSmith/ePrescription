import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function PatientListPage() {
    const [patientData, setPatientData] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const history = useHistory();

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
        patient.toLowerCase().includes(searchValue.toLowerCase())
        );
        //update the patientData state with filteredData
        setPatientData(filteredData);
    };


    function handleViewPatient(patientID) {
        //redirect tot he dashboard page, pass the pt ID as a URL parameter
        history.push(`/dashboard/${patientID}`);
    }
    
    return (
        <div>
            <header>Patient List</header>

            <h2>Find A Patient</h2>

            <form>
                <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                <button onClick={{handleSearch}}>Search</button>
                <h2>Show Recent Patients</h2>
            </form>

            <div>
                <h2>My Recent Patients</h2>
                <button>Add New Patient</button>
            </div>

            {/*place table with 5 rows (Name, Age, Gender, Birth Date, row for button)*/}
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Birth Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {patientData.map((patient, index) => (
                        <tr key={index}>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default PatientListPage;







//This page is shown after logging in
//
//Add new patient feature will be built later