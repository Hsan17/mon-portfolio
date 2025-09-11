import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Tag } from './Tag';
import { ExternalLink, Eye } from 'lucide-react';
import { Project } from '@/data/projects';
import { useI18n } from '@/i18n/provider';

interface ProjectCardProps {
  project: Project;
  onViewDetails: () => void;
}

export function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const { language, t } = useI18n();

  const handleViewCode = () => {
    window.open(project.repoUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="bg-card text-card-foreground shadow-paper transition-smooth hover:shadow-elegant group">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={project.coverImage}
            alt={project.title[language]}
            className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-card-foreground">
          {project.title[language]}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {project.summary[language]}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag} variant="secondary">
              {tag}
            </Tag>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 flex gap-2">
        <Button onClick={onViewDetails} className="flex-1 gap-2">
          <Eye className="h-4 w-4" />
          {t.projects.viewDetails}
        </Button>
        <Button variant="outline" onClick={handleViewCode} className="gap-2">
          <ExternalLink className="h-4 w-4" />
          {t.projects.viewCode}
        </Button>
      </CardFooter>
    </Card>
  );
}