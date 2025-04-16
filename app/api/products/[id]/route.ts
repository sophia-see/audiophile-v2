import { fetchProductById } from "@/lib/api/product";
import { NextResponse } from "next/server";

interface ParamsProps {
  params: Promise<{ id: string }>;
}

export async function GET(req: Request, { params }: ParamsProps) {
  const { id } = await params;
  const productId = parseInt(id);

  if (isNaN(productId)) {
    return new Response(JSON.stringify({ error: "Invalid product ID" }), { status: 400 });
  }

  const productRes = await fetchProductById(productId);

  if (!productRes) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(productRes);
}