export type SkillCategory = {
  id: string;
  name: string;
  shortName: string;
  color: string;
  tagline: string;
};

export type SkillItem = {
  id: string;
  name: string;
  category: string;
  icon: string;
  description?: string;
  project?: string;
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend & Web Development',
    shortName: 'Frontend',
    color: '#54bee8',
    tagline: 'Modern, responsive, and accessible user interfaces',
  },
  {
    id: 'backend',
    name: 'Backend & APIs',
    shortName: 'Backend',
    color: '#ec82b6',
    tagline: 'Robust architectures, RESTful services, and authentication',
  },
  {
    id: 'database',
    name: 'Database & Data Management',
    shortName: 'Database',
    color: '#c4ec42',
    tagline: 'Relational modeling, query optimization, and ORM schemas',
  },
  {
    id: 'languages',
    name: 'Programming Languages',
    shortName: 'Languages',
    color: '#f9a826',
    tagline: 'Typed and scripted languages for systems and web applications',
  },
  {
    id: 'cloud-devops',
    name: 'Cloud & DevOps',
    shortName: 'Cloud & Tools',
    color: '#60a5fa',
    tagline: 'Version control, containerization, and automated deployments',
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity & Networking',
    shortName: 'Security',
    color: '#e879f9',
    tagline: 'Vulnerability assessment, network analysis, and SOC monitoring',
  },
  {
    id: 'software-engineering',
    name: 'Software Engineering & Testing',
    shortName: 'Engineering & QA',
    color: '#34d399',
    tagline: 'System analysis, architectural modeling, and black-box verification',
  },
];

