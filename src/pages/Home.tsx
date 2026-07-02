export default function Home() {
  return (
    <div className="flex flex-col items-start">
      {/* Intro */}
      <p className="font-mono">SOFTWARE ENGINEER</p>
      <h1 className="max-w-3xl text-4xl font-semibold md:text-6xl text-pretty mt-5 leading-tight tracking-tight">
        Jemma Crosby
      </h1>

      <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
        Software Engineer with strong front-end expertise and backend
        experience, working on high-traffic, performance-critical ecommerce
        platforms.
      </p>

      <div className="flex gap-4 my-2">
        <button className="font-mono bg-gray-200 py-2 px-4 rounded-2xl">
          GitHub
        </button>

        <button className="font-mono bg-gray-200 py-2 px-4 rounded-2xl">
          LinkedIn
        </button>
      </div>

      {/* Projects */}
      <div className="flex items-center mt-5 gap-4 border-b border-gray-200 w-full pb-4 mb-4">
        <p className="font-mono">01</p>
        <h2 className="max-w-3xl text-2xl font-semibold md:text-xl text-pretty leading-tight tracking-tight">
          Projects
        </h2>
      </div>

      <div className="flex gap-4">
        {/* Crosby Snacks */}
        <div className="rounded-lg border border-gray-400 p-4 flex flex-col gap-4">
          <h3 className="text-2xl font-semibold md:text-xl text-pretty leading-tight tracking-tight">
            Crosby Snacks
          </h3>
          <p>
            An app built for a family game where we rate snacks from around the
            world!
          </p>
          <div className="flex gap-4">
            <a
              className="bg-black text-white py-2 px-4 rounded-lg font-mono"
              href="https://crosby-snacks-e5op.vercel.app/"
            >
              Visit site
            </a>
            <a
              className="bg-gray-200 py-2 px-4 rounded-lg font-mono"
              href="https://crosby-snacks-e5op.vercel.app/"
            >
              Learn more
            </a>
            <a
              className="border border-gray-400 py-2 px-4 rounded-lg font-mono"
              href="https://crosby-snacks-e5op.vercel.app/"
            >
              View code
            </a>
          </div>
        </div>

        {/* Running App */}
        <div className="rounded-lg border border-gray-400 p-4 flex flex-col gap-4">
          <h3 className="text-2xl font-semibold md:text-xl text-pretty leading-tight tracking-tight">
            Strava Stats Dashboard
          </h3>
          <p>A dashboard to represent my running.</p>
          <div className="flex gap-4">
            <a
              className="bg-black text-white py-2 px-4 rounded-lg font-mono"
              href="https://crosby-snacks-e5op.vercel.app/"
            >
              Visit site
            </a>
            <a
              className="bg-gray-200 py-2 px-4 rounded-lg font-mono"
              href="https://crosby-snacks-e5op.vercel.app/"
            >
              Learn more
            </a>
            <a
              className="border border-gray-400 py-2 px-4 rounded-lg font-mono"
              href="https://crosby-snacks-e5op.vercel.app/"
            >
              View code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
