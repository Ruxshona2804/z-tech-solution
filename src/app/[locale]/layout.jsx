import { Inter_Tight } from "next/font/google";
import 'aos/dist/aos.css';
import "../../app/globals.css";
import AOSInit from "../components/AousInut";
import { NextIntlClientProvider } from "next-intl";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata = {
  title: "Z Tech Solutions",
  description: "Z Tech Solutions- Your Partner in Digital Innovation",
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params
  console.log(locale);

  return (
    <html lang={locale}>
      <body
        className={`${interTight.variable} antialiased`}
      >
        <NextIntlClientProvider>

          <AOSInit />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
