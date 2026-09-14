export type Project = {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  repoUrl?: string;
  demoUrl?: string;
  demoLabel?: string;
  org?: string;
  highlight?: boolean;
};

export const projects: Project[] = [
  {
    name: "AutoFix AI",
    tagline: "An AI co-pilot for automotive repair.",
    description:
      "A diagnostic platform that turns a photo, a symptom description, or a scanned part into an instant fault diagnosis, the right replacement part, and a step-by-step repair walkthrough — covering ICE, hybrid, and EV vehicles. Built for trainees and professional mechanics alike, it runs on a set of specialized AI agents (engine, electrical, parts, brakes, guides, safety), a 295+ part catalog with fitment lookup, and step-by-step repair guides, fully bilingual in English and Bengali.",
    tech: ["AI Diagnostics", "Multi-Agent System", "Computer Vision", "Bilingual (EN/BN)"],
    demoUrl: "https://autofix.acimisai.com/",
    demoLabel: "Visit AutoFix AI",
    org: "ACI PLC",
    highlight: true,
  },
  {
    name: "ResearchPilot",
    tagline: "An AI research workspace — chat with your papers, not just search them.",
    description:
      "A full-stack research assistant for working with academic papers: upload a PDF and chat with it via retrieval-augmented generation with citations, extract and classify its figures with computer vision, compare papers structurally side-by-side, and track experiments alongside them. Runs on a pluggable LLM layer with failover across OpenAI, Gemini, Mistral, and Groq.",
    tech: ["Next.js", "FastAPI", "PostgreSQL + pgvector", "RAG", "PyMuPDF"],
    repoUrl: "https://github.com/Aashikshahriar/ResearchPilot",
    demoUrl: "https://research-pilot-amber.vercel.app",
    demoLabel: "Live Demo",
  },
  {
    name: "SVD Visualizer",
    tagline: "Watch a matrix decomposition happen, geometrically.",
    description:
      "An interactive tool that makes the geometry behind Singular Value Decomposition (A = UΣVᵀ) visible instead of abstract — a circle gets rotated by Vᵀ, stretched by Σ, and rotated again by U as it turns into an ellipse, staged across four views. Built to make SVD's role in image compression, PCA, and recommendation systems click intuitively.",
    tech: ["JavaScript", "HTML5 Canvas", "Numeric.js"],
    repoUrl: "https://github.com/Aashikshahriar/svd_visualizer",
    demoUrl: "https://aashikshahriar.github.io/svd_visualizer/",
  },
  {
    name: "SmartRideSharing",
    tagline: "An AI-powered intelligent ride-sharing platform.",
    description:
      "A full-stack ride-hailing platform with machine learning woven into the core flows: a random-forest model for ETA prediction, a driver recommendation system, and a fraud-detection classifier, alongside a context-aware AI chatbot. FastAPI + SQLAlchemy on the backend, React + Vite on the frontend, with live WebSocket tracking on an OpenStreetMap/OSRM map.",
    tech: ["FastAPI", "React", "Scikit-learn", "WebSockets", "OpenStreetMap"],
    repoUrl: "https://github.com/Aashikshahriar/SmartRideSharing",
  },
  {
    name: "PCA Learning Dashboard",
    tagline: "Plug, play, and learn Principal Component Analysis — interactively.",
    description:
      "A Streamlit dashboard that turns PCA from a black box into something you can poke at: adjust sample count, correlation, noise, and the number of retained components, and watch mean-centering, the covariance matrix, eigen-decomposition, projection, and explained variance update live, including a 3D view of the components.",
    tech: ["Python", "Streamlit", "NumPy", "Plotly", "Scikit-learn"],
    repoUrl: "https://github.com/Aashikshahriar/PCA_learning",
    demoUrl: "https://pcalearning-madebyashik.streamlit.app/",
  },
];
