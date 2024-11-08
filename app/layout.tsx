import React from "react";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import '../public/globals.css'
import ClientLayout from "./client-layout";

const DynamicThemeProvider = dynamic(
  () => import("@/lib/providers/theme").then((mod) => mod.ThemeProvider),
  {
    ssr: false,
  }
);

export const metadata: Metadata = {
  title: "Adrians Portfolio",
  description: "Welcome to my personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <DynamicThemeProvider attribute="class" defaultTheme="dark">
          <ClientLayout>{children}</ClientLayout>
        </DynamicThemeProvider>
      </body>
    </html>
  );
}
