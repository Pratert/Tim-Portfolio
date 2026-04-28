"use client";

import { useState } from "react";
import DiagramViewer from "./DiagramViewer";

type Props = {
  pages: string[];
  title: string;
  label: string;
  thumbnail?: boolean;
};

export default function DocumentViewerButton({ pages, title, label, thumbnail }: Props) {
  const [open, setOpen] = useState(false);

  if (thumbnail) {
    return (
      <>
        <div className="border border-neutral-200 rounded-xl overflow-hidden cursor-pointer group" onClick={() => setOpen(true)}>
          <div className="relative">
            <img
              src={pages[0]}
              alt={title}
              draggable={false}
              className="w-full object-cover rounded-t-xl"
              style={{ userSelect: "none", pointerEvents: "none" }}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-t-xl flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white text-xs px-3 py-1.5 rounded">
                Click to view all {pages.length} pages
              </span>
            </div>
          </div>
          <div className="px-4 py-3 border-t border-neutral-100 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-neutral-900">{title}</p>
              <p className="text-xs text-neutral-400 mt-0.5">{pages.length} pages</p>
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); setOpen(true); }}
              className="inline-flex items-center gap-1.5 text-xs text-blue-700 border border-blue-200 px-2.5 py-1 rounded hover:bg-blue-50 transition-colors"
            >
              View full size
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              </svg>
            </button>
          </div>
        </div>
        {open && (
          <DiagramViewer
            src={pages}
            title={title}
            onClose={() => setOpen(false)}
          />
        )}
      </>
    );
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 text-sm text-blue-700 border border-blue-200 px-4 py-2 rounded hover:bg-blue-50 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
        {label}
      </button>
      {open && (
        <DiagramViewer
          src={pages}
          title={title}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}