let nextId = 0;

export default function ExperienceForm(props) {
  const { experienceList, setExperienceList } = props;
  console.log(experienceList);

  return (
    <>
      <div className="form-container">
        <h2>Experience</h2>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            console.log(e);

            setExperienceList([
              ...experienceList,
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
    </>
  );
}
