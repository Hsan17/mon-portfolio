import { Github, Linkedin, Mail } from 'lucide-react';
import { useI18n } from '@/i18n/provider';

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border bg-background/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Texte supprimé */}

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${t.contact.emailAddress}`}
              className="text-muted-foreground hover:text-foreground transition-smooth"
              aria-label={t.contact.email}
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href={`https://${t.contact.linkedinUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-smooth"
              aria-label={t.contact.linkedin}
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`https://${t.contact.githubUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-smooth"
              aria-label={t.contact.github}
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
