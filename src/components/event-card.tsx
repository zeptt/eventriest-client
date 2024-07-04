import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: string[];
  link?: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export const EventCard: React.FC<Props> = ({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  links,
  className,
}) => {
  return (
    <Card className={cn('flex flex-col overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1', className)}>
      <Link href={href || '#'} className="block cursor-pointer">
        {image && <Image src={image} alt={title} width={400} height={200} className="h-48 w-full object-cover" />}
      </Link>
      <CardHeader className="p-4">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <time className="block text-sm text-gray-500">{dates}</time>
        <p className="mt-2 text-sm text-gray-700 dark:text-white/50">{description}</p>
      </CardHeader>
      <CardContent className="p-4">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} className="px-2 py-1 text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4">
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {links.map((link, idx) => (
              <Link href={link.href} key={idx} target="_blank" rel="noopener noreferrer">
                <Badge className="flex items-center gap-1 px-2 py-1 text-xs">
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
};
