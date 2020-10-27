import React from "react";

import "./style.css";

function AddChild(){

return <div>
    <h1> Add a new child!</h1>
    <form className="ui form">
        <div className="field">
            <label>First Name</label>
            <input type="text" name="firstName" placeholder="First Name"/>
        </div>
        <div className="field">
            <label>Allergies</label>
            <input type="text" name="allergies" placeholder="Allergy Type"/>
        </div>
        <div className="field">
            <label>Bedtime</label>
            <input type="text" name="bedtime" placeholder="9:00pm"/>
        </div>
        <div className="field">
            <label>Favorite Food</label>
            <input type="text" name="faveFood" placeholder="Name of Favorite Food"/>
        </div>
        <div className="field">
            <label>Favorite Activity</label>
            <input type="text" name="faveActivity" placeholder="Name of Favorite Activity"/>
        </div>

    <button class="ui button" type="submit">Save Data</button>
    </form>
</div>

}

export default AddChild;

