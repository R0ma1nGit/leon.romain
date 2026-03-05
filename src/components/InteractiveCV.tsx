import { useState } from "react";
import { useTranslation } from "react-i18next";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  GraduationCap,
  Briefcase,
  Code2,
  FolderOpen,
  User,
  MapPin,
  Mail,
  Phone,
  ExternalLink,
  ChevronRight,
  Download,
  Eye,
  Sparkles,
  Heart,
  Target,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
interface InteractiveCVProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
// Map CV project names to portfolio project indices
const projectMapping: Record<string, number> = {
  "mqtt": 2,       // IoT MQTT
  "iot": 2,
  "mpls": 5,       // MPLS Architecture
  "active directory": 8, // AD Administration
};
const InteractiveCV = ({ open, onOpenChange }: InteractiveCVProps) => {
  const { t, i18n } = useTranslation();
  const isFr = i18n.language === "fr";
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const scrollToSection = (sectionId: string) => {
    onOpenChange(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };
  const openProject = (projectIndex: number) => {
    onOpenChange(false);
    setTimeout(() => {
      const element = document.getElementById("projets");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        // Dispatch custom event to open the project modal
        setTimeout(() => {
          window.dispatchEvent(
            new CustomEvent("open-project", { detail: { index: projectIndex } })
          );
        }, 600);
      }
    }, 300);
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-border border-glow p-0">
        <DialogHeader className="sr-only">
          <DialogTitle>CV Interactif - Romain LEON</DialogTitle>
          <DialogDescription>
            {isFr ? "Cliquez sur les sections pour naviguer vers le portfolio" : "Click sections to navigate to portfolio"}
          </DialogDescription>
        </DialogHeader>
        {/* CV Header */}
        <div className="bg-gradient-to-r from-primary/20 via-secondary/10 to-primary/20 border-b border-border p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold font-mono">
                <span className="text-primary text-glow">Romain</span>{" "}
                <span className="text-secondary text-glow">LEON</span>
              </h2>
              <p className="text-muted-foreground font-mono text-sm mt-2">
                {isFr
                  ? "Étudiant en 3ème année de BUT Réseaux & Télécommunications"
                  : "3rd Year Networking & Telecommunications Student"}
              </p>
              <p className="text-xs text-muted-foreground font-mono mt-1">
                {isFr
                  ? "Spécialisation Réseau Opérateur et Multimédia"
                  : "Network Operator & Multimedia Specialization"}
              </p>
              <div className="flex flex-wrap gap-3 mt-4 text-xs text-muted-foreground font-mono">
                <span className="flex items-center gap-1">
                  <MapPin size={12} className="text-primary" /> Basse Terre, Saint-Pierre 97410
                </span>
                <span className="flex items-center gap-1">
                  <Mail size={12} className="text-primary" /> r.leon@rt-iut.re
                </span>
                <span className="flex items-center gap-1">
                  <Phone size={12} className="text-primary" /> 06 93 39 78 68
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="/CV_Romain_LEON_Portfolio.pdf"
                download="LEON_Romain-Curriculum_Vitae.pdf"
                className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-xs font-mono text-primary hover:bg-primary/20 transition-all"
              >
                <Download size={14} /> {isFr ? "Télécharger PDF" : "Download PDF"}
              </a>
              <div className="text-[10px] text-muted-foreground text-center font-mono flex items-center gap-1 justify-center">
                <Sparkles size={10} className="text-secondary" />
                {isFr ? "CV Interactif" : "Interactive Resume"}
              </div>
            </div>
          </div>
          {/* Hint bar */}
          <div className="mt-4 bg-terminal-bg border border-border rounded-lg px-4 py-2">
            <p className="font-mono text-xs text-secondary flex items-center gap-2">
              <Eye size={12} />
              {isFr
                ? "💡 Cliquez sur les sections pour naviguer directement vers mon portfolio"
                : "💡 Click on sections to navigate directly to my portfolio"}
            </p>
          </div>
        </div>
        {/* CV Body */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Stage Request Banner */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-center">
            <p className="font-mono text-sm font-semibold text-primary">
              {isFr
                ? "Demande de stage (4 mois) — Réseaux & Supervision"
                : "Internship Request (4 months) — Networking & Monitoring"}
            </p>
          </div>
          {/* Profile */}
          <CVSection
            icon={<User size={18} />}
            title={isFr ? "Profil" : "Profile"}
            hovered={hoveredSection === "profil"}
            onMouseEnter={() => setHoveredSection("profil")}
            onMouseLeave={() => setHoveredSection(null)}
            onClick={() => scrollToSection("apropos")}
            clickable
          >
            <p className="text-sm text-muted-foreground leading-relaxed">
              {isFr
                ? "Passionné par les architectures réseaux et leur supervision, fort d'une expérience concrète en IoT et Virtualisation, je souhaite mettre à disposition mes compétences et mon savoir être au service de votre structure."
                : "Passionate about network architectures and monitoring, with concrete experience in IoT and Virtualization, I wish to put my skills and interpersonal qualities at the service of your organization."}
            </p>
          </CVSection>
          {/* Education */}
          <CVSection
            icon={<GraduationCap size={18} />}
            title={isFr ? "Formation" : "Education"}
            hovered={hoveredSection === "formation"}
            onMouseEnter={() => setHoveredSection("formation")}
            onMouseLeave={() => setHoveredSection(null)}
            onClick={() => scrollToSection("apropos")}
            clickable
          >
            <div className="space-y-3">
              <EducationItem
                year={isFr ? "2025 - 2026 (En cours)" : "2025 - 2026 (Ongoing)"}
                title={isFr ? "BUT Réseau & Télécommunication" : "Bachelor's in Networking & Telecom"}
                school="IUT de Saint-Pierre"
              />
              <EducationItem
                year="2025"
                title={isFr ? "DUT Réseau & Télécommunication" : "Associate Degree in Networking & Telecom"}
                school="IUT de Saint-Pierre"
              />
              <EducationItem
                year="2023"
                title={isFr ? "Baccalauréat STI2D" : "Baccalauréat STI2D"}
                school="Lycée Paule Pignolet"
              />
            </div>
          </CVSection>
          {/* Experience */}
          <CVSection
            icon={<Briefcase size={18} />}
            title={isFr ? "Expérience Professionnelle" : "Professional Experience"}
            hovered={hoveredSection === "experience"}
            onMouseEnter={() => setHoveredSection("experience")}
            onMouseLeave={() => setHoveredSection(null)}
            onClick={() => scrollToSection("experiences")}
            clickable
          >
            <div className="bg-terminal-bg border border-border rounded-lg p-4">
              <div className="flex items-start justify-between flex-wrap gap-2">
                <div>
                  <h4 className="font-mono font-semibold text-sm">
                    {isFr ? "Technicien Support Informatique Niv 1 & 2" : "IT Support Technician Level 1 & 2"}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">AFI SAS - Saint-Paul</p>
                </div>
                <Badge variant="outline" className="border-secondary/50 text-secondary bg-secondary/10 text-[10px] font-mono">
                  {isFr ? "2025 (2 mois) — Stage" : "2025 (2 months) — Internship"}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                {isFr
                  ? "Support, installation, maintenance (Sur site et à distance)"
                  : "Support, installation, maintenance (On-site and remote)"}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <StatBadge label={isFr ? "+30 Tickets résolus" : "+30 Tickets resolved"} />
                <StatBadge label={isFr ? "15 Postes préparés" : "15 Workstations prepared"} />
                <StatBadge label={isFr ? "12 Clients satisfaits" : "12 Satisfied clients"} />
              </div>
            </div>
          </CVSection>
          {/* Skills */}
          <CVSection
            icon={<Code2 size={18} />}
            title={isFr ? "Savoir Faire" : "Technical Skills"}
            hovered={hoveredSection === "skills"}
            onMouseEnter={() => setHoveredSection("skills")}
            onMouseLeave={() => setHoveredSection(null)}
            onClick={() => scrollToSection("competences")}
            clickable
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SkillBlock
                title={isFr ? "Réseaux" : "Networking"}
                skills={["CISCO OSPF/RIP/EIGRP", "VLAN & ACL", "MPLS / SD-WAN", "GNS3 / Packet Tracer"]}
              />
              <SkillBlock
                title={isFr ? "Systèmes & Scripting" : "Systems & Scripting"}
                skills={["Linux (Debian)", "Windows Server", "Active Directory", "Bash / Python"]}
              />
              <SkillBlock
                title={isFr ? "Supervision & IoT" : "Monitoring & IoT"}
                skills={["Grafana / InfluxDB", "Docker", "Wireshark / Cacti"]}
              />
              <SkillBlock
                title={isFr ? "Méthodologies projets" : "Project Methodology"}
                skills={[
                  isFr ? "Vérification Recettes" : "Test Verification",
                  isFr ? "Analyse réflexive" : "Reflective Analysis",
                ]}
              />
            </div>
          </CVSection>
          {/* Projects */}
          <CVSection
            icon={<FolderOpen size={18} />}
            title={isFr ? "Projets Significatifs" : "Key Projects"}
            hovered={hoveredSection === "projects"}
            onMouseEnter={() => setHoveredSection("projects")}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <div className="space-y-4">
              {/* IoT Project */}
              <ProjectCard
                title={isFr ? "Chaîne IoT & Supervision de bout en bout" : "End-to-End IoT & Monitoring Chain"}
                description={
                  isFr
                    ? "Température/humidité (MQTT, InfluxDB, Grafana). Recettes de test : Alerte de dépassement."
                    : "Temperature/humidity (MQTT, InfluxDB, Grafana). Test recipes: Threshold alerts."
                }
                stack={["Docker", "Python", "MQTT", "Grafana", "InfluxDB"]}
                category={isFr ? "Supervision" : "Monitoring"}
                onClick={() => openProject(2)}
              />
              {/* MPLS Project */}
              <ProjectCard
                title={isFr ? "Architecture MPLS & Virtualisation" : "MPLS Architecture & Virtualization"}
                description={
                  isFr
                    ? "Conception d'un réseau opérateur multi-clients (MPLS/VPN). Déploiement de services virtualisés sous Linux."
                    : "Multi-client operator network design (MPLS/VPN). Virtualized service deployment on Linux."
                }
                stack={["Cisco IOS", "GNS3", "Linux", "Cacti"]}
                category={isFr ? "Réseau" : "Network"}
                onClick={() => openProject(5)}
              />
              {/* AD Project */}
              <ProjectCard
                title={isFr ? "Administration Système Windows/Linux" : "Windows/Linux System Administration"}
                description={
                  isFr
                    ? "Gestion d'un Active Directory et administration des utilisateurs. Automatisation via Bash."
                    : "Active Directory management and user administration. Automation via Bash."
                }
                stack={["Windows Server", "Debian", "Bash", "AD"]}
                category={isFr ? "Serveur" : "Server"}
                onClick={() => openProject(8)}
              />
            </div>
            {/* View all projects link */}
            <button
              onClick={() => scrollToSection("projets")}
              className="mt-4 flex items-center gap-2 text-primary font-mono text-sm hover:underline group"
            >
              <FolderOpen size={14} />
              {isFr ? "Voir tous mes projets (9)" : "View all my projects (9)"}
              <ExternalLink size={12} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </CVSection>
          {/* Soft Skills & Interests */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <CVSection
              icon={<Target size={18} />}
              title={isFr ? "Savoir Être" : "Soft Skills"}
              hovered={hoveredSection === "soft"}
              onMouseEnter={() => setHoveredSection("soft")}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <div className="flex flex-wrap gap-2">
                {[
                  isFr ? "Autonome" : "Self-reliant",
                  isFr ? "Rigoureux" : "Rigorous",
                  isFr ? "Esprit d'équipe" : "Team player",
                  isFr ? "Curieux" : "Curious",
                ].map((s) => (
                  <Badge key={s} variant="outline" className="border-secondary/40 text-secondary bg-secondary/5 font-mono text-xs">
                    {s}
                  </Badge>
                ))}
              </div>
            </CVSection>
            <CVSection
              icon={<Heart size={18} />}
              title={isFr ? "Intérêts" : "Interests"}
              hovered={hoveredSection === "interests"}
              onMouseEnter={() => setHoveredSection("interests")}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <div className="flex flex-wrap gap-2">
                {[
                  isFr ? "Voyages" : "Travel",
                  isFr ? "Sport de plein air" : "Outdoor Sports",
                  isFr ? "Jeux de société" : "Board Games",
                ].map((s) => (
                  <Badge key={s} variant="outline" className="border-primary/40 text-primary bg-primary/5 font-mono text-xs">
                    {s}
                  </Badge>
                ))}
              </div>
            </CVSection>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
// Sub-components
interface CVSectionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  hovered?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
  clickable?: boolean;
}
const CVSection = ({ icon, title, children, hovered, onMouseEnter, onMouseLeave, onClick, clickable }: CVSectionProps) => (
  <div
    className={`rounded-lg border p-5 transition-all duration-300 ${
      clickable ? "cursor-pointer" : ""
    } ${
      hovered
        ? "border-primary/50 bg-primary/5 border-glow"
        : "border-border bg-card/50"
    }`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={onClick}
  >
    <div className="flex items-center gap-2 mb-4">
      <span className="text-primary">{icon}</span>
      <h3 className="font-mono font-bold text-sm uppercase tracking-wider">{title}</h3>
      {clickable && (
        <ChevronRight
          size={14}
          className={`ml-auto text-primary transition-transform ${hovered ? "translate-x-1" : ""}`}
        />
      )}
    </div>
    {children}
  </div>
);
const EducationItem = ({ year, title, school }: { year: string; title: string; school: string }) => (
  <div className="flex items-start gap-3">
    <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 text-[10px] font-mono whitespace-nowrap shrink-0">
      {year}
    </Badge>
    <div>
      <p className="font-mono text-sm font-semibold">{title}</p>
      <p className="text-xs text-muted-foreground">{school}</p>
    </div>
  </div>
);
const StatBadge = ({ label }: { label: string }) => (
  <span className="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-[10px] font-mono text-primary">
    {label}
  </span>
);
const SkillBlock = ({ title, skills }: { title: string; skills: string[] }) => (
  <div className="bg-terminal-bg border border-border rounded-lg p-3">
    <h4 className="font-mono text-xs font-bold text-primary mb-2">{title}</h4>
    <div className="flex flex-wrap gap-1">
      {skills.map((s) => (
        <span key={s} className="text-[11px] font-mono text-muted-foreground">
          {s}{" "}
        </span>
      ))}
    </div>
  </div>
);
interface ProjectCardProps {
  title: string;
  description: string;
  stack: string[];
  category: string;
  onClick: () => void;
}
const ProjectCard = ({ title, description, stack, category, onClick }: ProjectCardProps) => (
  <div
    onClick={onClick}
    className="bg-terminal-bg border border-border rounded-lg p-4 cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all group"
  >
    <div className="flex items-start justify-between gap-2">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <Badge variant="outline" className="border-secondary/40 text-secondary bg-secondary/5 text-[10px] font-mono">
            {category}
          </Badge>
        </div>
        <h4 className="font-mono text-sm font-semibold group-hover:text-primary transition-colors flex items-center gap-2">
          {title}
          <ExternalLink size={12} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
        </h4>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{description}</p>
      </div>
    </div>
    <div className="flex flex-wrap gap-1 mt-2">
      {stack.map((s) => (
        <span key={s} className="px-1.5 py-0.5 bg-primary/10 border border-primary/20 rounded text-[10px] font-mono">
          {s}
        </span>
      ))}
    </div>
  </div>
);
export default InteractiveCV;