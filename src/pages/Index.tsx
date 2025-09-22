import { 
  Mail, 
  Phone, 
  Linkedin, 
  Instagram, 
  Twitter, 
  Facebook, 
  Youtube, 
  Github, 
  ExternalLink,
  MapPin,
  Clock
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ParticleBackground } from "@/components/ParticleBackground";
import { SocialLink } from "@/components/SocialLink";

import profileAvatar from "@/assets/profile-avatar.jpg";

const Index = () => {
  const socialLinks = [
    {
      href: "mailto:me@example.com",
      icon: Mail,
      label: "Email",
      copyValue: "me@example.com",
    },
    {
      href: "tel:+1234567890",
      icon: Phone,
      label: "Phone",
      copyValue: "+1 (234) 567-890",
    },
    {
      href: "https://linkedin.com/in/USERNAME",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "https://instagram.com/USERNAME",
      icon: Instagram,
      label: "Instagram",
    },
    {
      href: "https://x.com/USERNAME",
      icon: Twitter,
      label: "X/Twitter",
    },
    {
      href: "https://facebook.com/USERNAME",
      icon: Facebook,
      label: "Facebook",
    },
    {
      href: "https://youtube.com/@USERNAME",
      icon: Youtube,
      label: "YouTube",
    },
    {
      href: "https://github.com/USERNAME",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "https://example.com",
      icon: ExternalLink,
      label: "Portfolio/Website",
    },
  ];

  return (
    <div className="min-h-screen bg-background theme-transition relative overflow-hidden">
      {/* Animated background */}
      <div className="hero-gradient fixed inset-0" />
      <ParticleBackground />
      
      {/* Theme toggle */}
      <div className="fixed top-6 right-6 z-10">
        <ThemeToggle />
      </div>

      {/* Main content */}
      <main className="relative z-10 container mx-auto px-6 py-12 min-h-screen flex flex-col justify-center">
        {/* Hero section */}
        <section className="text-center mb-16">
          {/* Profile avatar */}
          <div className="mb-8 fade-in-up">
            <div className="relative inline-block">
              <img
                src={profileAvatar}
                alt="Profile photo"
                className="w-32 h-32 rounded-full mx-auto card-glass p-1 hover-tilt"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-pulse-glow" />
            </div>
          </div>

          {/* Name and tagline */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 fade-in-up delay-1">
              Your Name
            </h1>
            <p className="text-xl md:text-2xl text-foreground-muted mb-6 fade-in-up delay-2">
              Digital Creator & Problem Solver
            </p>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto leading-relaxed fade-in-up delay-2">
              Passionate about creating digital experiences that make a difference. 
              Always learning, always building.
            </p>
          </div>

          {/* Primary CTA */}
          <div className="mb-12">
            <a
              href="mailto:me@example.com"
              className="btn-primary px-8 py-4 rounded-[var(--radius)] font-medium text-lg inline-flex items-center gap-3 hover-tilt"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
          </div>
        </section>

        {/* Social links grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-center mb-8 text-foreground fade-in-up delay-3">
            Connect with me
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4 max-w-4xl mx-auto">
            {socialLinks.map((link, index) => (
              <SocialLink
                key={link.label}
                href={link.href}
                icon={link.icon}
                label={link.label}
                copyValue={link.copyValue}
                delay={0.4 + index * 0.1}
              />
            ))}
          </div>
        </section>

        {/* Additional info */}
        <section className="text-center">
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* Location */}
            <div className="card-glass p-6 hover-tilt fade-in-up delay-4">
              <MapPin className="w-6 h-6 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Location</h3>
              <p className="text-foreground-muted">San Francisco, CA</p>
            </div>

            {/* Timezone */}
            <div className="card-glass p-6 hover-tilt fade-in-up delay-4">
              <Clock className="w-6 h-6 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Timezone</h3>
              <p className="text-foreground-muted">PST (UTC-8)</p>
            </div>
          </div>
        </section>

        {/* Work with me CTA */}
        <section className="text-center mt-16">
          <div className="card-glass p-8 max-w-lg mx-auto hover-tilt fade-in-up delay-4">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to work together?
            </h3>
            <p className="text-foreground-muted mb-6">
              I'm always open to discussing new opportunities and exciting projects.
            </p>
            <a
              href="mailto:me@example.com?subject=Let's work together"
              className="btn-glass px-6 py-3 rounded-[var(--radius)] font-medium inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Start a conversation
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-foreground-muted text-sm fade-in-up delay-4">
            © {new Date().getFullYear()} Your Name. Built with ❤️ using modern web technologies.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
