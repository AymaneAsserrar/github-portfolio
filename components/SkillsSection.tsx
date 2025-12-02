import { skills } from "@/lib/data";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          My Technical Skills
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-card text-card-foreground rounded-lg border shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4 capitalize">
                {category.replace(/([A-Z])/g, " $1").trim()}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
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
