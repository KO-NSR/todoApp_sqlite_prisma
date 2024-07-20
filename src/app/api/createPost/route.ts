import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const { productName, category, pirce } = await req.json();
    const newPost = await prisma.post.create({
        data: {
            productName,
            category,
            pirce: parseInt(pirce, 10)
        }
    });
    return NextResponse.json(newPost);
}

export async function DELETE(req: Request) {
    const id = await req.json();
    await prisma.post.delete({
        where: {
            id,
        }
    });
    return NextResponse.json(id);
}

export async function PUT(req: Request) {
    const { id, productName, category, pirce } = await req.json();
    const updatePost = await prisma.post.update({
        where: {
            id,
        },
        data: {
            productName,
            category,
            pirce: parseInt(pirce, 10)
        }
    })
    return NextResponse.json(updatePost);
}