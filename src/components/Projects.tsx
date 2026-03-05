import { Network, Server, Globe, ArrowRight, Activity, Shield, Cloud, Layers, HardDrive, Lock, FileText, AlertTriangle, Loader2, X, CheckCircle2, ClipboardCheck, Monitor, Wifi, Workflow, Database, Users, Book,} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState, useEffect, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";
import topologyMpls from "@/assets/topology-mpls.png";
import topologyCacti from "@/assets/Cacti.png";
import topologyDns from "@/assets/topology-dns.png";
import topologyVmware from "@/assets/topology-vmware.png";
import topologyPfsense from "@/assets/topology-pfsense.png";
import topologyDatacenter from "@/assets/topology-datacenter.png";
import topologyAnsible from "@/assets/Ansible.png";
import topologyAD from "@/assets/ActiveDirectory.png";
import topologyMQTT from "@/assets/MQTT.png";
import topologyMPLS from "@/assets/MPLS.png";
// import topologyFEEZEN from "@/assets/topology-feezen.png";
type ProjectYear = "BUT1" | "BUT2" | "BUT3";
type ProjectCategory = "réseau" | "supervision" | "serveur" |"projet personnel";

interface Project {
  title: string;
  description: string;
  icon: any;
  skills: string[];
  color: string;
  category: ProjectCategory;
  topology?: string;
  rapport?: string;
  status?: "en_cours" | "termine";
  annee?: ProjectYear;
  detailedDescription: {
    contexte: string;
    objectif: string;
    realisation: string[];
    resultats: string;
    technologies: string[];
  };
}

// Helper pour le badge année
const getYearBadgeStyles = (annee: ProjectYear) => {
  switch (annee) {
    case "BUT1":
      return "border-blue-500/50 text-blue-500 bg-blue-500/10";
    case "BUT2":
      return "border-primary/50 text-primary bg-primary/10";
    case "BUT3":
      return "border-secondary/50 text-secondary bg-secondary/10";
  }
};

