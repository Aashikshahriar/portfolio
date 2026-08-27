export type SocialLink = {
  name: string;
  url: string;
  icon:
    | "mail"
    | "scholar"
    | "researchgate"
    | "orcid"
    | "github"
    | "kaggle"
    | "linkedin"
    | "facebook";
};

export const profile = {
  name: "Khondakar Ashik Shahriar",
  title: "Machine Learning Engineer | Research Assistant",
  shortBio:
    "I work on machine learning for biomedical signal processing, medical imaging, and wireless communications — from EEG-fMRI artifact removal to lightweight, privacy-preserving models for wearables and edge devices.",
  location: "Dhaka, Bangladesh",
  email: "kh.ashikshahriar@gmail.com",
  phone: "+88 01551225822",
  photos: {
    main: "photo_main.jpg",
    alaska: "photo_alaska.jpg",
    bungee: "photo_bungee.jpg",
  },
  social: [
    { name: "Email", url: "mailto:kh.ashikshahriar@gmail.com", icon: "mail" },
    {
      name: "Google Scholar",
      url: "https://scholar.google.com/citations?user=fM9ULFUAAAAJ&hl=en",
      icon: "scholar",
    },
    {
      name: "ResearchGate",
      url: "https://www.researchgate.net/profile/Khondakar-A-Shahriar",
      icon: "researchgate",
    },
    {
      name: "ORCID",
      url: "https://orcid.org/0009-0008-2571-7485",
      icon: "orcid",
    },
    { name: "GitHub", url: "https://github.com/Aashikshahriar", icon: "github" },
    { name: "Kaggle", url: "https://www.kaggle.com/ashikshahriar", icon: "kaggle" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/ashik-shahriar-3387b9258/", icon: "linkedin" },
    { name: "Facebook", url: "https://www.facebook.com/ashik.ceusc/", icon: "facebook" },
  ] satisfies SocialLink[],

  education: [
    {
      institution: "Bangladesh University of Engineering and Technology (BUET)",
      location: "Dhaka, Bangladesh",
      degree: "BSc. in Electrical and Electronic Engineering",
      period: "Jan 2022 – June 2026",
      details: [
        "Thesis Supervisor: Dr. Maruf Ahmed",
        "CGPA: 3.61 / 4.0",
      ],
    },
  ],

  affiliations: [
    {
      org: "ACI PLC",
      role: "Machine Learning Engineer",
      period: "August 2026 – Present",
      url: "#",
    },
    {
      org: "University of Illinois Chicago (CMRR Lab)",
      role: "Remote Research Assistant",
      period: "August 2024 – Present",
      detail: "PI: Dr. Enamul Hoque Bhuiyan",
      url: "https://chicago.medicine.uic.edu/profiles/bhuiyan-enamul/",
    },
    {
      org: "Bangladesh University of Engineering and Technology (BUET)",
      role: "Undergraduate Researcher, Dept. of EEE",
      period: "Jan 2022 – Present",
      detail: "Thesis Supervisor: Dr. Maruf Ahmed",
      url: "https://eee.buet.ac.bd/people/faculty/dmara",
    },
  ],

  researchInterests: [
    "Machine Learning",
    "Deep Learning",
    "ML for Wireless Communications",
    "Privacy-preserving Machine Learning",
    "Biomedical Signal Processing",
    "Medical Imaging",
    "Computer Vision",
    "Edge AI",
  ],

  reviewer: [
    "IEEE Transactions on Vehicular Technology",
    "Measurement Science and Technology (IOP Publishing)",
    "PLOS ONE",
    "Medical Engineering & Physics (Elsevier)",
  ],

  leadership: [
    { role: "Vice President", org: "IEEE Student Branch, BUET" },
    { role: "Vice Chairperson", org: "IEEE Robotics and Automation Society (RAS) Student Branch, BUET" },
    { role: "Vice President (Technical)", org: "BUET Robotics Society" },
  ],

  skills: {
    Programming: ["C", "C++", "Embedded C", "Python", "Verilog", "MATLAB", "MicroPython", "Arduino", "HTML", "JavaScript", "CSS"],
    Research: ["LaTeX", "Microsoft Word", "R", "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "PyTorch", "Corresponding Authorship"],
    Design: ["System Integration", "Data Acquisition", "React", "Node.js", "FastAPI", "Git/GitHub", "PCB Design (Proteus, EasyEDA)"],
    Devices: ["Arduino Uno", "Arduino Mega", "Arduino Nano", "ESP-32", "ESP-CAM", "Raspberry Pi Pico", "Raspberry Pi", "FPGA Board", "STM-32"],
  },

  honors: [
    {
      title: "IEEE VIP CUP 2025 — 2nd Runner-Up, Team EyeQ",
      url: "https://signalprocessingsociety.org/community-involvement/vip-cup-2025-icip-2025",
    },
    {
      title: "KUET BitFest Datathon — Champion",
      url: "https://drive.google.com/file/d/1RzsK1W2ZDwux3yMeRIIJ3m_7ZiBOdzXF/view?usp=sharing",
    },
    {
      title: "EEE Day BUET 2023 Project Showcasing — 2nd Prize",
      url: "https://drive.google.com/file/d/111wDU4eUCPPTm3utV3spEl3ukxgasiTW/view?usp=sharing",
    },
    { title: "Undergraduate Dean's List Award (Level-1/Term-1)", url: null },
    { title: "5th in National Physics Olympiad, Bangladesh (2018)", url: null },
  ],

  englishProficiency: {
    test: "TOEFL iBT",
    score: "4.5 / 6.0",
    breakdown: "R: 4.5, L: 4.5, S: 4.5, W: 5",
    url: "https://drive.google.com/file/d/1TapMsw1yH6FTXwtwENFhdRBZpjrvXBp9/view?usp=sharing",
  },

  references: [
    {
      name: "Dr. Enamul Hoque Bhuiyan",
      role: "Research Scientist, Department of Radiology, University of Illinois Chicago",
      relation: "Research Supervisor",
      email: "bhuiyan@uic.edu",
      url: "https://chicago.medicine.uic.edu/profiles/bhuiyan-enamul/",
    },
    {
      name: "Dr. Hafiz Imtiaz",
      role: "Professor, Dept. of EEE, BUET",
      relation: "Research Collaborator",
      email: "hafizimtiaz@eee.buet.ac.bd",
      url: null,
    },
    {
      name: "Dr. Maruf Ahmed",
      role: "Professor, Dept. of EEE, BUET",
      relation: "Thesis Supervisor",
      email: "maruf_ahmed@eee.buet.ac.bd",
      url: null,
    },
    {
      name: "Dr. Ziaur Rahman Khan",
      role: "Professor, Dept. of EEE, BUET",
      relation: "Undergraduate Advisor",
      email: "zrkhan@eee.buet.ac.bd",
      url: null,
    },
  ],

  cvFile: "cv.pdf",
};
