import Image from "next/image";
import HeroSection from "./ui/HeroSection";
import Navbar from "./ui/Navbar";
import About from "./ui/About";
import EmailSection from "./ui/EmailSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#000000]">
      <Navbar />
      <div className="container mt-24 mx-auto py-4 px-12">
        <HeroSection />
        <About />
        <EmailSection />
      </div>
    </main>
  );
}
