'use client'

import Certifics from "@/components/Certifics";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Initial from "@/components/Initial";
import Person from "@/components/Person";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import { General, Project, Proyectos } from "@/lib/typings";
import { HomeIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { getStaticProps } from "./api/api";
export default function index({ recipes, general, proyectos }: { recipes: Project[]; general: General[]; proyectos: Proyectos[] }) {
  return (
    <main className="w-full h-full main1 relative">
      <Link href={'/fisica'} className='fixed top-0 right-0 sm:right-2 sm:top-2 z-[4] '>
        <HomeIcon className="h-3 sm:h-2 w-3 sm:w-2 text-blue-gray-900 rounded-[50%] border-2 border-blue-gray-900 bg-cyan-900 
              hover:bg-blue-gray-900 hover:text-white hover:border-b-indigo-400" />
      </Link>
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
//rm -rf .next node_modules yarn.lock && yarn install
export { getStaticProps };
