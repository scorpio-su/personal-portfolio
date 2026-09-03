import type { Project } from "./types";

export const projects: readonly Project[] = [
  {
    id: "ai-agent-integration",
    name: {
      "zh-TW": "AI Agent 工具整合與大量資料處理優化",
      en: "AI Agent Tooling Integration & Large-Scale Data Processing",
    },
    summary: {
      "zh-TW":
        "以 Python 設計 AI Agent 工具串接架構，串接內外部系統與資料庫，支援大量查詢與自動化任務。",
      en: "Designed a Python architecture for connecting AI agent tooling to internal and external systems and databases, supporting high-volume queries and automated tasks.",
    },
    // TODO(spec §9): confirm the exact technologies used.
    tech: ["Python", "AI agent tooling", "System integration", "Databases"],
    responsibilities: {
      // TODO(spec §9): confirm the individual responsibilities on this project.
      "zh-TW": [
        "設計工具串接架構，整合內外部系統與資料庫的存取方式。",
        "分析並優化大批量檔案下載流程的效能瓶頸。",
      ],
      en: [
        "Designed the tool-integration architecture that unified access to internal and external systems and databases.",
        "Profiled and optimised the performance bottlenecks in the bulk file-download workflow.",
      ],
    },
    result: {
      "zh-TW":
        "將大批量檔案下載流程從約 1 小時縮短至 10–15 分鐘，效能提升約 75–83%。",
      en: "Cut the bulk file-download workflow from about 1 hour to 10–15 minutes, an improvement of roughly 75–83%.",
    },
    githubUrl: null,
    demoUrl: null,
    isPublic: true,
  },
  {
    id: "python-auto-grading",
    name: {
      "zh-TW": "Python 自動化批改系統",
      en: "Python Automated Grading System",
    },
    summary: {
      "zh-TW":
        "處理 40 位學生的原始程式碼與測資，建立輸出驗證與錯誤比對流程。",
      en: "Processed source code and test data for 40 students, building an output-verification and error-comparison workflow.",
    },
    // TODO(spec §9): confirm the exact technologies used.
    tech: ["Python", "Automation", "Test harness", "Output validation"],
    responsibilities: {
      // TODO(spec §9): confirm the individual responsibilities on this project.
      "zh-TW": [
        "建立自動化流程，收集並執行學生的程式碼與測資。",
        "實作輸出驗證與錯誤比對，產生批改結果。",
      ],
      en: [
        "Built the automation that collects and runs student code against the test data.",
        "Implemented output validation and error comparison to produce the grading results.",
      ],
    },
    result: {
      "zh-TW": "人工處理作業時間降低超過 80%。",
      en: "Reduced manual grading time by more than 80%.",
    },
    githubUrl: null,
    demoUrl: null,
    isPublic: true,
  },
];
