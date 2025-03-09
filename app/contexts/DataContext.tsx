'use client'
import { createContext, useEffect, useContext, useState } from 'react';

type Data = {
    tasks: Record<string, string>
    setTasks: React.Dispatch<React.SetStateAction<Record<string, string>>>
}


const DataContext = createContext<Data | null>(null);

export function DataProvider({ children }: { children: React.ReactNode }) {
    const [tasks, setTasks] = useState({})
    useEffect(() => {
        // fill some dummy data
        setTasks({
            1: 'hamm',
            2: 'huzz',
            3: 'rahim',
        })

    }, [])
    return (
        <DataContext.Provider value={{ tasks, setTasks }}>
            {children}
        </DataContext.Provider >
    )
}

export function useData() {
    const context = useContext(DataContext);
    return context as Data;
}
