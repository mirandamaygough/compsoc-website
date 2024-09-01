'use client';

import {Event, EventCard} from "../components/events-card";
import Navbar from "../components/navbar";

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
    <main className="flex min-h-screen flex-col items-center space-y-6 p-24 bg-primary text-white">
      <Navbar />
      
      <div className="pt-14 flex flex-col md:flex-row items-center justify-between w-full space-y-6 md:space-y-0 md:space-x-6">
        <div className="flex-1">
          <h1 className="text-8xl font-bold px-10 mt-10">Leeds Computing Society</h1>
          <p className="text-2xl mt-4 px-10">
            Welcome to the website of the University of Leeds Computing Society!
          </p>
        </div>
        <div className="flex-1">
          <img src="/images/CompSocElement.png" alt="Hero Image" className="w-full h-auto" />
        </div>
      </div>

      <h2 className="text-4xl font-bold text-center pt-8">About us</h2>
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
              location={event.location}
              description={event.description}
              photo={event.photo}
          />
      ))}
      </div>
    </main>
  );
}
