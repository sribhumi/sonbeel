import { Container } from "@/components/ui-self/container/container";
import { H1 } from "@/components/ui-self/heading";
import { Footer } from "@/components/ui-self/sections/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Homestay1() {
  return (
    <>
      <Container className="py-10">
        <H1 className="text-center mb-10">Homestay 1 - Relax at Son Beel</H1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Image */}
          <div className="w-full h-full">
            <Image
              src="/images/homestay1.jpg"
              alt="Homestay 1"
              width={600}
              height={400}
              className="rounded-xl w-full h-auto"
            />
          </div>
          {/* Right: Details */}
          <div className="flex flex-col justify-between">
            <p className="text-lg">
              Welcome to Homestay 1, nestled by the serene waters of Son Beel.
              Experience nature, tranquility, and comfort in our beautifully
              designed homestay. Enjoy spacious rooms, delicious local cuisine,
              and friendly hospitality.
            </p>
            <ul className="mt-5 list-disc pl-5">
              <li>Price per night: ₹2000</li>
              <li>Location: Near Son Beel Lake</li>
              <li>Amenities: Free Wi-Fi, Local Cuisine, Lake View</li>
              <li>Rating: 4.5/5</li>
            </ul>
            <Button className="mt-10 w-full">Book Now</Button>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
