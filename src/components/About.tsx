import { GraduationCap, MapPin, Target, Award, ExternalLink, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

interface CertModule {
  name: string;
  score: string;
}

const About = () => {
  const { t } = useTranslation();
  const modules = t("certifications.modules", { returnObjects: true }) as CertModule[];
  const globalScore = Math.round(
    modules.reduce((sum, m) => sum + parseInt(m.score), 0) / modules.length
  );

  return (
    <section id="apropos" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 network-grid opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4 text-center">
            <span className="text-primary text-glow">{">"}</span> {t("about.title")}
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-12 rounded-full border-glow"></div>

          {/* Objectif - Full width */}
          <div className="bg-card border border-border rounded-lg p-4 sm:p-6 mb-4 hover:border-secondary/50 transition-colors">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 bg-secondary/10 rounded-lg border border-secondary/30 shrink-0">
                <Target className="text-secondary" size={20} />
              </div>
              <div className="min-w-0">
                <h3 className="font-mono text-lg sm:text-xl font-semibold mb-2 text-secondary">
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
                    {t("about.pursuitText")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Terminal + Formation side by side */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Terminal */}
            <div className="bg-terminal-bg border border-border border-glow rounded-lg p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="font-mono text-xs text-muted-foreground ml-2">{t("about.terminalFile")}</span>
              </div>
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span className="font-mono text-primary text-sm">admin@portfolio:~$</span>
                <span className="font-mono text-muted-foreground text-sm">{t("about.terminalCmd")}</span>
              </div>
              <p className="text-foreground leading-relaxed text-sm">
                {t("about.aboutText1")}
              </p>
              <p className="text-foreground leading-relaxed mt-3 text-sm">
                {t("about.aboutText2")}
              </p>
            </div>

            {/* Formation */}
            <div className="bg-card border border-border rounded-lg p-4 sm:p-6 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-3 sm:gap-4 mb-6">
                <div className="p-2 sm:p-3 bg-primary/10 rounded-lg border border-primary/30 shrink-0">
                  <GraduationCap className="text-primary" size={20} />
                </div>
                <h3 className="font-mono text-lg sm:text-xl font-semibold text-primary">
                  {t("about.education")}
                </h3>
              </div>
              
              {/* Timeline */}
              <div className="ml-2 sm:ml-4 relative">
                <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-primary/30"></div>
                
                <div className="relative pl-7 sm:pl-8 pb-8">
                  <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-secondary border-2 border-background shadow-[0_0_10px_hsl(var(--secondary)/0.5)]"></div>
                  <div className="font-mono text-xs sm:text-sm text-secondary mb-1">{t("about.edu1Date")}</div>
                  <div className="text-foreground font-semibold text-sm sm:text-base">{t("about.edu1Title")}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{t("about.edu1School")}</div>
                </div>

                <div className="relative pl-7 sm:pl-8 pb-8">
                  <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-primary border-2 border-background shadow-[0_0_10px_hsl(var(--primary)/0.5)]"></div>
                  <div className="font-mono text-xs sm:text-sm text-primary mb-1">{t("about.edu2Date")}</div>
                  <div className="text-foreground font-semibold text-sm sm:text-base">{t("about.edu2Title")}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{t("about.edu2School")}</div>
                </div>
                
                <div className="relative pl-7 sm:pl-8">
                  <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-primary border-2 border-background shadow-[0_0_10px_hsl(var(--primary)/0.5)]"></div>
                  <div className="font-mono text-xs sm:text-sm text-primary mb-1">{t("about.edu3Date")}</div>
                  <div className="text-foreground font-semibold text-sm sm:text-base">{t("about.edu3Title")}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{t("about.edu3School")}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Certification ANSSI - Full width below */}
          <div className="mt-4 bg-card border border-border rounded-lg overflow-hidden hover:border-secondary/50 transition-colors group">
            <div className="bg-gradient-to-r from-secondary/10 via-secondary/5 to-secondary/10 p-3 sm:p-4 border-b border-border">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-secondary/10 rounded-lg border border-secondary/30">
                  <Shield className="text-secondary" size={16} />
                </div>
                <div>
                  <h3 className="font-mono text-sm font-semibold text-secondary">
                    {t("certifications.title")}
                  </h3>
                  <p className="text-[10px] text-muted-foreground font-mono">
                    {t("certifications.provider")}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Global score */}
                <div className="flex flex-col items-center shrink-0">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
                    {t("certifications.globalScore")}
                  </p>
                  <svg width={100} height={100} viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="44" fill="none" stroke="hsl(var(--muted) / 0.15)" strokeWidth="6" />
                    <circle
                      cx="50" cy="50" r="44" fill="none"
                      stroke="#22c55e" strokeWidth="6" strokeLinecap="round"
                      strokeDasharray={276.5}
                      strokeDashoffset={276.5 - (globalScore / 100) * 276.5}
                      transform="rotate(-90 50 50)"
                      style={{ filter: "drop-shadow(0 0 6px rgba(34,197,94,0.4))" }}
                    />
                    <text x="50" y="50" textAnchor="middle" dominantBaseline="central" className="fill-foreground font-bold font-mono" fontSize="20">
                      {globalScore}%
                    </text>
                  </svg>
                </div>

                {/* Module gauges */}
                <div className="flex-1 w-full">
                  <div className="grid grid-cols-2 gap-3">
                    {modules.map((module, index) => {
                      const score = parseInt(module.score);
                      const circumference = 2 * Math.PI * 22;
                      const colors = score >= 87 ? { s: "#22c55e", g: "rgba(34,197,94,0.3)" } : score >= 83 ? { s: "#eab308", g: "rgba(234,179,8,0.3)" } : { s: "#f97316", g: "rgba(249,115,22,0.3)" };
                      return (
                        <div key={index} className="flex flex-col items-center py-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group/cert">
                          <svg width={52} height={52} viewBox="0 0 52 52">
                            <circle cx="26" cy="26" r="22" fill="none" stroke="hsl(var(--muted) / 0.12)" strokeWidth="3" />
                            <circle
                              cx="26" cy="26" r="22" fill="none"
                              stroke={colors.s} strokeWidth="3" strokeLinecap="round"
                              strokeDasharray={circumference}
                              strokeDashoffset={circumference - (score / 100) * circumference}
                              transform="rotate(-90 26 26)"
                              style={{ filter: `drop-shadow(0 0 2px ${colors.g})` }}
                            />
                            <text x="26" y="26" textAnchor="middle" dominantBaseline="central" className="fill-foreground font-bold font-mono" fontSize="11">
                              {score}%
                            </text>
                          </svg>
                          <p className="text-[10px] text-muted-foreground font-mono text-center leading-snug mt-2 px-1 group-hover/cert:text-foreground transition-colors">
                            {module.name}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 sm:px-6 pb-4 sm:pb-5 border-t border-border/50 flex justify-center">
              <a
                href="/documents/Mooc_LEON_Romain.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-secondary/30 bg-secondary/5 text-secondary hover:bg-secondary/10 transition-colors font-mono text-xs"
              >
                <Award size={12} />
                {t("certifications.viewCertificate")}
                <ExternalLink size={10} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
