"use client";

import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const ViewEventButton = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/dashboard/my-events");
  };
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold">Your Events</h2>
      <Button variant="outline" size="sm" onClick={handleClick}>
        View All
      </Button>
    </div>
  );
};

export default ViewEventButton;
