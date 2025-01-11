import { Container } from "@/components/ui-self/container/container";
import { H1 } from "@/components/ui-self/heading";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <Container>
      <div className="flex w-full justify-center gap-10">
        <Image
          src="/images/gallery-images/1.png"
          alt="logo"
          width={800}
          height={800}
          className="hidden rounded-lg md:inline md:w-[50rem]"
        />
        <div className="flex w-full flex-col items-center justify-center gap-3 rounded-lg border-2 py-10 text-center md:w-[50rem] md:px-[10rem] md:py-[5rem]">
          <H1>Prof. Manabendra Dutta Choudhury</H1>
          <h1 className="text-lg md:text-2xl">
            Director, Planning & Event Management Son Beel Utsav 2024
          </h1>
          <div className="flex items-center justify-center gap-1 md:gap-3">
            <Phone size={20} />
            <p className="text-lg font-bold md:text-2xl">+91 9435173637</p>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center gap-10">
        <Image
          src="/images/gallery-images/3.png"
          alt="logo"
          width={800}
          height={800}
          className="hidden rounded-lg md:inline md:w-[50rem]"
        />
        <div className="flex w-full flex-col items-center justify-center gap-3 rounded-lg border-2 py-10 text-center md:w-[50rem] md:px-[10rem] md:py-[5rem]">
          <H1>Dr. Arun Jyoti Nath</H1>
          <h1 className="text-lg md:text-2xl">
            Task Force, Convener, Son Beel Utsav 2024
          </h1>
          <div className="flex items-center justify-center gap-1 md:gap-3">
            <Phone size={20} />
            <p className="text-lg font-bold md:text-2xl">+91 7636023026</p>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center gap-10">
        <Image
          src="/images/gallery-images/4.png"
          alt="logo"
          width={800}
          height={800}
          className="hidden rounded-lg md:inline md:w-[50rem]"
        />
        <div className="flex w-full flex-col items-center justify-center gap-3 rounded-lg border-2 py-10 text-center md:w-[50rem] md:px-[10rem] md:py-[5rem]">
          <H1>Email</H1>
          <Link
            className="flex items-center justify-center gap-1 md:gap-3"
            href="mailto:utsabsonbeel@gmail.com"
          >
            <Mail />
            <p className="text-lg font-bold md:text-2xl">
              utsabsonbeel@gmail.com
            </p>
          </Link>
        </div>
      </div>
    </Container>
  );
}
