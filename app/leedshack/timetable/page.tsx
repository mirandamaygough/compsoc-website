'use client'

import dynamic from "next/dynamic";

import UpcomingEvents from "../../../components/upcoming-events"

const CountdownWrapper = dynamic(() => import("../../../components/countdown-wrapper"), {
  ssr: false,
});


export default function Timetable(){
    return (
    <div className="flex flex-col min-h-screen justify-center">
      <main className="flex-grow flex flex-col items-center p-4 md:p-24 bg-primary text-white overflow-y-auto scroll-smooth pt-16 md:pt-32">
        <h1 className="text-5xl font-bold text-center mb-10">Hacking time remaining</h1>
        <div className="mb-24">
          <CountdownWrapper targetDate="2025-02-09T12:00:00" />
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full max-w-3xl flex flex-col items-start px-4">
            <UpcomingEvents />
          </div>
        </div>
      </main>
    </div>
    )
}
