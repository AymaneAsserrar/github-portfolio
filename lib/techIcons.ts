// Map technology names to their Devicon CDN SVG URLs
// Uses https://devicon.dev/ for well-known technologies

const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const techIconMap: Record<string, string> = {
  // Languages
  "Python": `${DEVICON_BASE}/python/python-original.svg`,
  "Java": `${DEVICON_BASE}/java/java-original.svg`,
  "C++": `${DEVICON_BASE}/cplusplus/cplusplus-original.svg`,
  "C": `${DEVICON_BASE}/c/c-original.svg`,
  "C/C++": `${DEVICON_BASE}/cplusplus/cplusplus-original.svg`,
  "JavaScript": `${DEVICON_BASE}/javascript/javascript-original.svg`,
  "TypeScript": `${DEVICON_BASE}/typescript/typescript-original.svg`,
  "PHP": `${DEVICON_BASE}/php/php-original.svg`,
  "SQL": `${DEVICON_BASE}/azuresqldatabase/azuresqldatabase-original.svg`,
  "Bash": `${DEVICON_BASE}/bash/bash-original.svg`,

  // Frontend
  "React": `${DEVICON_BASE}/react/react-original.svg`,
  "Next.js": `${DEVICON_BASE}/nextjs/nextjs-original.svg`,
  "Vue.js": `${DEVICON_BASE}/vuejs/vuejs-original.svg`,
  "Angular": `${DEVICON_BASE}/angular/angular-original.svg`,
  "Tailwind CSS": `${DEVICON_BASE}/tailwindcss/tailwindcss-original.svg`,
  "HTML5": `${DEVICON_BASE}/html5/html5-original.svg`,
  "CSS3": `${DEVICON_BASE}/css3/css3-original.svg`,
  "Swing": `${DEVICON_BASE}/java/java-original.svg`,

  // Backend
  "Laravel": `${DEVICON_BASE}/laravel/laravel-original.svg`,
  "Symfony": `${DEVICON_BASE}/symfony/symfony-original.svg`,
  "Flask": `${DEVICON_BASE}/flask/flask-original.svg`,
  "Spring Boot": `${DEVICON_BASE}/spring/spring-original.svg`,
  "Node.js": `${DEVICON_BASE}/nodejs/nodejs-original.svg`,

  // Databases
  "MySQL": `${DEVICON_BASE}/mysql/mysql-original.svg`,
  "PostgreSQL": `${DEVICON_BASE}/postgresql/postgresql-original.svg`,
  "MongoDB": `${DEVICON_BASE}/mongodb/mongodb-original.svg`,
  "SQLite": `${DEVICON_BASE}/sqlite/sqlite-original.svg`,
  "Redis": `${DEVICON_BASE}/redis/redis-original.svg`,

  // DevOps & Tools
  "Docker": `${DEVICON_BASE}/docker/docker-original.svg`,
  "Git": `${DEVICON_BASE}/git/git-original.svg`,
  "Git/GitHub": `${DEVICON_BASE}/github/github-original.svg`,
  "GitHub": `${DEVICON_BASE}/github/github-original.svg`,
  "GitLab CI/CD": `${DEVICON_BASE}/gitlab/gitlab-original.svg`,
  "Linux": `${DEVICON_BASE}/linux/linux-original.svg`,
  "Jira": `${DEVICON_BASE}/jira/jira-original.svg`,

  // Graphics
  "OpenGL": `${DEVICON_BASE}/opengl/opengl-original.svg`,
  "Qt": `${DEVICON_BASE}/qt/qt-original.svg`,

  // Cloud
  "GCP (BigQuery)": `${DEVICON_BASE}/googlecloud/googlecloud-original.svg`,
  "Azure (IoT Hub)": `${DEVICON_BASE}/azure/azure-original.svg`,

  // AI / ML / Misc
  "LLM": "",
  "RAG": "",
  "Langchain": "",
  "Dash": `${DEVICON_BASE}/plotly/plotly-original.svg`,

  // Other
  "REST API": `${DEVICON_BASE}/fastapi/fastapi-original.svg`,
  "JDBC": `${DEVICON_BASE}/java/java-original.svg`,
  "WebSockets": `${DEVICON_BASE}/socketio/socketio-original.svg`,
  "Batfish": "",
  "Agile": "",
  "Agile/Scrum": "",
  "Blade": `${DEVICON_BASE}/laravel/laravel-original.svg`,
  "Postman": `${DEVICON_BASE}/postman/postman-original.svg`,
  "REST APIs": `${DEVICON_BASE}/fastapi/fastapi-original.svg`,
  "Microservices": "",
  "Machine Learning (LSTM)": `${DEVICON_BASE}/tensorflow/tensorflow-original.svg`,
  "Unit Testing": `${DEVICON_BASE}/junit/junit-original.svg`,
  "System Design": "",
  "Project Management": "",
};

/**
 * Get the icon URL for a given technology name.
 * Returns the URL string or null if no icon is available.
 */
export function getTechIconUrl(tech: string): string | null {
  const url = techIconMap[tech];
  if (url === undefined || url === "") return null;
  return url;
}
