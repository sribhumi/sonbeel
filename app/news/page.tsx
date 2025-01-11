import { Container } from "@/components/ui-self/container/container";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

// Image-based News Data
const imageNewsData = [
  {
    id: 1,
    src: "/images/news/news3.jpg",
    alt: "Newspaper Snippet",
    title: "The City Standard (15 February 2024)",
    width: 1200,
    height: 1200,
    className: "w-[70rem]",
  },
  {
    id: 2,
    src: "/images/news/news7.jpeg",
    alt: "Newspaper Snippet",
    title: "ভাস্কর ঘোষ অধিকারী, স্যন্দন পত্রিকা (19 February 2024)",
    width: 1200,
    height: 1200,
    className: "w-[50rem]",
  },
  {
    id: 3,
    src: "/images/news/news5.png",
    alt: "Newspaper Snippet",
    title: "Northern India Patrika (16 February 2024)",
    width: 1200,
    height: 1200,
    className: "w-[40rem]",
  },
  {
    id: 4,
    src: "/images/news/news6.jpg",
    alt: "Newspaper Snippet",
    title: "Amrit Kaal (16 February 2024)",
    width: 1200,
    height: 1200,
    className: "w-[40rem]",
  },
  {
    id: 5,
    src: "/images/news/news1.png",
    alt: "Newspaper Snippet",
    title: "Dainik Jugasankha (29 January 2024)",
    width: 500,
    height: 500,
    className: "w-[70rem]",
  },
  {
    id: 6,
    src: "/images/news/news2.jpg",
    alt: "Newspaper Snippet",
    title: "Tripura Darpan (06 February 2024)",
    width: 2000,
    height: 2000,
    className: "w-[70rem]",
  },
  {
    id: 7,
    src: "/images/news/news4.png",
    alt: "Newspaper Snippet",
    title: "এক অনন্য জলাভূমিকে পর্যটন মানচিত্রে তুলে আনার উদ্যোগ",
    width: 2000,
    height: 2000,
    className: "w-[50rem]",
  },
  // Add other image-based news items here
];

