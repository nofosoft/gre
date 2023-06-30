import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Github Repositories Explorer",
  description:
    "Application which integrates with github.com API and allows user to search for up to 5 users with a username similar to the value entered in text input and then on click display repositories (no limit on displayed repositories amount) for selected GitHub user",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
