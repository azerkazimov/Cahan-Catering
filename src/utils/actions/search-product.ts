import { CategoryProps } from "@/helpers/interfaces/categories"

export async function searchProducts(query: string): Promise<CategoryProps[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/items?q=${encodeURIComponent(query)}`)

    if (!response.ok) {
        throw new Error("Failed to fetch search products")
    }

    return response.json()
}