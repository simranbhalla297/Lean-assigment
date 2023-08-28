import React from "react";
import "../../styles/Footer.css";

function Footer() {
  const socialIcons = [
    {
      img: process.env.PUBLIC_URL + "/images/in.png",
    },
    {
      img: process.env.PUBLIC_URL + "/images/twitter.png",
    },
    { img: process.env.PUBLIC_URL + "/images/insta.png" },
    {
      img: process.env.PUBLIC_URL + "/images/facebook.png",
    },
  ];
  return (
    <>
      <div className="mainFooter">
        <div className="footerwrapper">
          <div className="footerContainer">
            <div className="socialContainer">
              {socialIcons.map((list) => {
                return (
                  <div style={{ marginRight: "30px" }}>
                    <img
                      src={list.img}
                      alt=""
                      style={{ width: "44px", height: "44px" }}
                    />
                  </div>
                );
              })}
            </div>
            <div className="footerLinks">
              <div className="footerLinkSection">
                <a href="/">Contact us</a>
                <a href="/">Privacy policy</a>
                <a href="/">Terms of use</a>
              </div>

              <div className="footerLinkSection">
                <a href="/">Help Center</a>
                <a href="/">About Us</a>
                <a href="/">FAQ's</a>
              </div>
            </div>
          </div>
          <div>
            <p style={{ color: "rgba(245, 245, 245, 1)" }}>
              @ 2023 Mentorbridge. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
