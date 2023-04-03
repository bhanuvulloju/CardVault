import React, { useState } from "react";
import Form, { name } from "./Form";
// import Form from './Form'

export default function Credit({ getName, obj }) {
  const [activeName, setActivename] = useState("Gordon Ramsay");
  let myUniqueCard = (
    <div>
      <div className="card">
        <div className="card-title">
          <span className="bank-img">
            <img
              src={require("../images/icici.png")}
              alt=""
              width={"30px"}
              height={"30px"}
            />{" "}
          </span>
          <span className="bank-name">
            <i>ICICI Bank</i>{" "}
          </span>

          <div>
            <span class="oval">
              <span class="line"></span>
            </span>
          </div>
          <div className="card-content">
            <i className="pt-text">Platinum</i>
            <span>&nbsp;</span>
            <span>
              <img
                src={require("../images/contactless-payment.png")}
                alt=""
                width={"40px"}
                height={"40px"}
                style={{ marginLeft: "90px" }}
              />
            </span>
          </div>
          <div className="card-info">
            <p style={{ color: "black" }}>
              4033 &nbsp;6432 &nbsp;5444 &nbsp;2478
            </p>
            <p
              style={{ color: "black", fontSize: "11px", marginBottom: "10px" }}
              className="cont"
            >
              VALID FROM.
              <span style={{ color: "white" }}>&nbsp; 07/22</span>&nbsp;&nbsp;
              <span>VALID THRU.</span>
              <span style={{ color: "white" }}>&nbsp; 07/26</span>
            </p>

            <p style={{ color: "black", fontSize: "18px" }}>{activeName} </p>
          </div>
        </div>
      </div>
    </div>
  );
  let myscriptele;

  // console.log(name)
  const [myscript, setmyscript] = useState([
    <div>
      <div className="card">
        <div className="card-title">
          <span className="bank-img">
            <img
              src={require("../images/icici.png")}
              alt=""
              width={"30px"}
              height={"30px"}
            />{" "}
          </span>
          <span className="bank-name">
            <i>ICICI Bank</i>{" "}
          </span>

          <div>
            <span class="oval">
              <span class="line"></span>
            </span>
          </div>
          <div className="card-content">
            <i className="pt-text">Platinum</i>
            <span>&nbsp;</span>
            <span>
              <img
                src={require("../images/contactless-payment.png")}
                alt=""
                width={"40px"}
                height={"40px"}
                style={{ marginLeft: "90px" }}
              />
            </span>
          </div>
          <div className="card-info">
            <p style={{ color: "black" }}>
              4033 &nbsp;6432 &nbsp;5444 &nbsp;2478
            </p>
            <p
              style={{ color: "black", fontSize: "11px", marginBottom: "10px" }}
              className="cont"
            >
              VALID FROM.
              <span style={{ color: "white" }}>&nbsp; 07/22</span>&nbsp;&nbsp;
              <span>VALID THRU.</span>
              <span style={{ color: "white" }}>&nbsp; {obj["exp"]}</span>
            </p>

            <p style={{ color: "black", fontSize: "18px" }}>{obj["name"]} </p>
          </div>
        </div>
      </div>
    </div>,
  ]);
  const addCardBtn = () => {
    console.log("pressed");
    setmyscript((prevState) => [...prevState, myUniqueCard]);
    // setActivename("karan")
  };
  myscriptele = myscript.map((thing) => {
    return (
      <li>
        {thing}
        <br />
      </li>
    );
  });
  console.log(myscriptele);

  return (
    <>
      <button onClick={addCardBtn} className="addCard">
        Add Card
      </button>
      <div className="cardDisplay">{myscriptele}</div>

      <br />
    </>
  );
}
