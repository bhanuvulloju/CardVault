import React, { useState } from "react";
// import form from './Form'

export default function Debit() {
  console.log();
  let myUniqueCard = (
    <div>
      <div className="card">
        <div className="card-title">
          <span className="bank-img">
            <img
              src={require("../images/sbi_logo.png")}
              alt=""
              width={"30px"}
              height={"30px"}
            />{" "}
          </span>
          <span className="bank-name">
            <i>SBI Bank</i>{" "}
          </span>

          <div></div>
          <div className="card-content">
            <hr />
            <i className="pt-text">mastercard.</i>
            <span>&nbsp;</span>
            {/* <span><img src={require("../images/contactless-payment.png")} alt="" width={'40px'} height={'40px'}
           style={{marginLeft:'90px'}}
           /></span> */}
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

            <p style={{ color: "black", fontSize: "18px" }}>Gordon Ramsay</p>
          </div>
        </div>
      </div>
    </div>
  );
  const [myscript, setmyscript] = useState([
    <div>
      <div className="card">
        <div className="card-title">
          <span className="bank-img">
            <img
              src={require("../images/sbi_logo.png")}
              alt=""
              width={"30px"}
              height={"30px"}
            />{" "}
          </span>
          <span className="bank-name">
            <i>SBI Bank</i>{" "}
          </span>

          <div></div>
          <div className="card-content">
            <hr />
            <i className="pt-text">mastercard.</i>
            <span>&nbsp;</span>
            {/* <span><img src={require("../images/contactless-payment.png")} alt="" width={'40px'} height={'40px'}
           style={{marginLeft:'90px'}}
           /></span> */}
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

            <p style={{ color: "black", fontSize: "18px" }}>Gordon Ramsay</p>
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
  let myscriptele = myscript.map((thing) => {
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
      {/* <h1>Hello</h1> */}
      {/* <h1>Hello</h1> */}
    </>
  );
}
