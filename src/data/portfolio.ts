import plante from "../assets/images/plante.jpg"
import knowbase from "../assets/images/knowbase.png"
import employer from "../assets/images/employer.png"

export const personalInfo = {
  about: "Final-year Computer Engineering student (graduating 2027) with hands-on experience in data preparation, machine learning and deep learning models, and generative AI (RAG, LLM integration), exposed through REST APIs and deployed with Docker. Seeking an end-of-studies internship (PFE) in Data Science / AI with the prospect of a full-time offer.",
};

export const skills = [
  {
    category: "Languages",
    items: ["Python", "SQL", "Java", "TypeScript", "Bash"]
  },
  {
    category: "Data Science & ML",
    items: ["Scikit-learn", "TensorFlow", "CNN", "pandas", "NumPy", "Matplotlib", "Seaborn", "EDA"]
  },
  {
    category: "Generative AI",
    items: ["LLMs", "RAG", "LangChain", "Embeddings", "Semantic Search", "Prompt Engineering", "ChromaDB", "pgvector"]
  },
  {
    category: "APIs & Backend",
    items: ["FastAPI", "Spring Boot", "Node.js", "REST", "JWT", "Spring Security", "JPA/Hibernate"]
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Docker Compose", "Git", "Linux", "PostgreSQL", "MySQL", "MinIO"]
  }
];

export const projects = [
  {
    title: "KnowBase — Personal RAG Platform",
    description: "Microservices architecture combining a Spring Boot backend (REST API, JWT), a Python generative AI service (RAG), and an Android mobile app, deployed with Docker Compose.",
    image: knowbase,
    tech: ["Spring Boot", "Python", "FastAPI", "LangChain", "pgvector", "Docker"],
    github: "https://github.com/SaadTechie"
  },
  {
    title: "Employee Attrition and Salary Prediction",
    description: "Data preparation and exploratory analysis of the IBM HR Analytics dataset, followed by training and evaluation of classification and regression models to identify the key drivers of attrition and salary.",
    image: employer,
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/SaadTechie"
  },
  {
    title: "Intelligent Crop Analysis",
    description: "Built and trained a deep learning CNN model for plant disease recognition and exposed it through a real-time Gradio interface for interactive demo use.",
    image: plante,
    tech: ["Python", "TensorFlow", "CNN", "Gradio"],
    github: "https://github.com/SaadTechie/plant-disease-detection"
  }
];

export const experiences = [
  {
    role: "AI Software Engineer",
    company: "SEGULA Technologies",
    period: "July – September 2026 · Casablanca, Morocco",
    description: "Designed and built a multimodal generative AI pipeline (RAG) in Python, FastAPI, LangChain, ChromaDB, PostgreSQL, and MinIO for extraction, summarization, and semantic search over vehicle homologation technical documents. Optimized vector search relevance, implemented APIs with JWT authentication and role-based access, added resilience mechanisms for rate limits, and designed a fully local open-source LLM architecture to meet industrial confidentiality constraints. Containerized the whole application with Docker.",
    tech: ["Python", "FastAPI", "LangChain", "RAG", "ChromaDB", "PostgreSQL", "MinIO", "Docker"]
  },
  {
    role: "Full-Stack Engineer",
    company: "Royal Air Maroc – Digital Factory",
    period: "August 2025 · Casablanca, Morocco",
    description: "Designed and developed an employee attendance management system. Built a REST backend with Spring Boot and PostgreSQL, developed the frontend using React and TypeScript, implemented JWT authentication and role management, and contributed to the full development cycle from requirements analysis to implementation.",
    tech: ["Spring Boot", "PostgreSQL", "React", "TypeScript", "JWT", "REST API"]
  }
];