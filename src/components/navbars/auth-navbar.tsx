import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Dialog, DialogClose } from "@radix-ui/react-dialog"
import Link from "next/link"
import * as React from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { ModeToggle } from "../theme-toggle"
import { Button } from "../ui/button"
import { SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { Rocket } from "lucide-react"
import { Profile } from "../Profile"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Blog",
    href: "/resources/blog",
    description:
      "Deepen your knowledge.",
  },
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function AuthNavbar() {
  // const { isLoaded, userId, sessionId, getToken } = useAuth();

  return (
    <div className="flex min-w-full justify-between p-2 border-b z-10">
      <Dialog>
        <SheetTrigger className="min-[825px]:hidden p-2 transition">
          <GiHamburgerMenu />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Eventriest</SheetTitle>
            <SheetDescription>
              Plan, Build & Market your Events.
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col space-y-3 mt-[1rem]">
            <DialogClose asChild>
              <Link href="/">
                <Button variant="outline" className="w-full">Home</Button>
              </Link>
            </DialogClose>
            <DialogClose asChild>
              <Link href="/contact-us">
                <Button variant="outline" className="w-full">Contact Us</Button>
              </Link>
            </DialogClose>
          </div>
        </SheetContent>
      </Dialog>

      <NavigationMenu>
        <NavigationMenuList className="max-[825px]:hidden ">
          <Link href="/" className="pl-2">
            <Rocket />
          </Link>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Pricing</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem href="/docs" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-3">
        {/* {userId && <Profile />} */}
        {<Profile />}
        <ModeToggle />
      </div>
    </div>

  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"


export default AuthNavbar;