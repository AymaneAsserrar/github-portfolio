import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github: string;
  slug: string;
  viewOnGithubLabel?: string;
  viewDetailsLabel?: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  slug,
  viewOnGithubLabel = "View on GitHub",
  viewDetailsLabel = "View Details",
}: ProjectCardProps) {
  return (
    <div className="group flex flex-col justify-between rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md h-full">
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-2xl font-semibold leading-none tracking-tight group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-2">
            <Link
              href={`/projects/${slug}`}
              className="text-muted-foreground hover:text-primary transition-colors"
              title={viewDetailsLabel}
            >
              <ExternalLink className="h-5 w-5" />
              <span className="sr-only">{viewDetailsLabel}</span>
            </Link>
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">{viewOnGithubLabel}</span>
            </Link>
          </div>
        </div>
        <p className="text-foreground">{description}</p>
      </div>

      <div className="p-6 pt-0 mt-auto">
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
