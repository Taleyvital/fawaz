import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { getPortfolioItems, savePortfolioItems } from "@/lib/portfolio-store";
import type { PortfolioItem } from "@/data/portfolio-items";

export async function GET() {
  const items = await getPortfolioItems();
  return NextResponse.json(items);
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get("image") as File;
  const title = formData.get("title") as string;
  const category = formData.get("category") as string;
  const description = formData.get("description") as string;

  if (!file || !title || !category) {
    return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
  }

  const blob = await put(`photos/${Date.now()}-${file.name}`, file, {
    access: "public",
  });

  const newItem: PortfolioItem = {
    id: `item-${Date.now()}`,
    title,
    category: category as PortfolioItem["category"],
    image: blob.url,
    alt: title,
    description: description || undefined,
  };

  const items = await getPortfolioItems();
  const updatedItems = [...items, newItem];
  await savePortfolioItems(updatedItems);

  return NextResponse.json(newItem);
}