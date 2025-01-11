import { Container } from "@/components/ui-self/container/container";
import Image from "next/image";

export default function Page() {
  return (
    <Container className="gap-2 p-0 pt-2 text-center md:gap-10 md:p-10">
      <h1 className="text-lg font-semibold text-secondary md:text-2xl">
        Folk Song and Folk Dance Contest
      </h1>
      <Image
        src="/images/contest/folkdance.jpeg"
        alt="Folk Song and Folk Dance Contest"
        height={1000}
        width={1000}
        className="w-full"
      />
    </Container>
  );
}
