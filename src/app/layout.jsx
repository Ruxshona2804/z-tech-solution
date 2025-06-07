import {  Inter_Tight } from "next/font/google";
import 'aos/dist/aos.css';
import "./globals.css";
import AOSInit from "./components/AousInut";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata = {
  title: "Z Tech Solutions",
  description: "Z Tech Solutions- Your Partner in Digital Innovation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} antialiased`}
      >
         <AOSInit /> 
        {children}
      </body>
    </html>
  );
}
