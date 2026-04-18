import { BiMessageDots } from "react-icons/bi";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full rounded-full flex justify-end z-50 px-8 py-4 bg-transparent backdrop-blur-none">
      <div className="flex items-center gap-6 bg-white/0 rounded-full px-6 py-2 shadow-none">
        <a
          href="#about"
          className="flex items-center transition-colors duration-200 text-gray-800 hover:text-blue-600 font-medium opacity-100"
        >
          About
        </a>
        <a
          href="#skills"
          className="flex items-center transition-colors duration-200 text-gray-800 hover:text-blue-600 font-medium opacity-100"
        >
          Skills
        </a>
        <a
          href="#experience"
          className="flex items-center transition-colors duration-200 text-gray-800 hover:text-blue-600 font-medium opacity-100"
        >
          Experience
        </a>
        <a
          href="#projects"
          className="flex items-center transition-colors duration-200 text-gray-800 hover:text-blue-600 font-medium opacity-100"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="flex items-center gap-1 transition-colors duration-200 font-medium opacity-100 bg-blue-600 text-white hover:bg-blue-700 px-4 py-1.5 rounded-full shadow-md"
        >
          Contact
          <BiMessageDots size={20} />
        </a>
      </div>
    </nav>
  );
}
