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
  return <div className="flex items-center justify-center">
      
    </div>;
};