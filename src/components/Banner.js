export default function Banner() {
  return (
    <div
      className="relative h-96 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url(/banner.jpg)" }}
    >
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h2 className="text-4xl text-white font-bold">Ideas</h2>
      </div>
    </div>
  );
}
