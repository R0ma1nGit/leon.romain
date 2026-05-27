import { useCVStore } from "@/hooks/useCVStore";

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
    lineHeight: "1.4",
    fontSize: "13px",
    background: "#fff",
    maxWidth: "210mm",
    margin: "0 auto",
  },
  header: {
    padding: "24px 30px 16px",
    borderBottom: "1px solid #e0e0e0",
  },
  headerTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  name: {
    fontSize: "28px",
    fontWeight: 700,
    color: "#0066cc",
    margin: 0,
  },
  nameSpan: {
    color: "#00a859",
  },
  subtitle: {
    marginTop: "8px",
    fontSize: "13px",
    color: "#666",
    fontWeight: 600,
  },
  contactList: {
    textAlign: "right" as const,
    fontSize: "12px",
    color: "#666",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  contactItem: {
    marginBottom: "4px",
  },
  contactIcon: {
    color: "#0066cc",
    marginLeft: "6px",
    width: "14px",
    display: "inline-block",
    textAlign: "center" as const,
  },
  banner: {
    background: "#f2f7fc",
    color: "#0066cc",
    textAlign: "center" as const,
    padding: "10px",
    fontSize: "16px",
    fontWeight: 600,
    letterSpacing: "0.5px",
    marginTop: "16px",
  },
  content: {
    display: "flex",
  },
  leftCol: {
    width: "33%",
    borderRight: "1px solid #e0e0e0",
    padding: "20px 18px",
  },
  rightCol: {
    width: "67%",
    padding: "20px 24px",
  },
  sectionTitle: {
    color: "#00a859",
    fontSize: "14px",
    fontWeight: 700,
    borderBottom: "1px solid #e0e0e0",
    paddingBottom: "4px",
    marginBottom: "12px",
    textTransform: "uppercase" as const,
  },
  sectionTitleLeft: {
    color: "#0066cc",
    fontSize: "14px",
    fontWeight: 700,
    borderBottom: "1px solid #e0e0e0",
    paddingBottom: "4px",
    marginBottom: "12px",
    textTransform: "uppercase" as const,
  },
  section: {
    marginBottom: "22px",
  },
  eduItem: {
    marginBottom: "12px",
  },
  eduDate: {
    color: "#0066cc",
    fontWeight: 700,
    fontSize: "11px",
  },
  eduTitle: {
    fontWeight: 700,
    fontSize: "13px",
    margin: "2px 0",
  },
  eduSchool: {
    fontStyle: "italic",
    color: "#666",
    fontSize: "11px",
  },
  skillCat: {
    marginBottom: "14px",
  },
  skillCatTitle: {
    fontSize: "12px",
    fontWeight: 700,
    marginBottom: "6px",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  tags: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "4px",
  },
  tag: {
    border: "1px solid #0066cc",
    color: "#0066cc",
    fontSize: "10px",
    padding: "2px 7px",
    borderRadius: "6px",
    fontWeight: 600,
  },
  interestsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "8px",
    fontSize: "11px",
  },
  interestItem: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  interestDot: {
    color: "#00a859",
  },
  qrSection: {
    textAlign: "center" as const,
    marginTop: "24px",
    paddingTop: "16px",
    borderTop: "1px solid #e0e0e0",
  },
  profileText: {
    fontSize: "12.5px",
    color: "#333",
    textAlign: "justify" as const,
  },
  xpCard: {
    borderLeft: "4px solid #0066cc",
    background: "#f8f9fa",
    padding: "12px 14px",
    marginBottom: "16px",
    position: "relative" as const,
  },
  xpHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "4px",
  },
  xpRole: {
    fontWeight: 700,
    fontSize: "14px",
  },
  xpDuration: {
    fontSize: "11px",
    textAlign: "right" as const,
    color: "#666",
    whiteSpace: "nowrap" as const,
  },
  xpCompany: {
    color: "#0066cc",
    fontWeight: 700,
    fontSize: "13px",
    marginBottom: "8px",
  },
  xpDetails: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    fontSize: "12px",
  },
  xpDetail: {
    marginBottom: "5px",
    paddingLeft: "14px",
    position: "relative" as const,
  },
  kpiBox: {
    display: "flex",
    alignItems: "center",
    background: "#fff",
    border: "1px solid #e0e0e0",
    borderRadius: "6px",
    padding: "6px 10px",
    marginTop: "8px",
    gap: "12px",
  },
  kpiCheck: {
    color: "#00a859",
    fontSize: "16px",
    flexShrink: 0,
  },
  kpiMetrics: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "3px 12px",
    fontSize: "11px",
    fontWeight: 700,
  },
  projectCard: {
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    padding: "12px",
    marginBottom: "14px",
  },
  projectTitle: {
    color: "#00a859",
    fontSize: "14px",
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  projectSubtitle: {
    fontSize: "11px",
    color: "#666",
    margin: "3px 0 8px",
  },
  projectResults: {
    background: "#fff",
    border: "1px solid #e0e0e0",
    borderRadius: "6px",
    padding: "6px 10px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "11px",
    fontWeight: 700,
    marginBottom: "8px",
  },
  projectStack: {
    fontSize: "10px",
    fontWeight: 700,
    color: "#0066cc",
  },
  qrImage: {
    width: "110px",
    height: "110px",
    borderRadius: "8px",
    border: "2px solid #0066cc",
  },
  qrText: {
    fontSize: "9px",
    color: "#0066cc",
    marginTop: "6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "4px",
  },
};

