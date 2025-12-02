import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row mx-auto px-4 md:px-6">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
