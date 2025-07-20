import Image from "next/image";

const defaultImage = "/images/default.jpeg"; 

export default function Card({ posts }) {
  if (!Array.isArray(posts)) {
    return <p className="text-center text-gray-500">No data available.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {posts.map((post) => {
        const hasValidImage = post.medium_image && 
                             Array.isArray(post.medium_image) && 
                             post.medium_image.length > 0 && 
                             post.medium_image?.url;

        const imageUrl = hasValidImage ? post.medium_image.url : defaultImage;

        return (
          <article 
            key={post.id} 
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="aspect-video relative">
              <Image
                loading="lazy"
                src={imageUrl}
                alt={post.title || "Article image"}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                priority={false}
              />
            </div>
            <div className="p-4">
              <div className="text-xs text-gray-500 mb-2 font-medium">
                {new Date(post.published_at).toLocaleDateString('id-ID', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <h3 className="text-sm font-medium text-gray-900 leading-tight line-clamp-3">
                {post.title}
              </h3>
            </div>
          </article>
        );
      })}
    </div>
  );
}