import { useState, useCallback, useEffect } from "react";
import type { CVData, Education, SkillCategory, Experience, Project } from "@/components/cv-builder/types";

const STORAGE_KEY = "cv-builder-data";

function getDefaultCVData(): CVData {
  return {
    firstName: "ROMAIN",
    lastName: "LÉON",
    subtitle: "Étudiant en 3ème année de BUT Réseaux & Télécommunications | Spécialisation Réseau Opérateur et Multimédia",
    address: "Basse Terre, Saint-Pierre 97410",
    email: "r.leon@rt-iut.re",
    phone: "06 93 39 78 68",
    drivingLicense: "Permis B + Véhicule",
    objective: "Me spécialiser en administration systèmes et infrastructures réseau",
    profile: "Bientôt diplômé d'un BUT Réseaux & Télécommunications, je m'intéresse particulièrement à l'administration systèmes et aux infrastructures réseau. À travers mes projets universitaires, j'ai développé des compétences en Linux, Windows Server, supervision et virtualisation. Je souhaite poursuivre mes études afin de me spécialiser en administration systèmes et infrastructures.",
    education: [
      { date: "2025 - 2026 (En cours)", title: "BUT Réseau & Télécommunication", school: "IUT de Saint-Pierre" },
      { date: "2023 - 2025", title: "DUT Réseau & Télécommunication", school: "IUT de Saint-Pierre" },
      { date: "2023", title: "Baccalauréat STI2D", school: "Lycée Paule Pignolet" },
    ],
    skillCategories: [
      {
        title: "Réseaux",
        icon: "network-wired",
        skills: ["CISCO", "OSPF/RIP/EIGRP", "VLAN & ACL", "MPLS / SD-WAN", "GNS3 / Packet Tracer"],
      },
      {
        title: "Systèmes & Scripting",
        icon: "terminal",
        skills: ["Linux (Debian)", "Windows Server", "Active Directory", "Bash / Python"],
      },
      {
        title: "Supervision & IoT",
        icon: "chart-line",
        skills: ["Grafana / InfluxDB", "Docker", "MQTT", "Wireshark / Cacti"],
      },
      {
        title: "Méthodologies projets",
        icon: "circle-check",
        skills: ["Vérification", "Recettes", "Analyse réflexive"],
      },
    ],
    softSkills: ["Travail en projet", "Collaboration", "Autonomie sur labo réseau"],
    interests: ["Voyages", "Sport de plein air", "Jeux de société"],
    experiences: [
      {
        role: "Administrateur Réseaux & Système (Stage)",
        company: "CIVIS (Communauté d'Agglomération)",
        location: "Saint-Pierre",
        duration: "2026 (4 mois)",
        current: true,
        details: [
          "Déploiement de VLANs (Data, VoIP, Management) sur switches HP et Ubiquiti.",
          "Mise en œuvre du tagging 802.1Q et de la QoS (DSCP) pour la téléphonie IP.",
        ],
        kpis: [],
      },
      {
        role: "Technicien Support Informatique Niv 1 & 2 (Stage)",
        company: "AFI SAS",
        location: "Saint-Paul",
        duration: "2025 (2 mois)",
        current: false,
        details: [
          "Support, installation, maintenance (Sur site et à distance).",
          "Gestion de la sécurisation des données de l'ERP EBP (NAS).",
        ],
        kpis: ["+30 Tickets résolus", "15 Postes préparés & optimisés", "12 Clients satisfaits"],
      },
    ],
    projects: [
      {
        title: "Chaîne IoT & Supervision de bout en bout",
        subtitle: "Température/humidité (MQTT, InfluxDB, Grafana)",
        results: "Recettes de test : Alerte de dépassement / Supervision",
        stack: "Docker • Python • MQTT • Grafana • InfluxDB",
      },
      {
        title: "Architecture MPLS & Virtualisation",
        subtitle: "Conception d'un réseau opérateur multi-clients (MPLS/VPN). Déploiement de services virtualisés (DNS, DHCP, Web) sous Linux.",
        results: "Sécurisation & Segmentation : Vérification ACL / Validation Isolation par VLAN",
        stack: "Cisco IOS • GNS3 • Wireshark • MPLS",
      },
    ],
    portfolioUrl: "https://romain-leon-portfolio.netlify.app",
  };
}

function loadData(): CVData {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored) as CVData;
    }
  } catch {
    // ignore
  }
  return getDefaultCVData();
}

