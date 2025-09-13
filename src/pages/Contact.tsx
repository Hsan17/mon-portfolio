import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import { useI18n } from '@/i18n/provider';

export default function Contact() {
  const { t } = useI18n();

  const contactMethods = [
    {
      icon: Mail,
      title: t.contact.email,
      value: t.contact.emailAddress,
      href: `mailto:${t.contact.emailAddress}`,
      description: 'Send me an email for collaborations and opportunities',
    },
    {
      icon: Linkedin,
      title: t.contact.linkedin,
      value: t.contact.linkedinUrl,
      href: `https://${t.contact.linkedinUrl}`,
      description: 'Connect with me on LinkedIn for professional networking',
    },
    {
      icon: Github,
      title: t.contact.github,
      value: t.contact.githubUrl,
      href: `https://${t.contact.githubUrl}`,
      description: 'Explore my open-source projects and contributions',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          {/* ===== Titre en blanc ===== */}
          <h1 className="text-4xl font-bold mb-4 text-white">
            {t.contact.title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <Card
                key={method.title}
                className="bg-card text-card-foreground shadow-paper hover:shadow-elegant transition-smooth group"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-full w-fit">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    {method.description}
                  </p>
                  <p className="text-sm font-mono text-muted-foreground mb-4 break-all">
                    {method.value}
                  </p>
                  <Button
                    asChild
                    className="w-full gap-2 group-hover:shadow-elegant transition-smooth"
                  >
                    <a
                      href={method.href}
                      target={method.href.startsWith('mailto:') ? '_self' : '_blank'}
                      rel={method.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    >
                      <ExternalLink className="h-4 w-4" />
                      {method.title}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional contact info */}
        <div className="mt-12 text-center">
          <div className="bg-card text-card-foreground rounded-2xl p-8 shadow-paper">
            <h3 className="text-xl font-semibold mb-4">Open to Opportunities</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm always open to discussing new data science and data engineering projects, research collaborations, 
              and consulting opportunities. Whether you're aiming to solve complex analytical challenges, optimize 
              data pipelines, or implement machine learning solutions, I'd be glad to connect and contribute to your initiatives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
