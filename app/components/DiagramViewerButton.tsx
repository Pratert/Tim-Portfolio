"use client";

import { useState } from "react";
import DiagramViewer from "./DiagramViewer";

type Props = {
  src: string;
  title: string;
  label?: string;
  children?: React.ReactNode;
  className?: string;
};

export default function DiagramViewerButton({ src, title, label, children, className }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={className ?? "inline-flex items-center gap-1.5 text-xs text-blue-700 border border-blue-200 px-2.5 py-1 rounded hover:bg-blue-50 transition-colors"}
      >
        {children ?? (
          <>
            {label}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
            </svg>
          </>
        )}
      </button>
      {open && (
        <DiagramViewer
          src={src}
          title={title}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}