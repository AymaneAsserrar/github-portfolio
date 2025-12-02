import { experience } from "@/lib/data";
import { Briefcase } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-secondary/10 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          Professional Experience
        </h2>

        <div className="max-w-3xl mx-auto relative border-l border-gray-200 dark:border-gray-700 ml-4 md:ml-auto space-y-12">
          {experience.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              {/* Timeline Dot */}
              <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-foreground">{item.role}</h3>
                <span className="text-sm text-muted-foreground font-medium bg-background px-2 py-1 rounded border mt-1 sm:mt-0 w-fit">
                  {item.dates}
                </span>
              </div>
              
              <div className="flex items-center gap-2 mb-4 text-primary font-medium">
                <Briefcase className="h-4 w-4" />
                <span>{item.company}</span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
