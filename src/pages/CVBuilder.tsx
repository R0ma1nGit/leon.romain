import { Printer, ArrowLeft, FileText } from "lucide-react";
import { CVForm } from "@/components/cv-builder/CVForm";
import { CVPreview } from "@/components/cv-builder/CVPreview";
import { useNavigate } from "react-router-dom";

const CVBuilder = () => {
  const navigate = useNavigate();

  const handlePrint = () => {
    window.print();
  };

  const handleExportPdf = () => {
    handlePrint();
  };

  return (
    <div className="cv-builder-layout">
      {/* FORM PANEL */}
      <div className="cv-builder-form-panel bg-card border-r border-border flex flex-col">
        {/* Toolbar */}
        <div className="cv-builder-toolbar flex items-center justify-between px-3 py-2 border-b border-border bg-muted/30 shrink-0 gap-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate("/")}
              className="p-1.5 hover:bg-muted rounded transition-colors"
              title="Retour au portfolio"
            >
              <ArrowLeft size={16} className="text-muted-foreground" />
            </button>
            <FileText size={16} className="text-primary" />
            <span className="font-mono text-xs font-semibold text-foreground hidden sm:inline">CV Builder</span>
          </div>
          <button
            onClick={handleExportPdf}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground rounded text-xs font-mono font-semibold hover:bg-primary/90 transition-colors border-glow"
          >
            <Printer size={14} />
            <span>Imprimer PDF</span>
          </button>
        </div>

        {/* Scrollable form */}
        <div className="flex-1 overflow-hidden">
          <CVForm />
        </div>

        {/* Footer hint */}
        <div className="cv-builder-toolbar px-3 py-1.5 border-t border-border bg-muted/20 shrink-0">
          <p className="text-[10px] font-mono text-muted-foreground text-center">
            Les modifications sont sauvegardées automatiquement dans votre navigateur
          </p>
        </div>
      </div>

      {/* PREVIEW PANEL */}
      <div className="cv-preview-wrapper bg-muted/50 overflow-y-auto flex items-start justify-center p-6">
        <style>{layoutStyles}{printStyles}</style>
        <CVPreview />
      </div>
    </div>
  );
};

const layoutStyles = `
  .cv-builder-layout {
    display: grid;
    grid-template-columns: 35% 65%;
    height: 100vh;
    overflow: hidden;
  }
  .cv-builder-form-panel {
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .cv-preview-wrapper {
    overflow-y: auto;
  }
  @media (max-width: 768px) {
    .cv-builder-layout {
      grid-template-columns: 1fr;
    }
    .cv-preview-wrapper {
      display: none;
    }
  }
`;

const printStyles = `
  @media print {
    @page {
      size: A4;
      margin: 12mm 15mm;
    }

    html, body {
      margin: 0 !important;
      padding: 0 !important;
      background: white !important;
    }

    .cv-builder-form-panel {
      display: none !important;
    }

    .cv-builder-toolbar {
      display: none !important;
    }

    .cv-builder-layout {
      display: block !important;
      height: auto !important;
      min-height: 0 !important;
    }

    .cv-preview-wrapper {
      display: block !important;
      padding: 0 !important;
      margin: 0 !important;
      background: white !important;
      overflow: visible !important;
      width: 100% !important;
      height: auto !important;
      min-height: 0 !important;
    }

    #cv-preview-wrapper {
      width: 100% !important;
      max-width: 100% !important;
    }

    #cv-preview-wrapper > div {
      max-width: 100% !important;
      box-shadow: none !important;
      margin: 0 !important;
      padding: 0 !important;
    }

    section {
      break-inside: avoid;
    }

    * {
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
  }
`;

export default CVBuilder;
