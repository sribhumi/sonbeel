import { Container } from "@/components/ui-self/container/container";
import Image from "next/image";

export default function Page() {
  return (
    <Container className="w-full justify-center md:flex-row">
      <div className="flex flex-col gap-2">
        <h1>
          <span className="text-2xl font-bold text-primary">
            THEME: SONBEEL - A PHOTOGRAPHER&apos;s PARADISE
          </span>
        </h1>
        <h1>
          <span className="font-bold text-secondary">Image Size: </span> 1920 x
          1080 pixels on the longer side with 300 dpi
        </h1>
        <h1>
          <span className="font-bold text-secondary">Number of Images: </span>{" "}
          One participant can submit up to 2 images maximum
        </h1>
        <h1>
          <span className="font-bold text-secondary">Awards: </span> (1) First
          (2) Second (3) Third (4) Honourable Mention
        </h1>
        <h1>
          <span className="font-bold text-secondary">Entry Fee: </span> No Entry
          Fee
        </h1>
        <h1>
          <span className="font-bold text-secondary">Rules: </span>
        </h1>
        <ol className="list-decimal pl-5 md:pl-16">
          <li>
            Each image should be renamed as [Participant&apos;s Name_Caption_1][
            Participant&apos;s Name_Caption_2] e.g [amit_das_sunset_2]
          </li>
          <li>Entry must be the contestant&apos;s original work.</li>
          <li>
            Only photos taken by digital cameras are allowed. A single “High
            Dynamic Range” photo produced from multiple exposures and Black &
            White Photos are acceptable. Photos taken by film camera are not
            eligible. Post processing of the image is limited to cropping and
            color enhancements, including shadows and highlights only. Photo
            manipulation is not allowed.
          </li>
          <li>Drone images are not allowed.</li>
          <li>
            Photo must be in JPEG format with at least 300 dpi and a maximum
            file size of 10 MB.
          </li>
          <li>Photo must be the original work of the photographer.</li>
          <li>
            Entry must not contain date stamps, watermarks, border or any text
            on the image.
          </li>
          <li>Contestants must agree and comply with the rules.</li>
          <li>Judges decision will be final for the competition.</li>
          <li>
            Contestants will be required to provide the following information
            upon submission of entry:
            <ol className="list-disc pl-16">
              <li>Full Name:</li>
              <li>Date of Birth</li>
              <li>Mailing Address</li>
              <li>Mobile Number</li>
              <li>E-mail Address</li>
              <li>Photo Title</li>
              <li>
                Photo Caption: (1-2 sentences explaining/describing the
                photograph and its relevance to the theme)
              </li>
              <li>Date the photo was captured: (Month, Year)</li>
              <li>Camera Used</li>
            </ol>
          </li>
          <li>
            The images have to be sent through email: utsabsonbeel@gmail.com
          </li>
          <li>
            Submission begins at 1:00 pm IST on February 6, 2024 and ends at
            11:59 pm IST on February 22, 2024.
          </li>
        </ol>
      </div>
      <Image
        src="/images/contest/photography.png"
        alt="Photography Contest Poster"
        width={2000}
        height={2000}
        className="w-[28rem] rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:transform"
      />
    </Container>
  );
}