const Projects = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "tous">("tous");
  const [pdfOpen, setPdfOpen] = useState(false);

  // Listen for open-project events from InteractiveCV
  useEffect(() => {
    const handleOpenProject = (e: Event) => {
      const customEvent = e as CustomEvent<{ index: number }>;
      const idx = customEvent.detail.index;
      setTimeout(() => {
        if (projects[idx]) {
          setSelectedProject(projects[idx]);
        }
      }, 100);
    };
    window.addEventListener("open-project", handleOpenProject);
    return () => window.removeEventListener("open-project", handleOpenProject);
  });
  
  // Fonction de journalisation simulée
  const logPdfAccess = (projectTitle: string) => {
    const timestamp = new Date().toISOString();
    console.info(`[AUDIT] Ouverture du rapport pour "${projectTitle}" à ${timestamp}`);
    toast({
      title: t("projects.secureDoc"),
      description: t("projects.secureDocDesc"),
    });
  };

  const handleOpenPdf = () => {
    if (selectedProject?.rapport) {
      logPdfAccess(selectedProject.title);
      setPdfOpen(true);
    } else {
        toast({
            variant: "destructive",
            title: t("projects.docUnavailable"),
            description: t("projects.docUnavailableDesc"),
        });
    }
  };

  const projectsList = t("projects.list", { returnObjects: true }) as Array<{
    title: string;
    description: string;
    skills: string[];
    contexte: string;
    objectif: string;
    realisation: string[];
    resultats: string;
    technologies: string[];
  }>;

  // Static project metadata (icons, colors, categories, etc.) mapped by index
  const projectMeta = [
    { icon: Activity, color: "secondary", category: "supervision" as ProjectCategory, topology: topologyCacti, rapport: "/Rapport_Cacti.pdf", status: "termine" as const, annee: "BUT1" as ProjectYear },
    { icon: Monitor, color: "primary", category: "supervision" as ProjectCategory, rapport: "/Rapport_Meteo.pdf", status: "termine" as const, annee: "BUT3" as ProjectYear },
    { icon: Wifi, color: "secondary", category: "supervision" as ProjectCategory, topology: topologyMQTT, rapport: "/Rapport_MQTT.pdf", status: "termine" as const, annee: "BUT3" as ProjectYear },
    { icon: Workflow, color: "primary", category: "serveur" as ProjectCategory, topology: topologyAnsible, rapport: "/Rapport_Ansible.pdf", status: "termine" as const, annee: "BUT3" as ProjectYear },
    { icon: Shield, color: "secondary", category: "réseau" as ProjectCategory, rapport: "/Rapport_Reseau_Linux.pdf", status: "termine" as const, annee: "BUT2" as ProjectYear },
    { icon: Globe, color: "primary", category: "réseau" as ProjectCategory, topology: topologyMPLS, status: "termine" as const, annee: "BUT2" as ProjectYear },
    { icon: Database, color: "primary", category: "serveur" as ProjectCategory, rapport: "/Rapport_MySQL.pdf", status: "termine" as const, annee: "BUT2" as ProjectYear },
    { icon: Globe, color: "primary", category: "projet personnel" as ProjectCategory, status: "termine" as const },
    { icon: Users, color: "secondary", category: "serveur" as ProjectCategory, topology: topologyAD, rapport: "/Rapport_Active_Directory.pdf", status: "termine" as const, annee: "BUT2" as ProjectYear },
  ];

  const projects: Project[] = projectsList.map((p, i) => ({
    title: p.title,
    description: p.description,
    skills: p.skills,
    icon: projectMeta[i]?.icon || Globe,
    color: projectMeta[i]?.color || "primary",
    category: projectMeta[i]?.category || "réseau",
    topology: projectMeta[i]?.topology,
    rapport: projectMeta[i]?.rapport,
    status: projectMeta[i]?.status,
    annee: projectMeta[i]?.annee,
    detailedDescription: {
      contexte: p.contexte,
      objectif: p.objectif,
      realisation: p.realisation,
      resultats: p.resultats,
      technologies: p.technologies,
    },
  }));
  const categories: { name: ProjectCategory | "tous"; label: string; color: string }[] = [
    { name: "tous", label: t("projects.allProjects"), color: "text-primary" },
    { name: "réseau", label: t("projects.network"), color: "text-cyan-400" },
    { name: "supervision", label: t("projects.supervision"), color: "text-green-400" },
    { name: "serveur", label: t("projects.server"), color: "text-blue-400" },
    { name: "projet personnel", label: t("projects.personalProject"), color: "text-yellow-400" }
  ];

  const filteredProjects = activeCategory === "tous" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projets" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 network-grid opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4 text-center">
          <span className="text-primary text-glow">{">"}</span> {t("projects.title")}
        </h2>
        <div className="h-1 w-24 bg-primary mx-auto mb-8 rounded-full border-glow"></div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-6 py-2 font-mono text-sm rounded-full border transition-all duration-300 ${
                activeCategory === category.name
                  ? `bg-primary/20 border-primary ${category.color} border-glow font-semibold scale-105`
                  : "bg-terminal-bg border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projets groupés par catégorie ou tous */}
        <div className="max-w-6xl mx-auto space-y-12">
          {activeCategory === "tous" ? (
            // Afficher tous les projets groupés par catégorie
            categories.filter(cat => cat.name !== "tous").map((category) => {
              const categoryProjects = projects.filter(p => p.category === category.name);
              if (categoryProjects.length === 0) return null;

              return (
                <div key={category.name} className="space-y-4">
                  <h3 className={`text-2xl font-mono font-bold ${category.color} mb-6`}>
                    <span className="text-primary">{">"}</span> {category.label}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {categoryProjects.map((project, index) => (
                      <div
                        key={index}
                        onClick={() => setSelectedProject(project)}
                        className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all group cursor-pointer hover:scale-[1.02]"
                      >
                        <div className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg border border-primary/30 group-hover:border-glow transition-all flex-shrink-0">
                              <project.icon className="text-primary" size={28} />
                            </div>

                            <div className="flex-1 min-w-0">
                              {/* Badges status et année */}
                              <div className="flex items-center gap-2 mb-2 flex-wrap">
                                {project.annee && (
                                  <Badge variant="outline" className={`${getYearBadgeStyles(project.annee)} text-[10px] px-2 py-0.5 h-5 font-mono`}>
                                    {project.annee}
                                  </Badge>
                                )}
                                {project.status === "en_cours" && (
                                  <Badge variant="outline" className="border-yellow-500/50 text-yellow-500 bg-yellow-500/10 text-[10px] px-2 py-0.5 h-5 font-mono">
                                    <Loader2 className="w-3 h-3 mr-1 animate-spin" />
                                    {t("projects.inProgress")}
                                  </Badge>
                                )}
                                {project.status === "termine" && (
                                  <Badge variant="outline" className="border-green-500/50 text-green-500 bg-green-500/10 text-[10px] px-2 py-0.5 h-5 font-mono">
                                    <CheckCircle2 className="w-3 h-3 mr-1" />
                                    {t("projects.completed")}
                                  </Badge>
                                )}
                              </div>
                              <h4 className="font-mono text-lg font-semibold mb-2 flex items-center gap-2 group-hover:text-primary transition-colors">
                                {project.title}
                                <ArrowRight
                                  size={16}
                                  className="text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                                />
                              </h4>
                              <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                                {project.description}
                              </p>

                              <div className="flex flex-wrap gap-1.5">
                                {project.skills.slice(0, 4).map((skill, skillIndex) => (
                                  <span
                                    key={skillIndex}
                                    className="px-2 py-0.5 bg-primary/10 border border-primary/30 rounded text-xs font-mono"
                                  >
                                    {skill}
                                  </span>
                                ))}
                                {project.skills.length > 4 && (
                                  <span className="px-2 py-0.5 text-xs font-mono text-muted-foreground">
                                    +{project.skills.length - 4}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-terminal-bg border-t border-border px-4 py-2 flex justify-between items-center">
                          <p className="font-mono text-xs text-muted-foreground">
                            <span className="text-primary">{">"}</span> {t("projects.clickDetails")}
                          </p>
                          {project.rapport && (
                            <span className="flex items-center gap-1 text-secondary text-xs" title="Compte rendu disponible">
                              <FileText size={12} /> <span className="hidden sm:inline">PDF</span>
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
          ) : (
            // Afficher uniquement les projets de la catégorie sélectionnée
            <div className="space-y-4">
              <h3 className={`text-2xl font-mono font-bold ${categories.find(c => c.name === activeCategory)?.color} mb-6`}>
                <span className="text-primary">{">"}</span> {categories.find(c => c.name === activeCategory)?.label}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {filteredProjects.map((project, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedProject(project)}
                      className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all group cursor-pointer hover:scale-[1.02]"
                    >
                      <div className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-primary/10 rounded-lg border border-primary/30 group-hover:border-glow transition-all flex-shrink-0">
                            <project.icon className="text-primary" size={28} />
                          </div>

                          <div className="flex-1 min-w-0">
                            {/* Badges status et année */}
                            <div className="flex items-center gap-2 mb-2 flex-wrap">
                              {project.annee && (
                                <Badge variant="outline" className={`${getYearBadgeStyles(project.annee)} text-[10px] px-2 py-0.5 h-5 font-mono`}>
                                  {project.annee}
                                </Badge>
                              )}
                              {project.status === "en_cours" && (
                                <Badge variant="outline" className="border-yellow-500/50 text-yellow-500 bg-yellow-500/10 text-[10px] px-2 py-0.5 h-5 font-mono">
                                  <Loader2 className="w-3 h-3 mr-1 animate-spin" />
                                  {t("projects.inProgress")}
                                </Badge>
                              )}
                              {project.status === "termine" && (
                                <Badge variant="outline" className="border-green-500/50 text-green-500 bg-green-500/10 text-[10px] px-2 py-0.5 h-5 font-mono">
                                  <CheckCircle2 className="w-3 h-3 mr-1" />
                                  {t("projects.completed")}
                                </Badge>
                              )}
                            </div>
                            <h4 className="font-mono text-lg font-semibold mb-2 flex items-center gap-2 group-hover:text-primary transition-colors">
                              {project.title}
                              <ArrowRight
                                size={16}
                                className="text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                              />
                            </h4>
                            <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                              {project.description}
                            </p>

                            <div className="flex flex-wrap gap-1.5">
                              {project.skills.slice(0, 4).map((skill, skillIndex) => (
                                <span
                                  key={skillIndex}
                                  className="px-2 py-0.5 bg-primary/10 border border-primary/30 rounded text-xs font-mono"
                                >
                                  {skill}
                                </span>
                              ))}
                              {project.skills.length > 4 && (
                                <span className="px-2 py-0.5 text-xs font-mono text-muted-foreground">
                                  +{project.skills.length - 4}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-terminal-bg border-t border-border px-4 py-2 flex justify-between items-center">
                        <p className="font-mono text-xs text-muted-foreground">
                          <span className="text-primary">{">"}</span> {t("projects.clickDetails")}
                        </p>
                        {project.rapport && (
                          <span className="flex items-center gap-1 text-secondary text-xs" title="Compte rendu disponible">
                            <FileText size={12} /> <span className="hidden sm:inline">PDF</span>
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
        </div>
      </div>

      {/* Dialog pour les détails du projet */}
      <Dialog open={!!selectedProject && !pdfOpen} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto bg-card border-primary/30">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-start gap-4 mb-4 flex-col md:flex-row">
                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/30 w-fit">
                    <selectedProject.icon className="text-primary" size={36} />
                  </div>
                  <div className="flex-1">
                    <DialogTitle className="text-2xl font-mono mb-2">
                      {selectedProject.title}
                    </DialogTitle>
                    <Badge variant="outline" className={`${categories.find(c => c.name === selectedProject.category)?.color} border-current`}>
                      {categories.find(c => c.name === selectedProject.category)?.label}
                    </Badge>
                  </div>
                  
                  {/* Bouton pour ouvrir le PDF */}
                  {/* AJOUT DE 'mr-10' ICI POUR DÉCALER VERS LA GAUCHE */}
                  <div className="mt-4 md:mt-0 mr-10"> 
                    <Button 
                        onClick={handleOpenPdf}
                        variant={selectedProject.rapport ? "outline" : "secondary"}
                        className={`font-mono gap-2 ${selectedProject.rapport ? 'border-primary/50 text-primary hover:bg-primary/10' : 'opacity-50 cursor-not-allowed'}`}
                        disabled={!selectedProject.rapport}
                    >
                        {selectedProject.rapport ? (
                            <>
                                <FileText size={16} />
                                {t("projects.pdfReport")}
                            </>
                        ) : (
                            <>
                                <AlertTriangle size={16} />
                                {t("projects.pdfUnavailable")}
                            </>
                        )}
                    </Button>
                  </div>
                </div>
                <DialogDescription className="text-base">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-6">
                {/* Contexte */}
                <div className="bg-terminal-bg border border-border rounded-lg p-5">
                  <h4 className="font-mono text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                    <span className="text-primary">{">"}</span> {t("projects.context")}
                  </h4>
                  <p className="text-foreground leading-relaxed">
                    {selectedProject.detailedDescription.contexte}
                  </p>
                </div>

                {/* Objectif */}
                <div className="bg-terminal-bg border border-border rounded-lg p-5">
                  <h4 className="font-mono text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                    <span className="text-primary">{">"}</span> {t("projects.objective")}
                  </h4>
                  <p className="text-foreground leading-relaxed">
                    {selectedProject.detailedDescription.objectif}
                  </p>
                </div>

                {/* Réalisation */}
                <div className="bg-terminal-bg border border-border rounded-lg p-5">
                  <h4 className="font-mono text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                    <span className="text-primary">{">"}</span> {t("projects.realisation")}
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedProject.detailedDescription.realisation.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-foreground">
                        <span className="text-primary font-mono text-sm mt-1 flex-shrink-0">▸</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Résultats */}
                <div className="bg-terminal-bg border border-border rounded-lg p-5">
                  <h4 className="font-mono text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                    <span className="text-primary">{">"}</span> {t("projects.results")}
                  </h4>
                  <p className="text-foreground leading-relaxed">
                    {selectedProject.detailedDescription.resultats}
                  </p>
                </div>

                {/* Topologie Réseau */}
                {selectedProject.topology && (
                  <div className="bg-terminal-bg border border-border rounded-lg p-5">
                    <h4 className="font-mono text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                      <span className="text-primary">{">"}</span> {t("projects.networkTopology")}
                    </h4>
                    <div className="rounded-lg overflow-hidden border border-primary/30">
                      <img 
                        src={selectedProject.topology} 
                        alt={`Topologie - ${selectedProject.title}`}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div className="bg-terminal-bg border border-border rounded-lg p-5">
                  <h4 className="font-mono text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                    <span className="text-primary">{">"}</span> {t("projects.technologies")}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.detailedDescription.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-primary/10 border border-primary/30 rounded-full text-sm font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Toutes les compétences */}
                <div className="bg-terminal-bg border border-border rounded-lg p-5">
                  <h4 className="font-mono text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                    <span className="text-primary">{">"}</span> {t("projects.skillsDeveloped")}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-secondary/20 border border-secondary/40 rounded-full text-sm font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Dialog Viewer PDF Sécurisé */}
      <Dialog open={pdfOpen} onOpenChange={setPdfOpen}>
        {/* [&>button]:hidden cache la croix par défaut de shadcn pour utiliser la nôtre */}
        <DialogContent className="max-w-6xl w-[95vw] h-[95vh] md:h-[90vh] p-0 flex flex-col [&>button]:hidden">
          
          {/* HEADER PERSONNALISÉ */}
          <DialogHeader className="p-4 border-b border-border shrink-0 flex flex-row items-center justify-between bg-card space-y-0">
            
            {/* Partie Gauche : Titre */}
            <div className="flex flex-col">
              <DialogTitle className="font-mono text-primary text-base md:text-lg">
                {t("projects.report")} - {selectedProject?.title}
              </DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground hidden md:block">
                {t("projects.readOnlyDoc")}
              </DialogDescription>
            </div>

            {/* Partie Droite : Badges + CROIX DE FERMETURE */}
            <div className="flex items-center gap-3">
              {/* Badges existants */}
              <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-mono">
                <Lock size={12} />
                {t("projects.readOnly")}
              </div>
              <Badge variant="outline" className="font-mono text-xs border-secondary/50 text-secondary hidden sm:flex">
                {t("projects.confidential")}
              </Badge>

              {/* --- NOUVEAU BOUTON FERMER (CROIX) --- */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setPdfOpen(false)}
                className="h-8 w-8 ml-1 rounded-full hover:bg-destructive/20 hover:text-destructive transition-colors"
              >
                <X size={20} />
              </Button>
              {/* ------------------------------------- */}
            </div>
          </DialogHeader>
          
          {/* ZONE CONTENU PDF (Reste inchangée) */}
          {selectedProject?.rapport ? (
            <div 
              className="relative flex-1 overflow-hidden select-none bg-zinc-900"
              onContextMenu={(e) => e.preventDefault()}
            >
              {/* Filigrane */}
              <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center opacity-10">
                <div className="rotate-[-30deg] text-primary text-4xl md:text-6xl font-bold whitespace-nowrap">
                  {t("projects.confidentialWatermark")}
                </div>
              </div>
              
              {/* Overlay transparent */}
              <div className="absolute inset-0 z-20 bg-transparent pointer-events-none" />
              
              {/* Iframe */}
              <iframe 
                src={`${selectedProject.rapport}#toolbar=0&navpanes=0&scrollbar=1&view=Fit`}
                className="w-full h-full border-0"
                title={`Compte rendu - ${selectedProject.title}`}
                style={{ pointerEvents: 'auto' }}
              />
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center bg-zinc-900">
              <div className="text-center p-8">
                <FileText className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground font-mono">
                  {t("projects.noPdf")}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
