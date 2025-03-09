import React from "react";
import Slider from "react-slick";
import  {EventCard, Event } from "./events-card";

interface EventsCarouselProps {
    events: Event[];
}
export const EventsCarousel: React.FC<EventsCarouselProps> = ({ events }) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <div style={{ fontSize: '60px', cursor: 'pointer' }}>→</div>,
        prevArrow: <div style={{ fontSize: '60px', cursor: 'pointer' }}>←</div>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1

                }
            }
        ]
    };

    return (
        <div className="left-aligned-carousel">
          <Slider {...settings}>
            {events.map((event, index) => (
              <div key={index} className="carousel-item-wrapper">
                <EventCard
                  eventName={event.eventName}
                  date={event.date}
                  time={event.time}
                  location={event.location}
                  description={event.description}
                  photo={event.photo}
                  photoHeight={event.photoHeight}
                  photoWidth={event.photoWidth}
                />
              </div>
            ))}
        </Slider>
    </div>
    );
};

