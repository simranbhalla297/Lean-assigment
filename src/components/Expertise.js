import React from "react";
import "../styles/Expertise.css";
function NewScreen() {
  const images = [
    {
      img: process.env.PUBLIC_URL + "/images/amazon.png",
    },
    {
      img: process.env.PUBLIC_URL + "/images/Meta.png",
    },
    {
      img: process.env.PUBLIC_URL + "/images/amazon.png",
    },
  ];
  const imagesList = [
    {
      img: process.env.PUBLIC_URL + "/images/uiux.png",
    },
    {
      img: process.env.PUBLIC_URL + "/images/Product.png",
    },
    {
      img: process.env.PUBLIC_URL + "/images/Marketing.png",
    },
    {
      img: process.env.PUBLIC_URL + "/images/Data.png",
    },
    {
      img: process.env.PUBLIC_URL + "/images/Testing.png",
    },
  ];
  return (
    <>
      <div className="Wrapper">
        <div className="container-main">
          <h2 className="top_heading">Find the expertises from </h2>
          <div className="imageSection1">
            {images.map((list) => {
              return (
                <div>
                  <img src={list.img} alt="img" />
                </div>
              );
            })}
          </div>
          <h2 className="headingTwo	">Make your career growth in </h2>
          <div className="imageSection2">
            {imagesList.map((list) => {
              return (
                <div style={{ height: "145px" }}>
                  <img
                    src={list.img}
                    alt="img"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default NewScreen;
