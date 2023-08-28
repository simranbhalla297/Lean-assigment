import React from "react";
import "../../styles/Dashboard.css";
export default function DashBoardMain() {
  const down = process.env.PUBLIC_URL + "/images/down.png";

  const list = [
    {
      text: "Add availability",
    },
    {
      text: "Complete your profile",
    },
    {
      text: "Share a post",
    },
    {
      text: "Connect payout",
    },
  ];
  return (
    <>
      <div className="mainbar">
        <h2 className="headingTop">Hi Neha!</h2>
        <div className="mainContainer">
          <div className="topbox">
            <h4>Welcome to Mentor Bridge</h4>
            <p>Your Journey as a mentor begins here</p>
          </div>
          <div className="mentorList">
            <div className="">
              {list.map((iten) => {
                return (
                  <div className="listMentor">
                    <h4>{iten.text}</h4>
                    <img src={down} alt="" />{" "}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
