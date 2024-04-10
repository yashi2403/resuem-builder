import React from "react";

function Education({
  institutionName,
  degreeName,
  style,
  startDateof,
  endDateof,
  schoolLocationval
}) {
  // Format start date and end date into strings
  const formattedStartDate = startDateof
    ? startDateof.toLocaleDateString()
    : "";
  const formattedEndDate = endDateof ? endDateof.toLocaleDateString() : "";

  return (
    <div style={style}>
      <h2>Education Details</h2>
      <p>Institution: {institutionName}</p>
      <p>Degree: {degreeName}</p>
      <p>Start: {formattedStartDate}</p>
      <p>End: {formattedEndDate}</p>
      <p>Location:{schoolLocationval}</p>
    </div>
  );
}

export default Education;
