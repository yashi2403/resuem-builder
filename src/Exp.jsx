export default function Exp({ Company, City, style, Description }) {
  return (
    <div style={style}>
      <h2>Experience</h2>
      <p>Company: {Company}</p>
      <p>City: {City}</p>
      <div style={{ width: "100%", whiteSpace: "pre-wrap" }}>
        <p>Description : {Description}</p>
      </div>
    </div>
  );
}
