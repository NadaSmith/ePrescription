//Dashboard will contain most of the components here: footer, header, medication history, prescription form, inactive and active meds, and drug allergy
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import NameBanner from "../components/NameBanner";
import PatientInfo from "../components/PatientInfo";
import OfficeName from "../components/OfficeName";
import "./DashboardPage.css";
import Insurance from "../components/Insurance";
import AddPrescription from "../components/AddPrescription";
import AddPatientReported from "../components/AddPatientReported";
import DrugAllergy from "../components/DrugAllergy";
import Alert from "../components/Alert";



//place to store all dashboard components
function DashboardPage()   {
    const { patientId } = useParams();         //get the patientID from the URL parameter

    useEffect(() => {
        //fetch medication data from OpenFDA API and update the state; but will focus on local storage functionality right now.
        const fetchMedicationData = () => {
            const storedData = localStorage.getItem("medicatonData");
            if (storedData) {
                return JSON.parse(storedData);
            } else {
                return [];    //return an empty arry if no daya found
            }
        };

        const medicationData = fetchMedicationData();

        fetchMedicationData();
    }, []);


    return (
        <div className="dashboard-page">
            <Header />

            <NameBanner id="custom-banner"/>

            <OfficeName />

            <hr></hr>

            <div className="top-row">
                <PatientInfo />

                <Insurance />

                <div className="add-prescription-button-dashboard">
                    <AddPrescription className="first-button" />

                    <AddPatientReported />
                </div>
            </div>
        
            <div className="second-row">
                <DrugAllergy />

                <Alert />
            </div>

            <div className="add-medication">
              
            </div>

            {/*table of pending meds; in table add link to add prescription button*/}
            <div className="pending-medications">

            </div>
        </div>
    );
}

export default DashboardPage;

//these will be links