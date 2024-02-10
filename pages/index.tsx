'use client'

import Certifics from "@/components/Certifics";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Initial from "@/components/Initial";
import Person from "@/components/Person";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import { General, Project, Proyectos } from "@/lib/typings";
import { getStaticProps } from "./api/api";

export default function index({ recipes, general, proyectos }: { recipes: Project[]; general: General[]; proyectos: Proyectos[] }) {
  return (
    <main className="w-full h-full main1">
      <Initial city={general[0].fields.fondo[3]} city0={general[0].fields.fondo[2]} />
      <Person user={general[0].fields.fondo[0]} city={general[0].fields.fondo[1]} />
      <WorkExperience proyectos={proyectos} />
      <Projects recipes={recipes} />
      <Certifics certific={general[0].fields.certificados} />
      <ContactMe />
      <Footer media={general[0].fields.media} />
    </main>
  )
}

export { getStaticProps };
