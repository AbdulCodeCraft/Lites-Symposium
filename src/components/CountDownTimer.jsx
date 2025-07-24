import { useEffect, useState } from "react";

const CountDownEndTime = new Date("2025-08-01T12:00:00Z").getTime();

const CountDownTimer = () => {
  const getTimeLeft = () => {
    return Math.max(CountDownEndTime - Date.now(), 0);
  };
  const [remainingTime, setRemainingTime] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      const timeLeft = getTimeLeft();
      setRemainingTime(timeLeft);

      if (timeLeft <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getFormattedTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const seconds = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;
    const totalHours = Math.floor(totalMinutes / 60);
    const hours = totalHours % 24;
    const days = Math.floor(totalHours / 24);

    const format = (num) => String(num).padStart(2, "0");

    return `${format(days)}D ${format(hours)}H ${format(minutes)}M ${format(
      seconds
    )}S`;
  };

  return (
    <div>
      <h1 className="text-7xl font-semibold">
        {getFormattedTime(remainingTime)}
      </h1>
    </div>
  );
};

export default CountDownTimer;
