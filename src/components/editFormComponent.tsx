"use client";

import { buttonObj } from "@/types/types";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";


interface editButtonObj {
    editData: buttonObj;
}

const EditFormComponent = ({editData}: editButtonObj) => {
    const router = useRouter();
    const data = editData;
    const stringPirce = data.pirce.toString();
    const [id, setId] = useState(data.id);
    const [productName, setProductName] = useState(data.productName);
    const [category, setCategory] = useState(data.category);
    const [pirce, setPirce] = useState(stringPirce);
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const editData = {
            id: id,
            productName: productName,
            category: category,
            pirce: pirce
        }
        
        try {
            const res = await fetch("http://localhost:3000/api/createPost", {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(editData)
            });
            if (res.ok) {
                console.log("Updata successful");
                router.push("/");
                router.refresh();
            } else {
                console.error("Failed to PUT post");
            }
        } catch (error) {
            console.error("Error", error);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-10 p-4 border border-gray-200 rounded-lg">
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">ProductName</label>
                <input type="text" value={productName} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setProductName(e.target.value)} />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <input type="text" value={category} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setCategory(e.target.value)} />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Price</label>
                <input type="number" value={pirce} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPirce(e.target.value)} />
            </div>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
                Update
            </button>
        </form>
    )
}

export default EditFormComponent;