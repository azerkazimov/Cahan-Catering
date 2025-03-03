import { ProductCard } from "@/components/shared/product-card/product-card";
import { SubProductProps } from "@/helpers/interfaces/products";

export default async function SubCategories({
  params,
}: {
  params: Promise<{ category: string; href: string }>;
}) {
  const category = (await params).category;
  const href = (await params).href;

  const endpoint = href
    ? `${process.env.API_HOST}/docs/${category}/item/${href}`
    : `${process.env.API_HOST}/docs/${category}`;

  const response = await fetch(endpoint);

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
