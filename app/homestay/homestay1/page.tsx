"use client"; // Mark this file as a Client Component

import { Container } from "@/components/ui-self/container/container";
import { H1 } from "@/components/ui-self/heading";
import { Footer } from "@/components/ui-self/sections/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const images = [
  "/images/sonbeel_home/s13.jpg",
  "/images/sonbeel_home/s12.jpg",
  "/images/sonbeel_home/s3.jpg",
  "/images/sonbeel_home/s4.jpg",
  "/images/sonbeel_home/s6.jpg",
  "/images/sonbeel_home/s9.jpg",
  "/images/sonbeel_home/s6.jpg",
  "/images/sonbeel_home/s10.jpg",
  "/images/sonbeel_home/s14.jpg",
]; // Array of image URLs

export default function Homestay1() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    // Trigger sliding effect on mount
    setSlideIn(true);

    // Auto-slide every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Container className="py-10">
        <H1 className="text-center mb-10">SHREYANSH HOMESTAY AT SON BEEL</H1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Image Carousel with sliding effect */}
          <div
            className={`w-full transition-transform duration-1000 ease-in-out ${
              slideIn ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="w-[600px] h-[400px] overflow-hidden rounded-xl mx-auto">
              <Image
                src={images[currentIndex]}
                alt={`Homestay image ${currentIndex + 1}`}
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Details */}
          <div className="flex flex-col justify-between">
            <p className="text-lg font-semibold mb-5">
              <strong>Transforming Dreams into Reality with Assam University</strong>
              <br />
              Welcome to Shreyansh Homestay, Son Beel
            </p>
            <p className="text-lg">
              <strong>Inauguration of Son Beel’s First Homestay</strong>
              <br />
              <strong>Date:</strong> 13th January 2025
              <br />
              <strong>Time:</strong> 11:00 AM
              <br />
              <strong>Chief Guest:</strong> Prof. Rajive Mohan Pant, Vice Chancellor, Assam University
              <br />
              <strong>Guest of Honour:</strong> Prof. Manabendra Dutta Choudhury, Vice Chancellor, Rabindranath Tagore University, Hojai
              <br />
              <strong>Bookings Open:</strong> From 15th January 2025
              <br/>
              <strong>Book Now:</strong> ₹ 1,500 per Night
              <br />
              <strong>Contact for Reservations:</strong> +91 7896805449 / +91 6003802974
            </p>
            <p className="mt-5 text-lg font-semibold">What We Offer:</p>
            <ul className="mt-3 list-disc pl-5">
              <li>Comfortable, well-maintained rooms with all essential amenities</li>
              <li>Delicious home-cooked meals served with care</li>
              <li>Mesmerizing views of Son Beel</li>
            </ul>
            <p className="mt-5 text-lg font-semibold">Amenities include:</p>
            <ul className="mt-3 list-disc pl-5">
              <li>Free Wi-Fi</li>
              <li>On-site parking</li>
              <li>Fully equipped kitchens</li>
              <li>Rental services for scooty and car</li>
            </ul>
            <p className="mt-5 italic">Promoted by: We are Team Son Beel, Assam University</p>
            <Button className="mt-10 w-full">Book Now</Button>
          </div>
        </div>

        {/* Way to Reach Section */}
        <div className="mt-20">
          <H1 className="text-center mb-5">Way to Reach</H1>
          <p className="text-lg text-center">
            Shreyansh Homestay is conveniently located near Son Beel Lake. You
            can easily reach the homestay by road or rail. Below is the map to
            guide you:
          </p>
          <div className="w-full h-[400px] mt-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3625.2775779352837!2d92.45545899999999!3d24.682983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQwJzU4LjciTiA5MsKwMjcnMTkuNyJF!5e0!3m2!1sen!2sin!4v1736577584642!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
            //   loading="fast"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
