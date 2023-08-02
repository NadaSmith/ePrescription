import axios from "axios";

const API_KEY = "rTFoxUO4tQqvxskfFuTEl3Iu3jj0KPQVpMkRsqQ7";

export const getMedicationInfo = async (medicationName) => {
    try {
        const response = await axios.get(
            `https://api.fda.gov/drug/label.json?search=openfda.generic_name:${medicationName}&limit=1`,
            {
                headers: {
                    "Authorization": `Bearer ${API_KEY}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching medication information:", error);
        return null;
    }
};








//Get API key
//install Axios to make API requests
//Implement openFDA API requests
//itegrate med info in prescription form