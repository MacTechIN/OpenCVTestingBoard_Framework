import type { Metadata } from "next";
import './globals.css';

export const metadata: Metadata = {
  title: "OpenCV Function Testing Board",
  description: "Interactive learning tool for OpenCV functions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
