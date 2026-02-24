import "./styles/App.css";
import "./components/CV";
import CV from "./components/CV";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import GeneralInfoForm from "./components/GeneralInfoForm";

export default function App() {
  return (
    <>
      <div className="app-container">
        <div className="form-container">
          <h2>CV Information</h2>
          <GeneralInfoForm />
          <ExperienceForm />
          <EducationForm />
        </div>
        <div className="cv-container">
          <h2>CV</h2>
          <CV />
        </div>
      </div>
    </>
  );
}
