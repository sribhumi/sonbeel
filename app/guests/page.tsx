import { Container } from "@/components/ui-self/container/container";
import { invitedGuests } from "./guests";
import Image from "next/image";
import { H1 } from "@/components/ui-self/heading";

export default function Page() {
  return (
    <Container>
      <H1 className="text-center">Guests</H1>
      {invitedGuests.map((guest) => {
        return (
          <div
            className="flex h-[10rem] w-[20rem] items-center justify-start gap-10 rounded-3xl border border-primary px-10 md:h-[14rem] md:w-[50rem]"
            key={guest.name}
          >
            <Image
              src={guest.pic ? guest.pic : "/images/guest/default.jpg"}
              alt={guest.name}
              width={200}
              height={200}
              className="w-[6rem] rounded-3xl md:w-[10rem]"
            />
            <div>
              <h1 className="text-sm font-semibold text-secondary md:text-2xl">
                {guest.name}
              </h1>

              {guest.url && (
                <a
                  className="hover:text-primary"
                  href={guest.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </a>
              )}
            </div>
          </div>
        );
      })}
    </Container>
  );
}
