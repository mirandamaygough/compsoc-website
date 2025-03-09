import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { EventCard, Event } from "./events-card";

interface EventsCarouselProps {
  events: Event[];
}

export const EventsCarousel: React.FC<EventsCarouselProps> = ({ events }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: Math.min(3, events.length),
    slidesToScroll: 1,
    nextArrow: (
      <div
        style={{ fontSize: "60px", cursor: "pointer" }}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10"
      >
        →
      </div>
    ),
    prevArrow: (
      <div
        style={{ fontSize: "60px", cursor: "pointer" }}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10"
      >
        ←
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(3, events.length),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: Math.min(2, events.length),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: Math.min(1, events.length),
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative w-full">
      <div
        className="w-full md:w-auto px-4 md:px-0"
        style={{
            width: isMobile ? "100%" : events.length < 3 ? `${events.length * 33.33}%` : "100%",
        }}
        >
        <Slider {...settings}>
          {events.map((event, index) => (
            <EventCard
              key={index}
              eventName={event.eventName}
              date={event.date}
              time={event.time}
              location={event.location}
              description={event.description}
              photo={event.photo}
              photoHeight={event.photoHeight}
              photoWidth={event.photoWidth}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};
