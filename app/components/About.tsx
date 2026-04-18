import { CiLocationArrow1 } from "react-icons/ci";
import { MdFileDownload } from "react-icons/md";

export default function About() {
  return (
    <section id="about" className="bg-gray-50 px-6 py-12 md:px-10">
      <div className="mx-auto flex max-w-4xl flex-col gap-10 rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Hello world,
          </h2>

          {/* Hero Statement */}
          <p className="max-w-3xl text-2xl font-semibold leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 sm:text-3xl">
            I craft seamless web experiences from frontend to backend that drive
            real business results.
          </p>

          {/* Intro Line */}
          <p className="font-semibold max-w-2xl text-base leading-8 text-gray-600 sm:text-lg font-mono">
            `Hello, I'm {"${"}
            <span className="text-yellow-600">Janvi</span>
            {"}, ${"}
            <span className="text-yellow-600">Full Stack Developer</span>
            {"} with ${"}
            <span className="text-yellow-600">3+ years</span>
            {"}"} of experience building scalable and user-focused web
            applications.`
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="https://github.com/janviramoliya"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full border border-blue-600 bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
          >
            See projects <CiLocationArrow1 className="ml-2" />
          </a>
          <a
            href="/Janvi_Ramoliya_Resume.pdf"
            download
            className="inline-flex w-full items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:border-gray-400 hover:bg-gray-50 sm:w-auto"
          >
            Download Resume <MdFileDownload className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
