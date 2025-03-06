"use client"
import Timer from "@/components/timer";
import Logs from "@/components/logs";
import { useState } from "react";


export default function Main() {
  const [logs, setLogs] = useState<number[]>([]);
  return (
    <>
      <Timer setLogs={setLogs} />
      <Logs logs={logs} />
    </>
  );
}