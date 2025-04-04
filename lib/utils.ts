import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { ImageSet } from "@prisma/client";

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

export const toProductData = (data: ProductDBType | null) => {
  if (!data) return null;

  const images: Partial<ProductImageType> = {}; // Using Partial to avoid missing fields

  // Map images by type (desktop, tablet, mobile)
  data.images?.forEach((image: ImageSet) => {
    // Narrow the type of image.type to be one of the valid keys of ProductImageType
    if (image?.type && ['desktop', 'tablet', 'mobile'].includes(image.type)) {
      images[image.type as keyof ProductImageType] = {  // Type assertion
        full: image.full,
        preview: image.preview,
        gallery: image.gallery,
      };
    }
  });
  
  return {
    id: data?.id,
    title: data?.title,
    description: data?.description,
    features: data?.features,
    featuredDesc: data?.featuredDesc,
    image: images as ProductImageType, // We use images mapped with proper types
    isNew: data?.isNew,
    category: data?.category,
    inclusions: data?.inclusions,
    price: data?.price,
  }
}