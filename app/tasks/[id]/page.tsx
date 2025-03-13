'use client'
import Timer from '@/components/timer'
import { useData } from '@/app/contexts/DataContext'
import React, { useEffect } from 'react'

export default function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = React.use(params);
    const task_index = parseInt(id)
    const { tasks } = useData()

    useEffect(() => {
        console.log(id, task_index, tasks)
    }, [])
    return (
        <>
            <h1>Task {id}</h1>
            <p>Description: {tasks.length != 0 && tasks[task_index].name}</p>
            <Timer id={id} />
        </>
    )
}
