import Image from "next/image";

import CardActions from "@/components/shared/card-actions";
import { Star } from "lucide-react";
import { ProductProps } from "../../../../helpers/interfaces/products";

interface ItemProps {
  params: Promise<{
    path: string;
  }>;
}

export default async function ProductCategory({ params }: ItemProps) {
  const { path } = await params;

  const response = await fetch(`${process.env.API_HOST}/items`);

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.statusText}`);
  }

  const items: ProductProps[] = await response.json();

  const itemArr = items.flatMap((item) => {
    return item;
  });

  const product = itemArr.find((item) => item.path === `/products/${path}`);

  return (
    <div className="min-h-screen mt-12 text-black p-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mt-8">
        <div className="aspect-square relative bg-zinc-900 rounded-lg">
          <Image
            src={
              product?.imageUrl ||
              "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png"
            }
            alt={product?.name || "No image available."}
            layout="fill"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold mb-2">{product?.name}</h1>
            <p className="text-zinc-400">{product?.category}</p>
          </div>

          <div className="text-2xl font-bold">{product?.price}$</div>

          <div className="text-zinc-400">{product?.stockCount} in stock</div>

          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < (product?.rating || 0)
                    ? "text-yellow-400"
                    : "text-gray-400"
                }`}
                fill="currentColor"
              />
            ))}
          </div>

          {product && <CardActions product={product} />}

          {/* <QuantitySelector product={product?.id} />

          <div className="flex gap-4">
            <Button className="flex-1 bg-white text-black hover:bg-zinc-200">
              Buy now
            </Button>
            <Button variant="outline" className="flex-1">
              Add to card
            </Button>
            <Button variant="outline" size="icon">
              <Heart className="w-4 h-4" />
            </Button>
          </div> */}

          <div className="pt-4">
            <h5>Description</h5>
            <p className="text-zinc-400">
              {product?.description || "No description available."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
