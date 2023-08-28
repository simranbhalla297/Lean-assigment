import React from "react";
import "../../styles/Clients.css";
function Clients() {
  var right = process.env.PUBLIC_URL + "/images/right.png";
  var left = process.env.PUBLIC_URL + "/images/leftarrow.png";

  var clientPro = [
    {
      img: process.env.PUBLIC_URL + "/images/alisa.png",
      founder: "Founder,XOXO",
      name: "Alisa",
      text: "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu",
    },
    {
      img: process.env.PUBLIC_URL + "/images/Michel.png",
      founder: "Manager,QWERTY",
      name: "Michel",
      text: "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu",
    },
    {
      img: process.env.PUBLIC_URL + "/images/Lee.png",
      founder: "HR Director, Meta",
      name: "Lee Cooper",
      text: "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu",
    },
  ];
  return (
    <>
      <div style={{ position: "relative" }}>
        <img
          src={left}
          alt=""
          style={{ position: "absolute", top: "50%", left: "21px" }}
        />
        <div style={{ width: "80%", margin: "auto" }}>
          <p className="Clientheading">What our Clients says about us</p>
          <div className="container">
            {clientPro.map((list) => {
              return (
                <>
                  <div className="clientWrapper">
                    <div className="para">
                      {" "}
                      <p>{list.text}</p>
                      <div className="clientInfo">
                        <p className="para2">{list.name}</p>
                        <div>
                          <img src={list.img} alt="" />
                        </div>
                      </div>{" "}
                      <p className="founderName">{list.founder}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <img
          src={right}
          alt=""
          style={{ position: "absolute", top: "50%", right: "21px" }}
        />
      </div>
    </>
  );
}

export default Clients;
