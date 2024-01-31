'use client'

import Certifics from "@/components/Certifics";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Initial from "@/components/Initial";
import Person from "@/components/Person";
import Projects from "@/components/Projects";
import { Project } from "@/lib/typings";
import Head from "next/head";
import { getStaticProps } from "./api/api";

export default function index({ recipes }: { recipes: Project[] }) {
  return (
    <main className="w-full h-full ">
      <Head>
        <title>Portafolio.TSX</title>
        <link rel="icon" href="/imgs/city13.png" />
      </Head>

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
