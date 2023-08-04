import React from "react";
import "./NameBanner.css";
import lock from "../images/lock.png"

function NameBanner() {
    return(
        <div className="name-banner">
            <div className="name-lock">
                <h1>Welcome <emb>Dr. Ayronada Smith</emb></h1>
                <img src={lock}></img>
            </div>
            <button>10 Provider Notifications</button>
        </div>
    );
}

export default NameBanner;