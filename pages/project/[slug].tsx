'use client'

import CarouselImage from '@/components/CarouselImage';
import ContactMe from '@/components/ContactMe';
import Footer from '@/components/Footer';
import NotExisten from '@/components/NotExisten';
import Projects from '@/components/Projects';
import { FieldsRecipe, General, Project } from '@/lib/typings';
import { HomeIcon } from '@heroicons/react/20/solid';
import { Typography } from '@material-tailwind/react';
import { createClient } from 'contentful';
import Image from 'next/image';
import Link from 'next/link';

export default function product({ recipes, projects, general }: { recipes: Project; projects: Project[]; general: General[] }) {
  if (!recipes) return <NotExisten />

  return (
    <main className="w-full h-full main2">
      <Link href={'/'} className='fixed top-0 left-0 sm:left-2 sm:top-2 z-[4] '>
        <HomeIcon className="h-10 sm:h-14 w-10 sm:w-14 text-red rounded-[50%] border-2 border-red bg-white 
        hover:bg-red hover:text-white hover:border-white" />
      </Link>

      <Typography variant='h2' className=' text-center w-full p-3'>
        {recipes.fields.tilte}
      </Typography>

      <section className='h-full w-full px-2 m768:px-12 mb-3'>
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
                widthImg={recipes.fields.image[1].fields.file.details.image.width}
                heightImg={recipes.fields.image[1].fields.file.details.image.height} />
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
                widthImg={recipes.fields.image[2].fields.file.details.image.width}
                heightImg={recipes.fields.image[2].fields.file.details.image.height} />

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

          <article className='grid grid-cols-4 absolute bottom-0 sm:right-0 left-0 sm:left-auto w-[30%] h-[20%] sm:h-[14%]'>
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
          </article>
        </div>
      </section>

      <Typography variant='h3' className='mt-6 my-3 text-center'>
        Información
      </Typography>
      <p className='text-justify sm:text-center w-full text-base px-3 sm:px-12 '>
        {recipes.fields.description}
      </p>

      <Typography variant='h3' className='mt-6 my-3 text-center'>
        En la Web
      </Typography>
      <article className='w-full  grid place-content-center '>
        <Link href={recipes.fields.deploy} target="_blank" className='grid grid-cols-2 w-[5ovw] border-2 p-4 items-center  border-[#ff8139] bg-black rounded-[20px] drop'>
          <div className='h-[10vh] w-[10vh] border-[2px] border-[#ff8139] bg-white rounded-[50%] p-[9px] drop  '>
            <Image
              src={"/projects/deploy.png"}
              alt=""
              width={512} height={512}
            />
          </div>
          <Typography variant='h3' color='white' className=' text-center'>
            Deploy
          </Typography>
        </Link>
      </article>

      <Typography variant='h3' className='my-3 text-center'>
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
            widthImg={recipes.fields.image[0].fields.file.details.image.width}
            heightImg={recipes.fields.image[0].fields.file.details.image.height} />
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
            widthImg={recipes.fields.image[1].fields.file.details.image.width}
            heightImg={recipes.fields.image[1].fields.file.details.image.height} />
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
            widthImg={recipes.fields.image[2].fields.file.details.image.width}
            heightImg={recipes.fields.image[2].fields.file.details.image.height} />
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
      <Footer facebook={general[0].fields.media[1]} gmail={general[0].fields.media[0]} whatsapp={general[0].fields.media[2]} cat={general[0].fields.media[3]} />
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

export async function getStaticProps({ params }: { params: FieldsRecipe }) {
  const { items } = await client.getEntries({
    content_type: 'protafolio',
    "fields.slug": params.slug
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
  const filterRes = allRes.items.filter(entry => entry.fields.slug !== params.slug);
  const res2 = await client.getEntries({ content_type: 'general' })
  return {
    props: {
      recipes: items[0],
      projects: filterRes,
      general: res2.items,
    },
    revalidate: 1,
  }
}