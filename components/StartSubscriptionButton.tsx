"use client";

import { useRouter } from "next/navigation";
import type { CSSProperties, ReactNode } from "react";

type StartSubscriptionButtonProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
};

export default function StartSubscriptionButton({
  children,
  className,
  style,
  onClick,
}: StartSubscriptionButtonProps) {
  const router = useRouter();

  return (
    <button
      type="button"
      className={className}
      style={style}
      onClick={() => {
        onClick?.();
        router.push("/ankieta");
      }}
    >
      {children}
    </button>
  );
}
