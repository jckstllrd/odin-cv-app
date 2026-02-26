import "./styles/App.css";
import "./components/CV";
import CV from "./components/CV";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import GeneralInfoForm from "./components/GeneralInfoForm";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [experienceList, setExperienceList] = useState([]);
  const [educationList, setEducationList] = useState([]);

  return (
    <>
      <div className="app-container">
        <div className="form-container">
          <h2>CV Information</h2>
          <GeneralInfoForm
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            tel={tel}
            setTel={setTel}
          />
          <ExperienceForm
            experienceList={experienceList}
            setExperienceList={setExperienceList}
          />
          <EducationForm
            educationList={educationList}
            setEducationList={setEducationList}
          />
        </div>
        <div className="cv-container">
          <CV
            name={name}
            email={email}
            tel={tel}
            experienceList={experienceList}
            educationList={educationList}
          />
        </div>
      </div>
    </>
  );
}
