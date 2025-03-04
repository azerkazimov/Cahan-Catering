import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Check, Clock, MapPin, Users } from "lucide-react";
import Image from "next/image";

import { CateringEventProps } from "@/helpers/interfaces/catering-events";

interface CateringEventsProps {
  params: Promise<{
    href: string;
  }>;
}

export default async function CateringEvents({ params }: CateringEventsProps) {
  const { href } = await params;
  const response = await fetch(`${process.env.API_HOST}/docs/services/${href}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.statusText}`);
  }
  const events = await response.json();

  const typeColor = "bg-amber-100 text-amber-800";

  return (
    <div className="container my-12 pt-12">
      {events.map((event: CateringEventProps) => (
        <Card key={event.id} className="w-full overflow-hidden">
          <CardHeader className="pb-0">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <Badge className={`${typeColor} hover:${typeColor}`}>
                {event.type}
              </Badge>
            </div>
            <CardTitle className="text-2xl mt-2">{event.title}</CardTitle>
            <CardDescription className="line-clamp-2">
              {event.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0 mt-4">
            <Carousel className="w-full">
              <CarouselContent>
                {event.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Coffee break service image ${index + 1}`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>

            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {event.details.map((detail, index) => {
                  const IconComponent =
                    detail.icon === "MapPin"
                      ? MapPin
                      : detail.icon === "Clock"
                      ? Clock
                      : Users;
                  return (
                    <div key={index} className="flex items-center gap-2">
                      <IconComponent className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{detail.text}</span>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Includes:</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                  {event.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
