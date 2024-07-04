
"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { BadgeInfoIcon, Calendar, FilterIcon, Group, ListOrderedIcon, MapPinnedIcon, SearchIcon, Users2Icon } from "lucide-react"

export function MyEvents() {
  const [search, setSearch] = useState("")
  const [sortBy, setSortBy] = useState("date")
  const [filters, setFilters] = useState({
    category: [],
    date: [],
    location: [],
  })
  const events = useMemo(() => {
    return [
      {
        id: 1,
        title: "Tech Meetup",
        description: "Join us for a tech meetup where we discuss the latest trends in the industry.",
        category: "Technology",
        date: "2023-06-15",
        location: "San Francisco, CA",
        attendees: 50,
      },
      {
        id: 2,
        title: "Art Gallery Opening",
        description: "Celebrate the opening of our new art gallery featuring local artists.",
        category: "Arts",
        date: "2023-07-01",
        location: "New York, NY",
        attendees: 75,
      },
      {
        id: 3,
        title: "Cooking Class",
        description: "Learn how to make delicious dishes from our expert chefs in this hands-on cooking class.",
        category: "Food",
        date: "2023-08-20",
        location: "Chicago, IL",
        attendees: 30,
      },
      {
        id: 4,
        title: "Outdoor Adventure",
        description: "Join us for a day of hiking, rock climbing, and exploring the great outdoors.",
        category: "Outdoors",
        date: "2023-09-10",
        location: "Seattle, WA",
        attendees: 40,
      },
      {
        id: 5,
        title: "Music Festival",
        description: "Experience the best of local and international music acts at our annual music festival.",
        category: "Music",
        date: "2023-10-05",
        location: "Austin, TX",
        attendees: 100,
      },
    ]
      .filter((event) => {
        const searchValue = search.toLowerCase()
        return (
          event.title.toLowerCase().includes(searchValue) ||
          event.description.toLowerCase().includes(searchValue) ||
          event.category.toLowerCase().includes(searchValue) ||
          event.location.toLowerCase().includes(searchValue)
        )
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "date":
            return new Date(a.date) - new Date(b.date)
          case "attendees":
            return b.attendees - a.attendees
          default:
            return 0
        }
      })
  }, [search, sortBy])
  const handleSearch = (e) => setSearch(e.target.value)
  const handleSort = (e) => setSortBy(e.target.value)
  const handleFilter = (type, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: prevFilters[type].includes(value)
        ? prevFilters[type].filter((item) => item !== value)
        : [...prevFilters[type], value],
    }))
  }
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Your Events</h1>
        <div className="flex items-center gap-4">
          <div className="relative w-full max-w-md">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search events..."
              className="pl-8 w-full"
              value={search}
              onChange={handleSearch}
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 gap-1">
                <ListOrderedIcon className="h-3.5 w-3.5" />
                <span>Sort by</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuRadioGroup value={sortBy} onValueChange={handleSort}>
                <DropdownMenuRadioItem value="date">Date</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="attendees">Attendees</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 gap-1">
                <FilterIcon className="h-3.5 w-3.5" />
                <span>Filter</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[300px]">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={filters.category.includes("Technology")}
                    onCheckedChange={() => handleFilter("category", "Technology")}
                  />
                  <span>Technology</span>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={filters.category.includes("Arts")}
                    onCheckedChange={() => handleFilter("category", "Arts")}
                  />
                  <span>Arts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={filters.category.includes("Food")}
                    onCheckedChange={() => handleFilter("category", "Food")}
                  />
                  <span>Food</span>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={filters.category.includes("Outdoors")}
                    onCheckedChange={() => handleFilter("category", "Outdoors")}
                  />
                  <span>Outdoors</span>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={filters.category.includes("Music")}
                    onCheckedChange={() => handleFilter("category", "Music")}
                  />
                  <span>Music</span>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-3 gap-6">
        {events.map((event) => (
          <Card key={event.id}>
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
              <CardDescription>{event.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPinnedIcon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{event.location}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <Button variant="outline" size="sm" className="h-8 gap-1">
                <Users2Icon className="h-3.5 w-3.5" />
                <span>{event.attendees} attendees</span>
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <BadgeInfoIcon className="h-3.5 w-3.5" />
                  <span>Analytics</span>
                </Button>
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <Group className="h-3.5 w-3.5" />
                  <span>Community</span>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

