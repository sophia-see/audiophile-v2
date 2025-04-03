"use client";
import { useUser, useClerk } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function CustomUserButton() {
  const { user } = useUser();
  const { signOut } = useClerk();
  const [open, setOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node))
        setOpen(false);
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Extract initials
  const getInitials = (name?: string) => {
    if (!name) return "U"; // Default to 'U' if no name
    
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-[32px] h-[32px] text-[12px] bg-light-brown text-black font-medium rounded-full tracking-wide"
      >
        {getInitials(`${user?.firstName?.split(" ")[0]} ${user?.lastName?.split(" ")[0]}`)}
      </button>

      {open && (
        <div ref={userMenuRef} className="absolute right-0 mt-2 w-48 h-auto bg-gray text-black rounded-md shadow-lg overflow-hidden z-20 text-[14px]">
          <button
            className="font-semibold block w-full text-left px-4 py-4 hover:bg-brown hover:text-white transition duration-100"
          >
            <Link href={"/my-orders"}>
              My Orders
            </Link>
          </button>
          <button
            onClick={() => signOut()}
            className="font-semibold block w-full text-left px-4 py-4 hover:bg-brown hover:text-white transition duration-100"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
