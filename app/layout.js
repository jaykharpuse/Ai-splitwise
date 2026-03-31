import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import Header from "@/components/header";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://example.com"
  ),
  title: {
    default: "Splitr by Jay Kharpuse",
    template: "%s | Splitr",
  },
  description: "The smartest way to split expenses with friends.",
  applicationName: "Splitr",
  authors: [{ name: "Jay Kharpuse" }],
  creator: "Jay Kharpuse",
  keywords: [
    "expense splitting",
    "split bills",
    "group expenses",
    "shared finances",
    "settle up",
    "Splitwise clone",
  ],
  openGraph: {
    title: "Splitr by Jay Kharpuse",
    description: "The smartest way to split expenses with friends.",
    type: "website",
    siteName: "Splitr",
    images: [
      {
        url: "/logos/logo-s.png",
        width: 512,
        height: 512,
        alt: "Splitr logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Splitr by Jay Kharpuse",
    description: "The smartest way to split expenses with friends.",
    images: ["/logos/logo-s.png"],
  },
  icons: {
    icon: "/logos/logo-s.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ClerkProvider
          publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
        >
          <ConvexClientProvider>
            <Header />
            <main className="min-h-screen">
              <Toaster richColors />

              {children}
            </main>
          </ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
