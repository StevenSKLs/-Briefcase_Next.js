import { GetStaticPaths, GetStaticProps } from "next";

import { getProps } from "@/lib/posts";
import { Post } from "@/lib/typings";

type Props = {
    post: Post
}

const home = () => {
    return (
        <>
            <div></div>
        </>
    );
};

export default home;

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: [
            { params: { path: 'Person' } },
            { params: { path: 'Initial' } }
        ],
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
    const post = (await getProps()).find((post) => {
        return post.path === context.params?.path || ''
    })

    if (!post) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            post
        }
    }

}