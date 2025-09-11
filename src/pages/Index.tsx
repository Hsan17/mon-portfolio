import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { ProjectCard } from '@/components/ProjectCard';
import { ProjectDialog } from '@/components/ProjectDialog';
import { projects, Project } from '@/data/projects';
import { useI18n } from '@/i18n/provider';

export default function Index() {
  const { t } = useI18n();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Data science background"
            className="w-full h-full object-cover"
          />
          {/* overlay un peu plus foncé pour le contraste */}
          <div className="absolute inset-0 bg-background/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <p className="text-lg mb-4 text-muted-foreground">
            {t.hero.greeting}
          </p>

          {/* NOM : visible (blanc + légère ombre) */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
            {t.hero.name}
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
            {t.hero.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="bg-gradient-primary hover:shadow-elegant transition-smooth text-lg px-8 py-6 rounded-2xl"
          >
            {t.hero.cta}
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <button
            onClick={scrollToProjects}
            className="animate-bounce text-muted-foreground hover:text-foreground transition-smooth"
            aria-label="Scroll to projects"
          >
            <ChevronDown className="h-6 w-6" />
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* Titre section projets : lisible (blanc) */}
            <h2 className="text-4xl font-bold mb-4 text-white">
              {t.projects.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onViewDetails={() => handleViewDetails(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Dialog */}
      <ProjectDialog
        project={selectedProject}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </div>
  );
}
