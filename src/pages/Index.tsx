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

import profileAvatar from "@/assets/profile v2.png";

const Index = () => {
  const socialLinks = [
    {
      href: "mailto:hello@shankaalwis.dev",
      icon: Mail,
      label: "Email",
      copyValue: "hello@shankaalwis.dev",
    },
    {
      href: "tel:+94715333531",
      icon: Phone,
      label: "Phone",
      copyValue: "+94 (71) 533-3531",
    },
    {
      href: "https://linkedin.com/shankaalwis",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "https://instagram.com/shankaalwis",
      icon: Instagram,
      label: "Instagram",
    },
    {
      href: "https://x.com/shankaalwis",
      icon: Twitter,
      label: "X/Twitter",
    },
    {
      href: "https://facebook.com/shankaalwis",
      icon: Facebook,
      label: "Facebook",
    },
    {
      href: "https://youtube.com/@shankaalwis",
      icon: Youtube,
      label: "YouTube",
    },
    {
      href: "https://github.com/shankaalwis",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "https://shankaalwis.dev",
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
      <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-30">
        <ThemeToggle />
      </div>

      {/* Main content */}
      <main className="relative z-10 container mx-auto px-4 sm:px-6 py-12 min-h-screen flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
        {/* Hero and social */}
        <section className="mb-16 w-full">
          <div className="flex flex-col gap-10 sm:gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            <div className="flex flex-col gap-10 sm:gap-12 lg:justify-between items-center lg:items-start w-full lg:flex-1">
              <div className="max-w-2xl w-full pt-12 sm:pt-16 mx-auto lg:mx-0">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-heading mb-4 fade-in-up delay-1">
                  SHANKA ALWIS
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-foreground-muted mb-6 fade-in-up delay-2">
                  Technologist
                </p>
                <p className="text-base sm:text-lg md:text-xl text-foreground-muted max-w-2xl leading-relaxed fade-in-up delay-2 lg:max-w-none">
                  Passionate about creating technological experiences that make a difference.
                  {' '}Always learning, always building.
                </p>
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-heading mb-6 sm:mb-8 fade-in-up delay-3">
                  Connect with me
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-4 sm:gap-6 max-w-4xl w-full mx-auto lg:mx-0">
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
              </div>
            </div>
            <div className="order-first flex justify-center items-center lg:justify-end lg:items-stretch lg:h-full fade-in-up lg:order-none">
              <div className="relative inline-flex aspect-square w-[70vw] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[24rem] xl:max-w-[26rem] mx-auto lg:mx-0">
                <div className="card-glass p-1 rounded-full w-full h-full hover-tilt">
                  <img
                    src={profileAvatar}
                    alt="Profile photo"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-pulse-glow" />
              </div>
            </div>
          </div>
        </section>

        {/* Additional info */}
        <section className="text-center w-full px-4 sm:px-0 lg:text-left lg:px-0">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 max-w-2xl w-full mx-auto lg:mx-0 lg:max-w-none lg:w-auto">
            {/* Location */}
            <div className="card-glass p-5 sm:p-6 hover-tilt fade-in-up delay-4 text-center lg:text-left">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary mx-auto lg:mx-0 mb-3" />
              <h3 className="font-semibold text-heading text-base sm:text-lg mb-2">Colombo</h3>
              <p className="text-sm sm:text-base text-foreground-muted">Sri Lanka, LK  </p>
            </div>

            {/* Timezone */}
            <div className="card-glass p-5 sm:p-6 hover-tilt fade-in-up delay-4 text-center lg:text-left">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary mx-auto lg:mx-0 mb-3" />
              <h3 className="font-semibold text-heading text-base sm:text-lg mb-2">Timezone</h3>
              <p className="text-sm sm:text-base text-foreground-muted">UTC/GMT +5:30</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center w-full mt-16 pt-8 border-t border-border">
          <p className="text-foreground-muted text-sm sm:text-base fade-in-up delay-4">
            &copy; {new Date().getFullYear()} Shanka Alwis
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
