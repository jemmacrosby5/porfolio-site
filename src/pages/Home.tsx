import ProjectCard from "@components/ProjectCard";

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
        <a
          href="https://github.com/jemmacrosby5"
          className="font-mono bg-gray-200 py-2 px-4 rounded-2xl cursor-pointer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/jemma-crosby/"
          className="font-mono bg-gray-200 py-2 px-4 rounded-2xl cursor-pointer"
        >
          LinkedIn
        </a>
      </div>

      {/* Projects */}
      <div className="flex items-center mt-5 gap-4 border-b border-gray-200 w-full pb-4 mb-4">
        <p className="font-mono">01</p>
        <h2 className="max-w-3xl text-2xl font-semibold md:text-xl text-pretty leading-tight tracking-tight">
          Projects
        </h2>
      </div>

      <div className="flex w-full gap-4 md:flex-row flex-col">
        <ProjectCard project="crosbySnacks" />
        <ProjectCard project="stravaStats" />
      </div>
    </div>
  );
}