export const SKILLS_DATA: SkillItem[] = [
  // 1. Frontend & Web Development
  {
    id: 'html5',
    name: 'HTML5',
    category: 'frontend',
    icon: 'html5',
    description: 'Semantic markup, accessibility standards, and web structures',
    project: 'Sembako, Saung Riung, UCCD',
  },
  {
    id: 'css3',
    name: 'CSS3',
    category: 'frontend',
    icon: 'css3',
    description: 'Responsive styling, Flexbox, CSS Grid, and custom animations',
    project: 'Portfolio, Saung Riung',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'frontend',
    icon: 'javascript',
    description: 'Modern ES6+ syntax, asynchronous programming, and DOM interaction',
    project: 'All web projects',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    icon: 'typescript',
    description: 'Strict type safety, interfaces, and compile-time reliability',
    project: 'OURS, Lumio, Portfolio',
  },
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    icon: 'react',
    description: 'Component-driven UI, custom hooks, and state management',
    project: 'Saung Riung, UCCD',
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'frontend',
    icon: 'next.js',
    description: 'App Router, Server Components, SSR, and API endpoints',
    project: 'Warung Sembako, UCCD',
  },
  {
    id: 'tailwindcss',
    name: 'Tailwind CSS',
    category: 'frontend',
    icon: 'tailwind css',
    description: 'Utility-first styling system and design token implementation',
    project: 'Warung Sembako, UCCD',
  },
  {
    id: 'vite',
    name: 'Vite',
    category: 'frontend',
    icon: 'vite',
    description: 'Fast HMR development tooling and optimized production bundling',
    project: 'Saung Riung, Portfolio',
  },

  // 2. Backend & APIs
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    icon: 'node.js',
    description: 'Event-driven server runtime and scalable backend services',
    project: 'Warung Sembako, Saung Riung',
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'backend',
    icon: 'express.js',
    description: 'REST API routing, middleware pipelines, and error handling',
    project: 'Warung Sembako, Saung Riung',
  },
  {
    id: 'nestjs',
    name: 'NestJS',
    category: 'backend',
    icon: 'nestjs',
    description: 'Modular enterprise architecture, decorators, and dependency injection',
    project: 'OURS, Lumio',
  },
  {
    id: 'rest-apis',
    name: 'REST APIs',
    category: 'backend',
    icon: 'rest apis',
    description: 'RESTful architecture, status codes, pagination, and clean contracts',
    project: 'Warung Sembako, Saung Riung',
  },
  {
    id: 'supabase',
    name: 'Supabase',
    category: 'backend',
    icon: 'supabase',
    description: 'Backend-as-a-service with PostgreSQL, row-level security, and auth',
    project: 'Cloud prototypes',
  },
  {
    id: 'jwt',
    name: 'JWT Authentication',
    category: 'backend',
    icon: 'jwt',
    description: 'Stateless token issuance, role authorization, and token verification',
    project: 'Warung Sembako Abah Andi',
  },
  {
    id: 'bcrypt',
    name: 'bcrypt',
    category: 'backend',
    icon: 'bcrypt',
    description: 'Secure password hashing with adaptive work factor and salting',
    project: 'Warung Sembako Abah Andi',
  },

  // 3. Database & Data Management
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    icon: 'postgresql',
    description: 'Relational data modeling, ACID transactions, and indexed queries',
    project: 'Warung Sembako, Lumio',
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'database',
    icon: 'mysql',
    description: 'Relational database schema modeling and structured SQL queries',
    project: 'Academic systems at UNTAR',
  },
  {
    id: 'prisma',
    name: 'Prisma ORM',
    category: 'database',
    icon: 'prisma',
    description: 'Declarative schema modeling, type-safe queries, and migrations',
    project: 'Warung Sembako, OURS',
  },
  {
    id: 'redis',
    name: 'Redis',
    category: 'database',
    icon: 'redis',
    description: 'In-memory key-value caching, performance optimization, and sessions',
    project: 'Lumio',
  },
  {
    id: 'database-design',
    name: 'Database Design',
    category: 'database',
    icon: 'database design',
    description: 'Schema normalization, referential integrity, and query planning',
    project: 'Warung Sembako, JIKSI Research',
  },

  // 4. Programming Languages
  {
    id: 'cpp',
    name: 'C++',
    category: 'languages',
    icon: 'cplusplus',
    description: 'Object-oriented programming, algorithmic logic, and embedded vehicle control',
    project: 'AI Surveillance Rover',
  },
  {
    id: 'php',
    name: 'PHP',
    category: 'languages',
    icon: 'php',
    description: 'Server-side scripting, form processing, and web systems coursework',
    project: 'UNTAR Coursework',
  },
  {
    id: 'python',
    name: 'Python',
    category: 'languages',
    icon: 'python',
    description: 'Computer vision scripting, edge inference, and automation',
    project: 'AI Surveillance Rover',
  },
  {
    id: 'dart',
    name: 'Dart',
    category: 'languages',
    icon: 'flutter',
    description: 'Object-oriented language for cross-platform mobile engineering',
    project: 'Lumio Mobile App',
  },
  {
    id: 'flutter',
    name: 'Flutter',
    category: 'languages',
    icon: 'flutter',
    description: 'Multi-platform mobile app development with BLoC and Dio',
    project: 'Lumio Mobile App',
  },

  // 5. Cloud & DevOps
  {
    id: 'git',
    name: 'Git & GitHub',
    category: 'cloud-devops',
    icon: 'git',
    description: 'Version control, atomic commits, pull requests, and branch workflows',
    project: 'github.com/akmals06',
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'cloud-devops',
    icon: 'docker',
    description: 'Containerizing services, environment isolation, and reproducible builds',
    project: 'Backend microservices',
  },
  {
    id: 'linux',
    name: 'Linux',
    category: 'cloud-devops',
    icon: 'linux',
    description: 'Bash shell scripting, permissions, server management, and system administration',
    project: 'Development & lab environments',
  },
  {
    id: 'vercel',
    name: 'Vercel',
    category: 'cloud-devops',
    icon: 'vercel',
    description: 'Automated CI/CD deployments for frontend applications and Next.js APIs',
    project: 'Saung Riung, Warung Sembako',
  },
  {
    id: 'railway',
    name: 'Railway',
    category: 'cloud-devops',
    icon: 'railway',
    description: 'Cloud deployment platform for containerized backend services and PostgreSQL',
    project: 'Backend hosting',
  },
  {
    id: 'cloudinary',
    name: 'Cloudinary',
    category: 'cloud-devops',
    icon: 'cloudinary',
    description: 'Cloud media storage, image optimization, and CDN delivery',
    project: 'Warung Sembako Abah Andi',
  },

  // 6. Cybersecurity & Networking
  {
    id: 'kali-linux',
    name: 'Kali Linux',
    category: 'cybersecurity',
    icon: 'kali linux',
    description: 'Penetration testing distribution for security evaluation and vulnerability auditing',
    project: 'Security research lab',
  },
  {
    id: 'virtualbox',
    name: 'VirtualBox',
    category: 'cybersecurity',
    icon: 'virtualbox',
    description: 'Virtualization environment for isolated testbeds, guest operating systems, and labs',
    project: 'Kali Linux and test labs',
  },
  {
    id: 'wireshark',
    name: 'Wireshark',
    category: 'cybersecurity',
    icon: 'wireshark',
    description: 'Network packet analysis, protocol inspection, and packet capture examination',
    project: 'Network diagnostics & research',
  },
  {
    id: 'nmap',
    name: 'Nmap',
    category: 'cybersecurity',
    icon: 'nmap',
    description: 'Network discovery, open port scanning, and service version enumeration',
    project: 'Security assessment lab',
  },
  {
    id: 'burp-suite',
    name: 'Burp Suite',
    category: 'cybersecurity',
    icon: 'burp suite',
    description: 'Web application security testing, HTTP request proxying, and vulnerability scanning',
    project: 'Independent research',
  },
  {
    id: 'web-security',
    name: 'Web Security',
    category: 'cybersecurity',
    icon: 'web security',
    description: 'Vulnerability identification and responsible disclosure',
    project: 'DKI Jakarta Gov Appreciation (2022)',
  },
  {
    id: 'soc-fundamentals',
    name: 'SOC Fundamentals',
    category: 'cybersecurity',
    icon: 'soc fundamentals',
    description: 'Security operations center fundamentals, alert triage, and incident analysis',
    project: 'Jadi Hacker L1 Certification (2023)',
  },

  // 7. Software Engineering & Testing
  {
    id: 'system-analysis',
    name: 'System Analysis',
    category: 'software-engineering',
    icon: 'system analysis',
    description: 'Requirements engineering, workflow modeling, and feasibility analysis',
    project: 'Warung Sembako Abah Andi',
  },
  {
    id: 'software-testing',
    name: 'Software Testing',
    category: 'software-engineering',
    icon: 'software testing',
    description: 'Test case formulation, edge case validation, and software defect tracking',
    project: 'Academic systems at UNTAR',
  },
  {
    id: 'blackbox-testing',
    name: 'Black-Box Testing',
    category: 'software-engineering',
    icon: 'black-box testing',
    description: 'System functional validation across 16 formal operational test scenarios',
    project: 'JIKSI Publication (2026)',
  },
  {
    id: 'uml',
    name: 'UML',
    category: 'software-engineering',
    icon: 'uml',
    description: 'Use Case diagrams, Activity diagrams, Class diagrams, and Sequence diagrams',
    project: 'System specifications',
  },
  {
    id: 'erd',
    name: 'ERD',
    category: 'software-engineering',
    icon: 'erd',
    description: 'Entity relationship diagrams, cardinality definition, and relational schemas',
    project: 'Warung Sembako, Lumio',
  },
];
