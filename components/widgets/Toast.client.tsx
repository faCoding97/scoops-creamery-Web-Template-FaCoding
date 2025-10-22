// 'use client';
'use client';
import { useEffect } from "react";

export default function Toast({ message, open, onClose }: { message: string; open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(onClose, 2000);
    return () => clearTimeout(t);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg shadow">
      {message}
    </div>
  );
}
