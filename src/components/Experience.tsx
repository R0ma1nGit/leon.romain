import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronDown,
  FileText,
  ExternalLink,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Job {
  jobTitle: string;
  company: string;
  year: string;
  duration: string;
  location: string;
  current: boolean;
  description: string;
  tasks: string[];
  skillsList: string[];
  report: string | null;
}

const Experience = () => {
  const { t } = useTranslation();
  const jobs = t("experience.jobs", { returnObjects: true }) as Job[];
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggle = (i: number) =>
    setExpandedIndex(expandedIndex === i ? null : i);

  return (
    <section
      id="experiences"
      className="py-20 bg-muted/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 network-grid opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4 text-center">
          <span className="text-primary text-glow">{">"}</span>{" "}
          {t("experience.title")}
        </h2>
        <div className="h-1 w-24 bg-primary mx-auto mb-16 rounded-full border-glow"></div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {jobs.map((job, i) => {
            const isExpanded = expandedIndex === i;
            const isLeft = i % 2 === 0;

            return (
              <div key={i} className="relative mb-12 last:mb-0 group">
                {/* Year badge on the line */}
                <div className="absolute left-5 md:left-1/2 -translate-x-1/2 -top-1 z-20">
                  <span className="block px-3 py-1 rounded-full bg-card border border-border text-xs font-mono font-bold text-primary shadow-sm">
                    {job.year}
                  </span>
                </div>

                {/* Dot on the line */}
                <div
                  className={`absolute left-5 md:left-1/2 top-8 -translate-x-1/2 z-10 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    job.current
                      ? "bg-primary border-primary shadow-[0_0_12px_hsl(var(--primary)/0.6)] animate-pulse"
                      : isExpanded
                        ? "bg-secondary border-secondary"
                        : "bg-muted border-border group-hover:border-primary group-hover:bg-primary/20"
                  }`}
                />

                {/* Card */}
                <div
                  className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                    isLeft ? "md:mr-auto md:pr-0" : "md:ml-auto md:pl-0"
                  }`}
                >
                  <div
                    onClick={() => toggle(i)}
                    className={`bg-card border rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      isExpanded
                        ? "border-primary/50 shadow-[0_0_20px_hsl(var(--primary)/0.1)]"
                        : "border-border hover:border-primary/30"
                    }`}
                  >
                    {/* Card header */}
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3 flex-1 min-w-0">
                          <div
                            className={`p-2.5 rounded-lg border shrink-0 transition-colors duration-300 ${
                              job.current
                                ? "bg-primary/10 border-primary/30"
                                : "bg-muted border-border group-hover:border-primary/20"
                            }`}
                          >
                            <Briefcase
                              size={20}
                              className={
                                job.current
                                  ? "text-primary"
                                  : "text-muted-foreground group-hover:text-primary transition-colors"
                              }
                            />
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 flex-wrap mb-1">
                              <h3 className="font-mono text-base font-semibold leading-tight">
                                {job.jobTitle}
                              </h3>
                              {job.current && (
                                <Badge className="bg-primary/15 text-primary border-primary/30 font-mono text-[10px] px-2 py-0.5 animate-pulse">
                                  {t("experience.current")}
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm font-semibold text-primary mb-1.5">
                              {job.company}
                            </p>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {job.description}
                            </p>
                          </div>
                        </div>
                        <ChevronDown
                          size={18}
                          className={`text-muted-foreground shrink-0 mt-1 transition-transform duration-300 ${
                            isExpanded ? "rotate-180 text-primary" : ""
                          }`}
                        />
                      </div>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-3 mt-3 text-xs text-muted-foreground font-mono">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} className="text-primary" />
                          {job.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={12} className="text-primary" />
                          {job.location}
                        </span>
                      </div>
                    </div>

                    {/* Expandable details */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isExpanded ? "max-h-[9999px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-5 pb-5 border-t border-border">
                        {/* Missions */}
                        <div className="mt-4">
                          <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-secondary mb-3">
                            {t("experience.mainMissions")}
                          </h4>
                          <div className="space-y-2">
                            {job.tasks.map((task, ti) => (
                              <div
                                key={ti}
                                className="flex items-start gap-2 text-sm text-muted-foreground"
                                style={{
                                  animationDelay: `${ti * 80}ms`,
                                }}
                              >
                                <span className="text-primary font-mono shrink-0 mt-0.5">
                                  ▸
                                </span>
                                <span>{task}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Skills */}
                        <div className="mt-5">
                          <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-secondary mb-3">
                            {t("experience.skillsDeveloped")}
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {job.skillsList.map((skill, si) => (
                              <span
                                key={si}
                                className="px-2.5 py-1 bg-secondary/10 border border-secondary/20 rounded-full text-[11px] font-mono text-secondary"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Report button */}
                        {job.report && (
                          <a
                            href={job.report}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="mt-5 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-xs font-mono text-primary hover:bg-primary/20 transition-colors"
                          >
                            <FileText size={14} />
                            {t("experience.viewReport")}
                            <ExternalLink size={12} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
