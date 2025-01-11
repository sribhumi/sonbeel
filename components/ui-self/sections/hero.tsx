import Image from "next/image";

export function Hero({ heroText }: Readonly<{ heroText: string }>) {
  return (
    <main className="flex h-[40rem] w-full items-center justify-center bg-[url('/images/hero-bg.png')] bg-cover bg-fixed bg-center  bg-no-repeat text-center">
      <h1 className="text-3xl font-black text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] md:text-[3rem]">
        {heroText}
      </h1>
    </main>
  );
}
