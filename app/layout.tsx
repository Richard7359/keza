import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./css/course.css";
import "./css/faq.css";
import "./css/testimonial.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KEFL",
  description: "Keza Education Future Lab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <script
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
        defer
      ></script>
      <div className="elfsight-app-e6faf39d-9af5-4ec3-bb8c-8b556592848c"></div>
    </html>
  );
}
