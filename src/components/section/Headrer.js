import React from "react";
import "../../styles/Header.css";
import { Link } from "react-router-dom";

function Headrer() {
  const img = process.env.PUBLIC_URL + "/images/left.png";
  const Topimg = process.env.PUBLIC_URL + "/images/rocket.png";

  return (
    <>
      <div className="headrMain">
        <div className="leftContainer">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "70px",
            }}
          >
            {" "}
            <img src={Topimg} alt="" />
          </div>
          <p className="Headerheading">Grow Faster Together</p>
          <p className="HeaderPara">
            Find a mentor or Lead the path for someone <br />
            It’s a win win!
          </p>
          <div className="btnContainer">
            {" "}
            <div className="buttonheader">Find a Mentor</div>
            <div className="buttonheader">
              <Link to="/dashboard">Become a Mentor</Link>
            </div>
          </div>
        </div>
        <div className="rightContainer">
          <img src={img} alt="" style={{ width: "628px", height: "628px" }} />
        </div>
      </div>
    </>
  );
}

export default Headrer;
