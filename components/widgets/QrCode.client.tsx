// 'use client';
'use client';
import { QRCodeCanvas } from "qrcode.react";

export default function QrCode({ value = '/menu', size = 128 }: { value?: string; size?: number }) {
  // Ensure absolute path (relative to current domain)
  const url = typeof window === 'undefined' ? value : new URL(value, window.location.origin).toString();
  return <QRCodeCanvas value={url} size={size} includeMargin />;
}
