import "../styles/CV.css";

export default function CV(props) {
  return (
    <div className="cv">
      <div className="header">
        <h3>{props.name}</h3>
        <div className="personal-details">
          <p className="email">{props.email}</p>
          <p className="tel">{props.tel}</p>
        </div>
      </div>
      <div className="experience">
        <h4>Experience:</h4>
        <ul className="experience-list">
          {props.experienceList.map((experience) => {
            <li key={experience.id}>
              <div className="experience-container">experience</div>
            </li>;
          })}
          <li>
            <div className="experience-container">
              <h5>Company Name</h5>
            </div>
          </li>
        </ul>
      </div>
      <div className="education">
        <h4>Education: </h4>
        <ul className="education-list">
          {props.educationList.map((education) => {
            <li key={education.id}>
              <div className="education-container">experience</div>
            </li>;
          })}
        </ul>
      </div>
    </div>
  );
}
