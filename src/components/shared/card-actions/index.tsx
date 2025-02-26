"use client";

import { Button } from "@/components/ui/button";
import QuantitySelector from "../quantity-selector";
import { Heart } from "lucide-react";
import { useProductStore } from "@/store";
import { ProductProps } from "@/helpers/interfaces/products";

export default function CardActions({ product }: { product: ProductProps }) {
  const { setProducts } = useProductStore();

  const addToCart = (
    event: React.MouseEvent<HTMLButtonElement>,
    product: ProductProps
  ) => {
    event.preventDefault();
    setProducts((prev) => {
      const current = prev.find((p) => p.id === product.id);
      if (!current) {
        return [...prev, product];
      }
      return prev;
    });
  };

  return (
    <div className="flex flex-col gap-5">
      <QuantitySelector product={product} />

      <div className="flex gap-4">
        <Button className="flex-1 bg-white text-black hover:bg-zinc-200">
          Buy now
        </Button>
        <Button
          variant="outline"
          className="flex-1"
          onClick={(event) => addToCart(event, product as ProductProps)}
        >
          Add to card
        </Button>
        <Button variant="outline" size="icon">
          <Heart className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
