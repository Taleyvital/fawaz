import { NextRequest, NextResponse } from "next/server";
import { getPortfolioItems, savePortfolioItems } from "@/lib/portfolio-store";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const updates = await request.json();

  const items = await getPortfolioItems();
  const index = items.findIndex((item) => item.id === id);

  if (index === -1) {
    return NextResponse.json({ error: "Item introuvable" }, { status: 404 });
  }

  items[index] = { ...items[index], ...updates };
  await savePortfolioItems(items);

  return NextResponse.json(items[index]);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const items = await getPortfolioItems();
  const filteredItems = items.filter((item) => item.id !== id);

  if (filteredItems.length === items.length) {
    return NextResponse.json({ error: "Item introuvable" }, { status: 404 });
  }

  await savePortfolioItems(filteredItems);

  return NextResponse.json({ success: true });
}