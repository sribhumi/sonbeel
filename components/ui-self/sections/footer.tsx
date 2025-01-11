import Link from "next/link";

export function Footer({ className }: { className?: string }) {
  return (
    <footer className="flex w-full flex-col items-center justify-center gap-1 bg-slate-100 px-2 py-10 text-center md:flex-row md:gap-[15rem]">
      <h1>
        Created by{" "}
        <Link
          className="font-bold text-primary hover:text-secondary"
          href="https://www.linkedin.com/in/adityaxnath"
          target="_blank"
        >
          Mr. Aditya Nath
        </Link>
        {" and "}
        <span className="font-bold text-primary ">
          Dr. Arun Jyoti Nath
        </span>
      </h1>
      <h1 className="font-semibold">©Sonbeel Tourism 2026</h1>
    </footer>
  );
}
