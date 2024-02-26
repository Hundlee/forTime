"use client";

import {
    CarouselContent,
    Carousel,
    CarouselItem,
} from "@/app/_components/ui/carousel";
import { type CarouselApi } from "@/app/_components/ui/carousel";
import { useEffect, useState } from "react";
import CardProject from "./cardProject";

const CarouselComponent = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <div>
            <Carousel>
                <CarouselContent>
                    <CarouselItem className="flex gap-5">
                        <CardProject />
                        <CardProject />
                        <CardProject />
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
            <div className="py-2 text-center text-sm text-muted-foreground">
                Slide {current} of {count}
            </div>
        </div>
    );
};

export default CarouselComponent;
