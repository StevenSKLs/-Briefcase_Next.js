interface Proyects {
  title: string;
  img: string;
  alt: string;
  description: string;
  urlGithub: string;
  deployments: string;
}

const ProyectsArray: Proyects[] = [
  {
    title: 'Portafolio JS',
    img: '/proyects/portafolio1.png',
    alt: 'proyect',
    description:
      'Primer trabajo realizado con Javascript Vainilla, hecho para demostrar las primeras bases de HTML, CSS y JS. Trabajo enfocado en el maquetado de un portafolio commun para el trabajo laboral.',
    urlGithub: 'https://github.com/StevenSKLs/Porta2',
    deployments: 'https://stevenskls.github.io/Porta2/',
  },
  {
    title: 'Ecommmerce JS',
    img: '/proyects/ecommerce1.png',
    alt: 'proyect',
    description:
      'Ecommerce realizado con Javascrit Vainilla, enfocado en simular una tienda en linea y permitiendo que el cliente realice compras o eliminar compras de su carrito.',
    urlGithub: 'https://github.com/StevenSKLs/ECOMERCE',
    deployments: 'https://stevenskls.github.io/ECOMERCE/',
  },
  {
    title: 'Random Text',
    img: '/proyects/random_text.png',
    alt: 'proyect',
    description:
      'Primer trabajo con React JS, enfocado en demostrar el conocimiento previo y el dinamismo de React JS en un trabajo pequeño. Permite que al usuario al momento de hacer click en el botón se cambie automáticamente el mensaje y el color.',
    urlGithub: 'https://github.com/StevenSKLs/WeekOne',
    deployments: 'https://hilarious-malasada-6cd01b.netlify.app/',
  },
  {
    title: 'Whater App',
    img: '/proyects/whater_app.png',
    alt: 'proyect',
    description: `Primer trabajo de React JS en el consumo de API's, enfocado en recibir información y mostrarle al usuario el clima de su zona de residencia. 
    Permite que el usuario pueda cambiar los grados de Celsius a Fahrenheit y dependiendo de la temperatura se mostrara una imagen, también si el usuario no permite el acceso a su ubicación automáticamente le mostrara imágenes de animales.`,
    urlGithub: 'https://github.com/StevenSKLs/WeekApp',
    deployments: 'https://appweather-reactjs.netlify.app/',
  },
  {
    title: 'Cards the Users',
    img: '/proyects/cards_users.png',
    alt: 'proyect',
    description:
      'Trabajo enfocado en creación de tarjetas de usuarios, el consumo de esta API permite almacenar datos de los usuarios creados en su cuenta permitiendo que lo pueda volver abrir en cualquier dispositivo. Permite al usuario crear, eliminar, editar y dependiendo de eso se mostrar un mensaje.',
    urlGithub: 'https://github.com/StevenSKLs/Users_App',
    deployments: 'https://app-creates-users.netlify.app/',
  },
  {
    title: 'Morty App',
    img: '/proyects/morty_app.png',
    alt: 'proyect',
    description:
      'Trabajo enfocado en mostrar la residencia de los personajes de la serie Rick and Morty. Permite al usuario buscar la residencia por dimensiones y mostrar a los residentes, se mostrara los personajes de esa dimensión todos ellos estarán paginados y cada uno tendrá un icono si esta vivo o no. ',
    urlGithub: 'https://github.com/StevenSKLs/MortyApp',
    deployments: 'https://app-react-rick-and-morty.netlify.app/',
  },
  {
    title: 'Pokedex',
    img: '/proyects/pokedex.png',
    alt: 'proyect',
    description:
      'Trabajo enfocado en la simulación de un Pokedex. Permite al usuario buscar en una lista los tipos de Pokémon ya sea por tipo o por nombre, al momento de dar clic en uno de ellos le mostrara la información del Pokémon y sus estadísticas, puedes ver las estadísticas de dos maneras de forma de bars o de forma de radar mediante un botón.',
    urlGithub: 'https://github.com/StevenSKLs/Pokedex_V1',
    deployments: 'https://app-pokedex-v1.netlify.app/',
  },
  {
    title: 'Ecommerce React.js',
    img: '/proyects/ecommerce2.png',
    alt: 'proyect',
    description:
      'Trabajo enfocado en un Ecommerce mas real, con uso de api y de librerías aprendidas a lo largo del curso Front. Permite al usuario buscar los artículos que desee comprar una vez hecha la comprar puede verlos en su historial de su carrito y todos están paginados. El usuario tendrá que estar logeado para usar el Ecommer, por el momento solo se puede hacer el login con el ejemplo en el login.',
    urlGithub: 'https://github.com/StevenSKLs/App_Ecomerce_V1',
    deployments: 'https://ecomerce-reactjs-v1.netlify.app/',
  },
  {
    title: 'Coworking-Frontend',
    img: '/proyects/coworking_frontend.png',
    alt: 'proyect',
    description:
      'Trabajo conjunto y con TypeScript, trata de una pagina de firmas de residencias en Mexico enfocada en la búsqueda de residencias en Mexico y de la evaluación del mejor sitio para su vivienda.El usuario puede aplicar mediante formularios y previamente de su login.',
    urlGithub: 'https://github.com/CarolinaVrl/CoWorkingLab',
    deployments: 'https://co-working-kw3uy2aw5-carolinavrl.vercel.app/',
  },
  {
    title: 'Portafolio Next.js',
    img: '/proyects/portafolio2.png',
    alt: 'proyect',
    description:
      'Primer proyecto personal de mi portafolio hecho con Next.js, este proyecto es personal y continuo actualizándolo para mejorarlo en algunos aspectos. Es mi primer enfoque al mundo del typescript y al mundo laboral.',
    urlGithub: 'https://github.com/StevenSKLs/-Briefcase_Next.js',
    deployments: 'https://briefcase-next-akh5psjtp-stevenskls.vercel.app/',
  },
];

export default ProyectsArray;
