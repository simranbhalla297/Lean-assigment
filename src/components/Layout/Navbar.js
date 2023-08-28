import React from "react";
import "../../styles/Navbar.css";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  console.log = location.pathname;
  const logo = process.env.PUBLIC_URL + "/images/logo.png";
  const downArrow = process.env.PUBLIC_URL + "/images/down.png";

  return (
    <>
      <div className="navWrapper">
        <div className="logo">
          <img src={logo} alt="" style={{ height: "60px" }} />
        </div>
        <div className="navlink">
          <div style={{ display: "flex", alignItems: "center" }}>
            Filters{" "}
            <img
              src={downArrow}
              alt=""
              style={{ marginLeft: "10px", width: "18px", height: "8px" }}
            />
          </div>
          <div>About Us </div>
          <div>Blog</div>
        </div>
        {location.pathname === "/dashboard" ? (
          <></>
        ) : (
          <>
            <div className="EarningBtns">
              <button className="centerbtn">Earning calculator</button>
            </div>
            <div className="navBtns">
              <button className="btn">Login</button>
              <button className="btn">Signup</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Navbar;
