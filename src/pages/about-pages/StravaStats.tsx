import awsLogo from "@/assets/aws.webp";
import reactLogo from "@/assets/react.webp";
import postgresLogo from "@/assets/postgres.webp";
import dockerLogo from "@/assets/docker.webp";
import nodeLogo from "@/assets/node.webp";
import prismaLogo from "@/assets/prisma.webp";

export default function () {
  return (
    <>
      <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-pretty md:text-6xl">
        Strava Stats
      </h1>
      <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
        A full-stack app built around Strava data and backend reliability. The
        focus here was on server-side development, AWS deployment, CI/CD
        workflows, and integrating a third-party API using JWT-based
        authentication.
      </p>

      <section className="my-10">
        <div className="mb-4 flex w-full items-center gap-4 border-b border-gray-200 pb-4">
          <p className="font-mono">01</p>
          <h2 className="max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-pretty md:text-xl">
            Tech Stack
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="border-b border-gray-100 pb-4">
            <div className="mb-3 flex items-center gap-3">
              <img
                className="h-8 w-8 rounded"
                src={reactLogo}
                alt="React logo"
              />
            </div>
            <h3 className="mb-1 font-semibold">Frontend</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              React with Vite for the user interface and client-side experience.
            </p>
          </div>

          <div className="border-b border-gray-100 pb-4">
            <div className="mb-3 flex items-center gap-3">
              <img
                className="h-8 w-8 rounded"
                src={nodeLogo}
                alt="Node.js logo"
              />
              <img
                className="h-8 w-8 rounded"
                src={prismaLogo}
                alt="Prisma ORM logo"
              />
            </div>
            <h3 className="mb-1 font-semibold">API</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Node.js with Prisma ORM for structured data access and API logic.
            </p>
          </div>

          <div className="pt-2">
            <div className="mb-3 flex items-center gap-3">
              <img
                className="h-8 w-8 rounded"
                src={postgresLogo}
                alt="Postgres logo"
              />
            </div>
            <h3 className="mb-1 font-semibold">Database</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Supabase PostgreSQL for persistence, querying, and scalable data
              storage.
            </p>
          </div>

          <div className="pt-2">
            <div className="mb-3 flex items-center gap-3">
              <img
                className="h-8 w-8 rounded-full"
                src={dockerLogo}
                alt="Docker logo"
              />
              <img
                className="h-8 w-8 rounded-full object-cover"
                src={awsLogo}
                alt="AWS logo"
              />
            </div>
            <h3 className="mb-1 font-semibold">Deployment</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Dockerised the application and deployed the frontend to AWS S3,
              with the Node.js API hosted on an AWS EC2 instance.
            </p>
          </div>
        </div>
      </section>

      <section className="my-10">
        <div className="mb-4 flex w-full items-center gap-4 border-b border-gray-200 pb-4">
          <p className="font-mono">02</p>
          <h2 className="max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-pretty md:text-xl">
            Images
          </h2>
        </div>

        <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-6 text-center shadow-sm">
          <p className="text-4xl">🚧</p>
          <p className="mt-3 text-lg font-medium text-gray-800">
            Work in progress
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Coming soon!
          </p>
        </div>
      </section>

      <section className="my-5 w-full">
        <div className="mb-4 flex w-full items-center gap-4 border-b border-gray-200 pb-4">
          <p className="font-mono">03</p>
          <h2 className="max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-pretty md:text-xl">
            Considerations
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h3 className="mb-2 font-semibold">Backend-first architecture</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              I wanted to apply and deepen my backend skills in this project, so
              I focused on CI/CD deployments, third-party API integrations, and
              building a robust API. As a result, the frontend is intentionally
              kept fairly simple and dashboard-focused.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h3 className="mb-2 font-semibold">AWS deployments</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Deployed the app on AWS and focused on scalability, reliability,
              and infrastructure decisions that supported long-term growth.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h3 className="mb-2 font-semibold">CI/CD workflows</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Implemented automated deployment workflows to streamline releases
              and reduce manual operational overhead.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h3 className="mb-2 font-semibold">Third-party API integration</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Integrated Strava via JWT-authenticated requests and handled
              external API interactions in a robust, production-minded way.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
