'use client'
import Link from 'next/link'
import React from 'react'
import { useData } from '../contexts/DataContext'

export default function Page() {
    const { tasks } = useData();

    return (
        <>
            <h1>Tasks</h1>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <Link href={`/tasks/${index}`}>
                            {task.name}
                        </Link>
                    </li>
                ))}
            </ul>

            <Link href={'/addTask'}>
                Add Task
            </Link>
        </>
    );
}
