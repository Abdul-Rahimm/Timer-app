import { createContext, useContext, useState } from 'react';

interface Data {
    tasks: {}
}

const DataContext = createContext<Data>({ tasks: {} });

export function DataProvider({ children }: { children: React.ReactNode }) {
    const [tasks, setTasks] = useState<{}>({})
    return (
        <DataContext.Provider value={{ tasks }}>
            {children}
        </DataContext.Provider >
    )
}

export function useTasks() {
    return useContext(DataContext);
}