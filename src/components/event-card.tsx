import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function EventCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  links,
  className,
}: Props) {
  return (
    <Card
      className={cn(
        "flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100",
        className
      )}
    >
      <Link href={href || "#"} className="block cursor-pointer">
        {image && (
          <Image
            src={image}
            alt={title}
            width={400}
            height={200}
            className="h-48 w-full object-cover"
          />
        )}
      </Link>
      <CardHeader className="p-4">
        <div className="space-y-2">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <time className="block text-sm text-gray-500 dark:text-gray-400">{dates}</time>
          {link && (
            <div className="hidden text-sm text-blue-500 underline print:block">
              {link.replace("https://", "").replace("www.", "").replace("/", "")}
            </div>
          )}
          <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>
        </div>
      </CardHeader>
      <CardContent className="p-4 mt-auto">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap gap-2">
            {links.map((link, idx) => (
              <Link href={link.href} key={idx} target="_blank" rel="noopener noreferrer">
                <Badge className="flex items-center gap-1 px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
