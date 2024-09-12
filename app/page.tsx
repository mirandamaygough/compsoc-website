'use client';

import { Event, EventCard } from "../components/events-card";
import Navbar from "../components/navbar";
import Typewriter from 'typewriter-effect';
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
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col items-center space-y-6 p-4 md:p-24 bg-primary text-white">
        <Navbar />
        
        <div className="pt-14 flex flex-col md:flex-row items-center justify-between w-full space-y-6 md:space-y-0 md:space-x-6">
          <div className="flex-1 order-2 md:order-1">
            <h1 className="text-6xl md:text-8xl px-4 font-bold md:px-10 mt-10">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString('Leeds Computing Society')
                    .pauseFor(2500)
                    .callFunction(() => {
                      const typewriterWrapper = document.querySelector('.Typewriter__wrapper');
                      if (typewriterWrapper) {
                        typewriterWrapper.innerHTML = 'Leeds Computing Society';
                      }
                    })
                    .start();
                }}
              />
            </h1>
            <p className="text-2xl px-4 mt-4 md:px-10">
              Welcome to the website of the University of Leeds Computing Society!
            </p>
          </div>
          <div className="flex-1 order-1 md:order-2">
            <img src="/images/CompSocElement1.png" alt="Hero Image" className="w-full h-auto mt-[-30px] md:mt-0" />
          </div>
        </div>

        <h2 className="text-4xl font-bold text-center pt-8">About us</h2>
        <p className="text-2xl text-center pb-12">
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

      <footer className="bg-black w-full mt-auto text-white">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="flex items-center mb-6 md:mb-0">
              <img src="/images/logo.png" className="h-14 me-3" alt="CompSoc Logo" />
              <span className="self-center text-xl md:text-2xl font-semibold whitespace-nowrap">Leeds Computing Society</span>
            </div>
          </div>
        </div>
      </footer>
    
    </div>
  );
}
