import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const handleError = (error: unknown) => {
  console.error(error)
  throw new Error(typeof error === 'string' ? error : JSON.stringify(error))
}

export const toProductUrl = (id: number, title: string) => {
  return `/product/${id}_${title.replaceAll(" ", "-").toLowerCase()}`
}

export const toParagraph = (paragraph: string) => {
  return paragraph.split("\n").filter(i => i)
}