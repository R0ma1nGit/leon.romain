import { useCVStore } from "@/hooks/useCVStore";
import type { SkillCategory } from "./types";

interface SectionProps {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

const Section = ({ title, defaultOpen, children }: SectionProps) => {
  const [open, setOpen] = React.useState(defaultOpen ?? false);

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3 py-2.5 bg-muted/40 hover:bg-muted/60 transition-colors text-left"
      >
        <span className="font-mono text-xs font-semibold text-primary uppercase tracking-wider">{title}</span>
        <svg
          className={`w-3.5 h-3.5 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <div className="p-3 border-t border-border space-y-3">{children}</div>}
    </div>
  );
};

const Field = ({ label, value, onChange, multiline, placeholder, type = "text" }: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
  placeholder?: string;
  type?: string;
}) => (
  <div>
    <label className="block font-mono text-[10px] font-semibold text-muted-foreground mb-1 uppercase tracking-wider">{label}</label>
    {multiline ? (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={4}
        className="w-full bg-muted/30 border border-border rounded px-2.5 py-1.5 font-mono text-xs focus:border-primary focus:outline-none transition-colors resize-none"
      />
    ) : (
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-muted/30 border border-border rounded px-2.5 py-1.5 font-mono text-xs focus:border-primary focus:outline-none transition-colors"
      />
    )}
  </div>
);

const ArrayField = ({ items, onAdd, onRemove, onUpdate, placeholder, label }: {
  items: string[];
  onAdd: () => void;
  onRemove: (i: number) => void;
  onUpdate: (i: number, v: string) => void;
  placeholder?: string;
  label: string;
}) => (
  <div>
    <div className="flex items-center justify-between mb-1.5">
      <span className="font-mono text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">{label}</span>
      <button onClick={onAdd} className="text-primary hover:text-primary/80 text-xs font-mono font-bold px-1">+ Ajouter</button>
    </div>
    <div className="space-y-1.5">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-1.5">
          <input
            value={item}
            onChange={(e) => onUpdate(i, e.target.value)}
            placeholder={placeholder}
            className="flex-1 bg-muted/30 border border-border rounded px-2 py-1 font-mono text-[11px] focus:border-primary focus:outline-none transition-colors"
          />
          <button onClick={() => onRemove(i)} className="text-destructive hover:text-destructive/80 shrink-0 text-xs px-1">×</button>
        </div>
      ))}
    </div>
  </div>
);

import React from "react";

export const CVForm = () => {
  const {
    data,
    updateField,
    addEducation, removeEducation, updateEducation,
    addSkill, removeSkill, updateSkill,
    addSoftSkill, removeSoftSkill, updateSoftSkill,
    addInterest, removeInterest, updateInterest,
    addExperience, removeExperience, updateExperience,
    addExperienceDetail, removeExperienceDetail, updateExperienceDetail,
    addExperienceKpi, removeExperienceKpi, updateExperienceKpi,
    addProject, removeProject, updateProject,
    resetAll, exportJSON,
  } = useCVStore();

  return (
    <div className="h-full overflow-y-auto p-3 space-y-2.5">
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-mono text-sm font-bold text-primary uppercase tracking-wider">Générateur CV</h2>
        <div className="flex gap-1.5">
          <button
            onClick={() => {
              const blob = new Blob([exportJSON()], { type: "application/json" });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = "cv-data.json";
              a.click();
              URL.revokeObjectURL(url);
            }}
            className="px-2 py-1 bg-primary/10 border border-primary/30 rounded text-[10px] font-mono text-primary hover:bg-primary/20 transition-colors"
          >
            Exporter
          </button>
          <button
            onClick={() => { if (confirm("Réinitialiser toutes les données ?")) resetAll(); }}
            className="px-2 py-1 bg-destructive/10 border border-destructive/30 rounded text-[10px] font-mono text-destructive hover:bg-destructive/20 transition-colors"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Identité & Contact */}
      <Section title="Identité & Contact" defaultOpen>
        <Field label="Prénom" value={data.firstName} onChange={(v) => updateField("firstName", v)} placeholder="ROMAIN" />
        <Field label="Nom" value={data.lastName} onChange={(v) => updateField("lastName", v)} placeholder="LÉON" />
        <Field label="Sous-titre" value={data.subtitle} onChange={(v) => updateField("subtitle", v)} placeholder="Étudiant en..." />
        <Field label="Adresse" value={data.address} onChange={(v) => updateField("address", v)} placeholder="Basse Terre..." />
        <Field label="Email" value={data.email} onChange={(v) => updateField("email", v)} placeholder="r.leon@rt-iut.re" />
        <Field label="Téléphone" value={data.phone} onChange={(v) => updateField("phone", v)} placeholder="06 93..." />
        <Field label="Permis" value={data.drivingLicense} onChange={(v) => updateField("drivingLicense", v)} placeholder="Permis B..." />
      </Section>

      {/* Objectif & Profil */}
      <Section title="Objectif & Profil" defaultOpen>
        <Field label="Bannière objectif" value={data.objective} onChange={(v) => updateField("objective", v)} placeholder="Me spécialiser..." />
        <Field label="Texte profil" value={data.profile} onChange={(v) => updateField("profile", v)} multiline placeholder="Bientôt diplômé..." />
        <Field label="URL Portfolio (QR Code)" value={data.portfolioUrl} onChange={(v) => updateField("portfolioUrl", v)} placeholder="https://..." />
      </Section>

      {/* Formation */}
      <Section title="Formation">
        {data.education.map((edu, i) => (
          <div key={i} className="bg-muted/20 border border-border rounded p-2.5 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-muted-foreground">#{i + 1}</span>
              <button onClick={() => removeEducation(i)} className="text-destructive hover:text-destructive/80 text-[10px] font-mono">Supprimer</button>
            </div>
            <Field label="Date" value={edu.date} onChange={(v) => updateEducation(i, "date", v)} placeholder="2025 - 2026" />
            <Field label="Titre" value={edu.title} onChange={(v) => updateEducation(i, "title", v)} placeholder="BUT Réseau..." />
            <Field label="École" value={edu.school} onChange={(v) => updateEducation(i, "school", v)} placeholder="IUT de..." />
          </div>
        ))}
        <button onClick={addEducation} className="w-full py-1.5 border border-dashed border-border rounded text-[10px] font-mono text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
          + Ajouter une formation
        </button>
      </Section>

      {/* Compétences */}
      <Section title="Compétences">
        {data.skillCategories.map((cat, ci) => (
          <div key={ci} className="bg-muted/20 border border-border rounded p-2.5 space-y-2">
            <div className="flex items-center gap-2">
              <input
                value={cat.title}
                onChange={(e) => updateField("skillCategories", data.skillCategories.map((c, i) => i === ci ? { ...c, title: e.target.value } : c))}
                className="flex-1 bg-transparent border-b border-border px-1 py-0.5 font-mono text-xs font-semibold focus:border-primary focus:outline-none"
                placeholder="Titre catégorie"
              />
            </div>
            <ArrayField
              label="Compétences"
              items={cat.skills}
              onAdd={() => addSkill(ci)}
              onRemove={(si) => removeSkill(ci, si)}
              onUpdate={(si, v) => updateSkill(ci, si, v)}
              placeholder="Ex: CISCO"
            />
          </div>
        ))}
      </Section>

      {/* Savoir-être & Intérêts */}
      <Section title="Savoir-être & Intérêts">
        <ArrayField label="Savoir-être" items={data.softSkills} onAdd={addSoftSkill} onRemove={removeSoftSkill} onUpdate={updateSoftSkill} placeholder="Autonome" />
        <ArrayField label="Intérêts" items={data.interests} onAdd={addInterest} onRemove={removeInterest} onUpdate={updateInterest} placeholder="Voyages" />
      </Section>

      {/* Expériences */}
      <Section title="Expériences">
        {data.experiences.map((exp, i) => (
          <div key={i} className="bg-muted/20 border border-border rounded p-2.5 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-muted-foreground">#{i + 1}</span>
              <button onClick={() => removeExperience(i)} className="text-destructive hover:text-destructive/80 text-[10px] font-mono">Supprimer</button>
            </div>
            <Field label="Rôle" value={exp.role} onChange={(v) => updateExperience(i, "role", v)} placeholder="Administrateur..." />
            <Field label="Entreprise" value={exp.company} onChange={(v) => updateExperience(i, "company", v)} placeholder="CIVIS" />
            <Field label="Lieu" value={exp.location} onChange={(v) => updateExperience(i, "location", v)} placeholder="Saint-Pierre" />
            <Field label="Durée" value={exp.duration} onChange={(v) => updateExperience(i, "duration", v)} placeholder="2026 (4 mois)" />
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={exp.current}
                onChange={(e) => updateExperience(i, "current", e.target.checked)}
                className="rounded border-border"
              />
              <span className="font-mono text-[10px] text-muted-foreground uppercase">En cours</span>
            </label>
            <ArrayField label="Tâches" items={exp.details} onAdd={() => addExperienceDetail(i)} onRemove={(di) => removeExperienceDetail(i, di)} onUpdate={(di, v) => updateExperienceDetail(i, di, v)} placeholder="Déploiement VLAN..." />
            <ArrayField label="KPIs" items={exp.kpis} onAdd={() => addExperienceKpi(i)} onRemove={(ki) => removeExperienceKpi(i, ki)} onUpdate={(ki, v) => updateExperienceKpi(i, ki, v)} placeholder="+30 Tickets résolus" />
          </div>
        ))}
        <button onClick={addExperience} className="w-full py-1.5 border border-dashed border-border rounded text-[10px] font-mono text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
          + Ajouter une expérience
        </button>
      </Section>

      {/* Projets */}
      <Section title="Projets">
        {data.projects.map((proj, i) => (
          <div key={i} className="bg-muted/20 border border-border rounded p-2.5 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-muted-foreground">#{i + 1}</span>
              <button onClick={() => removeProject(i)} className="text-destructive hover:text-destructive/80 text-[10px] font-mono">Supprimer</button>
            </div>
            <Field label="Titre" value={proj.title} onChange={(v) => updateProject(i, "title", v)} placeholder="Chaîne IoT..." />
            <Field label="Sous-titre" value={proj.subtitle} onChange={(v) => updateProject(i, "subtitle", v)} placeholder="Température/humidité..." />
            <Field label="Résultats" value={proj.results} onChange={(v) => updateProject(i, "results", v)} placeholder="Recettes de test..." />
            <Field label="Stack technique" value={proj.stack} onChange={(v) => updateProject(i, "stack", v)} placeholder="Docker • Python • MQTT" />
          </div>
        ))}
        <button onClick={addProject} className="w-full py-1.5 border border-dashed border-border rounded text-[10px] font-mono text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
          + Ajouter un projet
        </button>
      </Section>
    </div>
  );
};
