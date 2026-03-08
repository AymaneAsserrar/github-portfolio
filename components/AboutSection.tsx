"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-secondary/10 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300"
        >
          {t.about.title}
        </motion.h2>
        <div className="max-w-3xl mx-auto space-y-8 text-lg text-muted-foreground">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t.about.description}
            <span className="font-semibold text-foreground"> {t.about.school}</span>
            {t.about.descriptionEnd}
          </motion.p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-background p-6 rounded-lg border border-blue-600 dark:border-blue-400 shadow-[0_4px_20px_rgba(37,99,235,0.2)] dark:shadow-[0_4px_20px_rgba(96,165,250,0.2)]"
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground">{t.about.softSkillsTitle}</h3>
              <ul className="list-disc list-inside space-y-2">
                {t.about.softSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-background p-6 rounded-lg border border-blue-600 dark:border-blue-400 shadow-[0_4px_20px_rgba(37,99,235,0.2)] dark:shadow-[0_4px_20px_rgba(96,165,250,0.2)]"
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground">{t.about.educationTitle}</h3>
              <ul className="space-y-4">
                {t.about.education.map((edu, index) => (
                  <li key={index}>
                    <div className="font-medium text-foreground">{edu.school}</div>
                    <div className="text-sm">{edu.degree}</div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
