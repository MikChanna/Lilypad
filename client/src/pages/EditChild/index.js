import React, { useState, useEffect } from "react";
import API from "../../utils/ChildAPI";
import "./style.css";
import moment from "moment";
import {useParams} from "react-router-dom";
import Navbar from "../../components/Navbar"


var avatarDirectory = process.env.PUBLIC_URL + "/assets/images/";

function EditChild() {

  const [oneChildData, setOneChildData] = useState({    
    firstName: "",
    month: "",
    day: "",
    year: "",
    allergies: "",
    bedtime: "",
    favoriteFood: "",
    favoriteActivity: "",
    image: "",
    id: ""
  });
  
  const {id} = useParams();

  useEffect(() => {
    API.getChild(id)
    .then((res) => {
      setOneChildData(res.data)
    })
  })
  
  const [childObject, setChildObject] = useState({    
    firstName: "",
    month: "",
    day: "",
    year: "",
    allergies: "",
    bedtime: "",
    favoriteFood: "",
    favoriteActivity: "",
    image: "",
    id: ""
  });

  const [radio, setRadio] = useState("boy_blondhair.png");


  function handleInputChange(event) {
    const { name, value } = event.target;

    setChildObject({...childObject, [name]: value });
  }

  function update(event) {
    event.preventDefault();
    console.log("update button clicked");
    console.log("id", id);

    API.updateChild(
      id,
      { $set: 
      {
      firstName: childObject.firstName,
      birthDate: JSON.stringify(childObject.month + "/" + childObject.day),
      age: moment(
        childObject.year + childObject.month + childObject.day,
        "YYYYMMDD"
      )
        .fromNow()
        .slice(0, 8),
      allergies: childObject.allergies,
      bedtime: childObject.bedtime,
      favoriteFood: childObject.favoriteFood,
      favoriteActivity: childObject.favoriteActivity,
      image: radio,
    }
  })
      // go back to homepage after adding child
      .then(function (res) {
        console.log("childObject", childObject)
        // window.location.replace("/home");
      })
      .catch((err) => console.log(err));
  }
  
  return (
    <div className = "ui container fluid">
      <Navbar/>
    <div>
      <h1> You are now editing {oneChildData.firstName}'s profile</h1>
      <div className = "ui link stackable centered">

          


      <form className="ui form">
        <div className="field">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={childObject.firstName}
            onChange={handleInputChange}
            placeholder = {oneChildData.firstName}
          />
        </div>
        <div className="field">

        <label >Select an avatar:</label>
        <div className="inline fields">
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  onChange={(e) => {
                    setRadio(e.target.value);
                  }}
                  value="boy_blondhair.png"
                  type="radio"
                  checked={radio === "boy_blondhair.png"}
                />
                <label>
                  <img
                    src={avatarDirectory + "boy_blondhair.png"}
                    alt="blondhair boy"
                  />
                </label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  onChange={(e) => {
                    setRadio(e.target.value);
                  }}
                  value="boy_darkhair.png"
                  type="radio"
                  checked={radio === "boy_darkhair.png"}
                />
                <label>
                  <img
                    src={avatarDirectory + "boy_darkhair.png"}
                    alt="darkhair boy"
                  />
                </label>
              </div>
            </div>
            <div className="field">
            <div className="ui radio checkbox">
            <input onChange={(e=>{setRadio(e.target.value)})} value="boy_redhair.png" type="radio" checked={radio === "boy_redhair.png"}/>
                <label><img src={avatarDirectory + "boy_redhair.png"} alt="redhair boy"/></label>
            </div>
            </div>
            <div className="field">
            <div className="ui radio checkbox">
            <input onChange={(e=>{setRadio(e.target.value)})} value="girl_blondhair.png" type="radio" checked={radio === "girl_blondhair.png"}/>
                <label><img src={avatarDirectory + "girl_blondhair.png"} alt="blondhair girl"/></label>
            </div>
            </div>
            <div className="field">
            <div className="ui radio checkbox">
            <input onChange={(e=>{setRadio(e.target.value)})} value="girl_darkhair.png" type="radio" checked={radio === "girl_darkhair.png"}/>
                <label><img src={avatarDirectory + "girl_darkhair.png"} alt="darkhair girl"/></label>
            </div>
            </div>
            <div className="field">
            <div className="ui radio checkbox">
            <input onChange={(e=>{setRadio(e.target.value)})} value="girl_redhair.png" type="radio" checked={radio === "girl_redhair.png"}/>
                <label><img src={avatarDirectory + "girl_redhair.png"} alt="redhair girl"/></label>
            </div>
            </div>
          </div>

          <label>Birthdate</label>
          <div className="field">
            <select
              onChange={handleInputChange}
              value={childObject.month}
              className="ui search dropdown"
              name="month"
            >
              <option value="">Month</option>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </div>
          <div className="field">
            <select
              onChange={handleInputChange}
              value={childObject.day}
              className="ui search dropdown"
              name="day"
            >
              <option value="">Date</option>
              <option value="01">1</option>
              <option value="02">2</option>
              <option value="03">3</option>
              <option value="04">4</option>
              <option value="05">5</option>
              <option value="06">6</option>
              <option value="07">7</option>
              <option value="08">8</option>
              <option value="09">9</option>
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
            <input
              onChange={handleInputChange}
              value={childObject.year}
              type="text"
              name="year"
              maxLength="4"
              placeholder="year"
            ></input>
          </div>
        </div>

        <div className="field">
          <label>Allergies</label>
          <input
            onChange={handleInputChange}
            value={childObject.allergies}
            type="text"
            name="allergies"
            placeholder={oneChildData.allergies}
          />
        </div>
        <div className="field">
          <label>Bedtime</label>
          <input
            onChange={handleInputChange}
            value={childObject.bedtime}
            type="text"
            name="bedtime"
            placeholder={oneChildData.bedtime}
          />
        </div>
        <div className="field">
          <label>Favorite Food</label>
          <input
            onChange={handleInputChange}
            value={childObject.favoriteFood}
            type="text"
            name="favoriteFood"
            placeholder={oneChildData.favoriteFood}
          />
        </div>
        <div className="field">
          <label>Favorite Activity</label>
          <input
            onChange={handleInputChange}
            value={childObject.favoriteActivity}
            type="text"
            name="favoriteActivity"
            placeholder={oneChildData.favoriteActivity}
          />
        </div>

        <button onClick={update} className="ui button" type="submit">
          Update
        </button>
       
      </form>
    </div>
    </div>
    </div>
  );
}

export default EditChild;
