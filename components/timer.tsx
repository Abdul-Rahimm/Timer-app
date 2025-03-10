'use client'
import React, { useEffect, useState } from "react";


export default function Timer({ id }: { id: string }) {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [mounted, setMounted] = useState(false);
    const timer_id = `timer_${id}`

    useEffect(
        () => {
            setMounted(true)
            const time = localStorage.getItem(timer_id) || '0'
            setSeconds(parseInt(time))
        }, []
    )

    useEffect(() => {
        localStorage.setItem(timer_id, (seconds).toString())
    }, [seconds]);


    useEffect(() => {
        let interval: NodeJS.Timeout | undefined;
        if (isRunning) {
            interval = setInterval(() => {
                setSeconds((prev) => prev + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning]);


    function resetTime() {
        setSeconds(0);
        setIsRunning(false);
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
                <button onClick={resetTime}>
                    Reset
                </button>
            </div>
        </div>
    );
}
