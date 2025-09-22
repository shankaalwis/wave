import { Mail, Phone } from "lucide-react";

interface ContactButtonProps {
  href: string;
  label: string;
}

export const ContactButton = ({
  href,
  label
}: ContactButtonProps) => {
  const isEmail = href.startsWith('mailto:');
  const isPhone = href.startsWith('tel:');

  return (
    <div className="flex items-center justify-center">
      <a
        href={href}
        className="btn-primary px-8 py-4 rounded-lg font-medium text-lg inline-flex items-center gap-3 hover:scale-105 transition-all duration-300 shadow-glow"
        aria-label={label}
      >
        {isEmail ? (
          <Mail className="w-5 h-5" />
        ) : isPhone ? (
          <Phone className="w-5 h-5" />
        ) : null}
        {label}
      </a>
    </div>
  );
};