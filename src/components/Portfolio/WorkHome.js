import React, { useEffect, useState } from "react";
import "./WorkHome.css";

const WorkHome = () => {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("Dec 31, 2022 ");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="events" id="events">
        <div className="dots dots-up"></div>
        <div className="dots dots-down"></div>
        <div className="container">
          <img src="imgs/events.png" alt="" />
          <div className="info">
            <div className="time">
              <div className="unit">
                <span className="days">{days}</span>
                <span>Days</span>
              </div>
              <div className="unit">
                <span className="hours">{hours}</span>
                <span>Hours</span>
              </div>
              <div className="unit">
                <span className="minutes">{minutes}</span>
                <span>Minutes</span>
              </div>
              <div className="unit">
                <span className="seconds">{seconds}</span>
                <span>Seconds</span>
              </div>
            </div>
            <h2 className="title">Tech Masters Event 2021</h2>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero
              tenetur doloremque iusto ut adipisci quam ratione aliquam
              excepturi nulla in harum, veritatis porro
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkHome;
