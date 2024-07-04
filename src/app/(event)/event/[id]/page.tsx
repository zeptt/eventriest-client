import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { response } from "@/lib/response";
import { Event } from "../page";
import api from "@/lib/api";
import { ClientError } from "@/components/client-error";

const getEvent = async (id: string) => {
  try {
    const data = await api.get(`/event/${id}`);
    return response<Event[]>(data.data, true);
  } catch (error: any) {
    return response<Event[]>(error?.response.data, false);
  }
}

export default async function EventDetails({params: {
  id
}}: {
  params: {
    id: string;
  };
}) {
  const event = await getEvent(id);

  if(!event.success || !event.data) {
    return <ClientError error={event.data?.message}/>;
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
            <div className="flex items-center gap-4">
              <Link href="/event" className="flex items-center gap-1">
                <ChevronLeft className="h-4 w-4" />
                <span>Back</span>
              </Link>
              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                Event Details
              </h1>
            </div>
            <div className="relative h-96">
              <Image
                alt="Event image"
                className="object-cover w-full rounded-lg h-full"
                src="https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg"
                layout="fill"
              />
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Event Information</CardTitle>
                    <CardDescription>
                      Here are the details of the event.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <span className="font-semibold">Event Name:</span>{" "}
                        Sample Event Name
                      </div>
                      <div className="grid gap-3">
                        <span className="font-semibold">Description:</span>{" "}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam auctor, nisl nec ultricies ultricies, nunc nisl
                        ultricies nunc, nec ultricies nunc nisl nec nunc.
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Date and Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <span className="font-semibold">Date:</span> 2024-07-04
                      </div>
                      <div className="grid gap-3">
                        <span className="font-semibold">Time:</span> 18:00
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Venue</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <span className="font-semibold">Venue Name:</span>{" "}
                        Sample Venue
                      </div>
                      <div className="grid gap-3">
                        <span className="font-semibold">Address:</span> 123
                        Sample Street, Sample City, Country
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Ticket Details</CardTitle>
                    <CardDescription>
                      Details of ticket types, pricing, and availability.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <span className="font-semibold">
                          General Admission:
                        </span>{" "}
                        $25.00 (200 available)
                      </div>
                      <div className="grid gap-3">
                        <span className="font-semibold">VIP Pass:</span> $100.00
                        (50 available)
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Event Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <span className="font-semibold">Status:</span> Published
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Button className="h-12 text-md">Book Event</Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
