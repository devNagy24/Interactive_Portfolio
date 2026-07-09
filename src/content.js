export const profile = {
  name: "Devon Nagy",
  heroName: "D. Nagy",
  role: "Software Developer & Database Administrator",
  location: "Tacoma / Olympia, Washington",
  employer: "Nisqually Red Wind Casino",
  intro:
    "I build full-stack applications, reliable SQL Server systems, automation workflows, and reporting tools for high-movement operational environments.",
  signature:
    "A BAS Software Development graduate bringing DBA precision, developer curiosity, and a calm production mindset to every system I touch.",
  email: "devNagy24@outlook.com",
  phone: "253-970-4437",
  github: "https://github.com/devNagy24",
  linkedin: "https://www.linkedin.com/in/devon-nagy-b951ba195",
  resumeUrl: "./assets/Devon_Nagy_Resume_SDev_DBA.pdf",
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const quickStats = [
  { value: "30+", label: "Databases supported" },
  { value: "50+", label: "Automation workflows built" },
  { value: "BAS", label: "Software Development graduate" },
];

export const signals = [
  {
    command: "run portfolio.scan",
    output: "Systems thinker with full-stack range, SQL Server depth, and a bias toward clean operational workflows.",
  },
  {
    command: "select strengths",
    output: "Database administration, replication, reporting, automation, application support, and stakeholder translation.",
  },
  {
    command: "deploy next_step",
    output: "Developer and DBA with proprietary production work plus personal and academic GitHub projects.",
  },
];

export const experience = [
  {
    period: "2022 - Present",
    title: "Software Developer & Database Administrator",
    org: "Nisqually Red Wind Casino",
    summary:
      "Developing enterprise applications, SQL Server infrastructure, reporting flows, and automation in a fast-moving hospitality and gaming environment.",
    highlights: [
      "Architected and maintained SQL Server infrastructure supporting 30+ databases, replication, SSIS, SSRS, and near real-time reporting.",
      "Consolidated 15+ SQL Servers into a centralized clustered architecture and improved query performance through plan analysis, indexing, and refactoring.",
      "Built full-stack and desktop tools with React, Node.js, Microsoft Graph API, C#, WPF, SQL Server, Dapper, and .NET 8.",
      "Created custom T-SQL health monitoring scripts for database growth, storage utilization, backup validation, and SQL Agent job reporting.",
      "Built 50+ Power Automate workflows, Power BI dashboards, and KPI reporting solutions for operational teams.",
    ],
  },
  {
    period: "2021 - 2022",
    title: "Network Technician",
    org: "VOIP Express",
    summary:
      "Deployed and supported Cisco VoIP systems for small and mid-sized organizations.",
    highlights: [
      "Configured extensions, call routing, voicemail systems, and user assignments.",
      "Performed remote troubleshooting and technical support for production communication systems.",
    ],
  },
  {
    period: "2025",
    title: "BAS Software Development",
    org: "Green River College",
    summary:
      "Completed a Bachelor of Applied Science in Software Development while working full-time and continuing to grow across software, database, and automation work.",
    highlights: [
      "Built personal and academic GitHub projects across web, database, and application development.",
      "Connected technical execution with strong requirements gathering, documentation, and user-centered communication.",
    ],
  },
];

export const projects = [
  {
    title: "Hot Seat Drawing Application",
    type: "Professional case study",
    description:
      "Automated a manual winner selection workflow with a C# WPF application integrated with live gaming data and SQL Server back-end services.",
    stack: ["C#", "WPF", ".NET 8", "SQL Server", "Dapper"],
    status: "Proprietary",
    image: "./assets/hot-seat-drawing.png",
  },
  {
    title: "SQL Health Monitoring Toolkit",
    type: "DBA utility",
    description:
      "Custom T-SQL health scripts and reporting checks for database growth, storage utilization, backup validation, and SQL Agent job monitoring.",
    stack: ["T-SQL", "SQL Server Agent", "SSRS", "Redgate", "SQL Profiler"],
    status: "Internal tooling",
  },
  {
    title: "Enterprise Employee Directory",
    type: "Full-stack app",
    description:
      "A searchable employee directory built around Microsoft Graph API and SharePoint Online to make internal people data easier to maintain and find.",
    stack: ["React", "Node.js", "Microsoft Graph API", "SharePoint Online"],
    status: "Professional",
  },
  {
    title: "Service First Evaluation Platform",
    type: "Mobile / workflow",
    description:
      "Evaluation platform combining a mobile front end, local data storage, Power Apps, SharePoint, and automation to streamline service review workflows.",
    stack: ["React Native", "Node.js", "SQLite", "Power Apps", "Power Automate"],
    status: "Professional",
  },
  {
    title: "Python Automox Automation",
    type: "Automation",
    description:
      "Python automation project for endpoint operations and platform reporting, designed to reduce repetitive admin work and improve visibility.",
    stack: ["Python", "REST APIs", "Automation", "Reporting"],
    status: "GitHub project",
    link: "https://github.com/devNagy24",
  },
  {
    title: "Microsoft Defender Health Export",
    type: "Security reporting",
    description:
      "Automation for exporting Microsoft Defender health data through Microsoft APIs and Entra ID integration for clearer operational reporting.",
    stack: ["PowerShell", "Defender API", "Microsoft Entra ID", "Reporting"],
    status: "Automation",
  },
  {
    title: "Mando's Disc Golf Tournament Bracket",
    type: "GitHub project",
    description:
      "Tournament bracket application built with CRUD workflows and a practical SDLC approach for managing disc golf competition data.",
    stack: ["PHP", "JavaScript", "MySQL", "CRUD", "GitHub"],
    status: "GitHub project",
    link: "https://github.com/devNagy24",
  },
  {
    title: "Interactive Portfolio System",
    type: "Frontend",
    description:
      "This portfolio: a deployable React site with motion, responsive sections, command palette navigation, and data-driven content.",
    stack: ["React", "Vite", "CSS", "GitHub Pages"],
    status: "In progress",
    link: "https://github.com/devNagy24/Interactive_Portfolio",
  },
];

export const skillGroups = [
  {
    label: "Development",
    skills: ["C#", "JavaScript", "Python", "Java", "PHP", "PowerShell", "HTML", "CSS", "Git/GitHub"],
  },
  {
    label: "Frameworks",
    skills: ["React", "React Native", "Node.js", ".NET 8", "WPF", "Spring Boot", "Laravel", "Django", "Flask", "FastAPI"],
  },
  {
    label: "Database",
    skills: ["T-SQL", "SQL Server", "Azure SQL", "PostgreSQL", "SQLite", "MongoDB", "NoSQL", "SSIS", "SSRS"],
  },
  {
    label: "DBA Systems",
    skills: ["Replication", "High availability", "Disaster recovery", "Query optimization", "Performance tuning", "Database security"],
  },
  {
    label: "Cloud & Microsoft",
    skills: ["SharePoint Online", "Power Apps", "Power Automate", "Power BI", "Microsoft Graph API", "Defender API", "Entra ID"],
  },
  {
    label: "Operations",
    skills: ["Troubleshooting", "Documentation", "Stakeholder support", "Automation", "Production care", "Requirements gathering"],
  },
  {
    label: "Tools",
    skills: ["Visual Studio", "VS Code", "SSMS", "Azure Data Studio", "Redgate", "Docker", "Kubernetes", "Jupyter Notebook"],
  },
];

export const resumeHighlights = [
  "Software Developer & Database Administrator supporting enterprise SQL Server and application systems",
  "BAS Software Development, Green River College (2025); AAS Software Development, Bates Technical College (2023)",
  "Built SQL Server replication, reporting, health monitoring, and automation solutions for operational teams",
  "Full-stack and desktop experience across React, Node.js, C#, WPF, .NET 8, Python, PHP, Java, and SQL",
];
