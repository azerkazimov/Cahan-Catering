import { products } from "@/data/sub-products";
import { NextResponse } from "next/server";



export async function GET(req: Request, {params}: {params: Promise<{ category: string, href: string }>}) {
   
    
    const category = (await params).category;
    const href = (await params).href;

    const filteredProducts = href 
      ? products?.filter((product) => product.subcategory === href)
      : products?.filter((product) => product.category === category);

    if (filteredProducts?.length === 0) {
        return NextResponse.json({ error: "Products not found" }, { status: 404 });
    }

    return NextResponse.json(filteredProducts);
}