const certifications = [
  {
    title: "React Basics",
    issuer: "Meta",
    date: "Aug 2024",
  },
  {
    title: "Programming with JavaScript",
    issuer: "Meta",
    date: "Aug 2024",
  },
  {
    title: "HTML & CSS in Depth",
    issuer: "Meta",
    date: "Aug 2024",
  },
  {
    title: "Version Control",
    issuer: "Meta",
    date: "Aug 2024",
  },
  {
    title: "Introduction to Front-End Development",
    issuer: "Meta",
    date: "Dec 2023",
  },
  {
    title: "Introduction to Front-End Development with ReactJS",
    issuer: "Coursera Project Network",
    date: "Aug 2024",
  },
  {
    title: "Introduction to Back-End Development",
    issuer: "Meta",
    date: "Sep 2022",
  },
];

export default function Certifications() {
  return (
    <section className="section-spacing pt-0">
      <div className="container-custom">
        <div className="mb-20">
          <p className="mb-6 text-sm uppercase tracking-[6px] text-zinc-500">
            Certifications
          </p>

          <h2 className="section-title mb-6">
            Continuous Learning & Certifications
          </h2>

          <p className="max-w-3xl text-lg leading-relaxed text-zinc-400">
            I continuously invest in improving my technical expertise through
            industry-recognized certifications focused on frontend development,
            JavaScript, React and modern web technologies.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="rounded-[24px] border border-zinc-800 bg-zinc-900/20 p-8 transition duration-300 hover:border-zinc-700"
            >
              <h3 className="mb-3 text-2xl font-semibold tracking-[-1px]">
                {cert.title}
              </h3>

              <p className="mb-2 text-zinc-300">{cert.issuer}</p>

              <p className="text-sm uppercase tracking-[3px] text-zinc-500">
                {cert.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}