import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const names = [
    // { productName: "flowerRing", category: "Resin-Ring", price: 500, allergyFriendly: false},
    // { productName: "flowerEarrings", category: "Resin-earrings", price: 1000, allergyFriendly: true},
    // { productName: "landscapeCoinPurse", category: "coin-purse", price: 900, allergyFriendly: false},
    // { productName: "catDesignBag", category: "bag", price: 2000, allergyFriendly: false}
    { name: "taro", content: "test" },
    { name: "tetsu", content: "test1" },
    { name: "hiro", content: "test2" },
];

async function main() {

    for (const name of names) {
        await prisma.post.create({
            data: {
                name: name.name,
                content: name.content
            }
        });
    }
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async() => {
        await prisma.$disconnect();
    });