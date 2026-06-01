export default function Marquee() {
  return (
    <section className="overflow-hidden border-y border-zinc-800 py-8">
      <div className="marquee flex gap-20 whitespace-nowrap">
        {Array.from({ length: 10 }).map((_, index) => (
          <h2
            key={index}
            className="text-5xl md:text-7xl font-semibold tracking-[-2px]"
          >
            MODERN WEBSITES —
          </h2>
        ))}
      </div>
    </section>
  );
}