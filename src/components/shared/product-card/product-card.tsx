"use client";
import { Eye } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ProductProps, SubProductProps } from "../../../helpers/interfaces/products";
import { CategoryProps } from "../../../helpers/interfaces/categories";
import { usePathname } from "next/navigation";
import { useProductStore } from "@/store";

type ProductCardProps = { product: ProductProps | CategoryProps | SubProductProps };

export function ProductCard({ product }: ProductCardProps) {
  const pathname = usePathname();
  const isDocs = pathname.startsWith("/docs");

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
    <Card className="rounded group border-0 h-[300px] overflow-hidden">
      <CardHeader className="p-0">
        <div className="h-[300px] relative overflow-hidden object-cover rounded-t-lg">
          <Image
            src={
              "imageUrl" in product
                ? product.imageUrl
                : "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png?20210521171500"
            }
            alt={"name" in product ? product.name : product.title}
            fill
            className="object-cover"
          />
        </div>
      </CardHeader>
     <div className="translate-y-full group-hover:-translate-y-full bg-zinc-300/50 backdrop-blur-md  transition-transform duration-300">

     
      <CardContent className="p-4 ">
        <h3 className="font-medium text-black">
          {isDocs
            ? "title" in product
              ? product.title
              : ""
            : "name" in product
            ? product.name
            : ""}
        </h3>
        {!isDocs && "price" in product && (
          <p className="text-sm text-zinc-400">${product.price}</p>
        )}
        {isDocs && "description" in product && (
          <p className="text-sm text-zinc-400">{product.description}</p>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button
          className="flex-1 bg-white text-black hover:bg-zinc-200"
          onClick={(event) => addToCart(event, product as ProductProps)}
        >
          {isDocs ? "View products" : "Add to card"}
        </Button>
        {!isDocs && (
          <Button size="icon" variant="outline" className="border-zinc-300">
            <Eye className="h-4 w-4 text-black" />
          </Button>
        )}
      </CardFooter></div>
    </Card>
  );
}
