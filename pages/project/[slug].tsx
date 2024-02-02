'use client'

import CarouselImage from '@/components/CarouselImage';
import ContactMe from '@/components/ContactMe';
import Footer from '@/components/Footer';
import Projects from '@/components/Projects';
import { Project } from '@/lib/typings';
import { HomeIcon } from '@heroicons/react/20/solid';
import { Typography } from '@material-tailwind/react';
import { createClient } from 'contentful';
import Image from 'next/image';
import Link from 'next/link';

export default function product({ recipes, projects }: { recipes: Project; projects: Project[] }) {
  // if (!recipes) return <NotExisten />
  console.log(recipes)
  return (
    <main className="w-full h-full ">
      <Link href={'/'} className='fixed left-3 top-3 z-[4] '>
        <HomeIcon className="h-14 w-14 text-red rounded-[50%] border-2 border-red bg-white 
        hover:bg-red hover:text-white hover:border-white" />
      </Link>

      <Typography variant='h2' className='my-3 text-center'>
        {recipes.fields.tilte}
      </Typography>

      <section className='h-full w-full px-3 m768:px-12 mb-3'>
        <div className=' relative'>
          <Image
            src={`https:${recipes.fields.image[0].fields.file.url}`}
            alt=""
            width={recipes.fields.image[0].fields.file.details.image.width}
            height={recipes.fields.image[0].fields.file.details.image.height}
            loading="lazy"
            className='xl:w-full '
          />

          <article className='absolute top-0 right-0 grid grid-rows-2 w-[35%] h-[60%] gap-1 '>
            <div className='relative border-2 border-light-blue-400  '>
              <CarouselImage images={recipes.fields.image[1].fields.file.url}
                width={recipes.fields.image[1].fields.file.details.image.width}
                height={recipes.fields.image[1].fields.file.details.image.height} />
              <Image
                src={`https:${recipes.fields.image[1].fields.file.url}`}
                alt=""
                style={{ objectFit: 'cover' }}
                sizes="500px"
                fill
                priority
              />
            </div>
            <div className='relative border-2 border-light-blue-400 '>
              <CarouselImage images={recipes.fields.image[2].fields.file.url}
                width={recipes.fields.image[2].fields.file.details.image.width}
                height={recipes.fields.image[2].fields.file.details.image.height} />

              <Image
                src={`https:${recipes.fields.image[2].fields.file.url}`}
                alt=""
                style={{ objectFit: 'cover' }}
                sizes="500px"
                fill
                priority
              />
            </div>
          </article>

          <article className=' p-3 absolute bottom-0 left-0 w-[60%] hidden m768:block rounded-tr-[20px]'
            style={{ background: 'linear-gradient(0deg, rgba(34,193,195,0.8491771708683473) 0%, rgba(189,251,254,0.7847514005602241) 36%, rgba(45,238,253,0.4906337535014006) 100%)' }}>
            <Typography variant='h5' className=' mb-2 text-center'>
              {recipes.fields.tilte}
            </Typography>
            <p className='text-[15px] text-justify'>
              {recipes.fields.description}
            </p>
          </article>
        </div>
      </section>

      <Typography variant='h3' className='mt-6 my-3 text-center'>
        Información
      </Typography>
      <p className='text-center w-full text-base px-3 sm:px-12 '>
        {recipes.fields.description}
      </p>
      <Typography variant='h3' className='mt-6 mb-3 text-center'>
        Imagenes y Tecnológias
      </Typography>
      <section className='w-full h-screen grid sm:grid-cols-2 my-4 px-4 gap-2'>
        <div className='grid grid-cols-4'>
          {recipes.fields.tecno.map((tecnos, index) => (
            <div className='relative' key={index}>
              <Image
                src={`https:${tecnos.fields.file.url}`}
                alt=""
                sizes="500px"
                fill
                priority
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
        <article className='relative border-2 border-light-blue-400   '>
          <CarouselImage images={recipes.fields.image[0].fields.file.url}
            width={recipes.fields.image[0].fields.file.details.image.width}
            height={recipes.fields.image[0].fields.file.details.image.height} />
          <Image
            src={`https:${recipes.fields.image[0].fields.file.url}`}
            alt=""
            sizes="500px"
            fill
            priority
          />
        </article>

        <article className='relative border-2 border-light-blue-400   '>
          <CarouselImage images={recipes.fields.image[1].fields.file.url}
            width={recipes.fields.image[1].fields.file.details.image.width}
            height={recipes.fields.image[1].fields.file.details.image.height} />
          <Image
            src={`https:${recipes.fields.image[1].fields.file.url}`}
            alt=""
            sizes="500px"
            fill
            priority
          />
        </article>
        <article className='relative border-2 border-light-blue-400    '>
          <CarouselImage images={recipes.fields.image[2].fields.file.url}
            width={recipes.fields.image[2].fields.file.details.image.width}
            height={recipes.fields.image[2].fields.file.details.image.height} />
          <Image
            src={`https:${recipes.fields.image[2].fields.file.url}`}
            alt=""
            sizes="500px"
            fill
            priority
          />
        </article>
      </section>
      <Projects recipes={projects} />
      <ContactMe />
      <Footer />
    </main>
  );
}

const client = createClient({
  space: `${process.env.CONTENTFUL_SPACE_ID}`,
  accessToken: `${process.env.CONTENTFUL_ACCESS_KEY}`,
})

export async function getStaticPaths() {
  const res = await client.getEntries({ content_type: 'protafolio' })
  const paths = res.items.map((item) => {
    return { params: { slug: item.fields.slug } }
  })
  console.log(paths)
  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }: { params: Project }) {
  const { items } = await client.getEntries({
    content_type: 'protafolio',
    "fields.slug": params.fields.slug
  })

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const allRes = await client.getEntries({ content_type: 'protafolio' });
  const filterRes = allRes.items.filter(entry => entry.fields.slug !== params.fields.slug);

  return {
    props: {
      recipes: items[0],
      projects: filterRes,
    },
    revalidate: 1,
  }
}