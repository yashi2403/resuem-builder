import React from "react";
import "./style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

  

function Fill(props) {
  return (
    <>
    
      <div
        className="personal"
        style={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "Reddit Mono, monospace",
          fontOpticalSizing: "auto",
          fontStyle: "normal",
        }}
      >
        <h2 style={{ marginBottom: "0.75rem" }}>Personal Details</h2>
        First Name:
        <input
          style={{
            minWidth: "100px",
            width: "fit-content",
            border: "1px solid #ccc",
            padding: "5px",
            boxSizing: "border-box",
            fontFamily: "Reddit Mono, monospace",
            fontOpticalSizing: "auto",
            fontStyle: "normal",
          }}
          type="text"
          value={props.name}
          name="fname"
          onChange={props.onchangeName}
        />
        <br />
        Email:
        <input
          style={{
            minWidth: "100px",
            width: "fit-content",
            border: "1px solid #ccc",
            padding: "5px",
            boxSizing: "border-box",
            fontFamily: "Reddit Mono, monospace",
            fontOpticalSizing: "auto",
            fontStyle: "normal",
          }}
          type="email"
          value={props.email}
          name="email"
          onChange={props.onchangeEmail}
        />
        <br/>
        contact:
        <input
          style={{
            minWidth: "100px",
            width: "fit-content",
            border: "1px solid #ccc",
            padding: "5px",
            boxSizing: "border-box",
            fontFamily: "Reddit Mono, monospace",
            fontOpticalSizing: "auto",
            fontStyle: "normal",
          }}
          type="contact"
          value={props.contactNumber}
          name="email"
          onChange={props. onchangecontactNumber}
          
        />
      </div>
      <div
        className="education"
        style={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "Reddit Mono, monospace",
          fontOpticalSizing: "auto",
          fontStyle: "normal",
          marginTop: "2rem",
        }}
      >
        <h2 style={{ marginBottom: "0.75rem" }}>Education Details</h2>
        <label> Name of the Institution:</label>
        <input
          style={{
            minWidth: "100px",
            width: "fit-content",
            border: "1px solid #ccc",
            padding: "5px",
            boxSizing: "border-box",
            fontFamily: "Reddit Mono, monospace",
            fontOpticalSizing: "auto",
            fontStyle: "normal",
          }}
          type="text"
          value={props.institution}
          name="institution"
          onChange={props.onchangeInstitution}
        />
        <br />
        Degree:
        <input
          style={{
            minWidth: "100px",
            width: "fit-content",
            border: "1px solid #ccc",
            padding: "5px",
            boxSizing: "border-box",
            fontFamily: "Reddit Mono, monospace",
            fontOpticalSizing: "auto",
            fontStyle: "normal",
          }}
          type="text"
          value={props.degree}
          name="degree"
          onChange={props.onchangeDegree}
        />
        <br />
        <label>Start Date:</label>
        <DatePicker
          selected={props.startDate}
          onChange={props.onStartDateChange}
        />
        <br />
        <label>End Date:</label>
        <DatePicker selected={props.endDate} onChange={props.onEndDateChange} />
        <br />
        location:
        <input
          style={{
            minWidth: "100px",
            width: "fit-content",
            border: "1px solid #ccc",
            padding: "5px",
            boxSizing: "border-box",
            fontFamily: "Reddit Mono, monospace",
            fontOpticalSizing: "auto",
            fontStyle: "normal",
          }}
          type="text"
          value={props.schoolLocation}
          name="location"
          onChange={props.onChangelocationval}
        />
        <br />
        <h2> Experience</h2>
        Company:
        <input
          style={{
            minWidth: "100px",
            width: "fit-content",
            border: "1px solid #ccc",
            padding: "5px",
            boxSizing: "border-box",
            fontFamily: "Reddit Mono, monospace",
            fontOpticalSizing: "auto",
            fontStyle: "normal",
          }}
          type="text"
          value={props.CompanyName}
          name="degree"
          onChange={props. onCompanyChange}
        />
        <br />
        Description:
        <textarea
          style={{
            minWidth: "100px",
            width: "fit-content",
            border: "1px solid #ccc",
            padding: "5px",
            boxSizing: "border-box",
            fontFamily: "Reddit Mono, monospace",
            fontOpticalSizing: "auto",
            fontStyle: "normal",
            maxHeight: "100px",
            overflowY: "auto",
          }}
          value={props.Description}
          name="Description"
          onChange={props.onDescChange}
        />
        <br />
        City:
        <input
          style={{
            minWidth: "100px",
            width: "fit-content",
            border: "1px solid #ccc",
            padding: "5px",
            boxSizing: "border-box",
            fontFamily: "Reddit Mono, monospace",
            fontOpticalSizing: "auto",
            fontStyle: "normal",
          }}
          type="text"
          value={props.CityName}
          name="degree"
          onChange={props.onCityChange}
        />
        <br />
        
        <button style={{
          minWidth:"70px",
          maxWidth: "150px",
          height: "40px",
          backgroundColor:"black",
          color: "white",
          padding: "5px 10px",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "all 0.3s ease",
          position: "relative",
          display: "inline-block",
          outline: "none",
          border: "1px solid #000",
          background: "black",
          zIndex: "0",
          margin: "0 auto",
}}
onClick={props.clearResume}>
  Clear Resume
</button>

      </div>
    </>
  );
}

export default Fill;