import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center px-4 py-20 bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="max-w-3xl space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 pb-2">
          {personalInfo.name}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-[700px] mx-auto">
          {personalInfo.profileSummary}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Contact Me
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <a
            href="/CV_AYMANE_ASSERRAR.pdf"
            download
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Download CV
            <Download className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