// Text-based News Data with Links
const textNewsData = [
  {
    id: 1,
    title: "Son-beel Utsav to be organised from 26-28 Feb at Debodwar...",
    source: "All Indian Radio News",
    link: "https://twitter.com/airnewsalerts/status/1757339211940712750",
  },
  {
    id: 2,
    title: "শনবিল উৎসব ২০২৪ উদ্বোধনে আসছেন অসমের রাজ্যপাল।",
    source: "BARAK TODAY",
    link: "https://www.facebook.com/Baraktoday25/videos/%E0%A6%B6%E0%A6%A8%E0%A6%AC%E0%A6%BF%E0%A6%B2-%E0%A6%89%E0%A7%8E%E0%A6%B8%E0%A6%AC-%E0%A7%A8%E0%A7%A6%E0%A7%A8%E0%A7%AA-%E0%A6%89%E0%A6%A6%E0%A7%8D%E0%A6%AC%E0%A7%8B%E0%A6%A7%E0%A6%A8%E0%A7%87-%E0%A6%86%E0%A6%B8%E0%A6%9B%E0%A7%87%E0%A6%A8-%E0%A6%85%E0%A6%B8%E0%A6%AE%E0%A7%87%E0%A6%B0-%E0%A6%B0%E0%A6%BE%E0%A6%9C%E0%A7%8D%E0%A6%AF%E0%A6%AA%E0%A6%BE%E0%A6%B2-%E0%A6%B0%E0%A6%87%E0%A6%B2-%E0%A6%AC%E0%A6%BF%E0%A6%B6%E0%A7%87%E0%A6%B7-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%A4%E0%A6%BF%E0%A6%AC%E0%A7%87%E0%A6%A6%E0%A6%A8/945323980603797/",
  },
  {
    id: 3,
    title:
      "আর্থসামাজিক ও উন্নয়নের লক্ষ্যে আগামী ২৪ থেকে ২৬ ফেব্রুয়ারি অনুষ্ঠিত হতে চলছে শনবিল উৎসব",
    source: "BTV",
    link: "https://www.facebook.com/btvbangla001/videos/%E0%A6%86%E0%A6%B0%E0%A7%8D%E0%A6%A5%E0%A6%B8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C%E0%A6%BF%E0%A6%95-%E0%A6%93-%E0%A6%89%E0%A6%A8%E0%A7%8D%E0%A6%A8%E0%A6%AF%E0%A6%BC%E0%A6%A8%E0%A7%87%E0%A6%B0-%E0%A6%B2%E0%A6%95%E0%A7%8D%E0%A6%B7%E0%A7%8D%E0%A6%AF%E0%A7%87-%E0%A6%86%E0%A6%97%E0%A6%BE%E0%A6%AE%E0%A7%80-%E0%A7%A8%E0%A7%AA-%E0%A6%A5%E0%A7%87%E0%A6%95%E0%A7%87-%E0%A7%A8%E0%A7%AC-%E0%A6%AB%E0%A7%87%E0%A6%AC%E0%A7%8D%E0%A6%B0%E0%A7%81%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%B0%E0%A6%BF-%E0%A6%85%E0%A6%A8%E0%A7%81%E0%A6%B7%E0%A7%8D%E0%A6%A0%E0%A6%BF%E0%A6%A4-%E0%A6%B9%E0%A6%A4%E0%A7%87-%E0%A6%9A%E0%A6%B2%E0%A6%9B%E0%A7%87-%E0%A6%B6/941360747695442/",
  },
  {
    id: 4,
    title:
      "আর্থ সামাজিক ও উন্নয়নের লক্ষ্যে আগামী ২৪ থেকে ২৬ ফেব্রুয়ারি দেবদ্বারে অনুষ্ঠিত হতে চলেছে শনবিল উৎসব। এক মহোৎসবের সাক্ষী হয়ে থাকবে গোটা শনবিল।",
    source: "BARAK TODAY",
    link: "https://www.facebook.com/Baraktoday25/videos/%E0%A6%86%E0%A6%B0%E0%A7%8D%E0%A6%A5-%E0%A6%B8%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%9C%E0%A6%BF%E0%A6%95-%E0%A6%93-%E0%A6%89%E0%A6%A8%E0%A7%8D%E0%A6%A8%E0%A6%AF%E0%A6%BC%E0%A6%A8%E0%A7%87%E0%A6%B0-%E0%A6%B2%E0%A6%95%E0%A7%8D%E0%A6%B7%E0%A7%8D%E0%A6%AF%E0%A7%87-%E0%A6%86%E0%A6%97%E0%A6%BE%E0%A6%AE%E0%A7%80-%E0%A7%A8%E0%A7%AA-%E0%A6%A5%E0%A7%87%E0%A6%95%E0%A7%87-%E0%A7%A8%E0%A7%AC-%E0%A6%AB%E0%A7%87%E0%A6%AC%E0%A7%8D%E0%A6%B0%E0%A7%81%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%B0%E0%A6%BF-%E0%A6%A6%E0%A7%87%E0%A6%AC%E0%A6%A6%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%B0%E0%A7%87-%E0%A6%85%E0%A6%A8%E0%A7%81%E0%A6%B7%E0%A7%8D%E0%A6%A0%E0%A6%BF%E0%A6%A4/1047652359663895/",
  },
  {
    id: 5,
    title:
      "অবশেষে শনবিলকে বিশ্ব মঞ্চে তুলে ধরতে উদ্যোগ নিল সরকার।আগামী ২৪ থেকে ২৬ ফেব্রুয়ারি অনুষ্ঠিত হতে চলেছে শনবিল উৎসব।",
    source: "South Assam",
    link: "https://www.facebook.com/100087901809207/videos/1444764189789091/?mibextid=UVffzb",
  },
  {
    id: 6,
    title: "শনবিল উৎসব-- কি বললেন শুনুন",
    source: "AB News",
    link: "https://www.facebook.com/100087901809207/videos/1444764189789091/?mibextid=UVffzb",
  },
  {
    id: 7,
    title: "প্রস্তুতি তুঙ্গে। শনবিলে শুরু হচ্ছে তিনদিন ব্যাপি লোক উৎসব৷",
    source: "News অবিকল 24x7",
    link: "https://www.facebook.com/newsabikal/videos/1183157136392773/?extid=CL-UNK-UNK-UNK-AN_GK0T-GK1C&mibextid=2JQ9oc",
  },
  {
    id: 8,
    title:
      "এশিয়ার দ্বিতীয় বৃহত্তম বিল। সেই শনবিলে এবার 'শনবিল' উৎসব। দেখুন বার্তালিপির রিপোর্ট।",
    source: "BartaLipi",
    link: "https://m.facebook.com/bartalipi.in/videos/%E0%A6%8F%E0%A6%B6%E0%A6%BF%E0%A7%9F%E0%A6%BE%E0%A6%B0-%E0%A6%A6%E0%A7%8D%E0%A6%AC%E0%A6%BF%E0%A6%A4%E0%A7%80%E0%A7%9F-%E0%A6%AC%E0%A7%83%E0%A6%B9%E0%A6%A4%E0%A7%8D%E0%A6%A4%E0%A6%AE-%E0%A6%AC%E0%A6%BF%E0%A6%B2-%E0%A6%B8%E0%A7%87%E0%A6%87-%E0%A6%B6%E0%A6%A8%E0%A6%AC%E0%A6%BF%E0%A6%B2%E0%A7%87-%E0%A6%8F%E0%A6%AC%E0%A6%BE%E0%A6%B0-%E0%A6%B6%E0%A6%A8%E0%A6%AC%E0%A6%BF%E0%A6%B2-%E0%A6%89%E0%A7%8E%E0%A6%B8%E0%A6%AC-%E0%A6%95%E0%A7%80-%E0%A6%AC%E0%A6%B2%E0%A6%9B%E0%A7%87%E0%A6%A8-%E0%A6%86%E0%A6%B8%E0%A6%BE%E0%A6%AE-%E0%A6%AC%E0%A6%BF%E0%A6%B6%E0%A7%8D%E0%A6%AC%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2/715876984038883/?_rdr",
  },
  {
    id: 9,
    title: "শনবিল উৎসব ২০২৪ উদ্বোধনে আসছেন অসমের রাজ্যপাল।",
    source: "BARAK TODAY",
    link: "https://www.facebook.com/share/v/e3N2ziLPA4Xs8zRM/?mibextid=xCPwDs",
  },
  {
    id: 9,
    title:
      "Efforts should be made to preserve ecology of Son Beel, says Assam guv",
    source: "The Times of India",
    link: "https://timesofindia.indiatimes.com/city/guwahati/efforts-should-be-made-to-preserve-ecology-of-son-beel/amp_articleshow/107979868.cms",
  },
  {
    id: 10,
    title:
      "কৰিমগঞ্জৰ এছিয়া বিখ্যাত সোণ বিলৰ নৈসৰ্গিক দৃশ্য উপভোগ কৰি আপ্লুত ৰাজ্যপাল গুলাব চান্দ কাটাৰিয়া",
    source: "LOCAL 18",
    link: "https://assam.news18.com/news/assam/the-three-day-son-beel-utsav-kick-starts-to-promote-tourism-potential-local18-subham-g-362798.html",
  },
  {
    id: 11,
    title: "Assam: 3-day Son Beel Utsav underway in Silchar",
    source: "Northeast Live",
    link: "https://youtu.be/CxEePaVH6Q4?si=v7ItHsaUq1twNPV2",
  },
];

