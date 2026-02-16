import { Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-mono text-sm text-muted-foreground">
              <span className="text-primary">{">"}</span> {t("footer.copyright", { year: currentYear })}
            </p>
            <p className="font-mono text-xs text-muted-foreground mt-1">
              {t("footer.madeWith")}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-2 bg-muted hover:bg-primary/10 rounded-lg transition-colors group"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="p-2 bg-muted hover:bg-primary/10 rounded-lg transition-colors group"
              aria-label="Email"
            >
              <Mail size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-center font-mono text-xs text-muted-foreground">
            <span className="text-primary">admin@portfolio:~$</span> uptime -p
            <br />
            <span className="text-secondary">{">"}</span> {t("footer.uptime")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
