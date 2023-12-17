import { useState, useEffect } from "react";
import "./countdown.scss";
const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "Decemeber,31,2023";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Countdown">
      <div className="Handle">PROMO ENDS IN :</div>
      <div className="Time">
        <span> {days}</span>days,<span>{hours}</span>
        hours,
        <span>{minutes}</span>minuutes,
        <span>{seconds}</span>seconds
      </div>
    </div>
  );
};

export default Countdown;
