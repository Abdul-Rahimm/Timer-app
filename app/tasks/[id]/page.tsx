'use client'
import Timer from '@/components/timer'
import { useData } from '@/app/contexts/DataContext'
import React from 'react'

export default function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = React.use(params);
    const { tasks } = useData()
    return (
        <>
            <h1>Task {id}</h1>
            {/* description of the task. yet to populate some data. where to do? */}
            <p>Description: {tasks[id]}</p>
            {/* should pass task id to maintain different local storage */}
            <Timer id={id} />
        </>
    )
}
