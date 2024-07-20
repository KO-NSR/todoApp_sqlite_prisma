"use client";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";

const DataForm = () => {
    const router = useRouter();
    const [productName, setProductName] = useState("");
    const [category, setCategory] = useState("");
    const [pirce, setPirce] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const postData = {
            productName: productName,
            category: category,
            pirce: pirce
        };
        
        try {
            const res = await fetch("http://localhost:3000/api/createPost", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
            });
            if (res.ok) {
                setProductName("");
                setCategory("");
                setPirce("");
                console.log("Post created successfully");
                router.push("/");
                router.refresh();
            } else {
                console.error("Failed to create post");
            }
        } catch (error) {
            console.error("Error", error);
        }
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-y-2'>
            <input type='text' name='productName' placeholder='productName' value={productName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setProductName(e.target.value)} />
            <input type='text' name='category' placeholder='category' value={category}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setCategory(e.target.value)} />
            <input type='number' name='pirce' placeholder='pirce' value={pirce}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPirce(e.target.value)} />
            <button type='submit'>Create</button>
        </form>
    )
}

export default DataForm;

