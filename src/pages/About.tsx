import { Tag } from '@/components/Tag';
import { useI18n } from '@/i18n/provider';

const skillsData = {
  languages: ['Python', 'R', 'SQL', 'JavaScript', 'Scala'],
  frameworks: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'React'],
  tools: ['Docker', 'Kubernetes', 'AWS', 'Apache Spark', 'Jupyter', 'Git'],
  techniques: ['Deep Learning', 'NLP', 'Computer Vision', 'Time Series', 'A/B Testing', 'MLOps']
};

export default function About() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {t.about.title}
          </h1>
        </div>

        {/* Bio Section */}
        <div className="bg-card text-card-foreground rounded-2xl p-8 shadow-paper mb-12">
          <p className="text-lg leading-relaxed">
            {t.about.bio}
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            {t.about.skills}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skillsData).map(([category, skills]) => (
              <div key={category} className="bg-card text-card-foreground rounded-2xl p-6 shadow-paper">
                <h3 className="text-lg font-semibold mb-4 text-primary">
                  {t.skills.categories[category as keyof typeof t.skills.categories]}
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

        {/* Experience & Education */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card text-card-foreground rounded-2xl p-6 shadow-paper">
            <h3 className="text-lg font-semibold mb-4 text-primary">
              {t.about.experience}
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Senior Data Scientist</h4>
                <p className="text-muted-foreground text-sm">TechCorp Inc. • 2020-Present</p>
              </div>
              <div>
                <h4 className="font-medium">Data Scientist</h4>
                <p className="text-muted-foreground text-sm">DataVision • 2018-2020</p>
              </div>
              <div>
                <h4 className="font-medium">Research Analyst</h4>
                <p className="text-muted-foreground text-sm">Analytics Lab • 2016-2018</p>
              </div>
            </div>
          </div>

          <div className="bg-card text-card-foreground rounded-2xl p-6 shadow-paper">
            <h3 className="text-lg font-semibold mb-4 text-primary">
              {t.about.education}
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Ph.D. in Data Science</h4>
                <p className="text-muted-foreground text-sm">Stanford University • 2016</p>
              </div>
              <div>
                <h4 className="font-medium">M.S. in Statistics</h4>
                <p className="text-muted-foreground text-sm">UC Berkeley • 2012</p>
              </div>
              <div>
                <h4 className="font-medium">B.S. in Mathematics</h4>
                <p className="text-muted-foreground text-sm">MIT • 2010</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}