import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import AuthNavbar from "./navbars/auth-navbar"
import { Calendar, Search, Ticket } from "lucide-react"

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <AuthNavbar/>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#ff6b6b] to-[#9b59b6]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary-foreground">
                    Effortless Event Booking
                  </h1>
                  <p className="max-w-[600px] text-primary-foreground md:text-xl">
                    Discover and book the perfect event with our user-friendly app. Explore a wide range of events,
                    secure your spot, and manage your bookings with ease.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-primary">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary-foreground">
                  Discover the Best Events
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our app makes it easy to find and book the perfect event for any occasion. Explore a wide range of
                  options and secure your spot with just a few taps.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center justify-center space-y-4">
                <Search className="h-12 w-12 text-primary" />
                <div className="space-y-1 text-center">
                  <h3 className="text-xl font-bold text-primary-foreground">Easy Search</h3>
                  <p className="text-muted-foreground">
                    Quickly find events that match your interests and preferences.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <Ticket className="h-12 w-12 text-primary" />
                <div className="space-y-1 text-center">
                  <h3 className="text-xl font-bold text-primary-foreground">Secure Booking</h3>
                  <p className="text-muted-foreground">
                    Book your tickets with confidence using our secure payment system.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <Calendar className="h-12 w-12 text-primary" />
                <div className="space-y-1 text-center">
                  <h3 className="text-xl font-bold text-primary-foreground">Event Management</h3>
                  <p className="text-muted-foreground">
                    Easily manage your event bookings and stay up-to-date with the latest information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#ff6b6b] to-[#9b59b6]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-primary-foreground">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary-foreground">
                  What Our Users Say
                </h2>
                <p className="max-w-[900px] text-primary-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our satisfied customers about their experience with our event booking app.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2 bg-background p-6 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-lg font-bold text-primary-foreground">John Doe</h4>
                      <p className="text-sm text-muted-foreground">Event Enthusiast</p>
                    </div>
                  </div>
                  <blockquote className="text-primary-foreground">
                    "The Event Booking App has been a game-changer for me. It's\n so easy to find and book the perfect
                    events, and the\n management tools are incredibly helpful."
                  </blockquote>
                </div>
                <div className="space-y-2 bg-background p-6 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-lg font-bold text-primary-foreground">Jane Smith</h4>
                      <p className="text-sm text-muted-foreground">Event Organizer</p>
                    </div>
                  </div>
                  <blockquote className="text-primary-foreground">
                    "I've been using the Event Booking App for my events, and\n it's been a game-changer. The platform
                    is user-friendly and\n helps me manage everything seamlessly."
                  </blockquote>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Testimonials"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gradient-to-r from-[#ff6b6b] to-[#9b59b6]">
        <p className="text-xs text-primary-foreground">&copy; 2024 Event Booking App. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 text-primary-foreground"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 text-primary-foreground"
            prefetch={false}
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 text-primary-foreground"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}

