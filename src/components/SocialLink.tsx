import { LucideIcon } from "lucide-react";
import { useState } from "react";

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  copyValue?: string;
  delay?: number;
}

export const SocialLink = ({ href, icon: Icon, label, copyValue, delay = 0 }: SocialLinkProps) => {
  const [showCopied, setShowCopied] = useState(false);

  const handleClick = async (e: React.MouseEvent) => {
    if (copyValue) {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText(copyValue);
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
      } catch (err) {
        // Fallback for browsers that don't support clipboard API
        window.open(href, '_blank', 'noopener,noreferrer');
      }
    }
  };

  return (
    <div className="relative">
      <a
        href={href}
        onClick={handleClick}
        target={copyValue ? undefined : "_blank"}
        rel={copyValue ? undefined : "noopener noreferrer"}
        className={`card-glass p-4 hover-tilt icon-hover flex items-center justify-center group fade-in-up ${
          showCopied ? 'copy-success' : ''
        }`}
        style={{ animationDelay: `${delay}s` }}
        aria-label={copyValue ? `Copy ${label}` : `Open ${label} in new tab`}
      >
        <Icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-300" />
      </a>
      
      {showCopied && (
        <div className="absolute -top-2 -right-2 bg-success text-white text-xs px-2 py-1 rounded-full animate-fade-in-up">
          Copied!
        </div>
      )}
    </div>
  );
};