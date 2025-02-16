"use client";
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/cIKQZTIYMBi
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Button } from "@/components/ui/button";
import { TriangleAlert } from "lucide-react";

export function ClientError({ error, reset }: { error?: string, reset?: () => void}) {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <TriangleAlert className="mx-auto h-16 w-16 text-primary" />
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Oops, something went wrong!
        </h1>
        <p className="mt-4 text-muted-foreground">
          {error
            ? error
            : "We're sorry, but an unexpected error has occurred. Please try again later or contact support if the issue persists."}
        </p>
        <div className="mt-8">
          <Button onClick={reset}>Try Again</Button>
        </div>
      </div>
    </div>
  );
}

