import DeleteButton from '@/components/deleteButton';
import DataForm from '@/components/detaForm';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

const Home = async () => {
  const posts = await prisma.post.findMany();

  return(
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Home</h2>
      <Link href={"/dailyCat"} className="self-start text-blue-500 hover:text-blue-700 mb-4">Go To CATS</Link>
      <div className="flex flex-col space-y-4">
        <DataForm/>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md">
              <div className="text-lg font-medium text-gray-900">{post.productName}</div>
              <div className='flex space-x-4'>
                <Link href={`/posts/${post.id}`} className="text-blue-500 hover:text-blue-700">Go To</Link>
                <Link href={`/edit/${post.id}`} className="text-blue-500 hover:text-blue-700">edit</Link>
                <DeleteButton postId={post.id} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
};

export default Home;