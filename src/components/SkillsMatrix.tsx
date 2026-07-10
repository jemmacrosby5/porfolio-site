export default function SkillsMatrix() {
  const experiencedSkills = [
    "React",
    "Vue",
    "TypeScript",
    "Astro",
    "Cypress",
    "Vitest",
    "CI/CD (GitHub Actions)",
  ];

  const growingSkills = [
    "Next",
    "Node",
    "AWS (S3, Lambda, Kinesis, RDS, EC2)",
    "PostgreSQL",
    "Docker",
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="mt-5 w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
          Experienced in:
        </p>
        <div>
          {experiencedSkills.map((skill) => (
            <p key={skill} className="mb-2 font-mono">
              {skill}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-5 w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
          Familiar with and currently expanding my knowledge in:
        </p>
        {growingSkills.map((skill) => (
          <p key={skill} className="mb-2 font-mono">
            {skill}
          </p>
        ))}
      </div>
    </div>
  );
}
