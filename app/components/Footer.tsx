export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center py-6 bg-gray-100 mt-12">
      <div className="flex flex-wrap items-center gap-3 text-base font-medium">
        <span className="flex items-center gap-1">
          Created in
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <img
              //   src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
              src="/next.svg"
              alt="Next.js Logo"
              className="h-5 w-auto"
            />
          </a>
          <span className="text-black font-bold"></span>
        </span>
        <span>and hosted on</span>
        <a
          href="https://vercel.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <img src="/vercel.svg" alt="Vercel Logo" className="h-5 w-auto" />
          <span className="ml-1 text-black font-bold">Vercel</span>
        </a>
      </div>
    </footer>
  );
}