export function useCVStore() {
  const [data, setData] = useState<CVData>(loadData);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const updateField = useCallback(<K extends keyof CVData>(key: K, value: CVData[K]) => {
    setData((prev) => ({ ...prev, [key]: value }));
  }, []);

  const addEducation = useCallback(() => {
    setData((prev) => ({
      ...prev,
      education: [...prev.education, { date: "", title: "", school: "" }],
    }));
  }, []);

  const removeEducation = useCallback((index: number) => {
    setData((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index),
    }));
  }, []);

  const updateEducation = useCallback((index: number, field: keyof Education, value: string) => {
    setData((prev) => {
      const updated = [...prev.education];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, education: updated };
    });
  }, []);

  const addSkill = useCallback((categoryIndex: number) => {
    setData((prev) => {
      const categories = [...prev.skillCategories];
      categories[categoryIndex] = {
        ...categories[categoryIndex],
        skills: [...categories[categoryIndex].skills, ""],
      };
      return { ...prev, skillCategories: categories };
    });
  }, []);

  const removeSkill = useCallback((categoryIndex: number, skillIndex: number) => {
    setData((prev) => {
      const categories = [...prev.skillCategories];
      categories[categoryIndex] = {
        ...categories[categoryIndex],
        skills: categories[categoryIndex].skills.filter((_, i) => i !== skillIndex),
      };
      return { ...prev, skillCategories: categories };
    });
  }, []);

  const updateSkill = useCallback((categoryIndex: number, skillIndex: number, value: string) => {
    setData((prev) => {
      const categories = [...prev.skillCategories];
      const updatedSkills = [...categories[categoryIndex].skills];
      updatedSkills[skillIndex] = value;
      categories[categoryIndex] = { ...categories[categoryIndex], skills: updatedSkills };
      return { ...prev, skillCategories: categories };
    });
  }, []);

  const addSoftSkill = useCallback(() => {
    setData((prev) => ({ ...prev, softSkills: [...prev.softSkills, ""] }));
  }, []);

  const removeSoftSkill = useCallback((index: number) => {
    setData((prev) => ({
      ...prev,
      softSkills: prev.softSkills.filter((_, i) => i !== index),
    }));
  }, []);

  const updateSoftSkill = useCallback((index: number, value: string) => {
    setData((prev) => {
      const updated = [...prev.softSkills];
      updated[index] = value;
      return { ...prev, softSkills: updated };
    });
  }, []);

  const addInterest = useCallback(() => {
    setData((prev) => ({ ...prev, interests: [...prev.interests, ""] }));
  }, []);

  const removeInterest = useCallback((index: number) => {
    setData((prev) => ({
      ...prev,
      interests: prev.interests.filter((_, i) => i !== index),
    }));
  }, []);

  const updateInterest = useCallback((index: number, value: string) => {
    setData((prev) => {
      const updated = [...prev.interests];
      updated[index] = value;
      return { ...prev, interests: updated };
    });
  }, []);

  const addExperience = useCallback(() => {
    setData((prev) => ({
      ...prev,
      experiences: [
        ...prev.experiences,
        { role: "", company: "", location: "", duration: "", current: false, details: [""], kpis: [""] },
      ],
    }));
  }, []);

  const removeExperience = useCallback((index: number) => {
    setData((prev) => ({
      ...prev,
      experiences: prev.experiences.filter((_, i) => i !== index),
    }));
  }, []);

  const updateExperience = useCallback(<K extends keyof Experience>(index: number, field: K, value: Experience[K]) => {
    setData((prev) => {
      const updated = [...prev.experiences];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, experiences: updated };
    });
  }, []);

  const addExperienceDetail = useCallback((expIndex: number) => {
    setData((prev) => {
      const updated = [...prev.experiences];
      updated[expIndex] = { ...updated[expIndex], details: [...updated[expIndex].details, ""] };
      return { ...prev, experiences: updated };
    });
  }, []);

  const removeExperienceDetail = useCallback((expIndex: number, detailIndex: number) => {
    setData((prev) => {
      const updated = [...prev.experiences];
      updated[expIndex] = {
        ...updated[expIndex],
        details: updated[expIndex].details.filter((_, i) => i !== detailIndex),
      };
      return { ...prev, experiences: updated };
    });
  }, []);

  const updateExperienceDetail = useCallback((expIndex: number, detailIndex: number, value: string) => {
    setData((prev) => {
      const updated = [...prev.experiences];
      const details = [...updated[expIndex].details];
      details[detailIndex] = value;
      updated[expIndex] = { ...updated[expIndex], details };
      return { ...prev, experiences: updated };
    });
  }, []);

  const addExperienceKpi = useCallback((expIndex: number) => {
    setData((prev) => {
      const updated = [...prev.experiences];
      updated[expIndex] = { ...updated[expIndex], kpis: [...updated[expIndex].kpis, ""] };
      return { ...prev, experiences: updated };
    });
  }, []);

  const removeExperienceKpi = useCallback((expIndex: number, kpiIndex: number) => {
    setData((prev) => {
      const updated = [...prev.experiences];
      updated[expIndex] = {
        ...updated[expIndex],
        kpis: updated[expIndex].kpis.filter((_, i) => i !== kpiIndex),
      };
      return { ...prev, experiences: updated };
    });
  }, []);

  const updateExperienceKpi = useCallback((expIndex: number, kpiIndex: number, value: string) => {
    setData((prev) => {
      const updated = [...prev.experiences];
      const kpis = [...updated[expIndex].kpis];
      kpis[kpiIndex] = value;
      updated[expIndex] = { ...updated[expIndex], kpis };
      return { ...prev, experiences: updated };
    });
  }, []);

  const addProject = useCallback(() => {
    setData((prev) => ({
      ...prev,
      projects: [...prev.projects, { title: "", subtitle: "", results: "", stack: "" }],
    }));
  }, []);

  const removeProject = useCallback((index: number) => {
    setData((prev) => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index),
    }));
  }, []);

  const updateProject = useCallback((index: number, field: keyof Project, value: string) => {
    setData((prev) => {
      const updated = [...prev.projects];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, projects: updated };
    });
  }, []);

  const resetAll = useCallback(() => {
    setData(getDefaultCVData());
  }, []);

  const exportJSON = useCallback((): string => {
    return JSON.stringify(data, null, 2);
  }, [data]);

  return {
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
  };
}
