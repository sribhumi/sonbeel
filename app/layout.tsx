import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/ui-self/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sonbeel Utsav 2024",
  description:
    "Jon us for the Son Beel Utsav 2024 from February 24-26, celebrating the grandeur of Assam's unique eco-cultural ecosystem. This festival, hosted at the picturesque Redbaw Village on the banks of Son Beel, features a range of activities aimed at promoting local tourism and ecology. The event's inauguration by Honorable Minister of Water Resources and prominent guests, including the Director of NE, SI & MKases Hotel and Joint Secretary DONER, is a testament to the festival's significance. Don't miss the opportunity to immerse in the vibrant cultural tapestry of Assam with traditional performances, local cuisine, and community engagement. Visit us for a symphony of nature and culture at Son Beel Utsav 2024.",
  keywords:
    "Son Beel Utsav 2024, Assam Festival, Cultural Festival, Ecotourism, Assam Tourism, Local Cuisine, Traditional Performances, Community Engagement, Nature Conservation, Redbaw Village",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
