// import { IncrViewer } from "@/actions/incrViewer";
import { Container } from "@/components/ui-self/container/container";
import { H1 } from "@/components/ui-self/heading";
import { Footer } from "@/components/ui-self/sections/footer";
import { Gallery } from "@/components/ui-self/sections/gallery";
import { Hero } from "@/components/ui-self/sections/hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  // const viewers = await IncrViewer();

  return (
    <>
      <Container className="px-0 ">
        {/* Hero section */}
        <Hero heroText="Embrace Nature's Symphony at Son Beel 2025" />

        {/* About section */}
        

        {/* Gallery section */}

        <Gallery />
      </Container>
      <Footer/>
    </>
  );
}
