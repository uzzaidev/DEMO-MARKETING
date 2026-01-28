import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UzzAi - Galeria de Carrosséis | Sistema de Feedback",
  description: "Galeria completa de carrosséis de marketing da UzzAi com sistema integrado de feedback e avaliações",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 min-h-screen">
        {children}
      </body>
    </html>
  );
}
