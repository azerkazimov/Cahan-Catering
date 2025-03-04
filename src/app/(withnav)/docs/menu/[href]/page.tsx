import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Clock, Users } from "lucide-react";
import { menu } from "@/data/menu";

export default function MenuPage() {
  return (
    <div className="container mx-auto mt-12 py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Menu</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our carefully curated menu options for every occasion. From
          breakfast to weddings, we provide exceptional catering services
          tailored to your needs.
        </p>
      </div>

      <Tabs defaultValue="breakfast" className="w-full">
        <TabsList className="w-full justify-center mb-8 overflow-x-auto flex-wrap h-auto gap-2 p-2">
          {menu.map((category) => (
            <TabsTrigger
              key={category.value}
              value={category.value}
              className="text-base px-6"
            >
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {menu.map((category) => (
          <TabsContent key={category.value} value={category.value}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item) => (
                <Card key={item.id} className="flex flex-col overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-sm">
                        {item.type}
                      </Badge>
                      <span className="font-semibold text-lg">
                        {item.price}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{item.name}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {item.servings} guests
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {item.duration}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Book This Menu</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
