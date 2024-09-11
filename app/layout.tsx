import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Providers } from "@/providers";
const work_sans = Work_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FPT SmartHome",
  description: "Giải pháp thông minh cho ngôi nhà của bạn",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html>
        <head>
          <title>Home</title>
          <link
            rel="canonical"
            href="https://fpt-smarthome.vn"
            key="canonical"
          />
          <GoogleAnalytics gaId="G-XT9N1Z0YRN" />
          <GoogleTagManager gtmId="GTM-WX8FL2P5" />
          <meta
            name="google-site-verification"
            content="SiBQC7Zgw2hF-Pa7esKwX-GpOoAm2lO1ghYwGAjGtyo"
          />
        </head>
        <body className={work_sans.className}>
          <Toaster />
          <main>
            <Providers>{children}</Providers>
            <SpeedInsights />
          </main>
        </body>
      </html>
    </SessionProvider>
  );
}
