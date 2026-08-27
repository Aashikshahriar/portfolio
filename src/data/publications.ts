export type Publication = {
  id: string;
  type: "journal" | "conference"| "pre-print";
  title: string;
  authors: string;
  venue: string;
  year: number;
  link: string;
  highlight?: boolean;
};

const AUTHOR = "Khondakar Ashik Shahriar";

export const publications: Publication[] = [
  {
    id: "glioma-grade-classification",
    type: "journal",
    title: "Glioma Grade Classification: Hypertuned CNN with Saliency-Based Insight from MRI",
    authors: "Khondakar Ashik Shahriar, Enamul H Bhuiyan*, Md Forhad Hossain, Rakibur Rahman, Muhammad EH Chowdhury",
    venue: "IEEE Access",
    year: 2025,
    link: "https://ieeexplore.ieee.org/abstract/document/11045673/",
    highlight: true,
  },
  {
    id: "domain-adaptive-modulation-classification",
    type: "journal",
    title: "Lightweight Domain-Adaptive Modulation Classification Under SNR and Channel Mismatch",
    authors: "Khondakar Ashik Shahriar*",
    venue: "IEEE Wireless Communications Letters",
    year: 2026,
    link: "https://ieeexplore.ieee.org/abstract/document/11417161",
    highlight: true,
  },
  {
    id: "nonlinear-models-cognitive-load-stress-exercise",
    type: "journal",
    title: "Why Nonlinear Models Matter: Unified Analysis of Cognitive Load, Stress, and Exercise Using Wearable Physiological Signals",
    authors: "Khondakar Ashik Shahriar*",
    venue: "Physiological Measurement, IOPscience",
    year: 2026,
    link: "https://iopscience.iop.org/article/10.1088/1361-6579/ae520c/meta",
  },
  {
    id: "magnification-adaptation-breast-cancer-histopathology",
    type: "journal",
    title: "Generalize Beyond the Lens: Deep Magnification Adaptation in Breast Cancer Histopathology",
    authors: "Khondakar Ashik Shahriar, Maruf Ahmed, Sakib A Hossain, Muhammad EH Chowdhury, Enamul H Bhuiyan*",
    venue: "International Journal of Applied and Computational Intelligence Systems (IJACIS), Springer",
    year: 2026,
    link: "https://link.springer.com/article/10.1007/s44196-026-01273-4",
  },
  {
    id: "privacy-preserving-har-csi",
    type: "journal",
    title: "Lightweight Privacy-Preserving Human Activity Recognition from CSI Data using CNN-Temporal Attention Network",
    authors: "Khondakar Ashik Shahriar, Maruf Ahmed, Hafiz Imtiaz*",
    venue: "Digital Discovery, Royal Society of Chemistry",
    year: 2026,
    link: "https://pubs.rsc.org/en/content/articlehtml/2026/dd/d6dd00077k",
    highlight: true,
  },
  {
    id: "supervised-autoencoder-eeg-fmri-artifact-removal",
    type: "journal",
    title: "Supervised Autoencoder for Gradient and BCG Artifact Removal in EEG during Simultaneous EEG-fMRI",
    authors: "Khondakar Ashik Shahriar, EH Bhuiyan*, Qingfei Luo, MEH Chowdhury",
    venue: "Magnetic Resonance Imaging, Elsevier",
    year: 2026,
    link: "https://www.sciencedirect.com/science/article/pii/S0730725X26001232",
  },
  {
    id: "parkinsons-severity-longitudinal-speech",
    type: "journal",
    title: "Uncertainty-Aware Personalized Estimation of Parkinson's Disease Severity from Longitudinal Speech",
    authors: "Khondakar Ashik Shahriar*",
    venue: "PLOS One",
    year: 2026,
    link: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0343191",
    highlight: true,
  },
  {
    id: "cross-spectral-event-detection-fiber",
    type: "journal",
    title: "Cross-Spectral Second-Order Modeling for Robust Event Detection in Distributed Fiber Channels",
    authors: "Khondakar Ashik Shahriar*",
    venue: "IEEE Communications Letters",
    year: 2026,
    link: "https://ieeexplore.ieee.org/document/11643788",
  },
  {
    id: "bayesian-qsm-uncertainty-quantification",
    type: "journal",
    title: "A Physics-Constrained Bayesian Framework for QSM with Uncertainty Quantification and Variational Susceptibility Source Separation",
    authors: "Khondakar Ashik Shahriar, Maruf Ahmed*",
    venue: "Physics in Medicine & Biology",
    year: 2026,
    link: "https://iopscience.iop.org/article/10.1088/1361-6560/ae9c82",
  },
  {
    id: "bidirectional-eeg-fmri-reconstruction",
    type: "conference",
    title: "Bidirectional EEG–fMRI Reconstruction via a Shared Latent Space for Cross-Modal Neuroimaging",
    authors: "Khondakar Ashik Shahriar, Maruf Ahmed, Enamul H. Bhuiyan*",
    venue: "ISMRM 2026",
    year: 2026,
    link: "https://echo.ismrm.org/abstracts/view/d99dd6ac-4219-49ac-a8c9-bab07cfbbd3e",
  },
  {
    id: "multimodal-physiological-signal-classification",
    type: "conference",
    title: "Multimodal Physiological Signal Classification from Wearables: Towards Interpretable Stress and Exercise Recognition",
    authors: "Khondakar Ashik Shahriar*",
    venue: "IEEE SPICSCON 2025",
    year: 2025,
    link: "https://ieeexplore.ieee.org/abstract/document/11504409/",
  },
  {
    id: "drone-bird-tracking",
    type: "conference",
    title: "Real-Time Multi-Modal Drone and Bird Tracking Using Modality-Aware Adaptation and Physics-Aware Filtering",
    authors: "Fabliha Labiba, Mohammad Asif Hasan, Sudipto Sarkar, Khondakar Ashik Shahriar, Nahian Tasnim, Shaikh Anwarul Fattah*",
    venue: "IEEE WIECON-ECE 2025",
    year: 2025,
    link: "https://ieeexplore.ieee.org/abstract/document/11526317",
  },
  {
    id: "audio-deepfake",
    type: "pre-print",
    title: "Lightweight Resolution-Aware Audio Deepfake Detection via Cross-Scale Attention and Consistency Learning",
    authors: "Khondakar Ashik Shahriar*",
    venue: "arXiv",
    year: 2026,
    link: "https://arxiv.org/abs/2601.06560",
  },
  {
    id: "pediatric-teledermatology",
    type: "pre-print",
    title: "A Multimodal Attention-Based Multi-Instance Learning Framework for Fair and Interpretable Pediatric Teledermatology",
    authors: "Khondakar Ashik Shahriar*",
    venue: "Research Square",
    year: 2026,
    link: "https://assets-eu.researchsquare.com/files/rs-8880185/v1_covered_763062b7-fbc4-4f9f-9cf0-cfb80c54c6a5.pdf",
  },
  {
    id: "raman-spectroscopy",
    type: "pre-print",
    title: "Raman Spectroscopy-Based COVID-19 Screening: A Physics-Informed Deep Spectral Framework",
    authors: "Khondakar Ashik Shahriar, Maruf Ahmed, Md. Forhad Hossain, Sakib Abrar Hossain, Muhammed Enamul Hoque Chowdhury, Enamul Hoque Bhuiyan*",
    venue: "SSRN",
    year: 2026,
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5854019",
  },
  {
    id: "vip-cup-2026",
    type: "pre-print",
    title: "EGD-YOLO: A Lightweight Multimodal Framework for Robust Drone-Bird Discrimination via Ghost-Enhanced YOLOv8n and EMA Attention under Adverse Condition",
    authors: "Sudipto Sarkar, Mohammad Asif Hasan, Khondakar Ashik Shahriar, Fabliha Labiba, Nahian Tasnim, Shaikh Anwarul Fattah*",
    venue: "SSRN",
    year: 2026,
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5854019",
  },

];

export const journalArticles = publications.filter((p) => p.type === "journal");
export const conferencePapers = publications.filter((p) => p.type === "conference");
export const preprints = publications.filter((p) => p.type === "pre-print");
export const highlightedPublications = publications.filter((p) => p.highlight);

export { AUTHOR };
