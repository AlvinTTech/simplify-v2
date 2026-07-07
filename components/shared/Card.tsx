import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`
        rounded-[2rem]
        border
        border-slate-200
        bg-white
        p-7
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        hover:shadow-violet-600/10
        ${className}
      `}
    >
      {children}
    </div>
  );
}