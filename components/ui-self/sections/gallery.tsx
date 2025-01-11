import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { H1 } from "../heading";
import { Container } from "../container/container";
import Link from "next/link";

const images = ["1.png", "2.png", "3.png", "4.png", "5.png"];

export function Gallery() {
  return (
    <Container className="items-center justify-center">
      <Link href="/gallery">
        <H1 className="text-center">GALLERY</H1>
      </Link>
      <Carousel className="">
        <CarouselContent className="w-[15rem] xl:w-[80rem]">
          {images.map((image) => {
            return (
              <CarouselItem key={image} className="flex justify-center">
                <Image
                  src={`/images/gallery-images/${image}`}
                  alt="logo"
                  width={4000}
                  height={2000}
                  className="cursor-pointer rounded-xl"
                  loading="lazy"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Container>
  );
}