// Information Data (similar to Image-based but treated separately for clarity)
const informationData = [
  {
    id: 1,
    src: "/images/news/info1.jpeg",
    alt: "Information about Festival",
    width: 2000,
    height: 2000,
  },
  // Add other information items here
];

export default function Page() {
  return (
    <Container>
      <h1 className="text-4xl text-primary">News</h1>

      {imageNewsData.map((news) => (
        <div key={news.id} className="shadow-md">
          <Image
            src={news.src}
            alt={news.alt}
            width={news.width}
            height={news.height}
            className={cn(news.className)}
          />
          <h1 className="text-lg text-primary">{news.title}</h1>
        </div>
      ))}

      <ul className="flex list-disc flex-col gap-2 md:w-[50rem]">
        {textNewsData.map((news) => (
          <li key={news.id}>
            <h1 className="text-xl">
              {news.title} - {news.source} (
              <Link
                className="text-primary hover:text-secondary"
                href={news.link}
                target="_blank"
              >
                Click here
              </Link>{" "}
              to watch)
            </h1>
          </li>
        ))}
      </ul>

      <hr className="w-screen border border-primary" />
      <h1 className="text-4xl text-primary">Information</h1>

      {informationData.map((info) => (
        <div key={info.id} className="shadow-md">
          <Image
            src={info.src}
            alt={info.alt}
            width={info.width}
            height={info.height}
            className="w-[70rem]"
          />
        </div>
      ))}
    </Container>
  );
}
