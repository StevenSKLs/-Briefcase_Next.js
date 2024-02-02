'use client'

import Certifics from "@/components/Certifics";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Initial from "@/components/Initial";
import Person from "@/components/Person";
import Projects from "@/components/Projects";
import { Project } from "@/lib/typings";
import { getStaticProps } from "./api/api";

export default function index({ recipes }: { recipes: Project[] }) {
  return (
    <main className="w-full h-full ">
      <Initial />
      <Person />
      <Projects recipes={recipes} />
      <Certifics />
      <ContactMe />
      <Footer />
    </main>
  )
}

export { getStaticProps };
