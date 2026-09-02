export type Project = {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  repoUrl: string;
  demoUrl?: string;
};

export const projects: Project[] = [
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
