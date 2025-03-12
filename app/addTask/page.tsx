'use client'

import { FormEvent, useState } from "react";
import { useData } from "../contexts/DataContext";
import { useRouter } from "next/navigation";

export default function Page() {
    const { addTask } = useData();
    const [task, setTask] = useState("");
    const router = useRouter();

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        setTask((e.target as HTMLInputElement).value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (task.trim() === "") return;
        addTask(task);
        setTask("");
        router.push("/tasks");
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Enter task name: </label>
                <input
                    type="text"
                    name="task"
                    value={task}
                    onChange={handleChange}
                />
                <button type="submit">Add Task</button>
            </form>
        </>
    );
}
