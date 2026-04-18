type project = {
  id: number;
  name: string;
  techstack: string[];
  details: string[];
  link: string;
};

const ProjectCard = ({ project }: { project: project }) => {
  return (
    <article className="w-full rounded-3xl border border-gray-200 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-gray-900">
            {project.name}
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Featured tools and technologies used in this project.
          </p>
        </div>
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            View Project
          </a>
        ) : null}
      </div>

      <div className="mb-5 flex flex-wrap gap-2">
        {project.techstack.map((tech) => (
          <span
            key={`${project.id}-${tech}`}
            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-700"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.details.length > 0 ? (
        <ul className="space-y-3 text-gray-700">
          {project.details.map((detail, index) => (
            <li key={index} className="flex gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-600" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">Details coming soon for this project.</p>
      )}
    </article>
  );
};

const Projects = () => {
  const projects: project[] = [
    {
      id: 1,
      name: "Kinderloop - Kid's Marketplace",
      techstack: [
        "Node.js",
        "React.js",
        "Redux Toolkit",
        "MongoDB",
        "TypeScript",
        "AWS - S3",
      ],
      details: [
        "Enforced scalable backend using Node.js, Express.js and DynamoDB (via ElectroDB ODM) with JWT and OTP-based authentication, role-based authorization for user, admin and delivery person.",
        "Enhanced real-time dashboards for admin using WebSocket to display live counts of products, orders, and users and improved performance by 20%.",
        "Integrated AWS-S3 bucket for product images.",
      ],
      link: "",
    },
    {
      id: 2,
      name: "AXES - Automation Execution Services",
      techstack: [
        "Node.js",
        "React.js",
        "Redux Toolkit",
        "PostgreSQL",
        "JavaScript",
      ],
      details: [
        "Developed an internal platform to streamline QA, deployment, and automation workflows for client projects.",
        "Applied functionality to initiate and terminate executions via PowerShell scripts, reducing manual effort and improving efficiency.",
        "Integrated real-time WebSocket communication to track and display execution progress for enhanced visibility.",
        "Built a report management system where automation reports are automatically uploaded to AXES using the Multer library for centralized access.",
      ],
      link: "",
    },
    {
      id: 3,
      name: "Meditab Employee Management",
      techstack: [
        "Node.js",
        "React.js",
        "Redux Toolkit",
        "MySQL",
        "TypeScript",
      ],
      details: [
        "Developed key modules such as employee details, leave management, check-in/checkout, employee assets, and reporting tools for team leaders and managers.",
        "Designed & implemented RESTful APIs using Node.js, Express.js, and TypeScript to handle business logic and data operations.",
        "Utilized MySQL with Sequelize ORM for transactional data and database management, ensuring efficient queries and data integrity.",
        "Optimized performance by using Redis for caching frequently accessed data and Socket.IO for real-time notifications and announcements.",
      ],
      link: "",
    },
    {
      id: 4,
      name: "Task-Flow",
      techstack: [
        "Node.js",
        "NestJS",
        "React.js",
        "Next.js",
        "PostgreSQL",
        "Prisma",
        "TypeScript",
      ],
      details: [
        "Developed REST APIs with NestJS, integrating user authentication, role-based access control, and clean modular architecture.",
        "Created a responsive, high-performance frontend with React & Next.js, leveraging TypeScript and server-side rendering.",
        "Designed efficient schemas and queries for tasks, projects, users, and activity tracking.",
      ],
      link: "",
    },
  ];

  return (
    <section id="projects" className="bg-gray-50 px-6 py-12 md:px-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Projects
          </h2>
          <p className="max-w-2xl text-base leading-7 text-gray-600">
            A selection of applications and systems built with modern stacks,
            with a focus on performance, maintainability, and polished user
            experience.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
