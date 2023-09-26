import axios from "axios";

// Create an instance of axios with a custom base URL
export const axiosInstance = axios.create({
    baseURL: "http://localhost:3002", // Replace with your actual backend URL
});


