type Skill = {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
};

type SkillsMatrixProps = {
  skills: Skill[];
};

export default function SkillsMatrix({ skills }: SkillsMatrixProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {skills.map((skill) => (
        <div key={skill.name} className="rounded-xl border border-gray-200 p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-medium">{skill.name}</span>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, index) => {
              const isFilled = index < skill.level;

              return (
                <div
                  key={`${skill.name}-${index}`}
                  className={`h-2 flex-1 rounded-full ${isFilled ? "bg-green-500" : "bg-gray-100"}`}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
