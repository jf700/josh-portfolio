import Image from "next/image";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import RecentProjects from "@/components/RecentProjects";
import Specialities from "@/components/Specialities";
import AboutMe from "@/components/AboutMe";
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {
          <FloatingNav
            navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]}
          />
        }
        <Hero />
        <AboutMe />
        <Specialities />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
