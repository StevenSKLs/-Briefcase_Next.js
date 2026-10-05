import { Image_fields } from "@/lib/typings";
import Head from "next/head";
import CalculadoraFisica from "../components/CalculadoraFisica";
import { General} from "@/lib/typings";
import { getStaticProps } from "./api/api";

export default function PaginaPortafolio({ general}: { general: General[] }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans p-6 flex flex-col items-center justify-center">
      <Head>
        <title>Calculador N Cargas </title>
      </Head>
      <header className="mb-6 text-center">
        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
          Módulo de Física de N Cargas / Sea gentil con los valores
        </span>
      </header>
      <CalculadoraFisica city={general[0].fields.fondo[1]}/>

    </div>
  );
}

export { getStaticProps };