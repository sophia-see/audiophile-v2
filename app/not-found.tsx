"use client"

import Button from "@/components/shared/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-2">
      <h1 className="text-3xl font-bold text-brown">404 - Page Not Found</h1>
      <p className="text-gray-500">The page you are looking for doesn’t exist.</p>
      <Link href="/" className="mt-4">
        <Button>Go Home</Button>
      </Link>
    </div>
  );
}
