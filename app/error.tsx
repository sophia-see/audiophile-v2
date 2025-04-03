"use client";

import Button from "@/components/shared/Button";
import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error("Global error:", error);
  }, [error]);

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center gap-2">
      <h1 className="text-2xl font-bold">Something went wrong!</h1>
      <p className="text-gray-500">{error.message}</p>
      <div className="pt-4 flex items-center gap-4">
        <Link href={"/"} prefetch>
          <Button 
            variant="outline"
          >
            Go Home
          </Button>
        </Link>
        <Button 
          onClick={() => reset()}
        >
          Try Again
        </Button>
      </div>
    </div>
  );
}
