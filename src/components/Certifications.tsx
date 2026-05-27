import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Award, ExternalLink, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Module {
  name: string;
  score: string;
}

const gaugeColors = (score: number) => {
  if (score >= 87) return { stroke: "#22c55e", glow: "rgba(34,197,94,0.4)" };
  if (score >= 83) return { stroke: "#eab308", glow: "rgba(234,179,8,0.4)" };
  return { stroke: "#f97316", glow: "rgba(249,115,22,0.4)" };
};

const CircularProgress = ({
  score,
  size = 120,
  strokeWidth = 8,
  animated = true,
}: {
  score: number;
  size?: number;
  strokeWidth?: number;
  animated?: boolean;
}) => {
  const ref = useRef<SVGCircleElement>(null);
  const [animScore, setAnimScore] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const colors = gaugeColors(score);
  const offset = circumference - (animScore / 100) * circumference;

  useEffect(() => {
    if (!animated) {
      setAnimScore(score);
      return;
    }
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = eased * score;
      setAnimScore(Math.round(start));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [score, animated]);

  return (
    <svg width={size} height={size} className="drop-shadow-lg">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="hsl(var(--muted) / 0.3)"
        strokeWidth={strokeWidth}
      />
      <circle
        ref={ref}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={colors.stroke}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{
          filter: `drop-shadow(0 0 6px ${colors.glow})`,
          transition: animated ? "none" : "stroke-dashoffset 0.5s ease",
        }}
      />
      <text
        x={size / 2}
        y={size / 2 - 4}
        textAnchor="middle"
        dominantBaseline="central"
        className="fill-foreground font-bold font-mono"
        fontSize={size * 0.22}
      >
        {animScore}%
      </text>
    </svg>
  );
};

const MiniGauge = ({
  name,
  score,
}: {
  name: string;
  score: number;
}) => {
  const size = 72;
  const strokeWidth = 5;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const colors = gaugeColors(score);
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2 p-4 bg-card/50 rounded-xl border border-border/50 hover:border-primary/30 transition-all group">
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="hsl(var(--muted) / 0.2)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={colors.stroke}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ filter: `drop-shadow(0 0 4px ${colors.glow})` }}
          className="transition-all duration-500"
        />
        <text
          x={size / 2}
          y={size / 2 - 2}
          textAnchor="middle"
          dominantBaseline="central"
          className="fill-foreground font-bold font-mono"
          fontSize={14}
        >
          {score}%
        </text>
      </svg>
      <p className="text-xs font-mono text-center text-muted-foreground group-hover:text-foreground transition-colors leading-tight">
        {name}
      </p>
    </div>
  );
};

const Certifications = () => {
  const { t } = useTranslation();
  const modules = t("certifications.modules", { returnObjects: true }) as Module[];
  const globalScore = Math.round(
    modules.reduce((sum, m) => sum + parseInt(m.score), 0) / modules.length
  );

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-mono">
          <span className="text-primary">{"{"}</span>{" "}
          {t("certifications.title")}{" "}
          <span className="text-primary">{"}"}</span>
        </h2>

        {/* Main dashboard card */}
        <div className="bg-card/80 border border-border rounded-2xl overflow-hidden shadow-lg shadow-primary/5">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10 border-b border-border p-6">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                <Shield size={28} className="text-primary" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-mono font-bold text-lg text-foreground">
                  {t("certifications.provider")}
                </h3>
                <p className="text-xs text-muted-foreground font-mono mt-0.5">
                  Cybersécurité — Formation en ligne
                </p>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-2">
                  <Badge className="text-[10px] font-mono bg-primary/20 text-primary hover:bg-primary/30 border-0">
                    {t("certifications.type")}
                  </Badge>
                  <Badge variant="outline" className="text-[10px] font-mono border-secondary/40 text-secondary">
                    {modules.length} modules validés
                  </Badge>
                </div>
              </div>
              <a
                href="/documents/Mooc_LEON_Romain.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/30 bg-primary/5 text-primary hover:bg-primary/10 transition-colors font-mono text-sm shrink-0"
              >
                <Award size={14} />
                {t("certifications.viewCertificate")}
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Global score */}
          <div className="p-8 flex flex-col items-center">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
              {t("certifications.globalScore")}
            </p>
            <CircularProgress score={globalScore} size={140} strokeWidth={10} />
          </div>

          {/* Module gauges grid */}
          <div className="px-6 pb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {modules.map((module, index) => (
                <MiniGauge
                  key={index}
                  name={module.name}
                  score={parseInt(module.score)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
