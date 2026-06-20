
import { Syne, JetBrains_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import ClientWrapper from "@/components/providers/ClientWrapper";
import { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollToTop from "@/components/ScrollToTop";

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
  metadataBase: new URL("https://the-kumarrr.vercel.app"),
  title: {
    default: "Pintu Kumar | Full-Stack Engineer & Next.js Architect",
    template: "%s | Pintu Kumar"
  },
  description:
    "Portfolio of Pintu Kumar (KumarrR) - High-performance Full-Stack Web Developer specializing in Next.js 15, MERN stack, TypeScript, and interactive UI systems.",
  keywords: [
    "Pintu Kumar",
    "KumarrR",
    "justkmr",
    "Full-Stack Engineer",
    "Full Stack Developer India",
    "Next.js 15 Developer",
    "MERN Stack Developer",
    "React 19 Developer",
    "Software Engineer Portfolio",
    "Web Developer Bhopal",
    "RadiAntiX Project",
    "Job-Portal-Project",
    "Rivo a delivery rental vehicle",
    "ZestCo Grocery Delivery"
  ],
  authors: [{ name: "Pintu Kumar", url: "https://the-kumarrr.vercel.app" }],
  creator: "Pintu Kumar",
  publisher: "Pintu Kumar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  
  openGraph: {
    title: "Pintu Kumar | Full-Stack Engineer Portfolio",
    description: "Explore advanced MERN & Next.js architectures, sleek interactive components, and production-ready applications engineered by Pintu Kumar.",
    url: "https://the-kumarrr.vercel.app",
    siteName: "Pintu Kumar Portfolio",
    images: [
      {
        url: "/Sajan.jpeg", 
        width: 830,         
        height: 1030,       
        alt: "Pintu Kumar - Full Stack Engineer & Next.js Architect Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  
  twitter: {
    card: "summary", 
    title: "Pintu Kumar | Full-Stack Web Developer",
    description: "High-performance dynamic systems and clean scalable architectures built with Next.js 15 & MERN stack.",
    images: ["/Sajan.jpeg"],
  },

  // 🤖 Google Search Crawlers Core Configuration
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
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
          <NextTopLoader
            color="#E24C60"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            showSpinner={false}
            easing="ease"
            speed={200}
          />

          <SmoothScroll>
            <ClientWrapper>{children}</ClientWrapper>
          </SmoothScroll>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}