import { exclusiveOffers as events } from "@/data/exclusive-offers";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: Promise<{ href: string }> }) {

    const href = (await params).href;

    const filteredProducts = events?.filter((event) => event.name === href)

    if (filteredProducts?.length === 0) {
        return NextResponse.json({ error: "Products not found" }, { status: 404 });
    }

    return NextResponse.json(filteredProducts);
}