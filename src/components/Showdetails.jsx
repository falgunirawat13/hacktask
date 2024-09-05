import React from "react";
import "../style/Showdetails.css";
import img9 from "../assets/icons/carbon_skill-level-basic.svg";
import img10 from "../assets/icons/clock.png";


const Header = ({ title, startTime }) => (
  <div className="header">
    <div className="start-time">
      <span className="emoji"></span>
      <img
        src={img10}
        alt=""
        style={{ marginRight: "2%", marginLeft: "-2%" }}
      />
      {startTime}
    </div>
    <h1 className="title">{title}</h1>
    <p className="description">
      Identify the class to which each butterfly belongs to
    </p>
    <button className="easy-button">
      <span className="emoji"></span>
      <img src={img9} alt="" style={{ marginRight: "2%", marginLeft: "-2%" }} />
      Easy
    </button>
  </div>
);

const Overview = ({ content }) => (
  <>
    <div className="overview">
      <div className="overview-header">
        <h2 className="overview-title">Overview</h2>
        <div className="button-group">
          <button className="edit-button">Edit</button>
          <button className="delete-button">Delete</button>
        </div>
      </div>
    </div>
    <div className="contentclass">
      <p className="overviewnewcontent">{content}</p>
    </div>
  </>
);
const Showdetails = () => {
  const startTime = "Starts on 17th Jun'22 09:00 PM (India Standard Time)";
  const title = "Data Sprint 72 - Butterfly Identification";
  const overviewContent = `Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.
    <br /><br />
    An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are required to build an efficient model.
    <br/><br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, nobis ea? Obcaecati error alias modi. Ipsum eveniet possimus deserunt vero?
    Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.
    <br /><br />
    An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are required to build an efficient model.
 
    `;

  return (
    <>
      <Header title={title} startTime={startTime} />
      <Overview
        content={<span dangerouslySetInnerHTML={{ __html: overviewContent }} />}
      />
    </>
  );
};

export default Showdetails;
