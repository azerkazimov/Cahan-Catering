import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// This would typically come from an API or database
const getData = async (category: string) => {
  // For demo purposes, we're hardcoding the data
  // In a real app, you would fetch this from an API
  const data = {
    id: "2",
    name: "Əlavə Xidmətlərimiz",
    category: "exclusive-offers",
    description:
      "Tədbirlərinizə xüsusi toxunuş qatacaq əlavə xidmətlərimizlə tanış olun!",
    heroImages: [
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200",
    ],
    items: [
      {
        id: "2",
        title: "Master Klassların təşkili",
        href: "/docs/exclusive-offers/master-classes",
        description:
          "Peşəkar aşpazlardan kulinariya sirlərini öyrənin və öz bacarıqlarınızı təkmilləşdirin!",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        id: "3",
        title: "Hədiyyəlik qutular",
        href: "/docs/exclusive-offers/gift-boxes",
        description:
          "Özəl günlər üçün dadlı və zövqlə tərtib olunmuş hədiyyəlik qutular.",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        id: "4",
        title: "Avadanlıqların icarəsi",
        href: "/docs/exclusive-offers/equipment-rental",
        description:
          "Tədbirləriniz üçün yüksək keyfiyyətli avadanlıqların icarəsi – rahatlıq və peşəkarlıq bir arada!",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
  };

  if (category !== data.category) {
    return null;
  }

  return data;
};

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const data = await getData(params.category);

  if (!data) {
    notFound();
  }

  return (
    <div className="container mx-auto py-6 px-4 md:px-6">
      {/* Hero Section with Carousel */}
      <div className="mb-12 rounded-xl overflow-hidden">
        <Carousel className="w-full">
          <CarouselContent>
            {data.heroImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${data.name} - Slide ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 md:p-10">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                      {data.name}
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl">
                      {data.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>

      {/* Services Section */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Xidmətlərimiz
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items.map((item) => (
            <Card
              key={item.id}
              className="group h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="pt-0">
                <Button
                  asChild
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300"
                >
                  <Link
                    href={item.href}
                    className="flex items-center justify-between"
                  >
                    Ətraflı{" "}
                    <ChevronRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mb-16 py-12 bg-muted/50 rounded-xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Müştəri Rəyləri
        </h2>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {[1, 2, 3].map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-6">
                  <Card className="border-0 shadow-md bg-background">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-full bg-primary/10 mb-4 flex items-center justify-center">
                          <Image
                            src={`/placeholder.svg?height=100&width=100`}
                            alt="Customer"
                            width={60}
                            height={60}
                            className="rounded-full"
                          />
                        </div>
                        <p className="text-lg italic mb-4">
                          {`"Xidmətləri çox bəyəndim. Peşəkar komanda və
                          yüksək keyfiyyətli xidmət. Hər kəsə tövsiyə
                          edirəm!"`}
                        </p>
                        <div>
                          <h4 className="font-semibold">Anar Məmmədov</h4>
                          <p className="text-sm text-muted-foreground">
                            Bakı, Azərbaycan
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 -translate-x-1/2" />
          <CarouselNext className="right-0 translate-x-1/2" />
        </Carousel>
      </div>

      {/* Call to Action */}
      <div className="bg-primary text-primary-foreground rounded-xl p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Xidmətlərimizlə maraqlanırsınız?
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Bizimlə əlaqə saxlayın və sizə ən uyğun təklifi hazırlayaq!
        </p>
        <Button variant="secondary" size="lg" className="font-medium">
          Əlaqə saxlayın
        </Button>
      </div>
    </div>
  );
}
