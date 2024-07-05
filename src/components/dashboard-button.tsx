"use client";

import React from "react";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { routeMatcher } from "../lib/route-matcher";

const DashboardButton = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      {routeMatcher(pathname, ["/event*"]) ? (
        <Button
          onClick={() => {
            router.push("/dashboard");
          }}
          variant="outline"
          className="border-gray-600 mr-4"
        >
          <div className="flex items-center justify-between gap-x-2">
            <p>Dashboard</p> <ArrowRight />
          </div>
        </Button>
      ) : (
        <Button
          onClick={() => {
            router.push("/event");
          }}
          variant="outline"
          className="border-gray-600 mr-4"
        >
          <div className="flex items-center justify-between gap-x-2">
            <p>Events</p> <ArrowRight />
          </div>
        </Button>
      )}
    </>
  );
};

export default DashboardButton;
