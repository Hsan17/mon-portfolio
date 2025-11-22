import { Tag } from '@/components/Tag';
import { useI18n } from '@/i18n/provider';

/** ===== Skills (mise à jour depuis tes 2 CV) ===== */
const skillsData = {
  languages: ['Python', 'SQL', 'R', 'Java', 'C'],
  frameworks: [
    'scikit-learn',
    'TensorFlow',
    'PyTorch',
    'NumPy',
    'pandas',
    'Matplotlib',
    'Plotly',
    'Hugging Face',
    'React',
    'Django REST',
    'FastAPI',
    'Streamlit',
    'R/Shiny'
  ],
  tools: ['Apache Airflow', 'Docker', 'Snowflake', 'Power BI', 'Git/GitHub Actions', 'Jupyter', 'n8n'],
  techniques: ['RAG', 'NLP', 'Computer Vision', 'Time Series', 'A/B Testing', 'Data Engineering', 'MLOps']
} as const;

export default function About() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* ===== Titre en blanc ===== */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-white inline-block">
            {t.about?.title ?? 'About Me'}
          </h1>
        </div>

        {/* ===== Bio ===== */}
        <div className="bg-card text-card-foreground rounded-2xl p-8 shadow-paper mb-12">
          <p className="text-lg leading-relaxed">
            {t.about?.bio ??
              `Data Scientist & ML Engineer, je conçois des pipelines fiables et des systèmes ML pragmatiques
              pour transformer des données complexes en décisions. Intérêt pour la santé (pharmacogénomique),
              l’analytics et l’industrialisation (MLOps).`}
          </p>
        </div>

        {/* ===== Skills & Technologies ===== */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            {t.about?.skills ?? 'Skills & Technologies'}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skillsData).map(([category, skills]) => (
              <div
                key={category}
                className="bg-card text-card-foreground rounded-2xl p-6 shadow-paper"
              >
                <h3 className="text-lg font-semibold mb-4 text-primary">
                  {t.skills?.categories?.[category as keyof typeof t.skills.categories] ?? category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Tag key={skill} variant="secondary">
                      {skill}
                    </Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Experience & Education ===== */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience — BIMS + NSC concis */}
          <div className="bg-card text-card-foreground rounded-2xl p-6 shadow-paper">
            <h3 className="text-lg font-semibold mb-4 text-primary">
              {t.about?.experience ?? 'Experience'}
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-medium">Research Intern — BIMS Lab</h4>
                <p className="text-muted-foreground text-sm">Jun 2025 – Aug 2025</p>
                <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Conçu & enrichi un dataset pharmacogénomique (1 339 entrées, +18 features via PharmGKB/PubChem) avec pipelines reproductibles.</li>
                  <li>Développé un chatbot médical RAG (LLM A4F) fournissant des réponses fiables sur médicaments, interactions et génétique.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium">Data Science Intern — National Statistical Council (Tunisia)</h4>
                <p className="text-muted-foreground text-sm">Jun 2024 – Aug 2024</p>
                <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Automatisé l’analyse/reporting ASP via R/Shiny + Excel (2 jours → 3 h).</li>
                  <li>Déployé 14 dashboards interactifs pour le suivi d’indicateurs et l’aide à la décision en temps réel.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="bg-card text-card-foreground rounded-2xl p-6 shadow-paper">
            <h3 className="text-lg font-semibold mb-4 text-primary">
              {t.about?.education ?? 'Education'}
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Higher School of Statistics and Information Analysis (ESSAI)</h4>
                <p className="text-muted-foreground text-sm">Sept 2023 – Present</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Data Science : probabilités, statistiques, data engineering, machine learning.
                </p>
              </div>

              <div>
                <h4 className="font-medium">El Manar Preparatory Institute for Engineering Studies (IPEIEM)</h4>
                <p className="text-muted-foreground text-sm">Sept 2021 – May 2023</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Maths & Physique : algèbre linéaire, analyse, mathématiques avancées.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



