import React, { useEffect, useState } from "react";
import "../style/Timer.css";

// Helper function to format date
const formatDate = (date) => {
  const options = {
    day: "numeric",
    month: "short",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

const Timer = ({ startDate, endDate }) => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });
  const [status, setStatus] = useState("upcoming");
  const [endDateFormatted, setEndDateFormatted] = useState("");

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const start = new Date(startDate);
      const end = new Date(endDate);

      if (now < start) {
        setStatus("upcoming");
        const distance = start - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        setTimeRemaining({ days, hours, minutes });
      } else if (now >= start && now <= end) {
        setStatus("active");
        const distance = end - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        setTimeRemaining({ days, hours, minutes });
      } else {
        setStatus("past");
        setTimeRemaining({ days: 0, hours: 0, minutes: 0 });
        setEndDateFormatted(formatDate(end));
      }
    };

    calculateTimeRemaining(); // Initial calculation
    const timer = setInterval(calculateTimeRemaining, 60000); // Update every minute

    return () => clearInterval(timer); // Clean up interval on component unmount
  }, [startDate, endDate]);

  const formatTime = (value) => (value < 10 ? `0${value}` : value);

  return (
    <div className="timer-container">
      {status === "past" ? (
        <div className="ended-on">
          <div>Ended on:</div>
          <div className="time-value">{endDateFormatted}</div>
          <br/>
        </div>
      ) : (
        <div className="time-display">
          <div className="starts-in">
            {status === "upcoming" ? "Starts in:" : "Ends in:"}
          </div>
          <div className="time-row">
            <div className="time-value">{formatTime(timeRemaining.days)} :</div>
            <div className="time-value">
              {formatTime(timeRemaining.hours)} :
            </div>
            <div className="time-value">
              {formatTime(timeRemaining.minutes)}
            </div>
          </div>
          <div className="labels-row">
            <div className="time-label1">Days</div>
            <div className="time-label2">Hours</div>
            <div className="time-label3">Minutes</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timer;
