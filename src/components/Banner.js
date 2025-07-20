import Image from 'next/image';

export default function Banner() {
  return (
   <section className="relative mt-20 h-96 bg-gray-800 overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/default.jpeg" alt="Creative sketches and design concepts background" fill className="object-cover opacity-30" />
      </div>
      <div className="relative z-10 flex items-center justify-center h-full text-center">
        <div>
          <h1 className="text-5xl font-bold text-white mb-4">Ideas</h1>
          <p className="text-xl text-white opacity-90">Where all our great things begin</p>
        </div>
      </div>
    </section>
  );
}
