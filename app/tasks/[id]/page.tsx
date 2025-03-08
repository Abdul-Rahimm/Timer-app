import { useTasks } from '@/app/contexts/DataContext'
import Timer from '@/components/timer'
import { useRouter } from 'next/router'
import React from 'react'

const Page = () => {
    const router = useRouter()
    const { tasks } = useTasks()
    const { id } = router.query;
    const taskIndex = id ? parseInt(id as string) : -1;
    return (
        <>
            <h1> {tasks[taskIndex]} </h1>
            <Timer />
        </>
    )
}

export default Page 