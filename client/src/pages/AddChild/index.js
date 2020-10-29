import React, {useState} from "react";
import API from "../../utils/ChildAPI"
import "./style.css";

function AddChild(){

const [childObject, setChildObject] = useState({firstName:"",allergies:"", bedtime:"", favoriteFood:"", favoriteActivity:""})


function handleInputChange(event){
    const {name, value} = event.target;
    setChildObject({...childObject, [name]: value})
}

function createChild(event) {
event.preventDefault();
console.log("save button clicked")


console.log("calling API to create child");
API.saveChild({
    firstName:childObject.firstName,
    // birthDate: stringify(childObject.month + childObject.day + childObject.year),
    allergies: childObject.allergies,
    bedtime: childObject.bedtime,
    favoriteFood: childObject.favoriteFood,
    favoriteActivity: childObject.favoriteActivity
})
    // go back to homepage after adding child
    .then(function() {
        window.location.replace("/")
    })
    .catch(err => console.log(err));
}
return <div>
    <h1> Add a new child!</h1>
    <form className="ui form">
        <div className="field">
            <label>First Name</label>
            <input onChange={handleInputChange} value={childObject.firstName} type="text" name="firstName" placeholder="First Name"/>
        </div>
        <div className="field">
   
        <label>Birthdate</label>
        <div className="field">
            <select className="ui search dropdown" name="month">
                <option value="">Month</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
            </select>
        </div>
        <div className="field">
            <select className="ui search dropdown" name="day">
                <option value="">Date</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
            </select>
        </div>
        <div className="field">
        <input type="text" name="year" maxLength="4" placeholder="Year"></input>
        </div>

    </div>

        <div className="field">
            <label>Allergies</label>
            <input onChange={handleInputChange} value={childObject.allergies} type="text" name="allergies" placeholder="Allergy Type"/>
        </div>
        <div className="field">
            <label>Bedtime</label>
            <input onChange={handleInputChange} value={childObject.bedtime} type="text" name="bedtime" placeholder="9:00pm"/>
        </div>
        <div className="field">
            <label>Favorite Food</label>
            <input onChange={handleInputChange} value={childObject.favoriteFood} type="text" name="favoriteFood" placeholder="Name of Favorite Food"/>
        </div>
        <div className="field">
            <label>Favorite Activity</label>
            <input onChange={handleInputChange} value={childObject.favoriteActivity} type="text" name="favoriteActivity" placeholder="Name of Favorite Activity"/>
        </div>

    <button onClick={createChild} className="ui button" type="submit">Save Data</button>
    </form>
</div>

}

export default AddChild;

