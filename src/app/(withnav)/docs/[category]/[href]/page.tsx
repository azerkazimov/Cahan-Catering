import { ProductCard } from "@/components/shared/product-card/product-card";
import { SubProductProps } from "@/helpers/interfaces/products";

interface PageProps {
  params: Promise<{
    href: string;
    category: string;
  }>;
}

export default async function SubCategories({ params }: PageProps) {
  const { href, category } = await params;

  const response = await fetch(
    `${process.env.API_HOST}/docs/${category}/${href}`
  );

  const items = await response.json();

  return (
    <div className="container mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {items.map((item: SubProductProps) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
