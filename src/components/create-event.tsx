"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { GiReloadGunBarrel } from "react-icons/gi";
import { RefreshCcw } from "lucide-react";
import { useToast } from "./ui/use-toast";

const CreateEventFormSchema = z.object({
  title: z.string().min(3, { message: "Event title is required" }),
  description: z.string().min(3, { message: "Event description is required" }),
  venue: z.string().min(3, { message: "Venue name is required" }),
  venueAddress: z.string().min(3, { message: "Venue address is required" }),
  location: z.enum(["online", "offline"]).optional(),
  ticketType: z.string().min(3, { message: "Ticket type is required" }),
  ticketPrice: z.number().min(1, { message: "Ticket price is required" }),
  ticketAvailability: z.number().min(1, { message: "Ticket availability is required" }),
  tags: z.array(z.string()).optional(),
  links: z.array(z.string()).optional(),
  visibility: z.enum(["public", "private"]).optional(),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
  startTime: z.string().optional(),
  endTime: z.string().optional(),
  timezone: z.string().optional(),
});

type CreateEventFormInput = z.infer<typeof CreateEventFormSchema>;

export default function CreateEvent() {
  const [isTagsOpen, setIsTagsOpen] = useState(false);
  const [isLinksOpen, setIsLinksOpen] = useState(false);
  const { toast } = useToast();

  const { register, handleSubmit, formState: { errors, isSubmitting }, control, reset } = useForm<CreateEventFormInput>({
    resolver: zodResolver(CreateEventFormSchema),
    defaultValues: {
      title: "",
      description: "",
      venue: "",
      venueAddress: "",
      location: "online",
      ticketType: "",
      ticketPrice: 0,
      ticketAvailability: 0,
      tags: [],
      links: [],
      visibility: "public",
    },
  });

  const { fields: tagFields, append: appendTag } = useFieldArray<CreateEventFormInput>({ control, name: "tags" });
  const { fields: linkFields, append: appendLink } = useFieldArray<CreateEventFormInput>({ control, name: "links" });

  const onSubmit = async (data: CreateEventFormInput) => {
    try {
      console.log(data);
      const response = await fetch(`/api/create-event`, {
        method: "POST",
        body: JSON.stringify(data),
      });

      const result = await response.json();
      reset();
      return result;
    } catch (error) {
      throw new Error("Creating Event Error", error as any);
    }
  };

  return (
    <div className="flex flex-col gap-8 p-6 sm:p-10">
      <section className="grid gap-4">
        <div className="grid gap-2">
          <h2 className="text-2xl font-bold">New Event Details</h2>
          <p className="text-muted-foreground">
            Fill out the details to create your upcoming event.
          </p>
        </div>
        <Card>
          <CardContent className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="title">Event Title</Label>
              <Input id="title" placeholder="Enter event title" {...register("title")} />
              {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Event Description</Label>
              <Textarea id="description" placeholder="Enter event description" rows={4} {...register("description")} />
              {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
            </div>
            <div className="grid gap-2">
              <Label>Event Image</Label>
              <div className="flex items-center gap-4">
                <img src="/placeholder.svg" alt="Event Image" className="rounded-md max-h-96" />
                <Button variant="outline" onClick={
                  () => alert("Upload Image")
                }>Upload Image</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
      <section className="grid gap-4">
        <div className="grid gap-2">
          <h2 className="text-2xl font-bold">Venue Details</h2>
          <p className="text-muted-foreground">
            Provide the details of the venue for your event.
          </p>
        </div>
        <Card>
          <CardContent className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="venue">Venue Name</Label>
              <Input id="venue" placeholder="Enter venue name" {...register("venue")} />
              {errors.venue && <p className="text-red-500 text-sm">{errors.venue.message}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="venueAddress">Venue Address</Label>
              <Textarea id="venueAddress" placeholder="Enter venue address" rows={3} {...register("venueAddress")} />
              {errors.venueAddress && <p className="text-red-500 text-sm">{errors.venueAddress.message}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="location">Venue Location</Label>
              <div>
                <select {...register("location")} id="location" className="input-field">
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                </select>
              </div>
              {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4">
        <div className="grid gap-2">
          <h2 className="text-2xl font-bold">Ticket Details</h2>
          <p className="text-muted-foreground">
            Set up the ticket types and pricing for your event.
          </p>
        </div>
        <Card>
          <CardContent className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="ticketType">Ticket Type</Label>
              <Input id="ticketType" placeholder="Enter ticket type" {...register("ticketType")} />
              {errors.ticketType && <p className="text-red-500 text-sm">{errors.ticketType.message}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="ticketPrice">Ticket Price</Label>
              <Input id="ticketPrice" type="number" placeholder="Enter ticket price" {...register("ticketPrice", { valueAsNumber: true })} />
              {errors.ticketPrice && <p className="text-red-500 text-sm">{errors.ticketPrice.message}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="ticketAvailability">Ticket Availability</Label>
              <Input id="ticketAvailability" type="number" placeholder="Enter ticket availability" {...register("ticketAvailability", { valueAsNumber: true })} />
              {errors.ticketAvailability && <p className="text-red-500 text-sm">{errors.ticketAvailability.message}</p>}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4">
        <div className="grid gap-2">
          <h2 className="text-2xl font-bold">Extra Details</h2>
          <p className="text-muted-foreground">Provide the additional details.</p>
        </div>
        <Card>
          <CardContent className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="tags">Tags</Label>
              <div className="flex items-center gap-4">
                <Button onClick={() => setIsTagsOpen(!isTagsOpen)} variant="outline">
                  Add Tags
                </Button>
                {isTagsOpen && (
                  <div className="grid gap-2">
                    {tagFields.map((field, index) => (
                      <Input
                        key={field.id}
                        placeholder="Enter tag"
                        {...register(`tags.${index}` as const)}
                      />
                    ))}
                    <Button onClick={() => appendTag("")}>Add Tag</Button>
                  </div>
                )}
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="links">Links</Label>
              <div className="flex items-center gap-4">
                <Button onClick={() => setIsLinksOpen(!isLinksOpen)} variant="outline">
                  Add Links
                </Button>
                {isLinksOpen && (
                  <div className="grid gap-2">
                    {linkFields.map((field, index) => (
                      <Input
                        key={field.id}
                        placeholder="Enter link"
                        {...register(`links.${index}` as const)}
                      />
                    ))}
                    <Button onClick={() => appendLink("")}>Add Link</Button>
                  </div>
                )}
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="visibility">Event Visibility</Label>
              <div>
                <select {...register("visibility")} id="visibility" className="input-field">
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                </select>
              </div>
              {errors.visibility && <p className="text-red-500 text-sm">{errors.visibility.message}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="startDate">Start Date and Time</Label>
              <div className="grid gap-2 sm:grid-cols-2">
                <Input type="date" id="startDate" {...register("startDate")} />
                <Input type="time" id="startTime" {...register("startTime")} />
              </div>
              {errors.startDate && <p className="text-red-500 text-sm">{errors.startDate.message}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="endDate">End Date and Time</Label>
              <div className="grid gap-2 sm:grid-cols-2">
                <Input type="date" id="endDate" {...register("endDate")} />
                <Input type="time" id="endTime" {...register("endTime")} />
              </div>
              {errors.endDate && <p className="text-red-500 text-sm">{errors.endDate.message}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="timezone">Timezone</Label>
              <Input id="timezone" placeholder="Enter timezone" {...register("timezone")} />
              {errors.timezone && <p className="text-red-500 text-sm">{errors.timezone.message}</p>}
            </div>
          </CardContent>
        </Card>
      </section>

      <div className="flex justify-end gap-4">
        <Button onClick={handleSubmit(onSubmit)} disabled={isSubmitting}>
          Create Event
          {isSubmitting && <RefreshCcw className="animate-spin w-4 h-4 ml-2" />}
        </Button>
        <Button variant="outline" onClick={
          () => {
            reset()
            toast({ 
              title: "Form Reset",
              description: "The form has been reset.",
            });
          }
        }>
          Reset
        </Button>
      </div>
    </div>
  );
}
