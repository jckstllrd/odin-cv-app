export default function CV(props) {
  return (
    <>
      <div className="cv">
        <h3>{props.name}</h3>
        <br />
        <section>
          <h4>Experience:</h4>
          <ul>
            <li>
              <div className="experience-container">
                <h5>Company Name</h5>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
