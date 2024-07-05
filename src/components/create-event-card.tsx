"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const CreateEventCard = () => {
  const router = useRouter();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Event</CardTitle>
        <CardDescription>Easily create and manage your events.</CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          onClick={() => {
            router.push("/dashboard/create");
          }}
          size="lg"
          className="w-full"
        >
          Create Event
        </Button>
      </CardContent>
    </Card>
  );
};

export default CreateEventCard;
