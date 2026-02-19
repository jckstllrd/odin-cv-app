function PersonalForm() {
    return (
        <div className="personalFormContainer">
            <form action="">
                <div className="personalInfo">
                <label htmlFor="cvName">Name:</label>
                <input type="text" name="cvName" id="cvName" />
                <label htmlFor="email">Email:</label>
                <input type="email" name="cvEmail" id="cvEmail" />
                <label htmlFor="cvTel">Telephone Number:</label>
                <input type="tel" name="cvTel" id="cvTel" />
                </div>                
            </form>
        </div>
    )
}

export default PersonalForm