export default function GeneralInfoForm(props) {
  return (
    <>
      <form action="">
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            value={props.name}
            onChange={(event) => props.setName(event.target.value)}
          />
        </label>
      </form>
    </>
  );
}
