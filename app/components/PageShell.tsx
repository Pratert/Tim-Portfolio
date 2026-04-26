import type { ReactNode } from "react";

export default function PageShell({ children }: { children: ReactNode }) {
  return <section className="mx-auto max-w-5xl px-6 py-14">{children}</section>;
}