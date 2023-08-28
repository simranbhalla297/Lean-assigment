import React from "react";
import "../styles/Dashboard.css";
import DashBoardMain from "../components/section/DashBoardMain";
import Layout from "../components/Layout/Layout";

function Dashboard(props) {
  const image1 = process.env.PUBLIC_URL + "/images/image1.png";
  const image2 = process.env.PUBLIC_URL + "/images/image2.png";
  const image3 = process.env.PUBLIC_URL + "/images/image3.png";
  var right = process.env.PUBLIC_URL + "/images/right.png";
  var left = process.env.PUBLIC_URL + "/images/leftarrow.png";
  var profile = process.env.PUBLIC_URL + "/images/neha.png";

  const menuOptions = [
    {
      text: "Home",
      icon: process.env.PUBLIC_URL + "/images/home.png",
    },
    {
      text: "Bookings",
      icon: process.env.PUBLIC_URL + "/images/phone.png",
    },
    {
      text: "Queries",
      icon: process.env.PUBLIC_URL + "/images/message.png",
    },
    {
      text: "Schedules",
      icon: process.env.PUBLIC_URL + "/images/calender.png",
    },
    {
      text: "Services",
      icon: process.env.PUBLIC_URL + "/images/user.png",
    },
    {
      text: "Profile",
      icon: process.env.PUBLIC_URL + "/images/user.png",
    },
    {
      text: "Invite & Earn",
      icon: process.env.PUBLIC_URL + "/images/mail.png",
    },
    {
      text: "Rewards",
      icon: process.env.PUBLIC_URL + "/images/gift.png",
    },
    {
      text: "Logout",
      icon: process.env.PUBLIC_URL + "/images/logout.png",
    },
  ];
  return (
    <Layout>
      <div style={{ paddingBottom: "20px" }}>
        <div className="dashWrapper">
          <div className="sidebar">
            <div className="profilepic">
              <img src={profile} alt="" />
              <h4>Neha Bhat</h4>
            </div>
            {menuOptions.map((list) => {
              return (
                <>
                  <div className="menuList">
                    <img
                      src={list.icon}
                      alt=""
                      style={{ marginRight: "19px" }}
                    />
                    <p>{list.text}</p>
                  </div>
                </>
              );
            })}
          </div>
          <DashBoardMain />
          <div className="mainRightBox">
            <img
              src={left}
              alt=""
              style={{ marginRight: "50px", width: "24px", height: "38px" }}
            />
            <div className="rightbar">
              <div className="img1">
                {" "}
                <img src={image1} alt="" />
              </div>
              <div className="img2">
                {" "}
                <img src={image2} alt="" />
              </div>
              <div className="img2">
                {" "}
                <img src={image3} alt="" />
              </div>
            </div>
            <img
              src={right}
              alt=""
              style={{ marginLeft: "50px", width: "24px", height: "38px" }}
            />
          </div>
        </div>
      </div>{" "}
    </Layout>
  );
}

export default Dashboard;
