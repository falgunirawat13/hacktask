import React from "react";
import { MDBRow } from "mdb-react-ui-kit";
import "../style/CardLayout.css";
import DisplayCard from "./DisplayCard";
import img1 from "../assets/icons/carbon_notebook-reference.svg";
import img2 from "../assets/icons/Vector.svg";
import img3 from "../assets/icons/Robot.svg";
import img4 from "../assets/icons/IdentificationCard.svg";
export default function App() {
  const data = [
    {
      img: img1,
      title: "Prove your Skills",
      desc: "Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions",
    },
    {
      img: img2,
      title: "Learn from Community",
      desc: "One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.",
    },
    {
      img: img3,
      title: "Challenge yourself",
      desc: "There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.",
    },
    {
      img: img4,
      title: "Earn recognition",
      desc: "You will stand out from the crowd if you do well in Al challenges, it not only helps you shine in the community but also earns rewards.",
    },
  ];

  return (
    <div className="CardLayout">
      <MDBRow className="row-cols-1 row-cols-md-2 g-4">
        {data.map((value, index) => (
          <DisplayCard
            key={index} // Adding a key prop is a good practice
            img={value.img}
            title={value.title}
            desc={value.desc}
          />
        ))}
      </MDBRow>
    </div>
  );
}
