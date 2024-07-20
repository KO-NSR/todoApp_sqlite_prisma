import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import EditFormComponent from "@/components/editFormComponent";

interface EditPageProps {
    params: {
        editId: string;
    }
}

const EditForm = async ({params}: EditPageProps) => {
    const postId = parseInt(params.editId, 10);
    if (isNaN(postId)) {
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
        <EditFormComponent editData={post} />
    )
}

export default EditForm;