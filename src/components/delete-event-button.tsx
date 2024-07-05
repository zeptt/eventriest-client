"use client";
import React from "react";
import { Button } from "./ui/button";
import { Trash2Icon } from "lucide-react";

const DeleteEventButton = ({
  eventId,
  deleteEvent,
}: {
  eventId: number;
  deleteEvent: (eventId: number) => Promise<boolean>;
}) => {
  return (
    <Button
      onClick={() => {
        deleteEvent(eventId);
      }}
      variant="ghost"
      size="icon"
    >
      <Trash2Icon className="w-5 h-5" />
      <span className="sr-only">Delete</span>
    </Button>
  );
};

export default DeleteEventButton;
