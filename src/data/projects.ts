export type L = { en: string; fr: string };
export type GalleryItem = { src: string; caption: L; alt?: L };

export type Project = {
  id: string;
  slug: string;
  title: L;
  summary: L;     // shown on card
  overview: L;    // shown at top of modal
  tags: string[];
  stack: string[];
  coverImage: string;
  gallery: GalleryItem[];   // images with captions
  repoUrl: string;          // opens new tab
};

export const projects: Project[] = [
  // 0) Portfolio Website (ajout)
  {
    id: "0",
    slug: "portfolio-site",
    title: {
      en: "Personal Portfolio Website",
      fr: "Site Web Portfolio Personnel",
    },
    summary: {
      en: "Responsive portfolio built with React/TypeScript, Tailwind, shadcn/ui, routing, i18n and project modals.",
      fr: "Portfolio responsive développé avec React/TypeScript, Tailwind, shadcn/ui, routage, i18n et modales de projets.",
    },
    overview: {
      en: "This website showcases my work with a clean UI and fast UX. It features a projects gallery with image modals, a bilingual interface (EN/FR), reusable UI components, and a data-driven projects file for easy future updates.",
      fr: "Ce site présente mes réalisations avec une interface soignée et performante. Il inclut une galerie de projets avec modales d’images, une interface bilingue (EN/FR), des composants UI réutilisables et un fichier de données pilotant les projets pour simplifier les mises à jour futures.",
    },
    tags: ["React", "TypeScript", "Tailwind", "shadcn/ui", "Vite", "Routing", "i18n"],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "react-router", "lucide-react"],
    coverImage: "/images/sentiment-analysis/cover.jpg",
    gallery: [
      {
        src: "/images/sentiment-analysis/gallery-1.jpg",
        caption: {
          en: "Projects page with featured cards, tags, and code/details actions",
          fr: "Page Projets avec cartes à la une, tags et actions code/détails",
        },
      },
      {
        src: "/images/sentiment-analysis/gallery-2.jpg",
        caption: {
          en: "About page highlighting skills, tech stack, and experience",
          fr: "Page À propos présentant compétences, pile technologique et expérience",
        },
      },
      {
        src: "/images/sentiment-analysis/gallery-3.jpg",
        caption: {
          en: "Contact page with quick links for email, LinkedIn and GitHub",
          fr: "Page Contact avec accès rapide à l’email, LinkedIn et GitHub",
        },
      },
    ],
    repoUrl: "https://github.com/Hsan17/mon-portfolio",
  },

  // 1) R/Shiny – NSC Tunisia (already included)
  {
    id: "1",
    slug: "r-shiny-nsc",
    title: {
      en: "R/Shiny Interactive Dashboards – NSC Tunisia",
      fr: "Tableaux de bord interactifs R/Shiny – NSC Tunisie",
    },
    summary: {
      en: "Built an R/Shiny app for automated ASP analysis and Excel integration, cutting reports from 2 days to 3 hours.",
      fr: "Application R/Shiny pour l’analyse ASP et l’intégration Excel, réduisant le reporting de 2 jours à 3 heures.",
    },
    overview: {
      en: "During my Data Science Internship at the National Statistical Council (NSC) of Tunisia (Summer 2024), I designed and deployed an interactive R/Shiny application. It automates processing of ASP data and Excel files and provides 14 real-time dashboards for stakeholders to monitor statistical structures, significantly enhancing decision-making.",
      fr: "Lors de mon stage en Data Science au Conseil National de la Statistique (CNS) en Tunisie (été 2024), j’ai conçu et déployé une application R/Shiny interactive. Elle automatise le traitement des données ASP et des fichiers Excel et offre 14 tableaux de bord en temps réel pour le suivi des structures statistiques, améliorant fortement la prise de décision.",
    },
    tags: ["R", "Shiny", "Data Visualization", "Automation"],
    stack: ["R", "Shiny", "Excel", "ggplot2"],
    coverImage: "/images/customer-segmentation/cover.jpg",
    gallery: [
      {
        src: "/images/customer-segmentation/gallery-1.jpg",
        caption: {
          en: "Breakdown of data sources: administrative records, surveys, and censuses",
          fr: "Répartition des sources de données : administratives, enquêtes et recensements",
        },
      },
      {
        src: "/images/customer-segmentation/gallery-2.jpg",
        caption: {
          en: "Thematic distribution of statistical production across health, education, economy, and agriculture",
          fr: "Répartition thématique de la production statistique : santé, éducation, économie, agriculture",
        },
      },
      {
        src: "/images/customer-segmentation/gallery-3.jpg",
        caption: {
          en: "Relevance score table with mean values and measure counts per institution",
          fr: "Tableau des scores de pertinence : moyenne et nombre de mesures par structure",
        },
      },
      {
        src: "/images/customer-segmentation/gallery-4.jpg",
        caption: {
          en: "Year-over-year evolution of relevance scores by institution",
          fr: "Évolution annuelle des scores de pertinence par structure",
        },
      },
    ],
    repoUrl: "https://github.com/Hsan17/R-Shiny-Project.git",
  },

  // 2) Pharmacogenomics Data Platform & RAG Medical Chatbot (already included)
  {
    id: "2",
    slug: "pgx-rag-chatbot",
    title: {
      en: "Pharmacogenomics Data Platform & RAG Medical Chatbot",
      fr: "Plateforme Pharmacogénomique & Chatbot Médical RAG",
    },
    summary: {
      en: "Engineered a PGx dataset (1,339 drugs, +18 features/entry) and built a RAG chatbot for precise drug, interaction and genetics answers.",
      fr: "Jeu de données PGx (1 339 médicaments, +18 attributs/entrée) et chatbot RAG pour des réponses précises sur médicaments, interactions et génétique.",
    },
    overview: {
      en: "Engineered and enriched a pharmacogenomic dataset by processing 1,339 drug records and integrating 18 new features per entry (genes, variants, clinical guidelines) from PharmGKB and PubChem. Built a RAG-based medical chatbot (LLM + retrieval) to deliver contextual answers on drugs, interactions and genetics. Tech stack: Django REST Framework APIs, React/TypeScript front-end, Tailwind CSS, shadcn/ui.",
      fr: "Ingénierie et enrichissement d’un jeu de données pharmacogénomiques : 1 339 médicaments avec 18 attributs/entrée (gènes, variants, recommandations cliniques) intégrés depuis PharmGKB et PubChem. Chatbot médical RAG (LLM + retrieval) offrant des réponses contextuelles sur médicaments, interactions et génétique. Stack : APIs Django REST Framework, front-end React/TypeScript, Tailwind CSS, shadcn/ui.",
    },
    tags: ["Pharmacogenomics", "RAG", "LLM", "Django", "React"],
    stack: ["Django REST Framework", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    coverImage: "/images/fraud-detection/cover.jpg",
    gallery: [
      {
        src: "/images/fraud-detection/gallery-1.jpg",
        caption: {
          en: "Curated PGx dataset (1,339 drugs) with 18 added features per entry from PharmGKB & PubChem",
          fr: "Jeu de données PGx (1 339 médicaments) avec 18 attributs ajoutés par entrée depuis PharmGKB & PubChem",
        },
      },
      {
        src: "/images/fraud-detection/gallery-2.jpg",
        caption: {
          en: "Medical assistant (RAG) answering contextual questions on drugs, variants and guidelines",
          fr: "Assistant médical (RAG) répondant aux questions contextuelles sur médicaments, variants et recommandations",
        },
      },
      {
        src: "/images/fraud-detection/gallery-3.jpg",
        caption: {
          en: "Drug monograph generator and toxicity checker built with DRF + React",
          fr: "Générateur de monographies et vérification de toxicité avec DRF + React",
        },
      },
      {
        src: "/images/fraud-detection/gallery-4.jpg",
        caption: {
          en: "Toxicity analysis module predicting molecular toxicity scores",
          fr: "Module d’analyse de toxicité prédisant des scores de toxicité moléculaire",
        },
      },
    ],
    repoUrl: "https://github.com/Hsan17/pasteur-medicheck-backend.git",
  },

  // 3) Book Recommender System
  {
    id: "3",
    slug: "book-recommender-system",
    title: {
      en: "Book Recommender System",
      fr: "Système de Recommandation de Livres",
    },
    summary: {
      en: "Streamlit app recommending books based on title input using NLP techniques (TF-IDF & cosine similarity).",
      fr: "Application Streamlit recommandant des livres en fonction du titre avec des techniques NLP (TF-IDF et similarité cosinus).",
    },
    overview: {
      en: "Developed a Book Recommender System using Streamlit, pandas, and scikit-learn. The app takes a book title as input, vectorizes descriptions using TF-IDF, and calculates cosine similarity to recommend books with similar content. Books are displayed with descriptions and cover images from the Google Books API.",
      fr: "Système de recommandation de livres développé avec Streamlit, pandas et scikit-learn. L’application prend un titre de livre en entrée, vectorise les descriptions avec TF-IDF et calcule la similarité cosinus pour recommander des livres similaires. Les livres sont affichés avec descriptions et images de couverture via l'API Google Books.",
    },
    tags: ["Streamlit", "NLP", "Book Recommendation", "TF-IDF", "Cosine Similarity"],
    stack: ["Streamlit", "pandas", "scikit-learn", "Requests", "Google Books API"],
    coverImage: "/images/book-recommender-system/cover.jpg",
    gallery: [
      {
        src: "/images/book-recommender-system/gallery-1.jpg",
        caption: {
          en: "User interface of the book recommender system showing the input and recommended books",
          fr: "Interface utilisateur du système de recommandation de livres montrant l'entrée et les livres recommandés",
        },
      },
      {
        src: "/images/book-recommender-system/gallery-2.jpg",
        caption: {
          en: "Book recommendation output with descriptions and cover images",
          fr: "Sortie de la recommandation de livres avec descriptions et images de couverture",
        },
      },
      {
        src: "/images/book-recommender-system/gallery-3.jpg",
        caption: {
          en: "Backend code processing book descriptions and calculating cosine similarity",
          fr: "Code backend traitant les descriptions de livres et calculant la similarité cosinus",
        },
      },
    ],
    repoUrl: "https://github.com/Hsan17/book-recommender-streamlit",
  },
  

   {
    id: "4",
    slug: "intelligent-pfe-tracker",
    title: {
      en: "Intelligent & Automated Recruitment Assistant (PFE Tracker)",
      fr: "Assistant de Recrutement Intelligent & Automatisé (PFE Tracker)",
    },
    summary: {
      en: "Smart pipeline for internship applications—automated email parsing, AI analysis, and centralized tracking with real-time notifications.",
      fr: "Pipeline intelligent pour candidatures de stage : parsing d’emails automatisé, analyse IA, suivi centralisé et notifications en temps réel.",
    },
    overview: {
      en: `Designed and deployed a hybrid automation system for internship (PFE) applications. Incoming emails are parsed semantically by a custom AI (FastAPI + spaCy), classified (Interview, Refusal, Pending), and tracked in real time via Google Sheets. Selective alerts notify via Slack only when an opportunity is detected.
Hybrid architecture with n8n orchestration, RESTful backend (FastAPI), NER and sentiment analysis, bilingual support, and robust error handling.`,
      fr: `Conception et déploiement d’un système d’automatisation hybride pour le suivi des candidatures de stage (PFE). Les emails entrants sont analysés sémantiquement par une IA personnalisée (FastAPI + spaCy), classés (Entretien, Refus, Attente) et centralisés en temps réel sur Google Sheets. Les notifications ciblées sont envoyées sur Slack uniquement si une opportunité d’entretien est détectée.
Architecture hybride avec orchestration n8n, backend RESTful (FastAPI), extraction NER et analyse de sentiment, support bilingue et gestion robuste des erreurs.`,
    },
    tags: ["Automation", "AI", "NLP", "ETL", "FastAPI", "spaCy", "n8n", "Slack", "Google Sheets"],
    stack: ["FastAPI", "spaCy", "Python", "n8n", "IMAP", "Google Sheets API", "Slack API", "ngrok"],
    coverImage: "/images/pfe-tracker/cover.jpg", // choisis le visuel général
    gallery: [
      {
        src: "/images/pfe-tracker/n8n-workflow.jpg",
        caption: {
          en: "n8n workflow orchestrating emails, HTTP/NLP, Google Sheets, and Slack notifications.",
          fr: "Workflow n8n orchestrant emails, HTTP/NLP, Google Sheets et notifications Slack.",
        },
      },
      {
        src: "/images/pfe-tracker/sheets-tracker.jpg",
        caption: {
          en: "Real-time candidate tracking in Google Sheets with status and AI summaries.",
          fr: "Suivi des candidatures en temps réel sur Google Sheets avec statuts et résumés IA.",
        },
      },
      {
        src: "/images/pfe-tracker/slack-alert.jpg",
        caption: {
          en: "Automated Slack alert: only interview opportunities are notified to mobile.",
          fr: "Alerte Slack automatisée : uniquement les opportunités d’entretien sont notifiées sur mobile.",
        },
      },
      {
        src: "/images/pfe-tracker/api-backend.jpg",
        caption: {
          en: "FastAPI backend integrating spaCy models (NER), bilingual NLP, and robust parsing.",
          fr: "Backend FastAPI intégrant spaCy (NER), NLP bilingue et parsing robuste.",
        },
      },
    ],
    repoUrl: "https://github.com/Hsan17/pfe-automation-api-hsan/tree/main", // Ajoute le lien GitHub ou Notion si tu veux partager
  },

  
  {
  id: "5",
  slug: "clinical-trials-pipeline",
  title: {
    en: "End-to-End Clinical Trials Data Pipeline",
    fr: "Pipeline de Données Essay Clinique — ETL Complet",
  },
  summary: {
    en: "Automated ETL pipeline for global clinical trials: data extraction, curation, cloud warehousing and dynamic BI dashboards.",
    fr: "Pipeline ETL automatisé pour essais cliniques mondiaux : extraction, nettoyage, data warehouse cloud et dashboards BI.",
  },
  overview: {
    en: `Designed a full data engineering pipeline to extract, transform, and analyze clinical trial data from ClinicalTrials.gov. The workflow automates ingestion via Python scripts, cleans and standardizes datasets, loads them to a scalable Snowflake data warehouse, and delivers actionable insights through interactive Power BI dashboards. Architecture combines modular Python (Pandas, Requests), Dockerized orchestration with Airflow, and seamless analytics from raw to curated layers.`,
    fr: `Conception d’un pipeline data engineering complet pour extraire, transformer et analyser les données d’essais cliniques mondiaux (ClinicalTrials.gov). Le flux automatise l’ingestion par scripts Python, le nettoyage et la standardisation des données, le chargement vers un data warehouse Snowflake évolutif, puis la restitution d’indicateurs stratégiques via des dashboards Power BI interactifs. L’architecture combine Python modulaire (Pandas, Requests), orchestration Docker/Airflow et analytics fluide de la donnée brute à la couche curée.`,
  },
  tags: ["ETL", "Data Engineering", "Python", "Airflow", "Docker", "Snowflake", "Power BI", "Cloud", "Healthcare"],
  stack: ["Python", "Pandas", "Requests", "PyArrow", "Docker", "Docker Compose", "Apache Airflow", "Snowflake", "Power BI"],
  coverImage: "/images/clinical-trials/cover.jpg",
  gallery: [
    {
      src: "/images/clinical-trials/etl-code.jpg",
      caption: {
        en: "ETL code for clinical trials loading, transformation and Snowflake integration",
        fr: "Code ETL pour chargement, transformation et intégration Snowflake des essais cliniques",
      },
    },
    {
      src: "/images/clinical-trials/airflow-dag.jpg",
      caption: {
        en: "Airflow DAG orchestrating daily clinical trial ETL",
        fr: "DAG Airflow orchestrant l’ETL quotidien des essais cliniques",
      },
    },
    {
      src: "/images/clinical-trials/snowflake-db.jpg",
      caption: {
        en: "Snowflake warehouse: creation scripts and clinical trial stats",
        fr: "Warehouse Snowflake : scripts de création et statistiques essais",
      },
    },
    {
      src: "/images/clinical-trials/powerbi-dashboard.jpg",
      caption: {
        en: "Power BI dashboard: Sponsors, trial phases and global distribution",
        fr: "Tableau de bord Power BI : sponsors, phases d’études et carte mondiale",
      },
    },
  ],
  repoUrl: "https://github.com/Hsan17/clinical-trials-pipeline"
}

  
];
