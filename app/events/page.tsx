'use client';

import {Event, EventCard} from "../../components/events-card";

import { useEffect, useState } from 'react';


export default function Events() {

  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [pastEvents, setPastEvents] = useState<Event[]>([]);

  useEffect(() => {
      fetch('/events.json')
          .then(response => response.json())
          .then((data: Event[]) => {
            const now = new Date();
            setUpcomingEvents(data
              .filter(event => new Date(`${event.date}T${event.time}`).getTime() > now.getTime())
              .sort((a, b) => new Date(`${a.date}T${a.time}`).getTime() - new Date(`${b.date}T${b.time}`).getTime()))
            setPastEvents(data
              .filter(event => new Date(`${event.date}T${event.time}`).getTime() < now.getTime())
              .sort((a, b) => new Date(`${b.date}T${b.time}`).getTime() - new Date(`${a.date}T${a.time}`).getTime()))
          });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center space-y-6 p-24">
      <h1 className="text-6xl font-bold text-center"> Events</h1>
      <h2 className="text-4xl font-bold text-center">Upcoming events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {upcomingEvents.map((event, index) => (
          <EventCard
              key={index}
              eventName={event.eventName}
              date={event.date}
              time={event.time}
              description={event.description}
              photo={event.photo}
          />
      ))}
      </div>
        <h2 className="text-4xl font-bold text-center">Past events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pastEvents.map((event, index) => (
            <EventCard
                key={index}
                eventName={event.eventName}
                date={event.date}
                time={event.time}
                description={event.description}
                photo={event.photo}
            />
        ))}
        </div>
    </main>
  );
}