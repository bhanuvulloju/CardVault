import React from "react";


export default function Home() {
  return (
    <div className="container">
      <div className="text-container-2">
      <div className="text-container">
        <p>
          <h2> Worried about your card numbers and CVVs !!</h2>
        </p>
        <br />
        <h4>
          <i>
            Here is your 🛅Vault to store them securely and get them whenever
            you need immediately
          </i>
        </h4>
        <br />
        <h4>So, What are you waiting for...</h4>
        </div>
        <img
          src={require("../images/28804563key-animated-gif-3.gif")}
          alt=""
          className="key-gif"
        />
        <div className="fillit">
          <br />
          <span>
            {" "}
            <p style={{color:'rgb(125, 55, 131)',fontWeight:'bold'}}>
              <i> Fill your details and save the cards</i>
            </p>
          </span>
          <span>
            <button className="form-button" ><a href="/form">Form</a></button>
          </span>
        </div>
      </div>
      <div>
        <img
          src={require("../images/man.png")}
          alt=""
          width={"200px"}
          height={"300px"}
          className="man-img"
        />
      </div>
    </div>
  );
}
