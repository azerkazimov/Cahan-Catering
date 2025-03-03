import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { products } from "@/data/navbar";

import Link from "next/link";

import { HiOutlineCube } from "react-icons/hi";

export default async function Main() {
  return (
    <main
      className="bg-cover bg-center min-h-screen"
      style={{
        backgroundImage:
          "url(https://lasahijaderas.com/wp-content/uploads/2024/07/canapes-de-catering.jpg)",
      }}
    >
      <section className="container py-24 text-center animate-fadeUp">
        <h1 className="mb-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ">
          Hər Zövqə Uyğun Möhtəşəm Catering Xidməti
        </h1>
        <p className="mx-auto mb-8 max-w-[500px] text-lg text-zinc-700 sm:text-xl">
          Toylar, korporativ tədbirlər və özəl məclislər üçün peşəkar aşpazlar
          tərəfindən hazırlanan ləzzətli təamlarla qonaqlarınızı heyran edin.
          Sizin üçün xüsusi menyular tərtib edirik!
        </p>

        <div className="flex justify-center gap-4">
          <Button size="lg" className="bg-white text-black hover:bg-zinc-200">
            Sifaris üçün əlaqə
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-black hover:bg-zinc-200"
          >
            Menyuya bax
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-24 max-w-6xl animate-fadeUp duration-700">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <Link key={product.name} href={product?.items?.[0]?.href ?? "/"}>
              <Card className="border-zinc-200 max-h-[186px] h-full transition-all duration-200 bg-blur-sm bg-white/60 hover:bg-zinc-300 ">
                <CardHeader className="h-full flex flex-col justify-between">
                  <div className="flex flex-col py-3 gap-2">
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription className="text-zinc-400">
                      {product.description}
                    </CardDescription>
                  </div>
                  <div className="mt-4 flex items-center text-sm text-zinc-400 gap-1">
                    <HiOutlineCube />
                    <span className="mt-[-2px]">
                      {product.items?.length ?? 1} products
                    </span>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
