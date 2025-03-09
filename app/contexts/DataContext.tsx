import { createContext, useContext, useState } from 'react';

type Data = {
    tasks: Record<string, string>
    setTasks: React.Dispatch<React.SetStateAction<Record<string, string>>>
}


const DataContext = createContext<Data | null>(null);

export function DataProvider({ children }: { children: React.ReactNode }) {
    const [tasks, setTasks] = useState({})
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
