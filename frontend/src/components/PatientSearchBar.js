import React from 'react';


const PatientSearchBar = (props, {keyword, setKeyword}) => {
    const BarStyling = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "50%", 
        background:"#FFFFFF", 
        border:"0.5", 
        padding:"0.5rem",
    };

    
    
    return(
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"Search Patients..."}
     //onChange={(e) => setKeyword(e.target.value)} needs to be written
    />
    );
}

export default PatientSearchBar;