import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';

type PostPageProps = {
    params: {
        postId: string;
    }
}

const PostPage = async ({ params }: PostPageProps) => {
    const postId = parseInt(params.postId, 10); //Convert 'postId' from string to number.

    if(isNaN(postId)) {
        return notFound();
    }

    const post = await prisma.post.findUnique({
        where: {
            id: postId,
        }
    });

    if (!post) {
        return notFound();
    }

    return(
        <h2>{post.category}</h2>
    )
}

export default PostPage;
