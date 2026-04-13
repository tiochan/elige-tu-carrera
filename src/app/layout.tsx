import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "¿Qué quieres ser de mayor?",
  description: "Descubre qué carrera encaja contigo y qué bachillerato es tu mejor punto de partida",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geist.variable} antialiased font-[family-name:var(--font-geist-sans)]`}>
        {children}
      </body>
    </html>
  );
}
