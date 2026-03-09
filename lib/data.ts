export type Language = "en" | "fr";

export interface GalleryImage {
  src: string;
  alt?: string;
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  fullDescription?: string;
  liveUrl?: string;
  demoUrl?: string;
  features?: string[];
  gallery?: GalleryImage[];
}

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
    "Angular",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Blade",
  ],
  backend: [
    "Laravel",
    "Symfony",
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
      descriptionEnd:
        ", I am eager to apply my skills in a challenging environment.",
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
          role: "Apprentice PHP/Laravel Developer & Project Manager",
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
    projectPage: {
      backToProjects: "Back to Projects",
      viewLive: "View Live",
      aboutProject: "About this Project",
      keyFeatures: "Key Features",
      gallery: "Gallery",
      viewDetails: "Details",
      overview: "Overview",
      demo: "Demo",
      tech: "Tech",
      details: "Details",
      links: "Links",
      tryLiveDemo: "Try the live demo",
      noDemo: "No demo available yet",
      checkGithub: "Check the GitHub repository",
      noGallery: "No screenshots available yet",
      noDetails: "More details coming soon",
      clickToExpand: "Click to expand",
      pressEscOrClick: "Press ESC or click anywhere to close",
    },
    projects: {
      title: "My Projects",
      viewOnGithub: "View on GitHub",
      viewDetails: "Details",
      list: [
        {
          slug: "networking-ai",
          title: "Networking AI (International Project)",
          description:
            "Complete end-to-end Augmented Generation by Recovery (RAG) solution to reliably generate and validate network configurations, developed by a multicultural team of 10 people.",
          tech: [
            "LLM",
            "RAG",
            "Batfish",
            "Langchain",
            "Python",
            "Agile",
            "Jira",
          ],
          github: "https://github.com/AymaneAsserrar/NetworkingAI",
          fullDescription: `The project is a complete end-to-end Retrieval-Augmented Generation (RAG) solution for reliably generating and validating network configurations.

Key Project Points

• Sub-team Approach: We worked with a structured approach, divided into three dedicated teams.
  - Team 1: Data Engineering and Knowledge Base.
  - Team 2: LLM Inference (RAG, Prompt Builder, Filtering).
  - Team 3: Batfish Validation and Orchestration Agent.

• Validation is Crucial: Our system uses Batfish integration to validate syntax and command functionality. The complete improvement cycle is: Search → Generate → Validate → Rewrite

• Performance Results:
  - Gemini achieved an Overall Pipeline Success Rate of 100% with RAG disabled and 83% with RAG enabled.
  - Gemini showed a lower (better) Semantic Distance of 0.155 (RAG ON) compared to 0.275 for Zephyr.
  - Gemini was approximately 3.5 times faster than the fine-tuned Zephyr model (82 seconds vs ~300 seconds).

• Project Management: We used Agile methodology with 2 Sprints, regular meetings and work management on Jira and GitHub.

It was a fantastic experience working in a team of 10, both on-site and remotely, in a multicultural environment. We learned the importance of clarifying scope and success criteria upfront to reduce rework.

Looking ahead, our next steps include adding synthetic and adversarial tests for agent and validator robustness, and implementing CI/CD for services and models.`,
          features: [
            "Sub-team approach with 3 dedicated teams: Data Engineering, LLM Inference, and Batfish Validation",
            "Batfish integration for syntax and command functionality validation",
            "100% Pipeline Success Rate with Gemini (RAG disabled)",
            "0.155 Semantic Distance - better than Zephyr's 0.275",
            "3.5x faster than fine-tuned Zephyr model",
            "Agile methodology with 2 Sprints and Jira/GitHub management",
            "Multicultural team of 10 working on-site and remotely",
          ],
          gallery: [
            { src: "/projects/networking-ai/1.jpg", alt: "Screenshot 1" },
            { src: "/projects/networking-ai/2.jpg", alt: "Screenshot 2" },
            { src: "/projects/networking-ai/3.jpg", alt: "Screenshot 3" },
          ],
        },
        {
          slug: "my-comic-app",
          title: "MyComicApp",
          description:
            "Java desktop application for managing collections, with a recommendation engine.",
          tech: ["Java", "Swing", "JDBC", "SQLite", "REST API"],
          github: "https://github.com/AymaneAsserrar/MyComicApp",
          fullDescription: `The comic application is designed for comic book fans to search, view, and manage their comics. Users can even receive recommendations based on their personal library.

The application, built in Java, uses Swing for its user interface and FlatLaf for a modern look. It also includes a database for table creation and management.

**Note:** There is an admin email that is created automatically to test:
- Email: admin@admin.com
- Password: admin`,
          features: [
            "Search for comics by title and view information about the title (authors, characters, etc.)",
            "Search for characters, view details about them, and see the list of titles they appear in",
            "Get general recommendations for comics",
            "Create a personal account",
            "Manage a personal comic library (comics I own, am currently reading, and have finished reading)",
            "Get personalized reading recommendations based on your own library",
          ],
          gallery: [
            {
              src: "/projects/my-comic-app/1.png",
              alt: "Main Interface - The application's main interface with navigation and recommendations",
            },
            {
              src: "/projects/my-comic-app/2.png",
              alt: "Comic Details - Detailed view of comic information including description, characters, and publication details",
            },
            {
              src: "/projects/my-comic-app/3.png",
              alt: "Personal Library - Personal library management with reading status tracking",
            },
            {
              src: "/projects/my-comic-app/4.png",
              alt: "Login Panel - Login panel with sign-up options and forget password options",
            },
          ],
        },
        {
          slug: "my-chat-app",
          title: "MyChatApp",
          description: "Real-time chat application with private rooms.",
          tech: ["Vue.js", "WebSockets", "SQL"],
          github: "https://github.com/AymaneAsserrar/MyChatApp",
          // fullDescription: "",
          // features: [],
          // gallery: [],
        },
        {
          slug: "admin-interface",
          title: "Admin Interface",
          description: "Real-time system monitoring dashboard.",
          tech: ["Python", "Flask", "Dash", "Docker"],
          github: "https://github.com/AymaneAsserrar/PrInterfaceAdmin-UI",
          // fullDescription: "",
          // features: [],
          // gallery: [],
        },
        {
          slug: "slice-defender",
          title: "Slice Defender",
          description: "Interactive 3D game with projectile slicing mechanics.",
          tech: ["C++", "OpenGL", "Qt"],
          github: "https://github.com/AymaneAsserrar/SliceDefender3D",
          // fullDescription: "",
          // features: [],
          // gallery: [],
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
      descriptionEnd:
        ", je suis impatient d'appliquer mes compétences dans un environnement stimulant.",
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
          role: "Apprenti Développeur PHP/Laravel & Chef de Projet",
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
    projectPage: {
      backToProjects: "Retour aux Projets",
      viewLive: "Voir en Ligne",
      aboutProject: "À propos de ce Projet",
      keyFeatures: "Fonctionnalités Clés",
      gallery: "Galerie",
      viewDetails: "Détails",
      overview: "Aperçu",
      demo: "Démo",
      tech: "Technologies",
      details: "Détails",
      links: "Liens",
      tryLiveDemo: "Essayer la démo en ligne",
      noDemo: "Pas de démo disponible pour le moment",
      checkGithub: "Voir le dépôt GitHub",
      noGallery: "Pas de captures d'écran disponibles",
      noDetails: "Plus de détails à venir",
      clickToExpand: "Cliquez pour agrandir",
      pressEscOrClick: "Appuyez sur Échap ou cliquez n'importe où pour fermer",
    },
    projects: {
      title: "Mes Projets",
      viewOnGithub: "Voir sur GitHub",
      viewDetails: "Détails",
      list: [
        {
          slug: "networking-ai",
          title: "Networking AI (Projet International)",
          description:
            "Solution complète de Génération Augmentée par la Récupération (RAG) de bout en bout pour générer et valider de manière fiable les configurations réseau, développée par une équipe multiculturelle de 10 personnes.",
          tech: [
            "LLM",
            "RAG",
            "Batfish",
            "Langchain",
            "Python",
            "Agile",
            "Jira",
          ],
          github: "https://github.com/AymaneAsserrar/NetworkingAI",
          fullDescription: `Le projet est une solution complète de Génération Augmentée par la Récupération (RAG) de bout en bout pour générer et valider de manière fiable les configurations réseau.

Points Clés du Projet

• Approche en Sous-équipes : Nous avons travaillé avec une approche structurée, répartie en trois équipes dédiées.
  - Équipe 1 : Ingénierie des Données et Base de Connaissances.
  - Équipe 2 : Inférence LLM (RAG, Prompt Builder, Filtrage).
  - Équipe 3 : Validation Batfish et Agent d'Orchestration.

• La Validation est Cruciale : Notre système utilise l'intégration Batfish pour valider la syntaxe et la fonctionnalité des commandes. Le cycle complet d'amélioration est : Recherche → Génération → Validation → Réécriture

• Résultats de Performance :
  - Gemini a atteint un Taux de Réussite Global du Pipeline de 100% avec RAG désactivé et 83% avec RAG activé.
  - Gemini a montré une Distance Sémantique inférieure (meilleure) de 0.155 (RAG ON) comparé à 0.275 pour Zephyr.
  - Gemini était environ 3,5 fois plus rapide que le modèle Zephyr affiné (82 secondes contre ~300 secondes).

• Gestion de Projet : Nous avons utilisé la méthodologie Agile avec 2 Sprints, des réunions régulières et la gestion du travail sur Jira et GitHub.

Ce fut une expérience fantastique de travailler en équipe de 10, à la fois sur site et à distance, dans un environnement multiculturel. Nous avons retenu l'importance de clarifier la portée et les critères de succès en amont pour réduire la reprise du travail.

Pour l'avenir, nos prochaines étapes incluent l'ajout de tests synthétiques et adversariaux pour la robustesse de l'agent et du validateur, et l'implémentation de CI/CD pour les services et les modèles.`,
          features: [
            "Approche en sous-équipes avec 3 équipes dédiées : Ingénierie des Données, Inférence LLM, et Validation Batfish",
            "Intégration Batfish pour la validation de la syntaxe et de la fonctionnalité des commandes",
            "Taux de Réussite du Pipeline de 100% avec Gemini (RAG désactivé)",
            "Distance Sémantique de 0.155 - meilleure que les 0.275 de Zephyr",
            "3,5x plus rapide que le modèle Zephyr affiné",
            "Méthodologie Agile avec 2 Sprints et gestion sur Jira/GitHub",
            "Équipe multiculturelle de 10 personnes travaillant sur site et à distance",
          ],
          gallery: [
            { src: "/projects/networking-ai/1.jpg", alt: "Screenshot 1" },
            { src: "/projects/networking-ai/2.jpg", alt: "Screenshot 2" },
            { src: "/projects/networking-ai/3.jpg", alt: "Screenshot 3" },
          ],
        },
        {
          slug: "my-comic-app",
          title: "MyComicApp",
          description:
            "Application de bureau Java pour gérer des collections, avec un moteur de recommandation.",
          tech: ["Java", "Swing", "JDBC", "SQLite", "REST API"],
          github: "https://github.com/AymaneAsserrar/MyComicApp",
          fullDescription: `L'application de comics est conçue pour les fans de bandes dessinées afin de rechercher, consulter et gérer leurs comics. Les utilisateurs peuvent même recevoir des recommandations basées sur leur bibliothèque personnelle.

L'application, développée en Java, utilise Swing pour son interface utilisateur et FlatLaf pour un look moderne. Elle inclut également une base de données pour la création et la gestion des tables.

**Note:** Un email admin est créé automatiquement pour tester :
- Email : admin@admin.com
- Mot de passe : admin`,
          features: [
            "Rechercher des comics par titre et consulter les informations (auteurs, personnages, etc.)",
            "Rechercher des personnages, voir leurs détails et la liste des titres dans lesquels ils apparaissent",
            "Obtenir des recommandations générales de comics",
            "Créer un compte personnel",
            "Gérer une bibliothèque personnelle de comics (comics possédés, en cours de lecture, et terminés)",
            "Obtenir des recommandations de lecture personnalisées basées sur votre bibliothèque",
          ],
          gallery: [
            {
              src: "/projects/my-comic-app/1.png",
              alt: "Interface principale - L'interface principale de l'application avec navigation et recommandations",
            },
            {
              src: "/projects/my-comic-app/2.png",
              alt: "Détails du comic - Vue détaillée des informations du comic incluant description, personnages et détails de publication",
            },
            {
              src: "/projects/my-comic-app/3.png",
              alt: "Bibliothèque personnelle - Gestion de la bibliothèque personnelle avec suivi du statut de lecture",
            },
            {
              src: "/projects/my-comic-app/4.png",
              alt: "Panneau de connexion - Panneau de connexion avec options d'inscription et mot de passe oublié",
            },
          ],
        },
        {
          slug: "my-chat-app",
          title: "MyChatApp",
          description: "Application de chat en temps réel avec salons privés.",
          tech: ["Vue.js", "WebSockets", "SQL"],
          github: "https://github.com/AymaneAsserrar/MyChatApp",
          // fullDescription: "",
          // features: [],
          // gallery: [],
        },
        {
          slug: "admin-interface",
          title: "Interface Admin",
          description: "Tableau de bord de surveillance système en temps réel.",
          tech: ["Python", "Flask", "Dash", "Docker"],
          github: "https://github.com/AymaneAsserrar/PrInterfaceAdmin-UI",
          // fullDescription: "",
          // features: [],
          // gallery: [],
        },
        {
          slug: "slice-defender",
          title: "Slice Defender",
          description:
            "Jeu 3D interactif avec mécanique de découpe de projectiles.",
          tech: ["C++", "OpenGL", "Qt"],
          github: "https://github.com/AymaneAsserrar/SliceDefender3D",
          // fullDescription: "",
          // features: [],
          // gallery: [],
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

// Certifications data for CertificationsSection
export interface CertificationData {
  title: string;
  organization: string;
  logo: string;
  credentialUrl?: string;
  issued?: string;
  expires?: string;
  credentialId?: string;
  skills?: string[];
}

export const certifications: CertificationData[] = [
  {
    title: "Sensibilisation à la cybersécurité",
    organization: "Groupe Casino",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQEX_TIBsem8Uw/company-logo_100_100/company-logo_100_100/0/1736952138852/groupe_casino_logo?e=1774483200&v=beta&t=Y7XLgPEDl1vWNEW_M5EIGfBWySVeqS9lIxFZ-WiO4Eo",
    credentialUrl: "https://mycampus-casino.360learning.com/api/certification/9565711184551404/file.pdf",
    issued: "Feb 2026",
    credentialId: "9565711184551404",
  },
  {
    title: "MOOC",
    organization: "ANSSI - Agence nationale de la sécurité des systèmes d'information",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQHIVo7ZFcWBsw/company-logo_100_100/company-logo_100_100/0/1631314234060?e=1774483200&v=beta&t=N0lFXAiPvDfD92pNcAUXPAJmZZ8ZIEyiYL2DUks1yjQ",
    credentialUrl: "https://www.linkedin.com/in/aymane-asserrar/details/certifications/1771036408472/single-media-viewer?type=DOCUMENT&profileId=ACoAACbgvJ4B5DPKHT_8gLd4AruseNB7AagiuzE&locale=en_US&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BmEH4aN6IQ4O8rou7sh%2Futw%3D%3D",
    issued: "Feb 2026",
  },
  {
    title: "Introduction to SQL Using Google BigQuery",
    organization: "LinkedIn",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQHaVYd13rRz3A/company-logo_100_100/company-logo_100_100/0/1638831590218/linkedin_logo?e=1774483200&v=beta&t=Rxz3WQoYd6hgn7CRQ_uIFOizEERqC2z4kccfR57TmqI",
    credentialUrl: "https://www.linkedin.com/learning/certificates/4c6ce834a466c638c5a7cd4e0c59fc2cd6ab865b7b346cc2255a4d4c0c447352?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BmEH4aN6IQ4O8rou7sh%2Futw%3D%3D",
    issued: "Dec 2025",
    skills: ["Google BigQuery"],
  },
  {
    title: "Mission RGPD",
    organization: "Groupe Casino",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQEX_TIBsem8Uw/company-logo_100_100/company-logo_100_100/0/1736952138852/groupe_casino_logo?e=1774483200&v=beta&t=Y7XLgPEDl1vWNEW_M5EIGfBWySVeqS9lIxFZ-WiO4Eo",
    credentialUrl: "https://mycampus-casino.360learning.com/api/certification/1908271131306477/file.pdf",
    issued: "Dec 2025",
    credentialId: "1908271131306477",
  },
  {
    title: "Procédure de recueil des signalements",
    organization: "Groupe Casino",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQEX_TIBsem8Uw/company-logo_100_100/company-logo_100_100/0/1736952138852/groupe_casino_logo?e=1774483200&v=beta&t=Y7XLgPEDl1vWNEW_M5EIGfBWySVeqS9lIxFZ-WiO4Eo",
    credentialUrl: "https://mycampus-casino.360learning.com/api/certification/1958906746092530/file.pdf",
    issued: "Dec 2025",
    expires: "Dec 2027",
    credentialId: "1958906746092530",
  },
  {
    title: "La lutte contre la corruption",
    organization: "Groupe Casino",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQEX_TIBsem8Uw/company-logo_100_100/company-logo_100_100/0/1736952138852/groupe_casino_logo?e=1774483200&v=beta&t=Y7XLgPEDl1vWNEW_M5EIGfBWySVeqS9lIxFZ-WiO4Eo",
    credentialUrl: "https://mycampus-casino.360learning.com/api/certification/8144861057310410/file.pdf",
    issued: "Dec 2025",
    credentialId: "8144861057310410",
  },
  {
    title: "Gestion des conflits d'intérêts",
    organization: "Groupe Casino",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQEX_TIBsem8Uw/company-logo_100_100/company-logo_100_100/0/1736952138852/groupe_casino_logo?e=1774483200&v=beta&t=Y7XLgPEDl1vWNEW_M5EIGfBWySVeqS9lIxFZ-WiO4Eo",
    credentialUrl: "https://mycampus-casino.360learning.com/api/certification/1798525946566709/file.pdf",
    issued: "Dec 2025",
    credentialId: "1798525946566709",
  },
  {
    title: "ETS TOEIC",
    organization: "TOEIC Program",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQHnBDu3L_2ubA/company-logo_100_100/company-logo_100_100/0/1719257438779/thetoeicprogram_logo?e=1774483200&v=beta&t=dM8OnEvsQkOz4Vi1lDkbL4FkRiWOYTZCDs8s_raLjuQ",
    issued: "Dec 2024",
    expires: "Dec 2026",
    skills: ["English"],
    credentialUrl: "#",
  },
  {
    title: "Advanced PHP: Debugging Techniques",
    organization: "LinkedIn",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQHaVYd13rRz3A/company-logo_100_100/company-logo_100_100/0/1638831590218/linkedin_logo?e=1774483200&v=beta&t=Rxz3WQoYd6hgn7CRQ_uIFOizEERqC2z4kccfR57TmqI",
    credentialUrl: "https://www.linkedin.com/learning/certificates/ac28fd379ebf20b3d10995aa803e7f4e46c126f36ae24443aa9b179d23d335f8?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BmEH4aN6IQ4O8rou7sh%2Futw%3D%3D",
    issued: "Nov 2025",
    skills: ["PHP"],
  },
  {
    title: "Advanced Laravel",
    organization: "LinkedIn",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQHaVYd13rRz3A/company-logo_100_100/company-logo_100_100/0/1638831590218/linkedin_logo?e=1774483200&v=beta&t=Rxz3WQoYd6hgn7CRQ_uIFOizEERqC2z4kccfR57TmqI",
    credentialUrl: "https://www.linkedin.com/learning/certificates/3e512dfb9c9ee0e396f2f69956e0efe571b2d9cf504d9effa9fc9d0fb0e51109?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BmEH4aN6IQ4O8rou7sh%2Futw%3D%3D",
    issued: "Nov 2025",
    skills: ["Laravel"],
  },
];
