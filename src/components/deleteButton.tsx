"use client";

import { useRouter } from "next/navigation";

interface IdType {
    postId: number;
}

const DeleteButton = ({postId}: IdType) => {
    const router = useRouter();
    const handleDelete = async () => {
        try {
            const res = await fetch("http://localhost:3000/api/createPost", {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postId),
            });
            if (res.ok) {
                console.log("Delete request successfully");
                router.push("/");
                router.refresh();
            } else {
                console.error("Failed to Delete request");
            }
        } catch (error) {
            console.error("Error", error);
        }
    }

    return (
        <button onClick={handleDelete}>DELETE</button>
    )
}

export default DeleteButton;