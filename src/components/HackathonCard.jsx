import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBCardSubTitle,
  MDBCol,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import Timer from "./Timer";
import "../style/Hackathoncards.css";
import Tick from "../assets/icons/tick.png";

const HackathonCards = ({ title, img, time, endDate, startDate }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/details");
  };

  // Determine the class based on the time value
  const getTimeClass = () => {
    switch (time) {
      case "Upcoming":
        return "time-upcoming";
      case "Active":
        return "time-active";
      case "Past":
        return "time-past";
      default:
        return ""; 
    }
  };

  return (
    <MDBCol className="d-flex justify-content-center">
      <MDBCard className="customcardsnew">
        <MDBCardImage className="imageshowcard" src={img} position="top" />
        <MDBCardBody>
          <MDBCardSubTitle className={`cardtime ${getTimeClass()}`}>
            {time}
          </MDBCardSubTitle>
          <MDBCardTitle className="custom-card-titlenew">{title}</MDBCardTitle>
          <Timer endDate={endDate} startDate={startDate} />
          <button className="participate-btn" onClick={handleButtonClick}>
            <img className="Imagetick" src={Tick} alt=""/>Participate Now
          </button>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default HackathonCards;
