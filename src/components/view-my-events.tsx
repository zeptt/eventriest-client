import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { FilePenLineIcon, Trash2Icon } from "lucide-react";
import { Event } from "@/app/(event)/event/page";
import { deleteEvent } from "@/app/actions";
import DeleteEventButton from "./delete-event-button";

function ViewMyEvents({ events }: { events: Event[] }) {
  return (
    <>
      {events.map((event) => (
        <Card>
          <CardHeader>
            <CardTitle>{event.title}</CardTitle>
            <CardDescription>
              {new Date(event.createdAt).toDateString()}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-medium">
                  ${event.attendees?.length || 0}
                </div>
                <div className="text-muted-foreground text-sm">Attendees</div>
              </div>
              <div>
                <div className="text-lg font-medium">
                  ${event.tickets?.length || 0}
                </div>
                <div className="text-muted-foreground text-sm">Revenue</div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <FilePenLineIcon className="w-5 h-5" />
                <span className="sr-only">Edit</span>
              </Button>
              <DeleteEventButton deleteEvent={deleteEvent} eventId={event.id} />
            </div>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}

export default ViewMyEvents;
