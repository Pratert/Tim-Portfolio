import type { ReactNode } from "react";

export default function Card({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="mt-3 text-sm leading-relaxed text-neutral-700">
        {children}
      </div>
    </div>
  );
}