export const CVPreview = () => {
  const { data } = useCVStore();

  return (
    <div id="cv-preview-wrapper">
      <div style={styles.container}>
        {/* HEADER */}
        <div style={styles.header}>
          <div style={styles.headerTop}>
            <div>
              <h1 style={styles.name}>
                {data.firstName} <span style={styles.nameSpan}>{data.lastName}</span>
              </h1>
              <div style={styles.subtitle}>{data.subtitle}</div>
            </div>
            <ul style={styles.contactList}>
              <li style={styles.contactItem}>
                {data.address} <span style={styles.contactIcon}>📍</span>
              </li>
              <li style={styles.contactItem}>
                {data.email} <span style={styles.contactIcon}>✉</span>
              </li>
              <li style={styles.contactItem}>
                {data.phone} <span style={styles.contactIcon}>📞</span>
              </li>
              {data.drivingLicense && (
                <li style={styles.contactItem}>
                  {data.drivingLicense} <span style={styles.contactIcon}>🚗</span>
                </li>
              )}
            </ul>
          </div>
          <div style={styles.banner}>{data.objective}</div>
        </div>

        {/* CONTENT */}
        <div style={styles.content}>
          {/* LEFT COLUMN */}
          <div style={styles.leftCol}>
            {/* FORMATION */}
            <section style={styles.section}>
              <h2 style={styles.sectionTitleLeft}>{">"} Formation</h2>
              {data.education.map((edu, i) => (
                <div key={i} style={styles.eduItem}>
                  <div style={styles.eduDate}>{edu.date}</div>
                  <div style={styles.eduTitle}>{edu.title}</div>
                  <div style={styles.eduSchool}>{edu.school}</div>
                </div>
              ))}
            </section>

            {/* SAVOIR FAIRE */}
            <section style={styles.section}>
              <h2 style={styles.sectionTitleLeft}>{">"} Savoir Faire</h2>
              {data.skillCategories.map((cat, ci) => (
                <div key={ci} style={styles.skillCat}>
                  <div style={styles.skillCatTitle}>{cat.title}</div>
                  <div style={styles.tags}>
                    {cat.skills.filter(Boolean).map((skill, si) => (
                      <span key={si} style={styles.tag}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            {/* SAVOIR ÊTRE */}
            <section style={styles.section}>
              <h2 style={styles.sectionTitleLeft}>{">"} Savoir Être</h2>
              <div style={styles.tags}>
                {data.softSkills.filter(Boolean).map((s, i) => (
                  <span key={i} style={styles.tag}>{s}</span>
                ))}
              </div>
            </section>

            {/* INTÉRÊTS */}
            <section style={styles.section}>
              <h2 style={styles.sectionTitleLeft}>{">"} Intérêts</h2>
              <div style={styles.interestsGrid}>
                {data.interests.filter(Boolean).map((interest, i) => (
                  <div key={i} style={styles.interestItem}>
                    <span style={styles.interestDot}>◆</span>
                    {interest}
                  </div>
                ))}
              </div>
            </section>

            {/* QR CODE */}
            <div style={styles.qrSection}>
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=110x110&data=${encodeURIComponent(data.portfolioUrl)}`}
                alt="QR Code Portfolio"
                style={styles.qrImage}
                id="qr-code-img"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const fallback = document.getElementById("qr-fallback");
                  if (fallback) fallback.style.display = "flex";
                }}
              />
              <div id="qr-fallback" style={{ display: "none", width: "110px", height: "110px", borderRadius: "8px", border: "2px solid #0066cc", margin: "0 auto", alignItems: "center", justifyContent: "center", fontSize: "24px", fontWeight: "bold", color: "#0066cc" }}>
                RL
              </div>
              <div style={styles.qrText}>
                📱 Scannez pour voir le portfolio
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div style={styles.rightCol}>
            {/* PROFIL */}
            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>{">"} Profil</h2>
              <p style={styles.profileText}>{data.profile}</p>
            </section>

            {/* EXPÉRIENCE */}
            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>{">"} Expérience Professionnelle</h2>
              {data.experiences.map((exp, i) => (
                <div key={i} style={styles.xpCard}>
                  <div style={styles.xpHeader}>
                    <div style={styles.xpRole}>{exp.role}</div>
                    <div style={styles.xpDuration}>
                      {exp.duration}
                      {exp.current && (
                        <div style={{ fontStyle: "italic", fontSize: "10px", color: "#0066cc" }}>En cours</div>
                      )}
                    </div>
                  </div>
                  <div style={styles.xpCompany}>{exp.company}</div>
                  <ul style={styles.xpDetails}>
                    {exp.details.filter(Boolean).map((detail, di) => (
                      <li key={di} style={styles.xpDetail}>▷ {detail}</li>
                    ))}
                  </ul>
                  {exp.kpis.filter(Boolean).length > 0 && (
                    <div style={styles.kpiBox}>
                      <span style={styles.kpiCheck}>✓</span>
                      <div style={styles.kpiMetrics}>
                        {exp.kpis.filter(Boolean).map((kpi, ki) => (
                          <div key={ki}>{kpi}</div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </section>

            {/* PROJETS */}
            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>{">"} Projets Significatifs</h2>
              {data.projects.filter((p) => p.title).map((proj, i) => (
                <div key={i} style={styles.projectCard}>
                  <div style={styles.projectTitle}>◆ {proj.title}</div>
                  {proj.subtitle && <div style={styles.projectSubtitle}>{proj.subtitle}</div>}
                  {proj.results && (
                    <div style={styles.projectResults}>
                      <span style={styles.kpiCheck}>✓</span>
                      <span>{proj.results}</span>
                    </div>
                  )}
                  {proj.stack && (
                    <div style={styles.projectStack}>
                      Stack: {proj.stack}
                    </div>
                  )}
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
