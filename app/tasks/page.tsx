'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface Task {
    name: string,
    id: number
}

const Page = () => {
    const [tasks, setTasks] = useState<Task[]>([])

    useEffect(() => {
        setTasks([
            { name: 'Task 1', id: 1 },
            { name: 'Task 2', id: 2 },
            { name: 'Task 3', id: 3 },
        ])
    }, [])

    return (
        <>
            <h1>Tasks</h1>
            <ul>
                {
                    tasks.map((task) =>
                        <li key={task.id}>
                            <Link href={`/tasks/${task.id}`}>
                                {task.name}
                            </Link>
                        </li>
                    )
                }
            </ul>

        </>
    )
}

export default Page 