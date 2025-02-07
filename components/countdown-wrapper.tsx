"use client";

import Countdown from "react-countdown";

interface CountdownWrapperProps {
  targetDate: string;
}


const CountdownWrapper: React.FC<CountdownWrapperProps> = ({ targetDate }) => {
  const renderer = ({ hours, minutes }: { hours: number; minutes: number }) => {
    return (
      <div className="text-9xl font-bold">
        {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}
      </div>
    );
  };

  return <Countdown date={new Date(targetDate)} renderer={renderer} />;
};

export default CountdownWrapper;