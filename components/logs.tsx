"use client"
import React from 'react'

export default function Logs({ logs }: { logs: number[] }) {
    return (
        <div className='p-4 border rounded-lg shadow-lg'>
            <h2 className="text-lg font-bold">Logs</h2>
            <ul>
                {logs.map((log, index) => (
                    <li key={index}>{log} sec</li>
                ))}
            </ul>
        </div>
    )
}


