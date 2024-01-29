import Certifics from "@/components/Certifics";
import ContactMe from "@/components/ContactMe";
import Initial from "@/components/Initial";
import Person from "@/components/Person";
import Projects from "@/components/Projects";

export default function index() {
  return (
    <main className="w-full h-full ">
      <Initial />
      <Person />
      <Projects />
      <Certifics />
      <ContactMe />
    </main>
  )
}
