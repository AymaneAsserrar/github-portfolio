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
          slug: "aymans-bike-shop",
          title: "Ayman's Bike Shop",
          description:
            "A modern, responsive Angular 15 e-commerce app for browsing and purchasing bikes and accessories.",
          tech: [
            "Angular",
            "TypeScript",
            "CSS3",
            "RxJS",
            "JSON",
          ],
          github: "https://github.com/AymaneAsserrar/aymans-bike-shop",
          fullDescription: `A modern, responsive e-commerce application for browsing and purchasing bikes and accessories. Built with Angular 15, this application demonstrates a modular architecture with clear separation of concerns.\n\nKey Features:\n- Interactive Catalog: Browse a comprehensive collection of bikes and accessories.\n- Shopping Cart Management: Add items to cart, view summaries, and manage quantities seamlessly.\n- Product Details: Rich product presentations with BikeCard components.\n- Categorization: Distinct handling for Bikes and Accessories.\n- Contact & Support: Dedicated contact section for customer inquiries.\n- Responsive Layout: Optimized for various screen sizes.\n\nTech Stack:\n- Framework: Angular 15\n- Language: TypeScript\n- Styling: CSS3\n- Data: JSON-based local data storage (Assets)\n- State Management: RxJS Services\n\nProject Structure:\n\n\`\`\`\nsrc/\n├── app/\n│   ├── core/            # Singleton services and models\n│   │   ├── models/      # Data interfaces (Bike, Accessory, CartItem)\n│   │   └── services/    # Business logic (Cart, Catalog services)\n│   ├── features/        # Feature modules\n│   │   ├── cart/        # Shopping cart functionality\n│   │   ├── catalog/     # Product listing pages\n│   │   ├── contact/     # Contact form and info\n│   │   └── home/        # Landing page\n│   └── shared/          # Reusable artifacts\n│       ├── components/  # Shared UI components (Footer, BikeCard)\n│       └── pipes/       # Custom pipes (CurrencyFormat)\n├── assets/\n│   └── data/            # Static data files (bikes.json, accessories.json)\n└── environments/        # Configuration files\n\`\`\`\n\nSee the README for full details, setup, and usage instructions.`,
          features: [
            "Interactive catalog for bikes and accessories",
            "Shopping cart with quantity management",
            "Rich product details with BikeCard components",
            "Category-based browsing (Bikes & Accessories)",
            "Contact and support section",
            "Responsive design for all devices",
            "Modular Angular architecture",
            "Local JSON data storage",
            "RxJS-based state management",
          ],
          gallery: [
            {
              src: "/projects/aymans-bike-shop/1.png",
              alt: "Page d'accueil - La page principale présentant les vélos en vedette et la navigation",
            },
            {
              src: "/projects/aymans-bike-shop/2.png",
              alt: "Catalogue vélos - La page catalogue affichant la liste des vélos disponibles avec options de filtrage",
            },
            {
              src: "/projects/aymans-bike-shop/3.png",
              alt: "Catalogue accessoires - La page catalogue affichant la liste des accessoires disponibles avec options de filtrage",
            },
            {
              src: "/projects/aymans-bike-shop/4.png",
              alt: "Page panier - La page panier affichant les articles sélectionnés, quantités et prix total",
            },
          ],
        },
        {
          slug: "bike-shop-api",
          title: "Bike Shop API",
          description:
            "A REST API for managing a bike shop built with Spring Boot 3.2.4 and Java 17.",
          tech: [
            "Java 17",
            "Spring Boot",
            "Spring Data JPA",
            "H2",
            "Lombok",
            "Maven",
            "Swagger",
          ],
          github: "https://github.com/AymaneAsserrar/exam-spring",
          fullDescription: `A robust RESTful API designed for efficient bike shop management. This project demonstrates modern Java backend practices, focusing on clean architecture and secure endpoint management.

        Key Highlights:
        • Architecture: Implements a clean separation of concerns using DTOs, mappers, and dedicated service layers.
        • Persistence: Uses Spring Data JPA for entity relationship management with an H2 in-memory database for rapid development and testing.
        • Security: Features custom authentication implemented via a specific HTTP header filter to protect sensitive endpoints.
        • Documentation: Fully documented with Swagger UI and OpenAPI 3, providing an interactive interface to test endpoints directly.`,
          features: [
            "Full CRUD operations for bikes and accessories",
            "User-based shopping cart system",
            "Advanced search and filtering endpoints",
            "Request validation and global error handling",
            "Pre-loaded sample data for immediate demo/testing",
            "Interactive API documentation with Swagger UI",
            "Custom authentication via HTTP header",
          ],
          gallery: [
            {
              src: "/projects/bike-shop-api/1.png",
              alt: "Swagger UI - Interactive API documentation showcasing available endpoints and their details",
            },
            {
              src: "/projects/bike-shop-api/2.png",
              alt: "Token Authentication - Example of the custom authentication mechanism using HTTP headers to secure endpoints",
            },
            {
              src: "/projects/bike-shop-api/3.png",
              alt: "Api bikes endpoint - Sample response from the /api/bikes endpoint showing the list of available bikes in the shop",
            },
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
          tech: [
            "Node.js",
            "Express.js",
            "Socket.IO",
            "better-sqlite3",
            "Multer",
            "Tailwind CSS"
          ],
          github: "https://github.com/AymaneAsserrar/MyChatApp",
          fullDescription: `A real-time chat application built with Node.js, Socket.IO, and SQLite, featuring a modern UI with Tailwind CSS.\n\nKey Features:\n- Real-time messaging with Socket.IO\n- User authentication and presence detection\n- Customizable user avatars with upload support\n- Automatic reconnection and message recovery\n- Typing indicators and online/away status\n- Message history persistence with SQLite\n- Private messaging and multiple chat channels\n- Responsive design with Tailwind CSS\n- Cluster mode support for scalability\n\nTech Stack:\n- Node.js, Express.js, Socket.IO\n- better-sqlite3 for fast, synchronous database access\n- Multer for file uploads\n- Tailwind CSS for UI\n\nUsage Tips:\n- Upload or select an avatar by clicking the avatar icon.\n- Private message by clicking a user's name.\n- Away status is shown when you tab out.\n- Message history and avatars persist across sessions.\n\nSee the README for full setup, database schema, and advanced features.`,
          features: [
            "Real-time messaging with Socket.IO",
            "User authentication and online/away presence detection",
            "Customizable avatars with upload support",
            "Automatic reconnection and message recovery",
            "Typing indicators and user status updates",
            "Persistent message history with SQLite",
            "Private messaging between users",
            "Multiple public and private chat channels",
            "Responsive, modern UI with Tailwind CSS",
            "Cluster mode support for scalability",
            "Avatar and user info persistence across sessions",
            "File upload validation and security",
            "Efficient, synchronous database access with better-sqlite3"
          ],
          gallery: [
            {
              src: "/projects/my-chat-app/1.png",
              alt: "Main Chat Interface - The main chat interface showing multiple channels, user list, and message history",
            },
          ],
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
          description: "Interactive 3D fruit-slicing game with real-time hand tracking and physics.",
          tech: ["C++", "OpenGL", "Qt", "OpenCV"],
          github: "https://github.com/AymaneAsserrar/SliceDefender3D",
          fullDescription: `🍍 Fruit Slicer 3D — Slice Defender\n\nFruit Slicer 3D is an interactive gesture-based game built with Qt, OpenGL, and OpenCV. The player slices flying fruits in a 3D arena using a virtual sword controlled by real-time hand movements captured via webcam.\n\nKey Features\n- 3D Gameplay with OpenGL rendering: fruits, textures, sword, and a realistic environment.\n- Real-time Hand Tracking using OpenCV and webcam input.\n- Interactive Controls: move the camera using arrow keys and control the sword by moving your hand.\n- Fruit Slicing Physics: fruits split into two animated fragments with visible cut planes and realistic gravity.\n- Dynamic Shadows and Textures for immersive visual effects.\n- Score System & Timer: game lasts 120 seconds, and your score increases with each successful slice.\n\nArchitecture\n- MainWindow: Main GUI window handling score display, camera feed, and game start/stop.\n- OpenGLWidget: Core 3D rendering engine (arena, sword, fruits) and game logic.\n- WebcamHandler: Captures webcam frames and detects hand regions using Haar Cascade.\n- PalmTracker: Tracks the palm's position using ORB+FLANN for precise control.\n- Projectile: Models the fruits and their physical behaviors (movement, slicing, rendering).\n- PalmDetection: Handles initial palm detection before tracking.\n\nRequirements\n- Qt 5+\n- OpenGL\n- OpenCV 4+\n\nHow to Build\n- Clone the repository.\n- Open the project in Qt Creator or your preferred C++ IDE.\n- Make sure OpenCV and OpenGL development packages are installed.\n- Build and run the project.\n\nControls & Gameplay\n- Move your hand in front of the webcam — your virtual sword will follow.\n- Slice fruits by intersecting them with your virtual blade.\n- Arrow keys allow rotating the camera around the scene.\n- Avoid slicing wood cubes – slicing one will end the game immediately!\n\nCompleted Features\n- Fully functional 3D scene rendering with textures and shadows.\n- Real-time webcam integration and hand detection.\n- Smooth slicing animations and realistic fruit fragment physics.\n- In-game HUD for timer and score.\n\nKnown Limitations\n- Hand tracking may be less accurate under low lighting or fast movements.\n- Haar cascade detection can occasionally misfire — deep learning models may improve this.\n\nFuture Improvements\n- Add sound effects and ambient music.\n- Introduce difficulty levels and bonus items.\n- Replace palm detection with a neural network for robustness.\n- Polish UI elements for better UX.\n\nAuthors\nAymane ASSERRAR\nMarieme BENZHA\nAcademic Project – Télécom Saint-Étienne | 2024–2025`,
          features: [
            "3D gameplay with OpenGL rendering (fruits, sword, arena, shadows)",
            "Real-time hand tracking via webcam (OpenCV)",
            "Slice fruits with a virtual sword controlled by your hand",
            "Physics-based fruit splitting and gravity",
            "Dynamic shadows and textured environment",
            "Score system and 120-second timer",
            "Camera movement with arrow keys",
            "Game over if you slice a wood cube",
            "In-game HUD for timer and score",
            "Smooth slicing animations",
          ],
          gallery: [
            {
              src: "/projects/slice-defender/1.jpg",
              alt: "Vue d'ensemble de la scène - Arène 3D avec fruits en vol, sabre virtuel du joueur et flux webcam affichant le suivi de la main",
            },
            {
              src: "/projects/slice-defender/2.jpg",
              alt: "Exemple de scène avec cube, sabre et ombres - Gros plan sur l'action de découpe avec plans de coupe visibles et fragments de fruits réalistes",
            },
            {
              src: "/projects/slice-defender/3.jpg",
              alt: "Écran de fin de partie - Affichage du score final et du temps restant",
            },
          ],
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
          slug: "aymans-bike-shop",
          title: "Ayman's Bike Shop",
          description:
            "Application e-commerce moderne et responsive Angular 15 pour parcourir et acheter des vélos et accessoires.",
          tech: [
            "Angular",
            "TypeScript",
            "CSS3",
            "RxJS",
            "JSON",
          ],
          github: "https://github.com/AymaneAsserrar/aymans-bike-shop",
          fullDescription: `Une application e-commerce moderne et responsive pour parcourir et acheter des vélos et accessoires. Construite avec Angular 15, elle met en avant une architecture modulaire et une séparation claire des responsabilités.\n\nFonctionnalités principales :\n- Catalogue interactif : Parcourez une large collection de vélos et accessoires.\n- Gestion du panier : Ajoutez des articles, visualisez le résumé et gérez les quantités facilement.\n- Détails produits : Présentation riche des produits avec les composants BikeCard.\n- Catégorisation : Gestion distincte des vélos et accessoires.\n- Contact & support : Section dédiée pour les demandes clients.\n- Responsive : Optimisée pour tous les écrans.\n\nStack technique :\n- Framework : Angular 15\n- Langage : TypeScript\n- Style : CSS3\n- Données : Stockage local JSON (Assets)\n- Gestion d'état : Services RxJS\n\nStructure du projet :\n\n\`\`\`\nsrc/\n├── app/\n│   ├── core/            # Services singletons et modèles\n│   │   ├── models/      # Interfaces de données (Bike, Accessory, CartItem)\n│   │   └── services/    # Logique métier (services Panier, Catalogue)\n│   ├── features/        # Modules fonctionnels\n│   │   ├── cart/        # Fonctionnalité panier\n│   │   ├── catalog/     # Pages de listing produits\n│   │   ├── contact/     # Formulaire et infos contact\n│   │   └── home/        # Page d'accueil\n│   └── shared/          # Artéfacts réutilisables\n│       ├── components/  # Composants UI partagés (Footer, BikeCard)\n│       └── pipes/       # Pipes personnalisés (CurrencyFormat)\n├── assets/\n│   └── data/            # Données statiques (bikes.json, accessories.json)\n└── environments/        # Fichiers de configuration\n\`\`\`\n\nVoir le README pour tous les détails, installation et instructions d'utilisation.`,
          features: [
            "Catalogue interactif pour vélos et accessoires",
            "Panier d'achat avec gestion des quantités",
            "Détails produits riches avec composants BikeCard",
            "Navigation par catégorie (Vélos & Accessoires)",
            "Section contact et support",
            "Design responsive pour tous les appareils",
            "Architecture modulaire Angular",
            "Stockage local des données en JSON",
            "Gestion d'état avec RxJS",
          ],
          gallery: [
            {
              src: "/projects/aymans-bike-shop/1.png",
              alt: "Home Page - The main landing page showcasing featured bikes and navigation",
            },
            {
              src: "/projects/aymans-bike-shop/2.png",
              alt: "Bike Catalog - The catalog page displaying a list of available bikes with filtering options",
            },
            {
              src: "/projects/aymans-bike-shop/3.png",
              alt: "accessory Catalog - The catalog page displaying a list of available accessories with filtering options",
            },
            {
              src: "/projects/aymans-bike-shop/4.png",
              alt: "cart Page - The shopping cart page showing selected items, quantities, and total price",
            },
          ],
        },
        {
          slug: "bike-shop-api",
          title: "Bike Shop API",
          description:
            "Une API REST pour la gestion d'un magasin de vélos, construite avec Spring Boot 3.2.4 et Java 17.",
          tech: [
            "Java 17",
            "Spring Boot",
            "Spring Data JPA",
            "H2",
            "Lombok",
            "Maven",
            "Swagger",
          ],
          github: "https://github.com/AymaneAsserrar/exam-spring",
          fullDescription: `Une API RESTful robuste conçue pour une gestion efficace de magasin de vélos. Ce projet démontre les pratiques modernes du backend Java, en mettant l'accent sur l'architecture propre et la gestion sécurisée des points d'accès.

        Points forts :
        • Architecture : Mise en œuvre d'une séparation claire des responsabilités via des DTO, des mappers et des couches de services dédiées.
        • Persistance : Utilisation de Spring Data JPA pour la gestion des relations entre entités avec une base de données H2 en mémoire.
        • Sécurité : Authentification personnalisée implémentée via un filtre d'en-tête HTTP pour protéger les endpoints sensibles.
        • Documentation : Entièrement documenté avec Swagger UI et OpenAPI 3, offrant une interface interactive pour tester les endpoints directement.`,
          features: [
            "Opérations CRUD complètes pour les vélos et accessoires",
            "Système de panier d'achat basé sur l'utilisateur",
            "Endpoints de recherche et filtrage avancés",
            "Validation des requêtes et gestion globale des erreurs",
            "Données d'exemple préchargées pour les tests/démos",
            "Documentation interactive de l'API avec Swagger UI",
            "Authentification personnalisée via en-tête HTTP",
          ],
          gallery: [
            {
              src: "/projects/bike-shop-api/1.png",
              alt: "Swagger UI - Documentation API interactive montrant les endpoints disponibles et leurs détails",
            },
            {
              src: "/projects/bike-shop-api/2.png",
              alt: "Authentification par jeton - Exemple du mécanisme d'authentification personnalisé utilisant les en-têtes HTTP pour sécuriser les endpoints",
            },
            {
              src: "/projects/bike-shop-api/3.png",
              alt: "Endpoint api bikes - Exemple de réponse de l'endpoint /api/bikes affichant la liste des vélos disponibles dans le magasin",
            },
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
          tech: [
            "Node.js",
            "Express.js",
            "Socket.IO",
            "better-sqlite3",
            "Multer",
            "Tailwind CSS"
          ],
          github: "https://github.com/AymaneAsserrar/MyChatApp",
          fullDescription: `Application de chat en temps réel construite avec Node.js, Socket.IO et SQLite, dotée d'une interface moderne avec Tailwind CSS.\n\nFonctionnalités principales :\n- Messagerie instantanée avec Socket.IO\n- Authentification des utilisateurs et détection de présence\n- Avatars personnalisables avec support de l'upload\n- Reconnexion automatique et récupération des messages\n- Indicateurs de saisie et statuts en ligne/absent\n- Historique des messages persistant avec SQLite\n- Messagerie privée et gestion de multiples salons\n- Design responsive avec Tailwind CSS\n- Mode cluster pour la scalabilité\n\nStack technique :\n- Node.js, Express.js, Socket.IO\n- better-sqlite3 pour un accès base de données rapide et synchrone\n- Multer pour la gestion des uploads\n- Tailwind CSS pour l'UI\n\nConseils d'utilisation :\n- Cliquez sur l'avatar pour en choisir un ou en téléverser un.\n- Envoyez un message privé en cliquant sur le nom d'un utilisateur.\n- Le statut "absent" s'affiche si vous changez d'onglet.\n- L'historique et les avatars sont conservés entre les sessions.\n\nVoir le README pour l'installation complète, le schéma de la base et les fonctionnalités avancées.`,
          features: [
            "Messagerie instantanée avec Socket.IO",
            "Authentification des utilisateurs et détection de présence en ligne/absent",
            "Avatars personnalisables avec support de l'upload",
            "Reconnexion automatique et récupération des messages",
            "Indicateurs de saisie et mises à jour de statut utilisateur",
            "Historique des messages persistant avec SQLite",
            "Messagerie privée entre utilisateurs",
            "Multiples salons de discussion publics et privés",
            "Interface moderne et responsive avec Tailwind CSS",
            "Mode cluster pour la scalabilité",
            "Persistance des avatars et infos utilisateur entre les sessions",
            "Validation et sécurité des fichiers uploadés",
            "Accès base de données synchrone et performant avec better-sqlite3"
          ],
          gallery: [
            {
              src: "/projects/my-chat-app/1.png",
              alt: "Interface principale de chat - L'interface principale du chat montrant plusieurs salons, la liste des utilisateurs et l'historique des messages",
            },
          ],
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
            "Jeu 3D interactif de découpe de fruits avec suivi de la main en temps réel et physique réaliste.",
          tech: ["C++", "OpenGL", "Qt", "OpenCV"],
          github: "https://github.com/AymaneAsserrar/SliceDefender3D",
          fullDescription: `🍍 Fruit Slicer 3D — Slice Defender\n\nFruit Slicer 3D est un jeu interactif basé sur les gestes, développé avec Qt, OpenGL et OpenCV. Le joueur découpe des fruits en 3D à l'aide d'un sabre virtuel contrôlé par les mouvements de la main capturés en temps réel par la webcam.\n\nFonctionnalités principales\n- Gameplay 3D avec rendu OpenGL : fruits, textures, sabre et environnement réaliste.\n- Suivi de la main en temps réel via OpenCV et la webcam.\n- Contrôles interactifs : déplacez la caméra avec les flèches, contrôlez le sabre avec la main.\n- Physique de découpe : les fruits se séparent en deux fragments animés avec plan de coupe visible et gravité réaliste.\n- Ombres dynamiques et textures immersives.\n- Système de score & minuterie : la partie dure 120 secondes, le score augmente à chaque fruit découpé.\n\nArchitecture\n- MainWindow : fenêtre principale gérant l'affichage du score, le flux caméra et le démarrage/arrêt du jeu.\n- OpenGLWidget : moteur 3D (arène, sabre, fruits) et logique du jeu.\n- WebcamHandler : capture les images webcam et détecte la main (Haar Cascade).\n- PalmTracker : suit la paume avec ORB+FLANN pour un contrôle précis.\n- Projectile : modélise les fruits et leur comportement physique (mouvement, découpe, rendu).\n- PalmDetection : gère la détection initiale de la paume.\n\nPré-requis\n- Qt 5+\n- OpenGL\n- OpenCV 4+\n\nCompilation\n- Cloner le dépôt.\n- Ouvrir le projet dans Qt Creator ou un IDE C++ compatible.\n- Installer les paquets de développement OpenCV et OpenGL.\n- Compiler et lancer le projet.\n\nContrôles & Gameplay\n- Bougez la main devant la webcam — le sabre virtuel suit vos mouvements.\n- Découpez les fruits en les touchant avec la lame virtuelle.\n- Les flèches permettent de tourner la caméra autour de la scène.\n- Attention à ne pas découper les cubes en bois — cela termine la partie !\n\nFonctionnalités réalisées\n- Rendu 3D complet avec textures et ombres.\n- Intégration webcam et détection de la main en temps réel.\n- Animations de découpe fluides et physique réaliste des fragments.\n- HUD en jeu pour le score et la minuterie.\n\nLimites connues\n- Le suivi de la main est moins précis en faible luminosité ou lors de mouvements rapides.\n- La détection Haar cascade peut parfois échouer — un modèle deep learning serait plus robuste.\n\nAméliorations futures\n- Ajouter des effets sonores et musique d'ambiance.\n- Introduire des niveaux de difficulté et des bonus.\n- Remplacer la détection de la paume par un réseau de neurones.\n- Améliorer l'UI pour une meilleure expérience.\n\nAuteurs\nAymane ASSERRAR\nMarieme BENZHA\nProjet académique – Télécom Saint-Étienne | 2024–2025`,
          features: [
            "Gameplay 3D avec rendu OpenGL (fruits, sabre, arène, ombres)",
            "Suivi de la main en temps réel via webcam (OpenCV)",
            "Découpez les fruits avec un sabre virtuel contrôlé par la main",
            "Physique réaliste de découpe et gravité",
            "Ombres dynamiques et environnement texturé",
            "Système de score et minuterie de 120 secondes",
            "Déplacement caméra avec les flèches",
            "Game over si un cube en bois est découpé",
            "HUD en jeu pour score et minuterie",
            "Animations de découpe fluides",
          ],
          gallery: [
            {
              src: "/projects/slice-defender/1.jpg",
              alt: "Main Interface - The application's main interface with navigation and recommendations",
            },
            {
              src: "/projects/slice-defender/2.jpg",
              alt: "Comic Details - Detailed view of comic information including description, characters, and publication details",
            },
            {
              src: "/projects/slice-defender/3.jpg",
              alt: "Personal Library - Personal library management with reading status tracking",
            },
          ],
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
