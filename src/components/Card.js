import Image from "next/image";

export default function Card({ posts }) {

   if (!Array.isArray(posts)) return <p className="text-center text-gray-500">No data available.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {posts.map((post) => (
        <article key={post.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
          <div className="aspect-video relative">
            <Image src={post.medium_image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>
          <div className="p-4">
            <div className="text-xs text-gray-500 mb-2 font-medium">
              {new Date(post.published_at).toLocaleDateString()}
            </div>
            <h3 className="text-sm font-medium text-gray-900 leading-tight line-clamp-3">{post.title}</h3>
          </div>
        </article>
      ))}
    </div>
  );
}
