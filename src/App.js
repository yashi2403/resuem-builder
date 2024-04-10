import React, { useState } from "react";
import Fill from "./Fill";
import Resume from "./Resume";
import Education from "./Education";
import Exp from "./Exp";
import "react-datepicker/dist/react-datepicker.css";

function Header({ heading1, style, heading2 , phoneNumber }) {
  return (
    <div style={style}>
      <h1>{heading1}</h1>
      <h4> {heading2}</h4>
      <h5>{phoneNumber}</h5> 
    </div>
  );
}

function App() {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const[contact , setcontactValue] = useState("");
  const [contactValue, setContactValue] = useState("");
  const [degreeValue, setDegreeValue] = useState("");
  const [institutionValue, setInstitutionValue] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const[location , setLocation] = useState("");
  const [company, setCompany] = useState("");
  const [city, setCity] = useState("");
  const [des, setDes] = useState("");
  const clearResume = () => {
    setNameValue("");
    setEmailValue("");
    setcontactValue("");
    setInstitutionValue("");
    setDegreeValue("");
    setStartDate(null);
    setEndDate(null);
    setLocation("");
    setCompany("");
    setDes("");
    setCity("");
  };

  const onchangeInstitution = (event) => {
    setInstitutionValue(event.target.value);
  };

  const onchangeName = (event) => {
    setNameValue(event.target.value);
  };

  const onchangeEmail = (event) => {
    // Check if emailValue is empty before setting it
    if (!emailValue) {
      setEmailValue("✉️" + event.target.value);
    } else {
      // If emailValue is not empty, update it with the new value
      setEmailValue(event.target.value);
    }
  };
  const onchangecontact = (event) => {
    if(!contact){setcontactValue("🕿" + event.target.value);}
    else{
      setcontactValue(event.target.value);
    }
  };

  const onchangeDegree = (event) => {
    setDegreeValue(event.target.value);
  };
  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };
  const onchangelocation = (event) => {
    if(!location){setLocation("📌" + event.target.value);}
    else{
      setLocation(event.target.value);
    }
  };
  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleDesChange = (event) => {
    const inputValue = event.target.value;
    // Truncate description to 100 words
    const truncatedDes = inputValue.split(" ").slice(0, 100).join(" ");
    setDes(truncatedDes);
  };

  return (<>
  <div className="container">
      <h1 className="text">resume builder.</h1>
    </div>
    <div className="mainContainer" style={{ display: "flex" }}>
      <div
        style={{
          width: "40vw",
          marginTop: "5rem",
          marginLeft: "2rem",
          marginRight: "1rem",
          border: "2px solid #ccc",
          boxShadow: "0 5px 7px rgba(0, 0, 0, 0.1)",
          padding: "1rem",
        }}
      >
        <Fill
          style={{ marginTop: "4rem" }}
          name={nameValue}
          onchangeName={onchangeName}
          email={emailValue}
          onchangeEmail={onchangeEmail}
          institution={institutionValue}
          onchangeInstitution={onchangeInstitution}
          degree={degreeValue}
          onchangeDegree={onchangeDegree}
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={handleStartDateChange}
          onEndDateChange={handleEndDateChange}
          CompanyName={company}
          onCompanyChange={handleCompanyChange}
          CityName={city}
          onCityChange={handleCityChange}
          Description={des}
          onDescChange={handleDesChange}
          contactNumber = {contact}
          onchangecontactNumber = {onchangecontact}
          schoolLocation = {location}
          onChangelocationval = {onchangelocation}
          clearResume={clearResume}

        />
      </div>
      <div  className="ResumeContainer" style={{ width: "60vw", marginTop: "4rem" }}>
        <Resume>
          <Header
            heading1={nameValue}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              width: "100%",
              height: "25vh",
              backgroundColor: "#72A0C1",
              fontFamily: "Reddit Mono, monospace",
              fontOpticalSizing: "auto",
              fontStyle: "normal",
              textAlign: "center",
            }}
            heading2={emailValue}
            phoneNumber={contact}
          />
          <Education
            institutionName={institutionValue}
            degreeName={degreeValue}
            startDateof={startDate}
            endDateof={endDate}
            schoolLocationval = {location}
            style={{
              width: "100%",

              marginTop: "2rem",
              marginBottom: "1rem",
              backgroundColor: "white",
              fontFamily: "Reddit Mono, monospace",
              fontOpticalSizing: "auto",
              fontStyle: "normal",
              textAlign: "center",
            }}
          />
          <Exp
            Company={company}
            City={city}
            Description={des}
            style={{
              width: "100%",
              marginTop: "2rem",
              marginBottom: "1rem",
              backgroundColor: "white",
              fontFamily: "Reddit Mono, monospace",
              fontOpticalSizing: "auto",
              fontStyle: "normal",
              textAlign: "center",
            }}
          />
        </Resume>
      </div>
    </div></>
  );
}

export default App;
