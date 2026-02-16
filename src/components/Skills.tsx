import { Server, Network, Shield, Database, HardDrive, Code } from "lucide-react";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  const icons = [Network, Shield, Database, Server, HardDrive, Code];
  const colors = ["primary", "secondary", "primary", "secondary", "primary", "secondary"];

  const categories = t("skills.categories", { returnObjects: true }) as { title: string; skills: string[] }[];

  return (
    <section id="competences" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 network-grid opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4 text-center">
          <span className="text-primary text-glow">{">"}</span> {t("skills.title")}
        </h2>
        <div className="h-1 w-24 bg-primary mx-auto mb-12 rounded-full border-glow"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((category, index) => {
            const Icon = icons[index];
            const color = colors[index];
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all hover:scale-105 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-3 bg-${color}/10 rounded-lg border border-${color}/30 group-hover:border-glow transition-all`}
                  >
                    <Icon className={`text-${color}`} size={24} />
                  </div>
                  <h3 className="font-mono text-xl font-semibold">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-2 text-sm">
                      <span className={`text-${color}`}>{">"}</span>
                      <span className="text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
