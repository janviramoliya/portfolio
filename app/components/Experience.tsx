import React from "react";

interface Experience {
  designation: string;
  company: string;
  duration: string;
  otherDetail: string[];
}

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <article className="relative rounded-3xl border border-slate-800/80 bg-slate-950/90 p-6 shadow-[0_18px_45px_-20px_rgba(15,23,42,0.8)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_70px_-30px_rgba(15,23,42,0.9)]">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-slate-100">
            {experience.designation}
          </h3>
          <p className="text-sm text-cyan-400">{experience.company}</p>
        </div>
        <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300">
          {experience.duration}
        </span>
      </div>

      <ul className="space-y-3 text-slate-300">
        {experience.otherDetail.map((detail, index) => (
          <li key={index} className="flex gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

const Experience = () => {
  const experiences: Experience[] = [
    {
      designation: "Sr. Programmer Analyst",
      company: "Meditab Software Inc.",
      duration: "Jan 2023 - Present",
      otherDetail: [
        "Implemented a RESTful API using Node.js and Express, ensuring a seamless data flow between the frontend and backend.",
        "Improved a responsive web application using React.js/Next.js and TailwindCSS, improving user engagement by 15%.",
        "Implemented React-based utilities for triggering and monitoring automation executions, providing a user-friendly interface for real-time execution control using WebSocket (Socket.io).",
        "Integrated Redis caching for getting recent items, caching 500+ frequently accessed records and reducing API response time by 40%.",
        "Gained hands-on experience with AWS services including EC2 for compute resources and S3 for object storage, supporting application deployment and data management.",
        "Conducted load testing using JMeter, simulating 1,000+ concurrent requests, to reduce API latency by 35% and improve system throughput by 30%.",
      ],
    },
  ];

  return (
    <section id="experience" className="min-h-screen px-6 py-12 md:px-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold text-slate-100 sm:text-4xl">
            Experience
          </h2>
          <p className="max-w-2xl text-base leading-7 text-slate-400">
            Professional journey and key achievements in software development
            and system optimization.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
