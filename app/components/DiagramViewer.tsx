"use client";

import { useEffect, useCallback } from "react";

type Props = {
  src: string;
  title: string;
  onClose: () => void;
};

export default function DiagramViewer({ src, title, onClose }: Props) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if ((e.ctrlKey || e.metaKey) && (e.key === "s" || e.key === "p" || e.key === "u")) {
        e.preventDefault();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-6 py-3 bg-neutral-900 border-b border-neutral-700 shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-sm text-neutral-300 font-medium">{title}</p>
        <button
          onClick={onClose}
          className="text-neutral-400 hover:text-white transition-colors text-xs border border-neutral-600 px-3 py-1 rounded"
        >
          Close
        </button>
      </div>

      {/* Diagram area */}
      <div
        className="flex-1 overflow-auto flex items-start justify-center p-6"
        onClick={(e) => e.stopPropagation()}
        onContextMenu={(e) => e.preventDefault()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={title}
          draggable={false}
          className="max-w-full rounded select-none"
          style={{ WebkitUserSelect: "none", userSelect: "none", pointerEvents: "none" }}
        />
      </div>

      {/* Copyright bar */}
      <div
        className="shrink-0 bg-neutral-900 border-t border-neutral-700 px-6 py-2.5 flex items-center justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-xs text-neutral-500">
          © Tim Prater | tim-prater.com | This diagram may not be copied, reproduced, or
          distributed without written consent.
        </p>
        <p className="text-xs text-neutral-600">Press Esc to close</p>
      </div>
    </div>
  );
}