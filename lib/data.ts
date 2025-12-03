export type Language = "en" | "fr";

const commonInfo = {
  email: "aymane.asserrar@outlook.fr",
  linkedin: "https://linkedin.com/in/aymane-asserrar",
  github: "https://github.com/AymaneAsserrar",
};

const skillsList = {
  languages: [
    "Java",
    "Python",
    "PHP",
    "TypeScript",
    "JavaScript",
    "C/C++",
    "SQL",
    "Bash",
  ],
  frontend: [
    "React",
    "Next.js",
    "Vue.js",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Blade",
  ],
  backend: [
    "Laravel",
    "Flask",
    "Spring Boot",
    "Node.js",
    "REST APIs",
    "Microservices",
  ],
  dataCloud: [
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "GCP (BigQuery)",
    "Azure (IoT Hub)",
    "Redis",
  ],
  devopsTools: [
    "Docker",
    "Git/GitHub",
    "GitLab CI/CD",
    "Linux",
    "Postman",
    "Jira",
  ],
  aiOther: [
    "Machine Learning (LSTM)",
    "Unit Testing",
    "Agile/Scrum",
    "System Design",
    "Project Management",
  ],
};

export const content = {
  en: {
    personalInfo: {
      ...commonInfo,
      name: "Aymane Asserrar",
      profileSummary:
        "Future IT Engineer from Télécom Saint-Étienne, seeking my first Full Stack or Back-end Developer role. My experience in apprenticeships and internships at Groupe Casino has given me concrete skills in web development, cloud, and project management.",
    },
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      contactMe: "Contact Me",
      downloadCv: "Download CV",
    },
    about: {
      title: "About Me",
      description:
        "I am a passionate developer with a strong foundation in both front-end and back-end technologies. Currently pursuing my engineering degree at",
      school: "Télécom Saint-Étienne",
      descriptionEnd: ", I am eager to apply my skills in a challenging environment.",
      softSkillsTitle: "Soft Skills",
      softSkills: ["Rigor", "Curiosity", "Team Spirit", "Adaptability"],
      educationTitle: "Education",
      education: [
        {
          school: "Télécom Saint-Étienne",
          degree: "Engineering Degree",
        },
        {
          school: "ENSA Tanger",
          degree: "Double Degree Program",
        },
      ],
    },
    skills: {
      title: "My Technical Skills",
      categories: {
        languages: "Languages",
        frontend: "Frontend Development",
        backend: "Backend Development",
        dataCloud: "Data & Cloud",
        devopsTools: "DevOps & Tools",
        aiOther: "AI & Other Skills",
      },
      list: skillsList,
    },
    experience: {
      title: "Experience",
      list: [
        {
          company: "Groupe Casino (Easydis)",
          role: "Apprentice Developer & Project Manager",
          dates: "Sept 2025 - Present",
          description:
            "Project management, continuous improvement/maintenance of tools, process automation, and development of a new intranet.",
        },
        {
          company: "Groupe Casino (Easydis)",
          role: "PHP/Laravel Developer Intern",
          dates: "June 2025 - Aug 2025",
          description:
            "Migrated a legacy PHP tool to a modern Laravel application, focusing on improving maintainability, performance, and user experience.",
        },
        {
          company: "Perenco",
          role: "AI/ML Project",
          dates: "Mar 2025 - June 2025",
          description:
            "Designed an AI model (LSTM Autoencoder) for analyzing sensor stream data via Azure IoT Hub.",
        },
        {
          company: "AI Wolves",
          role: "Full Stack Developer Intern",
          dates: "July 2024 - Sept 2024",
          description:
            "Created a Flask web application to detect brand copyright violations using the Generative AI (Gemini API).",
        },
      ],
    },
    projects: {
      title: "My Projects",
      viewOnGithub: "View on GitHub",
        list: [
          {
            title: "NETWORKING AI: LLM, RAG and configuration validation",
            description: "The project objective was to build a Retrieval-Augmented Generation (RAG) Large Language Model (LLM) platform for configuring network components, addressing issues like extensive documentation, vendor differences, confusing errors, and LLM hallucinations[cite: 4, 16, 17, 18, 19, 23, 24, 288]. The platform uses documentation and verified commands to generate verified network configurations based on a user query[cite: 31, 32, 33]. The architecture includes three main teams: Team 1 for Data Engineering and Knowledge Base (PostgreSQL with pgVector), Team 2 for LLM Inference (RAG, Prompt Builder, Filtering, using Zephyr/Gemini), and Team 3 for Validation and Orchestration (Batfish Integration and Langchain orchestrator)[cite: 7, 10, 14, 119, 144, 173].",
            tech: [
                "LLM (Gemini/Zephyr)",
                "RAG (Retrieval-Augmented Generation)",
                "Batfish (Validation)",
                "Langchain (Orchestration)"
            ],
            github: "https://github.com/AymaneAsserrar/NetworkingAI"
        },
        {
          title: "MyComicApp",
          description:
            "Java desktop application for managing collections, with a recommendation engine.",
          tech: ["Java", "Swing", "JDBC", "SQLite", "REST API"],
          github: "https://github.com/AymaneAsserrar/MyComicApp",
        },
        {
          title: "MyChatApp",
          description: "Real-time chat application with private rooms.",
          tech: ["Vue.js", "WebSockets", "SQL"],
          github: "https://github.com/AymaneAsserrar/MyChatApp",
        },
        {
          title: "Admin Interface",
          description: "Real-time system monitoring dashboard.",
          tech: ["Python", "Flask", "Dash", "Docker"],
          github: "https://github.com/AymaneAsserrar/PrInterfaceAdmin-UI",
        },
        {
          title: "Slice Defender",
          description: "Interactive 3D game with projectile slicing mechanics.",
          tech: ["C++", "OpenGL", "Qt"],
          github: "https://github.com/AymaneAsserrar/SliceDefender3D",
        },
      ],
    },
    contact: {
      title: "Get In Touch",
      successTitle: "Message Sent!",
      successMessage:
        "Thanks for reaching out. I'll get back to you as soon as possible.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "your.email@example.com",
      messageLabel: "Message",
      messagePlaceholder: "How can I help you?",
      sendButton: "Send Message",
      sendingButton: "Sending...",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  fr: {
    personalInfo: {
      ...commonInfo,
      name: "Aymane Asserrar",
      profileSummary:
        "Futur Ingénieur IT de Télécom Saint-Étienne, à la recherche de mon premier poste de Développeur Full Stack ou Back-end. Mon expérience en alternance et stages chez Groupe Casino m'a permis d'acquérir des compétences concrètes en développement web, cloud et gestion de projet.",
    },
    nav: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact",
    },
    hero: {
      contactMe: "Me Contacter",
      downloadCv: "Télécharger CV",
    },
    about: {
      title: "À propos de moi",
      description:
        "Je suis un développeur passionné avec une solide base en technologies front-end et back-end. Actuellement en cursus d'ingénieur à",
      school: "Télécom Saint-Étienne",
      descriptionEnd: ", je suis impatient d'appliquer mes compétences dans un environnement stimulant.",
      softSkillsTitle: "Soft Skills",
      softSkills: ["Rigueur", "Curiosité", "Esprit d'équipe", "Adaptabilité"],
      educationTitle: "Formation",
      education: [
        {
          school: "Télécom Saint-Étienne",
          degree: "Diplôme d'Ingénieur",
        },
        {
          school: "ENSA Tanger",
          degree: "Programme Double Diplôme",
        },
      ],
    },
    skills: {
      title: "Mes Compétences Techniques",
      categories: {
        languages: "Langages",
        frontend: "Développement Frontend",
        backend: "Développement Backend",
        dataCloud: "Data & Cloud",
        devopsTools: "DevOps & Outils",
        aiOther: "IA & Autres",
      },
      list: skillsList,
    },
    experience: {
      title: "Expérience",
      list: [
        {
          company: "Easydis by Groupe Casino",
          role: "Apprenti Développeur & Chef de Projet",
          dates: "Sept 2025 - Présent",
          description:
            "Gestion de projet, amélioration continue/maintenance des outils, automatisation des processus et développement d'un nouvel intranet.",
        },
        {
          company: "Easydis by Groupe Casino",
          role: "Stagiaire Développeur PHP/Laravel",
          dates: "Juin 2025 - Août 2025",
          description:
            "Migration d'un outil PHP legacy vers une application Laravel moderne, axée sur l'amélioration de la maintenabilité, de la performance et de l'expérience utilisateur.",
        },
        {
          company: "Perenco",
          role: "Projet IA/ML",
          dates: "Mars 2025 - Juin 2025",
          description:
            "Conception d'un modèle IA (LSTM Autoencoder) pour l'analyse des flux de données de capteurs via Azure IoT Hub.",
        },
        {
          company: "AI Wolves",
          role: "Stagiaire Développeur Full Stack",
          dates: "Juil 2024 - Sept 2024",
          description:
            "Création d'une application web Flask pour détecter les violations de droits d'auteur de marque en utilisant l'IA Générative (API Gemini).",
        },
      ],
    },
    projects: {
      title: "Mes Projets",
      viewOnGithub: "Voir sur GitHub",
      list: [
        {
            title: "NETWORKING AI : LLM, RAG et validation de configuration [cite: 2, 4]",
            description: "L'objectif du projet était de construire une plateforme de Grand Modèle de Langage (LLM) avec Augmentation par Récupération (RAG) pour configurer des composants réseau[cite: 288]. Le système vise à résoudre les problèmes liés à la documentation abondante, à la diversité des composants/fournisseurs, aux erreurs syntaxiques confuses, et aux hallucinations des LLM standards[cite: 17, 18, 19, 23, 24]. Le système génère des commandes de configuration réseau vérifiées à partir d'une requête utilisateur[cite: 28, 33].",
            tech: [
                "LLM (Gemini/Zephyr) [cite: 141]",
                "RAG (Retrieval-Augmented Generation) [cite: 4, 132]",
                "Batfish (Validation) [cite: 14, 92, 166]",
                "Langchain (Orchestration) [cite: 170]"
            ],
            github: "https://github.com/AymaneAsserrar/NetworkingAI"
        },
        {
          title: "MyComicApp",
          description:
            "Application de bureau Java pour gérer des collections, avec un moteur de recommandation.",
          tech: ["Java", "Swing", "JDBC", "SQLite", "REST API"],
          github: "https://github.com/AymaneAsserrar/MyComicApp",
        },
        {
          title: "MyChatApp",
          description: "Application de chat en temps réel avec salons privés.",
          tech: ["Vue.js", "WebSockets", "SQL"],
          github: "https://github.com/AymaneAsserrar/MyChatApp",
        },
        
        {
          title: "Interface Admin",
          description: "Tableau de bord de surveillance système en temps réel.",
          tech: ["Python", "Flask", "Dash", "Docker"],
          github: "https://github.com/AymaneAsserrar/PrInterfaceAdmin-UI",
        },
        {
          title: "Slice Defender",
          description: "Jeu 3D interactif avec mécanique de découpe de projectiles.",
          tech: ["C++", "OpenGL", "Qt"],
          github: "https://github.com/AymaneAsserrar/SliceDefender3D",
        },
      ],
    },
    contact: {
      title: "Me Contacter",
      successTitle: "Message Envoyé !",
      successMessage:
        "Merci de m'avoir contacté. Je vous répondrai dès que possible.",
      nameLabel: "Nom",
      namePlaceholder: "Votre nom",
      emailLabel: "Email",
      emailPlaceholder: "votre.email@exemple.com",
      messageLabel: "Message",
      messagePlaceholder: "Comment puis-je vous aider ?",
      sendButton: "Envoyer le Message",
      sendingButton: "Envoi...",
    },
    footer: {
      rights: "Tous droits réservés.",
    },
  },
};

// Keep these for backward compatibility if needed, but we should migrate away
export const personalInfo = content.en.personalInfo;
export const skills = content.en.skills.list;
export const experience = content.en.experience.list;
export const projects = content.en.projects.list;

