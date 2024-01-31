export interface Projects {
  title: string;
  img: string;
  alt: string;
  description: string;
  urlGithub: string;
  deployments: string;
  materia: string[];
}
const ProjectsArray: Projects[] = [
  {
    title: 'Portafolio Next.js',
    img: '/projects/portafolio-Next.png',
    alt: 'project',
    description:
      'Primer proyecto personal de mi portafolio hecho con Next.js, este proyecto es personal y continuo actualizándolo para mejorarlo en algunos aspectos. Es mi primer enfoque al mundo del typescript y al mundo laboral.',
    urlGithub: '/case_Next.js',
    deployments: 'https://briefcase-next-js-git-main-stevenskls.vercel.app/',
    materia: ['CSS', 'JS'],
  },
  {
    title: 'Coworking-Frontend',
    img: '/projects/coworking_frontend.png',
    alt: 'project',
    description:
      'Trabajo conjunto y con TypeScript, trata de una pagina de firmas de residencias en Mexico enfocada en la búsqueda de residencias en Mexico y la evaluación del mejor sitio para su vivienda. Me encargue login.',
    urlGithub: 'https://github.com/CarolinaVrl/CoWorkingLab',
    deployments: 'https://co-working-kw3uy2aw5-carolinavrl.vercel.app/',
    materia: ['CSS', 'JS'],
  },
];

export default ProjectsArray;
