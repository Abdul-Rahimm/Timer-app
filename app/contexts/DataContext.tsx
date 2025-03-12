'use client'
import { createContext, useEffect, useContext, useState } from 'react';

type Task = {
    name: string
}

type Data = {
    tasks: Task[]
    addTask: (name: string) => void
}


const DataContext = createContext<Data | null>(null);

export function DataProvider({ children }: { children: React.ReactNode }) {
    const [tasks, setTasks] = useState<Task[]>([])

    useEffect(() => {
        const tasks = localStorage.getItem('tasks')
        if (tasks) {
            setTasks(JSON.parse(tasks))
        }
    }, [])

    function addTask(name: string) {
        const task = { name: name } as Task
        setTasks(
            [...tasks, task]
        )
        localStorage.setItem('tasks', JSON.stringify([...tasks, task]))
    }

    return (
        <DataContext.Provider value={{ tasks, addTask }}>
            {children}
        </DataContext.Provider >
    )
}

export function useData() {
    const context = useContext(DataContext);
    return context as Data;
}
