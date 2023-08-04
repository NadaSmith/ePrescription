import React from "react";

function Insurance() {
    return(
        <div>
            <div>
                <h1>Coverage Details</h1>
                <button></button>
            </div>

            <form>
                <label>plan:</label>
                <select>
                    <option value={PBMA}>PBMA</option>
                    <option value={Aetna}>Aetna</option>
                    <option value={UnitedHealthcare}>UnitedHealthcare</option>
                    <option value={Medicaid}>Medicaid</option>
                </select>
            </form>
        </div>
    );
}


export default Insurance;