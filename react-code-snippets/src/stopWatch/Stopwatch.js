import React, { useEffect, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState();
  const [intervalId, setIntervalId] = useState(null);
  useEffect(() => {
    if (isRunning) {
      let Id = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
      setIntervalId(Id);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);
  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
  };

  const handlePause = () => {
    if (isRunning) {
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, 0)}`;
  };
  return (
    <div>
      <div>{formatTime(time)}</div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Stopwatch;

// create a two buttons
// start stop reset
// start should start timer
// pause will stop
// reset makes to zero
// timer should be displayed in seconds
