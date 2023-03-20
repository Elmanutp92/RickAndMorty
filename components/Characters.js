import React from "react";

function Characters({ characters = [] }) {
  return (
    <div className="row">
      {characters.map((item, index) => (
        <div key={index} className="col mb-4">
          <div className="card" style={{ width: "180px" }}>
            <img src={item.image} alt={item.name}></img>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <hr></hr>
              <ul>
                <li>{item.location.name}</li>
                <li>{item.gender}</li>
                <li>{item.species}</li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Characters;
