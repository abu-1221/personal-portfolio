"use client";

import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Dock from "@/components/Dock";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Timeline />
      <Testimonials />
      <Blog />
      <Dock />
      <Contact />
    </main>
  );
}
