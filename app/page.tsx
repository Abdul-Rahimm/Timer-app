'use client'
import { useState, useEffect } from "react";

export default function Timer() {
  const time = localStorage.getItem('time') || '0'
  const [seconds, setSeconds] = useState(parseInt(time));
  const [isRunning, setIsRunning] = useState(false);

  // useEffect(
  //   () => {
  //     const time = localStorage.getItem('time')
  //     if (time != null) {
  //       setSeconds(parseInt(time))
  //     }
  //   }, []
  // )

  useEffect(() => {
    let interval = undefined;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => {
          localStorage.setItem('time', (prev + 1).toString())
          return prev + 1
        });
        console.log(seconds)
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
