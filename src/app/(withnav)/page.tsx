import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Github } from "lucide-react";
import Link from "next/link";

import { HiOutlineCube } from "react-icons/hi";

export default function Home() {
  return (
    <main className="container">
      <section className="container py-24 text-center animate-fadeUp">
        <div className="mb-8 flex justify-center">
          <Link href="https://github.com/sadmann7/skateshop" target="_black">
            <Button
              variant="outline"
              className="bg-zinc-800 font-[900] rounded-full hover:bg-zinc-900 text-xs "
            >
              <Github className=" h-4 w-4" />
              5327 stars on GitHub
            </Button>
          </Link>
        </div>

        <h1 className="mb-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ">
          Foundation for your commerce platform
        </h1>
        <p className="mx-auto mb-8 max-w-[500px] text-lg text-zinc-400 sm:text-xl">
          Skateshop is an open-source platform for building and customizing your
          own commerce platform with ease.
        </p>

        <div className="flex justify-center gap-4">
          <Button size="lg" className="bg-white text-black hover:bg-zinc-200">
            Buy now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-zinc-800 bg-transparent text-white hover:bg-zinc-800"
          >
            Sell now
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-24 max-w-6xl animate-fadeUp duration-700">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="border-zinc-800 ">
            <CardHeader className="h-full flex flex-col justify-between">
              <div className="flex flex-col py-3 gap-2">
                <CardTitle>Skateboards</CardTitle>
                <CardDescription className="text-zinc-400">
                  The best skateboards for all levels of skaters.
                </CardDescription>
              </div>
              <div className="mt-4 flex items-center text-sm text-zinc-400">
                <HiOutlineCube />5 products
              </div>
            </CardHeader>
          </Card>

          <Card className="border-zinc-800 ">
            <CardHeader className="h-full flex flex-col justify-between">
              <div className="flex flex-col py-3 gap-2">
                <CardTitle>Shoes</CardTitle>
                <CardDescription className="text-zinc-400">
                  Rad shoes for long skate sessions.
                </CardDescription>
              </div>
              <div className="mt-4 flex items-center text-sm text-zinc-400">
                <HiOutlineCube />
                12 products
              </div>
            </CardHeader>
          </Card>

          <Card className="border-zinc-800 ">
            <CardHeader className="h-full flex flex-col justify-between">
              <div className="flex flex-col py-3 gap-2">
                <CardTitle>Clothing</CardTitle>
                <CardDescription className="text-zinc-400">
                  Stylish and comfortable skateboarding clothing.
                </CardDescription>
              </div>
              <div className="mt-4 flex items-center text-sm text-zinc-400">
                <HiOutlineCube />6 products
              </div>
            </CardHeader>
          </Card>

          <Card className="border-zinc-800 ">
            <CardHeader className="h-full flex flex-col justify-between">
              <div className="flex flex-col py-3 gap-2">
                <CardTitle>Accessories</CardTitle>
                <CardDescription className="text-zinc-400">
                  The essential skateboarding accessories to keep you rolling.
                </CardDescription>
              </div>
              <div className="mt-4 flex items-center text-sm text-zinc-400">
                <HiOutlineCube />1 products
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>
    </main>
  );
}
