import { BiArrowFromRight, BiArrowToRight } from "react-icons/bi";
import { CiLocationArrow1 } from "react-icons/ci";
import { MdFileDownload } from "react-icons/md";
import { TbArrowsCross } from "react-icons/tb";

export default function About() {
  return (
    <section id="about" className="min-h-screen px-6 py-12 md:px-10">
      <div className="mx-auto flex max-w-4xl flex-col gap-10 rounded-[2rem] border border-slate-800/90 bg-slate-950/90 p-8 shadow-[0_25px_80px_-30px_rgba(15,23,42,0.9)]">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-100 sm:text-4xl">
            Hello world,
          </h2>

          {/* Hero Statement */}
          <p className="max-w-3xl text-2xl font-semibold leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 sm:text-3xl">
            I craft seamless web experiences from frontend to backend that drive
            real business results.
          </p>

          {/* Intro Line */}
          <p className="max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Hello, I'm{" "}
            <span className="font-semibold text-slate-100">Janvi</span>, a{" "}
            <span className="font-semibold text-cyan-400">
              Full Stack Developer
            </span>{" "}
            with <span className="text-slate-200">3+ years</span> of experience
            building scalable and user-focused web applications.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="https://github.com/janviramoliya"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full border border-cyan-400 bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 sm:w-auto"
          >
            See projects <CiLocationArrow1 className="ml-2" />
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex w-full items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-800 sm:w-auto"
          >
            Download Resume <MdFileDownload className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
