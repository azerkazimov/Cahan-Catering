import { products } from "@/data/navbar";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { category: string } }) {
    const { category } = params;

    const item = products.find((item) => item.category.toLowerCase() === category.toLowerCase());

    if (!item) {
        return NextResponse.json({ error: 'Category not found' }, { status: 404 });
    }

    return NextResponse.json(item.items);
}