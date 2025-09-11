import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ExternalLink, X } from 'lucide-react';
import { Tag } from './Tag';
import { Project } from '@/data/projects';
import { useI18n } from '@/i18n/provider';

interface ProjectDialogProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectDialog({ project, open, onOpenChange }: ProjectDialogProps) {
  const { language, t } = useI18n();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.gallery.length - 1 : prev - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handleViewCode = () => {
    window.open(project.repoUrl, '_blank', 'noopener,noreferrer');
  };

  const currentImage = project.gallery[currentImageIndex];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card text-card-foreground">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4">
            {project.title[language]}
          </DialogTitle>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Tag key={tag} variant="primary">
                {tag}
              </Tag>
            ))}
          </div>
        </DialogHeader>

        {/* Overview */}
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {project.overview[language]}
        </p>

        {/* Image Carousel */}
        <div className="mb-6">
          <div className="relative group">
            <img
              src={currentImage.src}
              alt={currentImage.alt?.[language] || currentImage.caption[language]}
              className="w-full h-64 md:h-80 object-cover rounded-lg"
            />
            
            {/* Navigation Arrows */}
            {project.gallery.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-smooth"
                  onClick={prevImage}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-smooth"
                  onClick={nextImage}
                  aria-label="Next image"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </>
            )}
          </div>

          {/* Image Caption */}
          <p className="text-sm text-muted-foreground mt-3 text-center">
            {currentImage.caption[language]}
          </p>

          {/* Image Dots */}
          {project.gallery.length > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              {project.gallery.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-2 h-2 rounded-full transition-smooth ${
                    index === currentImageIndex
                      ? 'bg-primary'
                      : 'bg-muted hover:bg-muted-foreground'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Technologies */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3">{t.projects.technologies}</h4>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Tag key={tech} variant="secondary">
                {tech}
              </Tag>
            ))}
          </div>
        </div>

        <DialogFooter className="flex gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="gap-2">
            <X className="h-4 w-4" />
            {t.projects.close}
          </Button>
          <Button onClick={handleViewCode} className="gap-2">
            <ExternalLink className="h-4 w-4" />
            {t.projects.viewCode}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}