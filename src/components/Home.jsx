import React from "react";
import { Link } from "react-router-dom";
import "../style/home.css";
import img from "../assets/icons/PicsArt_04-14-04.42 1.svg";
import img1 from "../assets/icons/Group 1000002515.svg";
import img2 from "../assets/icons/Group 1000002516.svg";
import img3 from "../assets/icons/Group 1000002518.svg";
import CardLayout from "../components/CardLayout";
import ShowCards from "./ShowCards";
import SearchBar from "./SearchBar";
import rectangle from "../assets/icons/Rectangle 6699.png"

const Home = () => {
  return (
    <>
      <div className="mainSection">
        <div className="rectanglenew">
          <img src={rectangle} alt=""></img>
        </div>
        <div className="contentBox">
          <h1>
            Accelerate Innovation <br />
            with Global AI Challenge
          </h1>

          <br />
          <p>
            Al Challenges at DPhi simulate real-world problems. It is a 
            great place to put your Al/Data Science skills to test on 
            diverse datasets allowing you to foster learning through 
            competitions.
          </p>
          <div className="btnBox">
            {" "}
            <Link to="/create-challenge" className="btnBox-link">
              Create Challenge
            </Link>
          </div>
        </div>
        <div className="imageBox">
          <img src={img} alt="home" />
        </div>
      </div>

      <div className="footer1">
        <div className="Content1">
          <div className="image1">
            <img src={img1} alt=""></img>
          </div>
          <div className="text1">
            <h2>100K+</h2>
            <h4>AI Model Submission</h4>
          </div>
        </div>
        <div className="Content2">
          <div className="image1">
            <img src={img2} alt=""></img>
          </div>
          <div className="text1">
            <h2>50K+</h2>
            <h4>Data Scientists</h4>
          </div>
        </div>
        <div className="Content3">
          <div className="image1">
            <img src={img3} alt=""></img>
          </div>
          <div className="text1">
            <h2>100+</h2>
            <h4>AI Challenges hosted</h4>
          </div>
        </div>
      </div>

      <section className="WhyAI">
        <h1>
          Why Participate in <span className="spanAI">AI Challenges ?</span>
        </h1>

        <CardLayout />
      </section>

      <div className="explore">
        <div className="header-container">
          <h1>Explore Challenges</h1>
        </div>
        <div className="searchbar-container">
          <SearchBar />
        </div>
      </div>

      <div className="Finalcards">
        <ShowCards />
      </div>
    </>
  );
};

export default Home;
