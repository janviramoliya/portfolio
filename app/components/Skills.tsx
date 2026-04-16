import { AiOutlineApi } from "react-icons/ai";
import {
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaCodeBranch,
} from "react-icons/fa";
import { MdApi } from "react-icons/md";

import {
  SiExpress,
  SiNestjs,
  SiRedux,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiRedis,
  SiTypescript,
  SiNginx,
  SiGraphql,
  SiMongoose,
  SiSequelize,
} from "react-icons/si";
import { TbBrandSocketIo } from "react-icons/tb";

export default function Skills() {
  const skills = [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "NestJS", icon: <SiNestjs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Redux Toolkit", icon: <SiRedux /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Mongoose", icon: <SiMongoose /> },
    { name: "Sequelize", icon: <SiSequelize /> },
    { name: "Prisma", icon: <SiPrisma /> },
    { name: "Redis", icon: <SiRedis /> },
    { name: "Git & GitHub", icon: <FaGitAlt /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "NGINX", icon: <SiNginx /> },
    { name: "GraphQL", icon: <SiGraphql /> },
    { name: "Java", icon: <FaJava /> },
    { name: "CI/CD", icon: <FaCodeBranch /> },
    { name: "WebSocket", icon: <TbBrandSocketIo /> },
    { name: "REST API", icon: <AiOutlineApi /> },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-50 px-6 py-12 md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Skills
          </h2>
          <p className="mt-4 text-gray-600">
            Technologies and tools I work with to build robust applications.
          </p>
        </div>

        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              <span className="text-2xl text-blue-600">{skill.icon}</span>
              <span className="text-sm font-medium text-gray-900">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
