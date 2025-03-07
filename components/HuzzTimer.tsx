import React, { useEffect, useState } from "react";

const HuzzTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = undefined;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="w-screen bg-amber-500 flex flex-col items-center space-y-4 p-4 border rounded-lg shadow-lg ">
      <h1 className="text-5xl font-bold">Timer: {seconds} sec</h1>
      <div className="flex space-x-4 text-3xl">
        <button onClick={() => setIsRunning(true)} disabled={isRunning}>
          Start
        </button>
        <button onClick={() => setIsRunning(false)} disabled={!isRunning}>
          Stop
        </button>
      </div>
    </div>
  );
};

export default HuzzTimer;
