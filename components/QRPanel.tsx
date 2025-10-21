"use client";

import { useRef } from "react";
import { QRCodeSVG } from "qrcode.react";

const url = "/menu";

export default function QRPanel() {
  const box = useRef<HTMLDivElement>(null);

  const download = () => {
    const svg = box.current?.querySelector("svg");
    if (!svg) return;
    const xml = new XMLSerializer().serializeToString(svg);
    const svg64 = btoa(unescape(encodeURIComponent(xml)));
    const image64 = "data:image/svg+xml;base64," + svg64;
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width; canvas.height = img.height;
      const ctx = canvas.getContext("2d"); if (!ctx) return;
      ctx.drawImage(img, 0, 0);
      const png = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = png; a.download = "menu-qr.png"; a.click();
    };
    img.src = image64;
  };

  return (
    <div className="rounded-2xl border border-vanilla-300 bg-white p-6 shadow-soft">
      <h3 className="text-lg font-semibold">Quick access</h3>
      <p className="text-chocolate-900/90 mt-1">Scan to open our full menu.</p>
      <div ref={box} className="mt-4 flex items-center gap-6">
        <QRCodeSVG value={url} size={160} />
        <div className="space-y-2">
          <p className="text-sm break-all">{url}</p>
          <button onClick={download} className="inline-flex items-center rounded-xl bg-mint-600 px-4 py-2 text-white hover:bg-mint-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-mint-700">
            Download QR
          </button>
        </div>
      </div>
    </div>
  );
}
