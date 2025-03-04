import { events as products } from "@/data/events";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: Promise<{ href: string }> }) {

    const href = (await params).href;

    const filteredProducts = products?.filter((event) => event.href === `/docs/services/${href}`)

    if (filteredProducts?.length === 0) {
        return NextResponse.json({ error: "Products not found" }, { status: 404 });
    }

    return NextResponse.json(filteredProducts);
}