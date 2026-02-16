import { GraduationCap, MapPin, Target } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="apropos" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 network-grid opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4 text-center">
            <span className="text-primary text-glow">{">"}</span> {t("about.title")}
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-12 rounded-full border-glow"></div>
          {/* Bento Grid Layout */}
          <div className="grid md:grid-cols-5 gap-4">
            {/* Colonne gauche - Objectif + Terminal */}
            <div className="md:col-span-3 flex flex-col gap-4">
              {/* Objectif */}
              <div className="bg-card border border-border rounded-lg p-6 hover:border-secondary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg border border-secondary/30">
                    <Target className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-mono text-xl font-semibold mb-2 text-secondary">
                      {t("about.objective")}
                    </h3>
                    <p className="text-foreground font-medium">
                      {t("about.objectiveText")}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {t("about.objectiveDesc")}
                    </p>
                    <div className="mt-3 pt-3 border-t border-border">
                      <p className="text-xs text-secondary font-mono">
                        {t("about.pursuitLabel")}
                      </p>
                      <p className="text-sm text-foreground mt-1">
                        {t("about.pursuitText")} <br />
                        {t("about.pursuitSchools")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terminal */}
              <div className="bg-terminal-bg border border-border border-glow rounded-lg p-6 flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground ml-2">{t("about.terminalFile")}</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-mono text-primary">admin@portfolio:~$</span>
                  <span className="font-mono text-muted-foreground">{t("about.terminalCmd")}</span>
                </div>
                <p className="text-foreground leading-relaxed text-sm">
                  {t("about.aboutText1")}
                </p>
                <p className="text-foreground leading-relaxed mt-3 text-sm">
                  {t("about.aboutText2")}
                </p>
              </div>
            </div>

            {/* Colonne droite - Formation */}
            <div className="md:col-span-2 bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg border border-primary/30">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <h3 className="font-mono text-xl font-semibold text-primary">
                  {t("about.education")}
                </h3>
              </div>
              
              {/* Timeline */}
              <div className="ml-4 relative">
                <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-primary/30"></div>
                
                <div className="relative pl-8 pb-8">
                  <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-secondary border-2 border-background shadow-[0_0_10px_hsl(var(--secondary)/0.5)]"></div>
                  <div className="font-mono text-sm text-secondary mb-1">{t("about.edu1Date")}</div>
                  <div className="text-foreground font-semibold">{t("about.edu1Title")}</div>
                  <div className="text-sm text-muted-foreground">{t("about.edu1School")}</div>
                </div>

                <div className="relative pl-8 pb-8">
                  <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-primary border-2 border-background shadow-[0_0_10px_hsl(var(--primary)/0.5)]"></div>
                  <div className="font-mono text-sm text-primary mb-1">{t("about.edu2Date")}</div>
                  <div className="text-foreground font-semibold">{t("about.edu2Title")}</div>
                  <div className="text-sm text-muted-foreground">{t("about.edu2School")}</div>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-primary border-2 border-background shadow-[0_0_10px_hsl(var(--primary)/0.5)]"></div>
                  <div className="font-mono text-sm text-primary mb-1">{t("about.edu3Date")}</div>
                  <div className="text-foreground font-semibold">{t("about.edu3Title")}</div>
                  <div className="text-sm text-muted-foreground">{t("about.edu3School")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
