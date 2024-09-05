import React from "react";
import { MDBRow } from "mdb-react-ui-kit";
import "../style/CardLayout.css";
import HackathonCard from "./HackathonCard";
import image1 from "../assets/cardimage/Group 1000002771.png";
import image2 from "../assets/cardimage/Group 1000002766.png";
import image3 from "../assets/cardimage/Group 1000002767.png";
import image4 from "../assets/cardimage/Group 1000002772.png";
import image5 from "../assets/cardimage/Group 1000002773.png";
import image6 from "../assets/cardimage/Group 1000002466.png";
import "../style/Hackathoncards.css";
export default function App() {
  const data = [
    {
      time: "Upcoming",
      startDate: "2024-09-11T23:59:59Z",
      endDate: "2024-12-31T23:59:59Z",
      img: image1,
      title: "Data Science BootCamp - Graded Datathon",
      desc: "Starts In",
    },
    {
      time: "Upcoming",
      startDate: "2024-09-11T23:59:59Z",
      endDate: "2024-12-31T23:59:59Z",
      img: image2,
      title: "Data Sprint 72 - Butterfly Identification",
      desc: "Starts In",
    },

    {
      time: "Active",
      startDate: "2024-09-01T23:59:59Z",
      endDate: "2024-09-04T23:59:59Z",
      img: image3,
      title: "Data Sprint 71 - Weather Recognition",
      desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },

    {
        time: "Active",
        startDate: "2024-09-01T23:59:59Z",
        endDate: "2024-09-04T23:59:59Z",
        img: image4,
        title: "Data Sprint 70 - Airline Passenger Satisfaction",
        desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      },

    {
      time: "Past",
      startDate: "2024-09-01T23:59:59Z",
      endDate: "2024-09-02T23:59:59Z",
      img: image5,
      title: "Engineering Graduates Employement Outcomes",
      desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
        time: "Past",
        startDate: "2024-09-01T23:59:59Z",
        endDate: "2024-09-02T23:59:59Z",
        img: image6,
        title: "Travel Insurance Claim Prediction",
        desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      },
  ];

  return (
    <div className="showcardlayout">
      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
        {data.map((value, index) => (
          <HackathonCard
            key={index}
            time={value.time}
            img={value.img}
            startDate={value.startDate}
            endDate={value.endDate}
            title={value.title}
            desc={value.desc}
          />
        ))}
      </MDBRow>
    </div>
  );
}
