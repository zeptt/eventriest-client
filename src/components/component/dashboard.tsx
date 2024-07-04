"use client"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { FilePenLineIcon, Trash2Icon } from "lucide-react"
import { useRouter } from "next/navigation"

export function Dashboard() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/dashboard/my-events');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 py-8 px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Create Event</CardTitle>
              <CardDescription>Easily create and manage your events.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" className="w-full">
                Create New Event
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Marketing Tools</CardTitle>
              <CardDescription>Promote your events and reach more attendees.</CardDescription>
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
              <CardDescription>Gain insights into your event performance.</CardDescription>
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
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Your Events</h2>
            <Button variant="outline" size="sm" onClick={handleClick}>
              View All
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Event Name</CardTitle>
                <CardDescription>Event Date</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-lg font-medium">100</div>
                    <div className="text-muted-foreground text-sm">Attendees</div>
                  </div>
                  <div>
                    <div className="text-lg font-medium">$5,000</div>
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
                  <Button variant="ghost" size="icon">
                    <Trash2Icon className="w-5 h-5" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}