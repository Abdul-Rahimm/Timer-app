"use client";
import HuzzTimer from "@/components/HuzzTimer";
// Createed rahim branch

export default function Timer() {
  return (
    <div className="bg-blue-900 w-screen h-screen flex flex-col items-center justify-center">
      <div className="bg-white text-black p-4 rounded-lg font-semibold text-xl my-4">
        Login with Google
      </div>
      <HuzzTimer />
    </div>
  );
}
