import Navbar from "@/components/layout/navbar";
import ProjectsPage from "./layout/projects-page";
import Footer from "@/components/sections/footer/footer";
import { Suspense } from "react";
import ProjectScroll from "./layout/project-scroll";

export default function Page() {
  return (
    <>
      <Navbar />
      <Suspense fallback={null}>
        <ProjectScroll />
      </Suspense>
      <ProjectsPage />
      <Footer />
    </>
  );
}
