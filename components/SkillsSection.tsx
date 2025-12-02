import { skills } from "@/lib/data";

const categoryTitles: Record<string, string> = {
  languages: "Languages",
  frontend: "Frontend Development",
  backend: "Backend Development",
  dataCloud: "Data & Cloud",
  devopsTools: "DevOps & Tools",
  aiOther: "AI & Other Skills",
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          My Technical Skills
        </h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {Object.entries(skills).map(([category, items]) => (
            <div 
              key={category} 
              className="bg-card text-card-foreground rounded-xl border shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {categoryTitles[category] || category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md border px-3 py-1 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
