'use client'
import { useState, useEffect } from "react";

export default function Timer() {
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
    <div className="flex flex-col items-center space-y-4 p-4 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold">Timer: {seconds} sec</h1>
      <div className="flex space-x-4">
        <button onClick={() => setIsRunning(true)} disabled={isRunning}>
          Start
        </button>
        <button onClick={() => setIsRunning(false)} disabled={!isRunning}>
          Stop
        </button>
      </div>
    </div>
  );
}
