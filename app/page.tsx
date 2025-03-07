"use client";
import HuzzTimer from "@/components/HuzzTimer";
import { useSession, signIn } from "next-auth/react";
// Createed rahim branch

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="bg-blue-900 w-screen h-screen flex flex-col items-center justify-center">
        <div className="bg-white text-black p-4 rounded-lg font-semibold text-xl my-4">
          <button onClick={() => signIn("google")}>Login with Google</button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-900 w-screen h-screen flex flex-col items-center justify-center">
      <div className="bg-white text-black p-4 rounded-lg font-semibold text-xl my-4">
        Hello, {session.user?.name}
      </div>
      <HuzzTimer />
    </div>
  );
}
