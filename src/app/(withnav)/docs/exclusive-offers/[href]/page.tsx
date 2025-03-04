import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ArrowLeft, Calendar, Check, Clock, Users } from "lucide-react";

import { ExclusiveOfferProps } from "@/helpers/interfaces/exclusive-offer";

interface ExclusiveOffersProps {
  params: Promise<{
    href: string;
  }>;
}

export default async function ExclusiveOffer({ params }: ExclusiveOffersProps) {
  const { href } = await params;

  const response = await fetch(
    `${process.env.API_HOST}/docs/exclusive-offers/${href}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.statusText}`);
  }

  const events = await response.json();

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      {events.map((data: ExclusiveOfferProps) => (
        <>
          <Link
            href={`/`}
            className="flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Geri qayıt
          </Link>

          <div className="mb-12">
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-8">
              <Image
                src={data.gallery[0] || "/placeholder.svg"}
                alt={data.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 md:p-10">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {data.title}
                </h1>
                <p className="text-white/90 text-lg md:text-xl max-w-2xl">
                  {data.description}
                </p>
              </div>
            </div>
          </div>

          <Tabs defaultValue="overview" className="mb-12">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="overview">Ümumi Məlumat</TabsTrigger>
              <TabsTrigger value="gallery">Qalereya</TabsTrigger>
              <TabsTrigger value="packages">Paketlər</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <h2 className="text-2xl font-bold mb-4">Haqqında</h2>
                  <p className="text-lg">{data.content}</p>

                  <h3 className="text-xl font-semibold mt-8 mb-4">
                    Xüsusiyyətlər
                  </h3>
                  <ul className="space-y-2">
                    {data.features.map((feature, index: number) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-muted rounded-xl p-6 h-fit">
                  <h3 className="text-xl font-semibold mb-4">Əlavə Məlumat</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-primary mr-3" />
                      <div>
                        <p className="font-medium">Mövcudluq</p>
                        <p className="text-muted-foreground">Həftənin 7 günü</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-primary mr-3" />
                      <div>
                        <p className="font-medium">Müddət</p>
                        <p className="text-muted-foreground">2-3 saat</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-primary mr-3" />
                      <div>
                        <p className="font-medium">Qrup ölçüsü</p>
                        <p className="text-muted-foreground">5-10 nəfər</p>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full mt-6">Sifariş et</Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="gallery">
              <h2 className="text-2xl font-bold mb-6">Qalereya</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="relative h-[250px] rounded-lg overflow-hidden"
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${data.title} - Image ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="packages">
              <h2 className="text-2xl font-bold mb-6">Paketlər</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {data.packages.map((pkg, index) => (
                  <div
                    key={index}
                    className="border rounded-xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-2xl font-bold text-primary mb-4">
                      {pkg.price}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant={index === 1 ? "default" : "outline"}
                      className="w-full"
                    >
                      Seçin
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="bg-primary/5 rounded-xl p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Bizimlə əlaqə saxlayın
                </h2>
                <p className="mb-6">
                  Əlavə məlumat üçün və ya sifariş vermək üçün bizimlə əlaqə
                  saxlayın.
                </p>
                <Button size="lg">Əlaqə</Button>
              </div>
              <div className="relative h-[200px] md:h-[250px] rounded-lg overflow-hidden">
                <Image
                  src="https://www.rewardsnetwork.com/wp-content/uploads/2015/09/Catering_Main.jpg"
                  alt="Contact us"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
