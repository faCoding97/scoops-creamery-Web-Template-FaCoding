// 'use client';
'use client';
import { ReactNode } from "react";

export default function Modal({ open, onClose, children }: { open: boolean; onClose: () => void; children: ReactNode }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center" onClick={onClose}>
      <div className="bg-white rounded-2xl p-6 max-w-lg w-full" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
