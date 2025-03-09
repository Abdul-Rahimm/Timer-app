'use client'
import Timer from '@/components/timer'
import { useData } from '@/app/contexts/DataContext'
import React from 'react'

export default function Page({ params }: { params: { id: string } }) {
    const { id } = params;
    const { tasks } = useData()
    return (
        <>
            <h1>Task {id}</h1>
            <p>{tasks[id]}</p>
            <Timer />
        </>
    )
}
