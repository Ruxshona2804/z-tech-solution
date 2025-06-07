import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import AboutUs from "./components/AboutUs";
import Content from "./components/Content";
import Pricing from "./components/Pricing";
import Projects from "./components/Projects";
import Client from "./components/Client";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-inter-tight)]">
      <Hero />
      <Brands />
      <AboutUs />
      <Content />
      <Pricing />
      <Projects />
      <Client />
      <ContactForm />
      <Footer />
    </div>
  );
}
