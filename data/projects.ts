export interface CuratedProject {
  num: string;
  name: string;
  label: string;
  url: string;
  owner?: string;
  description: string;
  tech?: string[];
}

export const mainProjects: CuratedProject[] = [
  {
    num: "01",
    name: "Safar-AI-Smart-Route-Predictor",
    label: "Open Safar AI",
    url: "https://github.com/hamzaali-712/Safar-AI-Smart-Route-Predictor",
    description:
      "Pakistan's first AI-powered route predictor forecasting road blockages and calculating real-time fuel costs in PKR. Integrates A* routing and an AI agent 'Raasta'.",
    tech: ["Python", "XGBoost", "scikit-learn", "Streamlit"],
  },
  {
    num: "02",
    name: "MBPLDS-DSA-Project-",
    label: "Open MBPLDS",
    url: "https://github.com/hamzaali-712/MBPLDS-DSA-Project-",
    description:
      "Real-time breached-password monitoring tool implementing 8 core data structures (AVL Trees, BST, Hash Tables, Heaps, Graph traversal) with risk scoring.",
    tech: ["C++", "OOP", "DSA", "Cybersecurity"],
  },
  {
    num: "03",
    name: "Network-Controlled-Custom-CMD-Panel-Using-TCP-Sockets",
    label: "Open TCP Sockets Project",
    url: "https://github.com/hamzaali-712/Network-Controlled-Custom-CMD-Panel-Using-TCP-Sockets",
    description:
      "Multi-client TCP socket server providing remote shell execution, real-time command streaming, and encrypted administrative control.",
    tech: ["Python", "TCP/IP Sockets", "Networking"],
  },
  {
    num: "04",
    name: "ShredX",
    label: "Open ShredX",
    url: "https://github.com/hamzaali-712/ShredX",
    description:
      "Progressive overload fitness tracking and workout telemetry application providing automated volume load calculations and progress analytics.",
    tech: ["Python", "Data Visualization", "Streamlit"],
  },
  {
    num: "05",
    name: "ML — FlyRank internship",
    label: "Open ML Repository",
    url: "https://github.com/hamzaali-712/ML",
    description:
      "Applied machine learning workflows developed during FlyRank AI internship: feature engineering on Google Search Console & GA4 datasets and ranking models.",
    tech: ["Python", "Pandas", "DuckDB", "scikit-learn"],
  },
];

export const contributionProjects: CuratedProject[] = [
  {
    num: "01",
    name: "hit-and-check",
    owner: "AkifNaveed12",
    label: "Open repository",
    url: "https://github.com/AkifNaveed12/hit-and-check",
    description:
      "Collaborative security automation tool built with teammate Akif Naveed focusing on vulnerability inspection and reconnaissance.",
    tech: ["Python", "Cybersecurity", "Network Recon"],
  },
  {
    num: "02",
    name: "Kairon",
    owner: "AkifNaveed12",
    label: "Open repository",
    url: "https://github.com/AkifNaveed12/Kairon",
    description:
      "Autonomous AI development repository built with Akif Naveed exploring LLM workflow orchestration and intelligent response chaining.",
    tech: ["Python", "AI Agents", "LLM Integration"],
  },
  {
    num: "03",
    name: "Schema-aware Synthetic Data Platform",
    owner: "AkifNaveed12",
    label: "Open repository",
    url: "https://github.com/AkifNaveed12/Schema-aware-synthetic-data-platform",
    description:
      "Synthetic data generator engineered with Akif Naveed preserving relational schema constraints, foreign-key links, and statistical distributions.",
    tech: ["Python", "Data Synthesis", "Relational Modeling"],
  },
  {
    num: "04",
    name: "AI Resume Analyzer",
    owner: "FarukhMumtaz",
    label: "Open repository",
    url: "https://github.com/FarukhMumtaz/AI-Resume-Analyzer",
    description:
      "Natural language resume parser and scoring engine built with Farukh Mumtaz. Parses resumes, matches skills to job requirements, and provides actionable feedback.",
    tech: ["Python", "NLP", "Streamlit"],
  },
  {
    num: "05",
    name: "CyberCrime-IS",
    owner: "FarukhMumtaz",
    label: "Open repository",
    url: "https://github.com/FarukhMumtaz/CyberCrime-IS",
    description:
      "Collaborative information security investigation framework and incident reporting repository engineered in partnership with Farukh Mumtaz.",
    tech: ["Python", "Information Security", "Forensics"],
  },
];

// Compatibility exports
export const allProjects = [...mainProjects, ...contributionProjects];
export const featuredProjects = allProjects;
