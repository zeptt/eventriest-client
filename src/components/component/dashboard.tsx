import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import ViewMyEvents from "../view-my-events";
import CreateEventCard from "../create-event-card";
import ViewEventButton from "../view-event-button";
import { ClientError } from "../client-error";
import api from "@/lib/api";
import { response } from "@/lib/response";
import { Event } from "@/app/(event)/event/page";

const getMyEvents = async () => {
  try {
    const data = await api.get("/event/my-events/", {});
    return response<Event[]>(data.data, true);
  } catch (error: any) {
    return response<Event[]>(error?.response.data, false);
  }
};

export async function Dashboard() {
  const events = await getMyEvents();
  console.log(events);

  if (!events.success || !events.data) {
    return <ClientError error={events.data?.message} />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 py-8 px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CreateEventCard />
          <Card>
            <CardHeader>
              <CardTitle>Marketing Tools</CardTitle>
              <CardDescription>
                Promote your events and reach more attendees.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <Button variant="outline" className="w-full">
                  Create Promotion
                </Button>
                <Button variant="outline" className="w-full">
                  Manage Tickets
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>
                Gain insights into your event performance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <Button variant="outline" className="w-full">
                  View Analytics
                </Button>
                <Button variant="outline" className="w-full">
                  Export Data
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-8">
          <ViewEventButton />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
            <ViewMyEvents events={events.data.data} />
          </div>
        </div>
      </main>
    </div>
  );
}
