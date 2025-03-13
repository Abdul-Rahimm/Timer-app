import Timer from "@/components/timer";

export default function TimerCard() {

    return <div className="flex flex-row w-screen bg-amber-900">
        <div>TOA</div>
        <Timer id={"test"} />
    </div >

}