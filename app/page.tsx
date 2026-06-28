"use client";
import Navbar from "@/components/layout/navbar";
import IntroLoader from "@/components/loader/introLoader";
import About from "@/components/sections/about/about";
import Contact from "@/components/sections/contact/contact";
import Experience from "@/components/sections/experience/experience";
import Footer from "@/components/sections/footer/footer";
import Hero from "@/components/sections/hero/hero";
import Projects from "@/components/sections/projects/projects";
import Services from "@/components/sections/services/services";
import Skills from "@/components/sections/skills/skills";
import Stats from "@/components/sections/stats/stats";
import { useEffect, useState } from "react";

function Home() {
  const [showLoader, setShowLoader] = useState(() => {
    try {
      const visited = sessionStorage.getItem("portfolio-loader");

      if (!visited) {
        sessionStorage.setItem("portfolio-loader", "true");
        return true;
      }
    } catch (error) {
      // sessionStorage may be unavailable
      console.error(error);
    }

    return false;
  });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // mark component ready after mount to avoid SSR mismatch
    const id = window.setTimeout(() => {
      setReady(true);
    }, 0);

    return () => window.clearTimeout(id);
  }, []);

  if (!ready) return null;

  return (
    <>
      {showLoader && <IntroLoader onFinish={() => setShowLoader(false)} />}

      {!showLoader && (
        <>
          <Navbar />

          <main className="pt-24">
            <Hero />

            <Stats />
            <About />
            <Projects />
            <Experience />
            <Services />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default Home;
