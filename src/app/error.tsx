'use client'

import { ClientError } from "@/components/client-error"

 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div>
      <ClientError error={`
        ${error.message}
        ${error.digest}
        `} reset={reset}/>
    </div>
  )
}