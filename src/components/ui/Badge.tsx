import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "hot" | "ad" | "foreclosure";
  className?: string;
}

export function Badge({ children, variant = "hot", className }: BadgeProps) {
  const variants = {
    hot: "bg-[#BF3400]",
    ad: "bg-white text-[#222]",
    foreclosure: "bg-[#A927BE]",
  };

  return (
    <div
      className={cn(
        "px-1.5 py-0.5 text-xs font-bold text-white text-center leading-none rounded-[100px]",
        variants[variant],
        className,
      )}
    >
      {children}
    </div>
  );
}
