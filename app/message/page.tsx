import { Container } from "@/components/ui-self/container/container";
import { H1 } from "@/components/ui-self/heading";
import { renderWithLineBreaks } from "@/lib/utilsTsx.tsx";
import Image from "next/image";

const messages = [
  {
    id: "vc",
    title: "Vice Chancellor's message",
    content: `Welcome to the Sonbeel Festival 2024!
              Sonbeel, an enchanting jewel nestled in the heart of Asia, stands as a testament to the breathtaking beauty of nature. Having had the privilege to explore its wonders firsthand, I am captivated by its unparalleled charm. It is my firm belief that Sonbeel possesses immense potential as a tourism hotspot.
              Our endeavor to promote tourism in this region is not merely a pursuit of economic growth but a commitment to uplift the local communities. By harnessing the power of tourism, we aim to empower the families residing in and around Sonbeel, heralding a new era of prosperity for the entire region.
              However, despite its natural allure, Sonbeel remains largely undiscovered due to inadequate marketing efforts. Thus, we have conceived the idea of the Sonbeel Festival—a celebration of the region's beauty and cultural richness. This festival serves as a platform to showcase Sonbeel to the World, inviting renowned photographers and literary figures to document and promote its splendour.
              As a responsible institution, Assam University Silchar is dedicated to establishing the Sonbeel Festival as an annual event. With the generous support of sponsors like NEC, Shillong, Ministry of DoNER, we are proud to announce the inaugural edition of the festival, scheduled from February 24th to 26th, coinciding with the enchanting full-moon nights that unveil Sonbeel in all its glory.
              I extend a heartfelt invitation to all to join us at the Sonbeel Festival and immerse yourselves in the unparalleled beauty of this pristine wetland. This is just the beginning of our journey, and with your cooperation, we envision the Sonbeel Festival evolving into a grand and successful event in the years to come.
              On behalf of Assam University Silchar, I extend warm wishes and heartfelt invitations to all who share our passion for exploration and appreciation of nature's wonders.`,
    imageUrl: "/images/message/vc.jpg",
    name: "Prof. Rajive Mohan Pant",
    designation: "Vice Chancellor & Chairman",
  },
  {
    id: "director",
    title: "Director's message",
    content:
      "Feeling so happy that the dream which I have been nurturing since last three decades, the silent movement which I initiated 30 years back for conservation of and tourism promotion in Sonbeel is now going to be materialized under the initiative of a visionary academic leader Prof. Rajive Mohan Pant, Hon'ble Vice Chancellor of Assam University, Silchar, who believes from the core of his heart that this Sonbeel Utsav will be the Game changer for socio economic development of the People of the locality. Being inspired by the beauty of the water body during his first visit to Sonbeel, he searched me out to  execute this plan. Never and ever I thought of such an initiative from my own institute. I know Sonbeel utsav itself is not going to change the condition of the people but this utsav will show the path to all stakeholders how Sonbeel can bring a change,  I believe. My humble submission to all the stakeholders to grab the opportunity . My sincere thanks to Mr. Angshuman Dey, a personality from Sonbeel area for his all help and my best wishes for the young group of, dedicated and energetic teachers and non-teaching staff of the university who have volunteered themselves as Task Force members of the function. I salute all, who were with me during this three decades long movement for Sonbeel conservation.",
    imageUrl: "/images/message/director.jpeg",
    name: "Prof. Manabendra Dutta Choudhury",
    designation: "Director, Planning & Event Management",
  },
  {
    id: "registrar",
    title: "Registrar's message",
    content:
      "Beels or wetlands are crucial for maintaining biodiversity, improving rural livelihood, enhancing ecosystem services, and mitigating climate change impacts. To conserve wetlands effectively, it is essential to prioritize protection, restoration, management, education and awareness, research and international cooperation. By prioritizing these actions, we can work towards preserving wetlands and ensuring their continued contribution to biodiversity conservation, climate regulation, and sustainable development. In this regard, Son Beel Utsav 2024 is essential in popularizing this less-explored wetland to promote tourism and create rural livelihood opportunities. I hope the Son Beel Utsav 2024 is a great success.",
    imageUrl: "/images/message/registrar.jpg",
    name: "Dr. Pradosh Kiran Nath",
    designation: "Registrar & Organising Secretary",
  },
  {
    id: "convener",
    title: "Convener's message",
    content:
      "Being an ecologist, I believe that Son Beel Utsav 2024 will play a pivotal role in raising awareness about the importance of this wetland as a vital ecosystem and cultural heritage site. Son Beel Utsav will also provide opportunities for communities to showcase their unique traditions, folklore, and artistic expressions tied to wetland environments. By highlighting the cultural value of this wetland, Son Beel Utsav will foster a deeper connection between people and their natural surroundings, promoting conservation efforts and sustainable practices. Moreover, such events will preserve indigenous knowledge and traditions, fostering social cohesion and pride in local heritage. In essence, the Son Beel Utsav 2024 will bridge environmental conservation and cultural appreciation, reinforcing the interconnectedness between nature and human societies.",
    imageUrl: "/images/message/convener.png",
    name: "Dr. Arun Jyoti Nath",
    designation: "Convener",
  },
];

export default function Page() {
  return (
    <Container className="items-center justify-center">
      {messages.map((message) => {
        return (
          <section
            id={message.id}
            key={message.id}
            className="flex w-[20rem] scroll-mb-10 scroll-mt-20 flex-row items-start justify-evenly gap-10 rounded-xl bg-card px-5 py-5 drop-shadow-lg md:w-[80rem] md:scroll-mb-20 md:scroll-mt-20 md:items-center md:px-10 md:py-10"
          >
            <div className="flex w-[17rem] flex-col items-center gap-4 text-center">
              <Image
                src={message.imageUrl}
                alt="logo"
                width={200}
                height={200}
                className="cursor-pointer rounded-full"
              />
              <div>
                <h2 className="text-sm font-bold">{message.name}</h2>
                <h2 className=" text-xs text-primary md:text-sm">
                  {message.designation}
                </h2>
              </div>
            </div>
            <div className="w-[40rem]">
              <H1>{message.title}</H1>
              <p className="p-2 italic md:pl-10">
                - &quot;{renderWithLineBreaks(message.content)}&quot;
              </p>
            </div>
          </section>
        );
      })}
    </Container>
  );
}
