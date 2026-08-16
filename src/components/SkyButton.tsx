import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[14px] font-semibold transition-all duration-300 min-h-[52px] px-6 text-[0.98rem] focus-visible:outline-2";

const variants = {
  primary:
    "bg-sky-primary text-white hover:bg-sky-deep hover:-translate-y-px shadow-[0_10px_24px_-16px_rgba(8,121,186,0.9)]",
  secondary:
    "border border-[#c9dce5] bg-white text-sky-ink hover:border-sky-primary hover:text-sky-primary",
  onBlue:
    "bg-white text-sky-primary hover:-translate-y-px hover:bg-sky-cyan-soft shadow-[0_12px_30px_-18px_rgba(0,0,0,0.6)]",
  ghost: "text-sky-primary hover:text-sky-deep px-0 min-h-0",
} as const;

type Props = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  external?: boolean;
  pulse?: boolean;
  className?: string;
  ariaLabel?: string;
};

export function SkyButton({
  href,
  children,
  variant = "primary",
  external = false,
  pulse = true,
  className,
  ariaLabel,
}: Props) {
  const isMagnetic = variant === "primary";
  const shouldPulse = pulse && variant === "primary";

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        base,
        variants[variant],
        isMagnetic && "btn-magnetic",
        shouldPulse && "animate-sky-heartbeat",
        className,
      )}
    >
      <span className={isMagnetic ? "btn-magnetic-inner" : undefined}>{children}</span>
    </a>
  );
}
