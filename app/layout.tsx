'use client';

import Hls from 'hls.js';

export default function RootLayout({
 children,
}: {
  children: React.ReactNode
}) {
  new Hls();

  return children
}
