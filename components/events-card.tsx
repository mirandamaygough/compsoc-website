import React from 'react';
import Image from 'next/image';

import { LuCalendarClock, LuMapPin } from 'react-icons/lu';

export type Event = {
    eventName: string;
    date: string;
    time: string;
    location: string;
    description: string;
    photo?: string;
    photoHeight?: number;
    photoWidth?: number;
};

interface EventCardProps extends Event {}

export const EventCard: React.FC<EventCardProps> = ({
    photo = "/images/logo.png",
    photoHeight = 400,
    photoWidth = 400,
    eventName,
    date,
    time,
    location,
    description,
}) => {
    return (
        <div className="bg-white rounded-slg shadow-lg p-4">
            <Image src={photo} alt={eventName} className="w-full aspect-w-16 aspect-h-9 object-cover rounded-t-lg" height={photoHeight} width={photoWidth}/>
            <div className="p-5">
                <h2 className="text-2xl text-black font-bold mb-2">{eventName}</h2>
                <p className="text-lg text-gray-500 mb-2 font-barlow">
                    <LuCalendarClock className="inline mr-2" size={20} />
                    {new Intl.DateTimeFormat('en-UK', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(`${date}T${time}`))} at {new Intl.DateTimeFormat('en-UK', { hour: 'numeric', minute: 'numeric', hour12: true }).format(new Date(`${date}T${time}`))}
                </p>
                <p className="text-lg text-gray-500 mb-2 font-barlow">
                    <LuMapPin className="inline mr-2" size={20} />{location}
                </p>
                <p className="text-lg text-gray-700 font-barlow">{description}</p>
            </div>
        </div>
    );
};