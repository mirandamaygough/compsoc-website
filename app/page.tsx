'use client';

import {Event, EventCard} from "../components/events-card";

import { useEffect, useState } from 'react';


export default function Home() {

  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
      fetch('/events.json')
          .then(response => response.json())
          .then((data: Event[]) => {
            const now = new Date();
            const upcomingEvents = data
              .filter(event => new Date(`${event.date}T${event.time}`).getTime() > now.getTime())
              .sort((a, b) => new Date(`${a.date}T${a.time}`).getTime() - new Date(`${b.date}T${b.time}`).getTime())
              .slice(0, 3);
            setEvents(upcomingEvents);
          });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center space-y-6 p-24">
      <h1 className="text-6xl font-bold text-center"> Leeds Computing Society</h1>
      <p className="text-2xl text-center">
        Welcome to the website of the University of Leeds Computing Society!
      </p>
      <h2 className="text-4xl font-bold text-center">About us</h2>
      <p className="text-2xl text-center">
        We are the official student computing society of the University of Leeds. We work with the School of Computing and local companies to run a range of fun events and socials, so there's something for everyone.
      </p>
      <h2 className="text-4xl font-bold text-center">Upcoming events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event, index) => (
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
