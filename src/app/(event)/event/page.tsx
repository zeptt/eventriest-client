import React, { } from 'react';
import { EventCard } from '@/components/event-card';
import eventData from '@/data/eventData.json';
import { Input } from '@/components/ui/input';
import { ListFilter, Search } from 'lucide-react';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const EventsPage = () => {

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h1>
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:w-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            type="search"
            placeholder="Search events..."
            className="w-full pl-10 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-1 h-10">
                <ListFilter className="h-4 w-4" />
                <span>Filter</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem>
                All
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>
                Upcoming
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>
                Past
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-1 h-10">
                <ListFilter className="h-4 w-4" />
                <span>Sort</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Sort by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem>
                Price (Low to High)
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>
                Price (High to Low)
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>
                Date (Ascending)
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>
                Date (Descending)
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
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
