"use client"
import Timer from "@/components/timer";
import Logs from "@/components/logs";
import { useState } from "react";
import { DataProvider } from "./contexts/DataContext";


export default function Main() {
  return (
    <DataProvider>
      <Timer />
    </DataProvider>
  );
}