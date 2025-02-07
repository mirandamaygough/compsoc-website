"use client";

import { useState, useEffect, useMemo } from "react";
import { LuMapPin } from "react-icons/lu";

interface Event {
  name: string;
  startDateTime: string;
  endDateTime: string
  location: string;
}

const eventsData: Event[] = [
  { name: "Registration", startDateTime: "2025-02-08T10:00:00", endDateTime: "2025-02-08T11:00:00", location: "Atrium" },
  { name: "Opening talks", startDateTime: "2025-02-08T11:00:00", endDateTime: "2025-02-08T12:00:00", location: "2.37 with overflow in GR.18" },
  { name: "Team building", startDateTime: "2025-02-08T12:00:00", endDateTime: "2025-02-08T12:30:00",  location: "Atrium" },
  { name: "Lunch", startDateTime: "2025-02-08T12:30:00", endDateTime: "2025-02-08T13:30:00",  location: "Atrium" },
  { name: "Workshop with Rebuildingsociety.com", startDateTime: "2025-02-08T14:00:00", endDateTime: "2025-02-08T15:00:00", location: "2.37" },
  { name: "Careers panel", startDateTime: "2025-02-08T15:00:00", endDateTime: "2025-02-08T16:00:00", location: "2.37" },
  { name: "Branch out challenge with IMDb", startDateTime: "2025-02-08T16:30:00", endDateTime: "2025-02-08T18:30:00", location: "2.37" },
  { name: "Dinner", startDateTime: "2025-02-08T18:30:00", endDateTime: "2025-02-08T19:30:00", location: "Atrium" },
  { name: "Mario Kart", startDateTime: "2025-02-08T20:00:00", endDateTime: "2025-02-08T21:00:00", location: "2.37" },
  { name: "Quiz", startDateTime: "2025-02-08T22:00:00", endDateTime: "2025-02-08T23:00:00", location: "2.37" },
  { name: "Midnight pizza", startDateTime: "2025-02-09T00:00:00", endDateTime: "2025-02-09T00:00:00", location: "Atrium" },
  { name: "Breakfast", startDateTime: "2025-02-09T08:00:00", endDateTime: "2025-02-09T09:00:00", location: "Atrium" },
  { name: "Lunch", startDateTime: "2025-02-09T12:00:00", endDateTime: "2025-02-09T13:00:00", location: "Atrium" },
  { name: "Judging", startDateTime: "2025-02-09T13:00:00", endDateTime: "2025-02-09T14:00:00",  location: "GR.18 and GR.25" },
  { name: "Closing talks", startDateTime: "2025-02-09T14:00:00", endDateTime: "2025-02-09T15:00:00", location: "2.37 with overflow in GR.18" },
];

const UpcomingEvents: React.FC = () => {
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [currentEvent, setCurrentEvent] = useState<Event | null>(null)

  const getUpcomingEvents = () => {
    const now = new Date();
    return eventsData
      .filter((event) => new Date(event.startDateTime) > now)
      .sort((a, b) => new Date(a.startDateTime).getTime() - new Date(b.startDateTime).getTime())
      .slice(0, 3);
  };

  const getCurrentEvent = () => {
    const now = new Date();
    const event = eventsData.find(
      (e) => new Date(e.startDateTime) <= now && new Date(e.endDateTime) >= now
    );
    setCurrentEvent(event || null);
  };

  useEffect(() => {
    setUpcomingEvents(getUpcomingEvents());
    getCurrentEvent();

    const interval = setInterval(() => {
      setUpcomingEvents(getUpcomingEvents());
      getCurrentEvent();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold mb-4 text-left">Current activity</h1>
        {currentEvent ? (
          <div className="font-bold text-2xl mb-2">
            {currentEvent.name}: {new Date(currentEvent.startDateTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}-{new Date(currentEvent.endDateTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </div>
        ) : (
          <div className="font-bold text-xl mb-2">Nothing happening currently!</div>
        )}
        {currentEvent && (
          <div className="flex items-center text-xl mb-3 space-x-2">
            <LuMapPin />
            <span>{currentEvent.location}</span>
          </div>
        )}
      </div>
  
      <div>
        <h1 className="text-4xl font-bold mb-4 mt-7 text-left">Upcoming activities</h1>
        {upcomingEvents.length > 0 ? (
          <ul>
            {upcomingEvents.map((event, index) => (
              <li key={index} className="mb-2">
                <div className="font-bold text-2xl mb-2">
                  {event.name}: {new Date(event.startDateTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}-
                  {new Date(event.endDateTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </div>
                <div className="flex items-center text-xl mb-4 space-x-2">
                  <LuMapPin />
                  <span>{event.location}</span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No upcoming activities</p>
        )}
      </div>
    </div>
  );
  };
  
  export default UpcomingEvents;
  