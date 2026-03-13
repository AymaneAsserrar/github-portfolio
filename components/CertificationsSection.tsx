"use client";
import React from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCarousel } from "./useCarousel";
import { useIsMobile } from "./useIsMobile";
import { getTechIconUrl } from "@/lib/techIcons";

export interface Certification {
  title: string;
  organization: string;
  logo: string;
  credentialUrl?: string;
  issued?: string;
  expires?: string;
  credentialId?: string;
  skills?: string[];
}

interface CertificationsSectionProps {
  certifications: Certification[];
}


export default function CertificationsSection({ certifications }: CertificationsSectionProps) {
  return (
    <section id="certifications" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300"
        >
          Certifications
        </motion.h2>
        <div className="relative w-full">
          <Carousel certifications={certifications} />
        </div>
      </div>
    </section>
  );
}


function Carousel({ certifications }: { certifications: Certification[] }) {
  const {
    index,
    setIndex,
    next,
    prev,
    isPaused,
    setIsPaused,
  } = useCarousel(certifications.length, 2500);
  const isMobile = useIsMobile();

  // Show one card at a time on mobile, two on desktop
  const getIndices = () => {
    if (isMobile) {
      return [index];
    } else {
      const first = index;
      const second = (index + 1) % certifications.length;
      return [first, second];
    }
  };
  const indices = getIndices();

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div
      className="relative flex flex-col items-center group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex items-center w-full justify-between mb-4">
        <button
          aria-label="Previous"
          onClick={prev}
          className="p-2 rounded-full border border-blue-200 dark:border-blue-700 bg-background hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <div className="flex gap-2">
          {certifications.map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${i === index ? "bg-blue-600 dark:bg-blue-400 scale-125" : "bg-blue-200 dark:bg-blue-700"}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          aria-label="Next"
          onClick={next}
          className="p-2 rounded-full border border-blue-200 dark:border-blue-700 bg-background hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
      <div className="relative w-full min-h-[180px] flex items-center justify-center overflow-visible px-2 md:px-0">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={index}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="absolute w-full flex gap-8 justify-center px-0 md:px-8"
            drag={isMobile ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                next();
              } else if (swipe > swipeConfidenceThreshold) {
                prev();
              }
            }}
          >
            {indices.map((i) => {
              const cert = certifications[i];
              return (
                <div
                  key={i}
                  className="group flex items-center rounded-lg border border-blue-600 dark:border-blue-400 bg-card text-card-foreground shadow-[0_4px_20px_rgba(37,99,235,0.15)] dark:shadow-[0_4px_20px_rgba(96,165,250,0.15)] transition-all hover:shadow-[0_8px_30px_rgba(37,99,235,0.25)] dark:hover:shadow-[0_8px_30px_rgba(96,165,250,0.25)] hover:border-blue-300 dark:hover:border-blue-700 p-6 gap-4 mx-auto max-w-3xl w-full"
                >
                  <img
                    src={cert.logo}
                    alt={cert.organization + ' logo'}
                    className="w-16 h-16 object-contain rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors whitespace-normal">{cert.title}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-300 whitespace-normal">{cert.organization}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {cert.issued && <span>Issued {cert.issued}</span>}
                      {cert.expires && <span> · Expires {cert.expires}</span>}
                    </div>
                    {cert.credentialId && (
                      <div className="text-xs text-muted-foreground">Credential ID {cert.credentialId}</div>
                    )}
                    {cert.skills && cert.skills.length > 0 && (
                      <div className="text-xs text-blue-600 dark:text-blue-400 mt-1 flex flex-wrap gap-1 items-center">
                        {cert.skills.map((skill) => {
                          const icon = getTechIconUrl(skill);
                          return (
                            <span key={skill} className="bg-blue-100 dark:bg-blue-900/40 rounded px-2 py-0.5 flex items-center gap-1">
                              {icon && (
                                <img src={icon} alt={skill + ' logo'} className="w-4 h-4 inline-block align-middle" />
                              )}
                              {skill}
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      title="View credential"
                    >
                      <ExternalLink className="h-6 w-6" />
                      <span className="sr-only">View credential</span>
                    </a>
                  )}
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
