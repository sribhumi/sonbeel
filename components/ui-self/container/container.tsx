import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  navbarHeight?: string;
}

export function Container({
  children,
  className,
  navbarHeight = "130px",
}: ContainerProps) {
  const innerStyle = {
    minHeight: `calc(100vh - ${navbarHeight})`,
  };

  return (
    <div
      className={cn("flex w-full flex-col items-center gap-10 p-10", className)}
      style={innerStyle}
    >
      {children}
    </div>
  );
}
