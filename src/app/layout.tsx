import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/lib/ui/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hinetic- Find Your Perfect Job",
  description:
    "Find your next opportunity or hire top talent with TokoJobs, your smart career partner.",
};

const navigationItems = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Job List", href: "#jobs" },
  { label: "Pages", href: "#pages" },
  { label: "Contact Us", href: "#contact" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#D1C4F6] text-gray-900`}>
        <main>
          <section>
            <Navigation navigationItems={navigationItems} />
          </section>
          <section>{children}</section>
        </main>
      </body>
    </html>
  );
}
