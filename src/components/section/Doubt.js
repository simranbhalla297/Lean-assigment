import React from "react";
import "../../styles/Doubt.css";

function Doubt() {
  const doubtArray = [
    {
      text: "What is the approval criteria to be a Mentor?",
    },
    {
      text: "How does Mentor Bridge work for Mentors?",
    },
    {
      text: "Can I charge fees of my choice?                                 ",
    },
    { text: "Can I get guidance on how to be a mentor ?        " },
  ];
  return (
    <>
      <div className="dbtwrapper">
        <p className="Doubtheading">Let’s Clear your Doubts!</p>

        <div style={{}}>
          <div className="doubtWrapper">
            {doubtArray.map((list) => {
              return (
                <>
                  <div className="doubtBox">
                    <p>{list.text} </p>
                    <p>+</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Doubt;
