'use client'

import { use, useEffect, useState } from "react";

export default function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [logs, setLogs] = useState<number[]>([]);
    const [mounted, setMounted] = useState(false);


    useEffect(
        () => {
            setMounted(true)
            const time = localStorage.getItem('time') || '0'
            setSeconds(parseInt(time))
        }, []
    )

    useEffect(() => {
        localStorage.setItem('time', (seconds).toString())
    }, [seconds]);

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

    function addLog() {
        setLogs((prev) => [...prev, seconds]);
    }

    if (!mounted)
        return <div>Loading...</div>


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
                <button onClick={addLog}>
                    Log
                </button>
            </div>
            <div>
                <h2 className="text-lg font-bold">Logs</h2>
                <ul>
                    {logs.map((log, index) => (
                        <li key={index}>{log} sec</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}