import { Container } from "@/components/ui-self/container/container";
import { H1 } from "@/components/ui-self/heading";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { renderWithLineBreaks } from "@/lib/utilsTsx.tsx";

interface AboutInfo {
  name: string;
  desc: string;
  imagePath: string;
  width: string;
}

interface About {
  [key: string]: AboutInfo;
}

const about: About = {
  sonbeel: {
    name: "SONBEEL: THE TREASURE",
    desc: `Sonbeel, often referred to as the "Lake of Gold," is a majestic wetland located in the Indian state of Assam. Spread over an expansive area, it is celebrated as the second-largest wetland in Asia. This natural wonder is a testament to the breathtaking beauty and ecological diversity of the region.\n
Situated in the district of Karimganj in southern Assam, Sonbeel is a mosaic of marshes, swamps, and water bodies that stretch as far as the eye can see. The wetland is predominantly fed by the tributaries of the Barak River, creating a complex network of water channels and habitats that support a rich array of flora and fauna.\n
The biodiversity of Sonbeel is truly remarkable. The wetland is home to numerous species of birds, including migratory birds that flock here during the winter months. Birdwatchers can spot a diverse range of avian species, from majestic waterfowl like herons and egrets to colorful kingfishers and elusive cranes.\n
In addition to its avian inhabitants, Sonbeel supports a thriving population of fish, amphibians, and reptiles. The wetland ecosystem provides essential breeding grounds and feeding areas for these aquatic species, contributing to the overall ecological balance of the region.\n
Visitors to Sonbeel can embark on boat tours to explore its scenic beauty, observe wildlife in their natural habitat, and experience the rich cultural heritage of the surrounding area. The serene ambiance and stunning vistas of Sonbeel make it a popular destination for nature lovers, photographers, and adventure seekers alike.`,
    imagePath: "sonbeel.png",
    width: "w-[40rem]",
  },
  aus: {
    name: "ASSAM UNIVERSITY, SILCHAR",
    desc: `Assam University came into existence in 1994 after enactment of the Assam (Central) University Act 1989. Through its pursuit, Assam University is in the process of making itself an institute of excellence.
          \nAssam University main campus is situated at Dargakona, about 20 kms away from Silchar. The campus is set amid sprawling hillocks and typical landscape of north east. The campus is spread over 600 acres and provide an ideal environment for the researchers, students and the people interested in academic excellence. The other campus of the university is situated at Diphu in the district of Karbi Anglong, Assam.
          \nThe university has the territorial jurisdiction over the five districts of Assam viz., Cachar, Karimganj, Hailakandi, Dima Hasao (erstwhile North Cachar Hills) and Karbi Anglong.
          \nAssam University being a central university hosts a national characteristics of unity in diversity. Faculties, staff and students hail from all over the country. International students also find this institution an ideal centre for pursuing their academic endeavour.`,
    imagePath: "aus.jpeg",
    width: "w-[40rem]",
  },
  sonbeelutsav: {
    name: "SONBEEL UTSAV",
    desc: `
Assam University, in collaboration with stakeholders, is extending its hand to effectively promote tourism, raise awareness for wetland conservation, and position the wetland as a significant destination on the tourism map of our country. This effort is accompanied by a grand celebration and expression of gratitude towards the wetland, achieved through the organization of the Son Beel Utsav, 2024.
`,
    imagePath: "sonbeel-utsav.png",
    width: "md:w-[30rem] w-[20rem]",
  },
};

export default function Page({ params }: { params: { slug: string } }) {
  if (!about.hasOwnProperty(params.slug)) return <div>Page not found</div>;
  return (
    <Container className="items-center md:flex-row md:justify-evenly">
      <div className="mb-5 flex flex-col gap-2 md:w-[40rem]">
        <H1>{"ABOUT " + about[params.slug].name}</H1>
        <p className="text-secondary">
          {renderWithLineBreaks(about[params.slug].desc)}
        </p>

        {params.slug == "sonbeelutsav" && (
          <p className="pl-5 text-primary">
            The specific objectives of Son Beel Utsav
            <br /> - Promotion of Tourism and Economic Impact
            <br />
            - Raising Voice for Wetland Conservation
            <br />- Placing Wetland on the Tourism Map
            <br />
          </p>
        )}
      </div>
      <Image
        src={`/images/about/${about[params.slug].imagePath}`}
        alt={about[params.slug].name}
        width={900}
        height={900}
        className={cn(
          "rounded-xl transition duration-300 ease-in-out hover:scale-110 hover:transform",
          about[params.slug].width,
        )}
      />
    </Container>
  );
}
