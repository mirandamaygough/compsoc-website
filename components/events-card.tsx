import React from 'react';

import { LuCalendarClock, LuMapPin } from 'react-icons/lu';

export type Event = {
    eventName: string;
    date: string;
    time: string;
    location: string;
    description: string;
    photo?: string;
};

interface EventCardProps extends Event {}

export const EventCard: React.FC<EventCardProps> = ({
    photo = "/images/logo.png",
    eventName,
    date,
    time,
    location,
    description,
}) => {
    return (
        <div className="bg-white rounded-slg shadow-lg p-4">
            <img src={photo} alt={eventName} className="w-full aspect-w-16 aspect-h-9 object-cover rounded-t-lg" />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{eventName}</h2>
                <p className="text-gray-500 mb-2">
                    <LuCalendarClock className="inline mr-2" size={20} />
                    {new Intl.DateTimeFormat('en-UK', { weekday: 'long', day: 'numeric', month: 'long' }).format(new Date(`${date}T${time}`))} at {new Intl.DateTimeFormat('en-UK', { hour: 'numeric', minute: 'numeric', hour12: true }).format(new Date(`${date}T${time}`))}
                </p>
                <p className="text-gray-500 mb-2">
                    <LuMapPin className="inline mr-2" size={20} />{location}
                </p>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    );
};