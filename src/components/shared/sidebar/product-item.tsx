"use client";
import { Button } from "@/components/ui/button";
import { ProductProps } from "@/helpers/interfaces/products";
import { Trash2 } from "lucide-react";
import QuantitySelector from "../quantity-selector";
import { useProductStore } from "@/store";

export function ProductItem({ id, name, price, imageUrl, path, description, stockCount }: ProductProps) {
  const { setProducts } = useProductStore();

  const removeItem = (id: string) => {
    setProducts((prev) => prev.filter((prod) => prod.id !== id));
  };

  return (
    <div className="flex items-center justify-between py-4">
      <div>
        <h3 className="text-sm font-medium text-white">{name}</h3>
        <p className="text-sm text-white/60">${price.toFixed(2)}</p>
      </div>
      <div className="flex items-center space-x-2">
        <QuantitySelector product={{ id, name, price, imageUrl, path, description, stockCount, category: "", rating: 0, quantity: 1 }} />
        <Button variant="outline" size="icon" onClick={() => removeItem(id)}>
          <Trash2 className="h-4 w-4" />
          <span className="sr-only">Remove item</span>
        </Button>
      </div>
    </div>
  );
}
