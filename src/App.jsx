import "./styles/App.css";
import "./components/CV";
import CV from "./components/CV";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import GeneralInfoForm from "./components/GeneralInfoForm";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  // let email = "";
  // let phone = "";
  // let experience = {};

  return (
    <>
      <div className="app-container">
        <div className="form-container">
          <h2>CV Information</h2>
          <GeneralInfoForm name={name} setName={setName} />
          <ExperienceForm />
          <EducationForm />
        </div>
        <div className="cv-container">
          <CV name={name} />
        </div>
      </div>
    </>
  );
}
