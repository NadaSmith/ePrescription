import React, {createContext, useState } from "react";

//create a new context
const AppContext = createContext();

//create a provider component to wrap app and provide the context value
function AppProvider({ children }) {
    const [drugInfo, setDrugInfo] = useState(null);

    return(
        <AppContext.Provider value={{ drugInfo, setDrugInfo }}>
            {children}
        </AppContext.Provider>
    );
};


export { AppContext, AppProvider };