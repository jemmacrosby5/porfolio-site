import reactLogo from "@/assets/react.webp";
import nextLogo from "@/assets/next.webp";
import dockerLogo from "@/assets/docker.webp";
import postgresLogo from "@/assets/postgres.webp";
import supabaseLogo from "@/assets/supabase.webp";
import nodeLogo from "@/assets/node.webp";
import StatusPill from "@components/StatusPill";

interface props {
  project: "crosbySnacks" | "stravaStats";
}

export default function ProjectCard({ project }: props) {
  const projectDetails = {
    crosbySnacks: {
      title: "Crosby Snacks",
      description:
        "An app built for a family game where we rate snacks from around the world!",
      tech: ["react", "node", "next", "supabase", "postgres"],
      live: true,
      wip: false,
      liveLink: "https://crosby-snacks-e5op.vercel.app/",
      infoLink: "/crosby-snacks",
      githubLink: "https://github.com/jemmacrosby5/crosby-snacks",
    },
    stravaStats: {
      title: "Strava Stats",
      description:
        "A dashboard extracting the main information from my Strava runs.",
      tech: ["react", "node", "docker", "postgres"],
      live: true,
      wip: true,
      liveLink: "https://d1oaiop4g3fnqn.cloudfront.net/",
      infoLink: "/strava-stats",
      githubLink: "https://github.com/jemmacrosby5/strava-stats-backend",
    },
  };

  const details = projectDetails[project];
  const techLogos = {
    react: reactLogo,
    next: nextLogo,
    supabase: supabaseLogo,
    postgres: postgresLogo,
    docker: dockerLogo,
    node: nodeLogo,
  };

  return (
    <div className="flex flex-col gap-4 w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <h3 className="whitespace-nowrap text-2xl font-semibold leading-tight tracking-tight md:text-xl">
          {details.title}
        </h3>
        <StatusPill live={details.live} wip={details.wip} />
      </div>
      <div className="flex gap-2">
        {details.tech.map((tech) => (
          <img
            key={tech}
            className="w-6 rounded"
            src={techLogos[tech as keyof typeof techLogos]}
            alt={`${tech} logo`}
          />
        ))}
      </div>
      <p>{details.description}</p>
      <div className="flex gap-4">
        <a
          className="rounded-lg bg-black px-4 py-2 font-mono text-white text-center"
          href={details.liveLink}
        >
          Visit site
        </a>
        <a
          className="rounded-lg bg-gray-200 px-4 py-2 font-mono text-center"
          href={details.infoLink}
        >
          Learn more
        </a>
        <a
          className="rounded-lg border border-gray-400 px-4 py-2 font-mono text-center"
          href={details.githubLink}
        >
          View code
        </a>
      </div>
    </div>
  );
}
