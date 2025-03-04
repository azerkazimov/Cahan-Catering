import { ProductCard } from "@/components/shared/product-card/product-card";
import { Button } from "@/components/ui/button";
import { CategoryProps } from "@/helpers/interfaces/categories";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

export default async function Featured() {
  const response = await fetch(`${process.env.API_HOST}/items`);
  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.statusText}`);
  }
  const items = await response.json();

  return (
    <section className="container mx-auto px-4 pb-24 max-w-6xl mt-12">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col ">
          <h2 className="text-3xl font-semibold">Featured products</h2>
          <p className="text-zinc-500">
            Explore products from around the world
          </p>
        </div>
        <div className="flex">
          <Link href="/" className="text-zinc-800">
            <Button variant="outline" className="text-white font-medium">
              <span>View all products</span> <GoArrowRight />
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {items.map((product: CategoryProps) => (
          <Link key={product.id} href={product.path || '#'}>
            <ProductCard key={product.id} product={product} />
          </Link>
        ))}
      </div>
    </section>
  );
}
