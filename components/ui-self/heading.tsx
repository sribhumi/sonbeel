import { cn } from "@/lib/utils";

export function H1({
  children,
  className,
  id,
}: {
  children: string;
  className?: string;
  id?: string;
}) {
  return (
    <h1
      className={cn(
        "w-full text-xl font-extrabold text-primary md:text-3xl",
        className,
      )}
      id={id}
    >
      {children}
    </h1>
  );
}
