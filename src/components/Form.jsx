import React, { useState } from "react";
import "../style/Form.css";
import { useNavigate } from "react-router-dom";

function ChallengeForm() {
  const [challengeName, setChallengeName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("easy");
  const [image, setImage] = useState(null);
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData({
      challengeName,
      startDate,
      endDate,
      description,
      level,
      image: image ? URL.createObjectURL(image) : null,
    });
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <>
      <div className="headerform">
        <h1>Challenge Details</h1>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label className="form-label">
            Challenge Name:
            <input
              type="text"
              value={challengeName}
              onChange={(e) => setChallengeName(e.target.value)}
              className="form-input"
            />
          </label>
          <br />
          <label className="form-label">
            Start Date:
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="form-input"
            />
          </label>
          <br />
          <label className="form-label">
            End Date:
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="form-input"
            />
          </label>
          <br />
          <label className="form-label">
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-textarea"
            />
          </label>
          <br />
          <label className="form-label">
            Image:
            <input
              type="file"
              onChange={handleImageChange}
              className="form-input-image"
            />
          </label>
          <br />
          <label className="form-label">
            Level Type:
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="form-input1"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </label>

          <br />
          <button type="submit" className="form-button" onClick={handleClick}>
            Create Challenge
          </button>
        </form>
        {submittedData && (
          <div className="submitted-data">
            <p>Challenge Name: {submittedData.challengeName}</p>
            <p>Start Date: {submittedData.startDate}</p>
            <p>End Date: {submittedData.endDate}</p>
            <p>Description: {submittedData.description}</p>

            {submittedData.image && (
              <img
                src={submittedData.image}
                alt="Challenge"
                style={{ maxWidth: "200px", marginTop: "10px" }}
              />
            )}
            <p>Level: {submittedData.level}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default ChallengeForm;
