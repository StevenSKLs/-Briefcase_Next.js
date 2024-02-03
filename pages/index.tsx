'use client'

import Certifics from "@/components/Certifics";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Initial from "@/components/Initial";
import Person from "@/components/Person";
import Projects from "@/components/Projects";
import { General, Project } from "@/lib/typings";
import { getStaticProps } from "./api/api";

export default function index({ recipes, general }: { recipes: Project[]; general: General[] }) {
  return (
    <main className="w-full h-full main1">
      <Initial city={general[0].fields.fondo[3]} city0={general[0].fields.fondo[2]} />
      <Person user={general[0].fields.fondo[0]} city={general[0].fields.fondo[1]} />
      <Projects recipes={recipes} />
      <Certifics />
      <ContactMe />
      <Footer facebook={general[0].fields.media[1]} gmail={general[0].fields.media[0]} whatsapp={general[0].fields.media[2]} cat={general[0].fields.media[3]} />
    </main>
  )
}

export { getStaticProps };
