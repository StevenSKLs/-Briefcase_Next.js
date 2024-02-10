import { createClient } from 'contentful';

export async function getStaticProps() {
    const client = createClient({
        space: `${process.env.CONTENTFUL_SPACE_ID}`,
        accessToken: `${process.env.CONTENTFUL_ACCESS_KEY}`,
    })

    const res = await client.getEntries({ content_type: 'protafolio' })
    const res2 = await client.getEntries({ content_type: 'general' })
    const res3 = await client.getEntries({ content_type: 'proyects' })

    return {
        props: {
            recipes: res.items,
            general: res2.items,
            proyectos: res3.items,
        },
        revalidate: 1,
    }
}

