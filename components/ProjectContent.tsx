"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { content, Project } from "@/lib/data";
import { Github, ExternalLink, Play, ArrowLeft, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// Get basePath for production (GitHub Pages)
const basePath =
  process.env.NODE_ENV === "production" ? "/github-portfolio" : "";

const getImagePath = (src: string) => {
  if (src.startsWith("http")) return src;
  return `${basePath}${src}`;
};

interface ProjectContentProps {
  slug: string;
}

export default function ProjectContent({ slug }: ProjectContentProps) {
  const { language } = useLanguage();
  const t = content[language];
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  // Close modal on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const project = t.projects.list.find((p) => p.slug === slug) as
    | Project
    | undefined;

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Project Title */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {project.title}
          </h1>
          <div className="flex justify-center gap-3">
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-blue-600 dark:border-blue-400 bg-card hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 dark:hover:border-blue-700 transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </Link>
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                <span>{t.projectPage?.viewLive || "View Live"}</span>
              </Link>
            )}
          </div>
        </div>

        {/* Overview Section */}
        <section id="overview" className="group max-w-4xl mx-auto mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
            <span className="w-8 h-8 rounded-full bg-blue-600/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400 flex items-center justify-center text-sm font-bold">
              1
            </span>
            {t.projectPage?.overview || "Overview"}
          </h2>
          <div className="p-6 rounded-lg border border-blue-600 dark:border-blue-400 bg-card shadow-[0_4px_20px_rgba(37,99,235,0.15)] dark:shadow-[0_4px_20px_rgba(96,165,250,0.15)] transition-all hover:shadow-[0_8px_30px_rgba(37,99,235,0.25)] dark:hover:shadow-[0_8px_30px_rgba(96,165,250,0.25)] hover:border-blue-300 dark:hover:border-blue-700">
            <p className="text-lg text-foreground leading-relaxed">
              {project.description}
            </p>
            {project.fullDescription && (
              <p className="mt-4 text-muted-foreground leading-relaxed whitespace-pre-line">
                {project.fullDescription}
              </p>
            )}
          </div>
        </section>

        {/* Demo Section */}
        <section id="demo" className="group max-w-4xl mx-auto mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
            <span className="w-8 h-8 rounded-full bg-blue-600/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400 flex items-center justify-center text-sm font-bold">
              2
            </span>
            {t.projectPage?.demo || "Demo"}
          </h2>
          <div className="p-6 rounded-lg border border-blue-600 dark:border-blue-400 bg-card shadow-[0_4px_20px_rgba(37,99,235,0.15)] dark:shadow-[0_4px_20px_rgba(96,165,250,0.15)] transition-all hover:shadow-[0_8px_30px_rgba(37,99,235,0.25)] dark:hover:shadow-[0_8px_30px_rgba(96,165,250,0.25)] hover:border-blue-300 dark:hover:border-blue-700">
            {project.demoUrl ? (
              <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                <iframe
                  src={project.demoUrl}
                  className="w-full h-full"
                  allowFullScreen
                  title={`${project.title} demo`}
                />
              </div>
            ) : project.liveUrl ? (
              <div className="text-center py-12">
                <Play className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground mb-4">
                  {t.projectPage?.tryLiveDemo || "Try the live demo"}
                </p>
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>{t.projectPage?.viewLive || "View Live"}</span>
                </Link>
              </div>
            ) : (
              <div className="text-center py-12">
                <Play className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
                <p className="text-muted-foreground">
                  {t.projectPage?.noDemo || "No demo available yet"}
                </p>
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline"
                >
                  <Github className="h-4 w-4" />
                  <span>
                    {t.projectPage?.checkGithub ||
                      "Check the GitHub repository"}
                  </span>
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="group/section max-w-4xl mx-auto mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 transition-colors group-hover/section:text-blue-600 dark:group-hover/section:text-blue-400">
            <span className="w-8 h-8 rounded-full bg-blue-600/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400 flex items-center justify-center text-sm font-bold">
              3
            </span>
            {t.projectPage?.gallery || "Gallery"}
          </h2>
          {project.gallery && project.gallery.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-video rounded-lg overflow-hidden border bg-muted group/card cursor-pointer"
                  onClick={() =>
                    setSelectedImage({
                      src: getImagePath(image.src),
                      alt:
                        image.alt || `${project.title} screenshot ${index + 1}`,
                    })
                  }
                >
                  <Image
                    src={getImagePath(image.src)}
                    alt={
                      image.alt || `${project.title} screenshot ${index + 1}`
                    }
                    fill
                    className="object-cover transition-transform group-hover/card:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover/card:opacity-100 transition-opacity text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                      {t.projectPage?.clickToExpand || "Click to expand"}
                    </span>
                  </div>
                  {image.caption && (
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                      <p className="text-white text-sm">{image.caption}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 rounded-lg border border-blue-600 dark:border-blue-400 bg-card shadow-[0_4px_20px_rgba(37,99,235,0.15)] dark:shadow-[0_4px_20px_rgba(96,165,250,0.15)] transition-all hover:shadow-[0_8px_30px_rgba(37,99,235,0.25)] dark:hover:shadow-[0_8px_30px_rgba(96,165,250,0.25)] hover:border-blue-300 dark:hover:border-blue-700 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-muted flex items-center justify-center">
                <svg
                  className="h-8 w-8 text-muted-foreground/50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="text-muted-foreground">
                {t.projectPage?.noGallery || "No screenshots available yet"}
              </p>
            </div>
          )}
        </section>

        {/* Tech Section */}
        <section id="tech" className="group max-w-4xl mx-auto mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
            <span className="w-8 h-8 rounded-full bg-blue-600/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400 flex items-center justify-center text-sm font-bold">
              4
            </span>
            {t.projectPage?.tech || "Tech"}
          </h2>
          <div className="p-6 rounded-lg border border-blue-600 dark:border-blue-400 bg-card shadow-[0_4px_20px_rgba(37,99,235,0.15)] dark:shadow-[0_4px_20px_rgba(96,165,250,0.15)] transition-all hover:shadow-[0_8px_30px_rgba(37,99,235,0.25)] dark:hover:shadow-[0_8px_30px_rgba(96,165,250,0.25)] hover:border-blue-300 dark:hover:border-blue-700">
            <div className="flex flex-wrap gap-3">
              {project.tech.map((techItem) => (
                <span
                  key={techItem}
                  className="inline-flex items-center rounded-lg border px-4 py-2 text-sm font-semibold bg-blue-600/10 text-blue-600 hover:bg-blue-600/20 dark:bg-blue-400/10 dark:text-blue-400 dark:hover:bg-blue-400/20 transition-colors"
                >
                  {techItem}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section id="details" className="group max-w-4xl mx-auto mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
            <span className="w-8 h-8 rounded-full bg-blue-600/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400 flex items-center justify-center text-sm font-bold">
              5
            </span>
            {t.projectPage?.details || "Details"}
          </h2>
          <div className="p-6 rounded-lg border border-blue-600 dark:border-blue-400 bg-card shadow-[0_4px_20px_rgba(37,99,235,0.15)] dark:shadow-[0_4px_20px_rgba(96,165,250,0.15)] transition-all hover:shadow-[0_8px_30px_rgba(37,99,235,0.25)] dark:hover:shadow-[0_8px_30px_rgba(96,165,250,0.25)] hover:border-blue-300 dark:hover:border-blue-700 space-y-6">
            {/* Features */}
            {project.features && project.features.length > 0 ? (
              <div>
                <h3 className="text-lg font-medium mb-4">
                  {t.projectPage?.keyFeatures || "Key Features"}
                </h3>
                <ul className="grid gap-3">
                  {project.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg bg-muted/50"
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400 flex items-center justify-center text-xs font-medium">
                        {index + 1}
                      </span>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">
                  {t.projectPage?.noDetails || "More details coming soon"}
                </p>
              </div>
            )}

            {/* Links */}
            <div className="pt-6 border-t">
              <h3 className="text-lg font-medium mb-4">
                {t.projectPage?.links || "Links"}
              </h3>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-blue-600 dark:border-blue-400 bg-muted/50 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 dark:hover:border-blue-700 transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub Repository</span>
                </Link>
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-blue-600 dark:border-blue-400 bg-muted/50 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 dark:hover:border-blue-700 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>{t.projectPage?.viewLive || "Live Demo"}</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Back to Projects */}
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-blue-600 dark:border-blue-400 bg-card hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 dark:hover:border-blue-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{t.projectPage?.backToProjects || "Back to Projects"}</span>
          </Link>
        </div>
      </div>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-blue-400 transition-colors z-10"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          <div
            className="relative max-w-5xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
            {t.projectPage?.pressEscOrClick ||
              "Press ESC or click anywhere to close"}
          </p>
        </div>
      )}
    </div>
  );
}
