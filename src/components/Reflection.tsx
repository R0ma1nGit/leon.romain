import { Lightbulb, TrendingUp, Target, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const Reflection = () => {
  const { t } = useTranslation();

  return (
    <section id="reflexion" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 network-grid opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4 text-center">
            <span className="text-primary text-glow">{">"}</span> {t("reflection.title")}
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-12 rounded-full border-glow"></div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Ce que mon portfolio dit de moi */}
            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg border border-primary/30">
                    <Lightbulb className="text-primary" size={20} />
                  </div>
                  <CardTitle className="font-mono text-lg text-primary">
                    {t("reflection.portfolioTitle")}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground text-sm leading-relaxed">
                  {t("reflection.portfolioText1").replace(/<1>|<\/1>/g, '')}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t("reflection.portfolioText2").replace(/<1>|<\/1>|<2>|<\/2>/g, '')}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t("reflection.portfolioText3")}
                </p>
              </CardContent>
            </Card>
            
            {/* Ma Progression */}
            <Card className="bg-card border-border hover:border-secondary/50 transition-colors">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-secondary/10 rounded-lg border border-secondary/30">
                    <TrendingUp className="text-secondary" size={20} />
                  </div>
                  <CardTitle className="font-mono text-lg text-secondary">
                    {t("reflection.progressionTitle")}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative ml-2">
                  <div className="absolute left-2 top-3 bottom-3 w-0.5 bg-gradient-to-b from-blue-500 via-primary to-secondary"></div>
                  
                  {/* BUT 1 */}
                  <div className="relative pl-8 pb-6">
                    <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-blue-500 border-2 border-background shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                    <div className="font-mono text-xs text-blue-500 mb-1 font-semibold">{t("reflection.but1Title")}</div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {(t("reflection.but1Items", { returnObjects: true }) as string[]).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ArrowRight size={12} className="text-blue-500 mt-1 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* BUT 2 */}
                  <div className="relative pl-8 pb-6">
                    <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-primary border-2 border-background shadow-[0_0_10px_hsl(var(--secondary)/0.5)]"></div>
                    <div className="font-mono text-xs text-primary mb-1 font-semibold">{t("reflection.but2Title")}</div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {(t("reflection.but2Items", { returnObjects: true }) as string[]).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ArrowRight size={12} className="text-primary mt-1 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* BUT 3 */}
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-secondary border-2 border-background shadow-[0_0_10px_hsl(var(--secondary)/0.5)]"></div>
                    <div className="font-mono text-xs text-secondary mb-1 font-semibold">{t("reflection.but3Title")}</div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {(t("reflection.but3Items", { returnObjects: true }) as string[]).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ArrowRight size={12} className="text-secondary mt-1 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Axes d'amélioration */}
          <Card className="bg-terminal-bg border-border border-glow">
            <CardHeader className="pb-3">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg border border-primary/30">
                  <Target className="text-primary" size={20} />
                </div>
                <CardTitle className="font-mono text-lg text-primary">
                  {t("reflection.improvementTitle")}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-secondary"></div>
                    <h4 className="font-mono font-semibold text-foreground">{t("reflection.improvement1Title")}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground pl-4">
                    {t("reflection.improvement1Text")}
                  </p>
                  <div className="flex gap-2 pl-4">
                    <span className="px-2 py-0.5 bg-secondary/10 border border-secondary/30 rounded text-xs font-mono text-secondary">
                      {t("reflection.improvement1Tag1")}
                    </span>
                    <span className="px-2 py-0.5 bg-secondary/10 border border-secondary/30 rounded text-xs font-mono text-secondary">
                      {t("reflection.improvement1Tag2")}
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <h4 className="font-mono font-semibold text-foreground">{t("reflection.improvement2Title")}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground pl-4">
                    {t("reflection.improvement2Text")}
                  </p>
                  <div className="flex gap-2 pl-4">
                    <span className="px-2 py-0.5 bg-primary/10 border border-primary/30 rounded text-xs font-mono text-primary">
                      {t("reflection.improvement2Tag1")}
                    </span>
                    <span className="px-2 py-0.5 bg-primary/10 border border-primary/30 rounded text-xs font-mono text-primary">
                      {t("reflection.improvement2Tag2")}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Reflection;
