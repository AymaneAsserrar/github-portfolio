"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function SkillsSection() {
  const { t } = useLanguage();
  return (
    <section id="skills" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300"
        >
          {t.skills.title}
        </motion.h2>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
        >
          {Object.entries(t.skills.list).map(([category, items]) => (
            <motion.div 
              key={category} 
              variants={item}
              className="group bg-card text-card-foreground rounded-lg border border-blue-600 dark:border-blue-400 shadow-[0_4px_20px_rgba(37,99,235,0.15)] dark:shadow-[0_4px_20px_rgba(96,165,250,0.15)] p-6 transition-all hover:shadow-[0_8px_30px_rgba(37,99,235,0.25)] dark:hover:shadow-[0_8px_30px_rgba(96,165,250,0.25)] hover:border-blue-300 dark:hover:border-blue-700"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {t.skills.categories[category as keyof typeof t.skills.categories]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md border px-3 py-1 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
