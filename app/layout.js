import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Archives",
  description:
    "Archives is an platform used to keep track of the resources and materials used in your research.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-zinc-900`}>{children}</body>
    </html>
  );
}
