import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 font-mono text-sm border border-border rounded-lg px-3 py-1.5 hover:border-primary/50 transition-all group"
      aria-label="Switch language"
    >
      <Globe size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
      <span className={i18n.language === 'fr' ? 'text-primary font-bold' : 'text-muted-foreground'}>FR</span>
      <span className="text-muted-foreground">|</span>
      <span className={i18n.language === 'en' ? 'text-primary font-bold' : 'text-muted-foreground'}>EN</span>
    </button>
  );
};

export default LanguageSwitcher;
