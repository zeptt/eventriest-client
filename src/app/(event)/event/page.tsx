import React from 'react';
import { EventCard } from '@/components/event-card';
import eventData from '@/data/eventData.json';

const EventsPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {eventData.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            href={event.href}
            description={event.description}
            dates={event.dates}
            tags={event.tags}
            link={event.link}
            image={event.image}
            links={event.links}
            className="event-card"
          />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
