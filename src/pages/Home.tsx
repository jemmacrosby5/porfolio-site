import ProjectCard from "@components/ProjectCard";
import SkillsMatrix from "@components/SkillsMatrix";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-start">
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
      <section className="my-5 w-full">
        <div className="flex items-center gap-4 border-b border-gray-200 w-full pb-4 mb-4">
          <p className="font-mono">01</p>
          <h2 className="max-w-3xl text-2xl font-semibold md:text-xl text-pretty leading-tight tracking-tight">
            Projects
          </h2>
        </div>

        <div className="flex w-full gap-4 md:flex-row flex-col">
          <ProjectCard project="crosbySnacks" />
          <ProjectCard project="stravaStats" />
        </div>
      </section>

      {/* About */}
      <section className="my-5 w-full">
        <div className="flex items-center my-5 gap-4 border-b border-gray-200 w-full pb-4 mb-4">
          <p className="font-mono">02</p>
          <h2 className="max-w-3xl text-2xl font-semibold md:text-xl text-pretty leading-tight tracking-tight">
            Skills
          </h2>
        </div>

        <div className="mt-5 w-full">
          <SkillsMatrix />
        </div>
      </section>

      <section className="my-5 w-full">
        <div className="flex items-center my-5 gap-4 border-b border-gray-200 w-full pb-4 mb-4">
          <p className="font-mono">03</p>
          <h2 className="max-w-3xl text-2xl font-semibold md:text-xl text-pretty leading-tight tracking-tight">
            About
          </h2>
        </div>

        <div className="mt-5 w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="">
            Thanks for taking the time to have a look at my projects! <br />
            <br /> I have 3 years of experience working on ecommerce sites used
            by hundreds of thousands of users each day. Here my focus was on:
          </p>

          <ul className="mt-6 space-y-3">
            <li className="leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Performance</span>{" "}
              — ensuring fast load times and strong user experience for SEO and
              retention.
            </li>
            <li className="leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">
                Accessibility
              </span>
              — building interfaces that are keyboard navigable, screen-reader
              friendly, and inclusive by default.
            </li>
            <li className="leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">
                Good programming practice
              </span>{" "}
              — writing maintainable, well-structured code with strong attention
              to quality and long-term reliability.
            </li>
          </ul>

          <p className="mt-6">
            I also worked on developing different packages and tools used by
            other internal teams including:
          </p>
          <ul className="mt-2 space-y-3">
            <li className="leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Captcha</span> — a
              framework agnostic, captcha package built in TypeScript allowing
              teams to seamlessly switch between captcha providers on a per
              tenant basis.
            </li>
            <li className="leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">
                Astro Integration
              </span>
              — a custom middleware package for the Astro framework. Allows
              sites to be multi-tenanted. Here I was instrumental in adding the
              functionality to support sites using path based routing and domain
              based routing.
            </li>
            <li className="leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">
                Tracking Pipeline
              </span>{" "}
              — tracking users journeys throughout the site. Here I developed on
              an existing tracking pipeline (AWS Kinesis, Lambda and API
              Gateway) to capture the performance metrics of sites.
            </li>
          </ul>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            I’m currently looking for my next development role, I thoroughly
            enjoy varied, fast-paced work and love learning new languages, tools
            and frameworks.
            <br /> <br /> Please drop me a message on{" "}
            <a
              className="underline"
              href="https://www.linkedin.com/in/jemma-crosby/"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
