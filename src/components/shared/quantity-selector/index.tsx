"use client";

import { Button } from "@/components/ui/button";
import { ProductProps } from "@/helpers/interfaces/products";
import { useProductStore } from "@/store";
import { MinusIcon, PlusIcon } from "lucide-react";

interface QuantitySelectorProps {
  product: ProductProps;
}

export default function QuantitySelector({ product }: QuantitySelectorProps) {
  const { products, setProducts } = useProductStore();

  const current = products.find((p) => p.id === product.id);

  const count = current ? current.quantity : 1;

  const incrementQuantity = () => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  };

  const decrementQuantity = () => {
    if (count > 1) {
      setProducts((prev) =>
        prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p
        )
      );
    }
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center">
        <Button
          variant="outline"
          size="icon"
          className="rounded-r-none"
          onClick={decrementQuantity}
        >
          <MinusIcon className="w-4 h-4" />
        </Button>
        <span className="mx-3">{count}</span>
        <Button
          variant="outline"
          size="icon"
          className="rounded-l-none"
          onClick={incrementQuantity}
        >
          <PlusIcon className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
