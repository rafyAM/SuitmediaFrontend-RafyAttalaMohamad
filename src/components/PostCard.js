import Image from "next/image";

export default function PostCard({ post }) {
  return (
    <div className="bg-white shadow rounded p-4 hover:shadow-md relative group">
      <Image
        src={post.medium_image}
        alt={post.title}
        className="w-full h-48 object-cover rounded"
        width={500}
        height={300}
      />
      <h3 className="font-bold mt-2 text-lg line-clamp-3">{post.title}</h3>
      <p className="text-sm text-gray-600 mt-1 line-clamp-3">
        {post.description}
      </p>
      <span className="absolute top-2 right-2 text-xs text-white bg-black/70 px-2 py-0.5 rounded opacity-0 group-hover:opacity-100">
        {new Date(post.published_at).toLocaleDateString()}
      </span>
    </div>
  );
}
