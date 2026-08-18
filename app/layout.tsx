import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hermello — Employee Engagement That Works",
  description: "Hermello helps businesses connect with and retain their teams through simple, effective engagement tools. Get started today.",
  keywords: "employee engagement, employee recognition, workplace culture, employee rewards, team engagement, HR software, employee retention",
  openGraph: {
    title: "Hermello — Employee Engagement That Works",
    description: "Hermello helps businesses connect with and retain their teams through simple, effective engagement tools delivered directly to employees' phones.",
    url: "https://www.hermello.com",
    siteName: "Hermello",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Hermello — Employee Engagement Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hermello — Employee Engagement That Works",
    description: "Hermello helps businesses connect with and retain their teams through simple, effective engagement tools.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YLGG52GZ09"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YLGG52GZ09');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
