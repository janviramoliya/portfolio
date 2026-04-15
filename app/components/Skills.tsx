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
} from "react-icons/fa";

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
  ];
  return (
    <section id="skills" className="min-h-screen p-10 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-3 p-4 bg-white rounded-xl shadow"
          >
            <span className="text-2xl">{skill.icon}</span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
      <ul>
        <li>CI/CD</li>
        <li>WebSocket</li>
        <li>REST API</li>
      </ul>
    </section>
  );
}
