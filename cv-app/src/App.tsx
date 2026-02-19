import ExperienceForm from "./components/experienceForm"
import PersonalForm from "./components/personalForm"
import EducationForm from "./components/educationForm"
import "./styles/App.css"

function App() {
  return (
<div className="app-container">
    <div className="form-container">
      <PersonalForm />
      <ExperienceForm />
      <EducationForm />
    </div>
    <div className="cv-container">
      <div className="cv-template"></div>
    </div>
  </div>
  )
}

export default App