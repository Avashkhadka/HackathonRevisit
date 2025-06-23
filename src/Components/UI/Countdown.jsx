import { useEffect, useState } from "react";

function Countdown({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    if (difference <= 0) return null;

    const timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };

    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft();
      if (!updatedTimeLeft) {
        clearInterval(timer);
        setTimeLeft(null);
      } else {
        setTimeLeft(updatedTimeLeft);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (value) => value.toString().padStart(2, "0");

  if (!timeLeft) return <div>Countdown expired!</div>;

  return (
    <div className="nav-counter">
      <div className="nav-counter-num">
        <span>{formatTime(timeLeft.days)}:</span>
        <span>{formatTime(timeLeft.hours)}:</span>
        <span>{formatTime(timeLeft.minutes)}:</span>
        <span>{formatTime(timeLeft.seconds)}</span>
      </div>
      <div className="nav-counter-info">
        <span>Days </span>
        <span>Hours </span>
        <span>Minutes </span>
        <span>Seconds </span>
      </div>
    </div>
  );
}

export default Countdown;
