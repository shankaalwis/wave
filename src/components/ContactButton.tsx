import { Mail } from "lucide-react";

interface ContactButtonProps {
  href: string;
  label: string;
}

export const ContactButton = ({ href, label }: ContactButtonProps) => {
  return (
    <a
      href={href}
      className="btn-primary px-8 py-4 rounded-[var(--radius)] font-semibold text-lg flex items-center gap-3 fade-in-up delay-3"
      aria-label={label}
    >
      <Mail className="w-5 h-5" />
      {label}
    </a>
  );
};