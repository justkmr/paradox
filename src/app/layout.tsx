import { Syne, JetBrains_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import ClientWrapper from "@/components/providers/ClientWrapper";
import { Metadata } from "next";

const fontDisplay = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const fontBody = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Pintu Kumar | Full-Stack Engineer",
  description:
    "Portfolio of Pintu Kumar - Specialized in MERN & Next.js 15 Architecture",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable} antialiased bg-[#050506] text-[#f0f0f0]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <ClientWrapper>{children}</ClientWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
