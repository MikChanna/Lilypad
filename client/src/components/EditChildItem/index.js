import React from "react";



var avatarDirectory = process.env.PUBLIC_URL + "/assets/images/";

function EditChildItem({data}) {



  return (
    
        <div className="ui five column grid centered editChildCard">
           
          <div className="column">
            <div className="ui fluid card" >
              <div className="image">
                <img src={avatarDirectory + data.image} alt = "child avatar"/>
              </div>
              <div className="content">
                <strong><p className="header">{data.firstName}</p></strong>
              </div>
              <button value = {data._id}>Edit</button>
            </div>
          </div>
    
    
          

    </div>
  
  );
}

export default EditChildItem;
