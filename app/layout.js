import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Department_NITP",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full h-20 pb-20 border">For App Bar</div>
        <div className="bg-[url('/maindiv.png')] bg-repeat">{children}</div>
        <div className="w-full h-20 pb-20 border">Footer</div>
      </body>
    </html>
  );
}
