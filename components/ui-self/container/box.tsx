import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  children: React.ReactNode;
  id?: string;
}

export function Box({ className, children, id }: Props) {
  return (
    <section
      className={cn(
        "border-3 flex w-3/4 flex-col items-center justify-start gap-10 border p-10 md:flex-row",
        className,
      )}
      id={id}
    >
      {children}
    </section>
  );
}
