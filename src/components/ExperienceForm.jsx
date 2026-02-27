import { useState } from "react";

let nextId = 0;

function ExperienceView({
  expState,
  experiences,
  setExpState,
  setExperiences,
}) {
  console.log("experiences: ", experiences);

  if (expState === null) {
    return (
      <div className="experiences">
        <ul className="experience-list">
          {experiences.map((experienceItem) => {
            if (experienceItem) {
              return (
                <li key={experienceItem.id}>
                  <div
                    className="experience-container"
                    onClick={() => {
                      setExpState(experienceItem.id);
                    }}
                  >
                    <p>
                      ID: {experienceItem.id} -{" "}
                      {experienceItem.experience.school} -{" "}
                      {experienceItem.experience.degree}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      console.log("currently deleting: ", experienceItem);
                      let newArray = experiences.filter(
                        (item) => item.id !== experienceItem.id,
                      );
                      setExperiences(newArray);
                    }}
                  >
                    X
                  </button>
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
        <button className="button" onClick={() => setExpState("new")}>
          Add Experience
        </button>
      </div>
    );
  } else if (expState === "new") {
    return (
      <div className="new-experience">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();

            setExperiences([
              ...experiences,
              {
                id: nextId++,
                experience: {
                  school: e.target.school.value,
                  degree: e.target.degree.value,
                  startDate: e.target.startDate.value,
                  endDate: e.target.endDate.value,
                },
              }, // and one new item at the end
            ]);
            setExpState(null);
          }}
        >
          <label htmlFor="school">
            School: <input type="text" name="school" id="school" />
          </label>
          <label htmlFor="degree">
            Degree: <input type="text" name="degree" id="degree" />
          </label>
          <label htmlFor="startDate">
            <input type="date" name="startDate" id="startDate" />
          </label>
          <label htmlFor="endDate">
            <input type="date" name="endDate" id="endDate" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  } else {
    let activeExperience = experiences.find(
      (experience) => experience.id === expState,
    );

    console.log(
      "The experience input that we're looking at is: ",
      activeExperience,
    );

    return (
      <div className="update-container">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            console.log(e);

            setExperiences(
              experiences.map((experience) => {
                if (experience.id === activeExperience.id) {
                  return {
                    id: experience.id,
                    experience: {
                      school: e.target.school.value,
                      degree: e.target.degree.value,
                      startDate: e.target.startDate.value,
                      endDate: e.target.endDate.value,
                    },
                  };
                } else {
                  return experience;
                }
              }),
            );
            setExpState(null);
          }}
        >
          <label htmlFor="school">
            School:{" "}
            <input
              type="text"
              name="school"
              id="school"
              defaultValue={activeExperience.experience.school}
            />
          </label>
          <label htmlFor="degree">
            Degree:{" "}
            <input
              type="text"
              name="degree"
              id="degree"
              defaultValue={activeExperience.experience.degree}
            />
          </label>
          <label htmlFor="startDate">
            <input
              type="date"
              name="startDate"
              id="startDate"
              defaultValue={activeExperience.experience.startDate}
            />
          </label>
          <label htmlFor="endDate">
            <input
              type="date"
              name="endDate"
              id="endDate"
              defaultValue={activeExperience.experience.endDate}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default function ExperienceForm(props) {
  const { experiences, setExperiences } = props;
  const [expState, setExpState] = useState(null);

  return (
    <>
      <div className="form-container">
        <h2>Experience</h2>
        <ExperienceView
          expState={expState}
          experiences={experiences}
          setExpState={setExpState}
          setExperiences={setExperiences}
        />
      </div>
    </>
  );
}
