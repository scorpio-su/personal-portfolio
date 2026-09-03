import type { ExperienceItem } from "./types";

export const experience: readonly ExperienceItem[] = [
  {
    org: {
      "zh-TW": "中原大學先進數位智能製造研究室",
      en: "Advanced Digital Intelligent Manufacturing Lab, Chung Yuan Christian University",
    },
    role: {
      "zh-TW": "網路管理工程師／軟體開發",
      en: "Network Administrator & Software Developer",
    },
    period: "2022–2025",
    bullets: {
      "zh-TW": [
        "以 Python 建置自動化資料處理工具與資料分析流程。",
        "處理數十萬筆實驗資料，完成清理、篩選、轉換與標準化視覺化。",
        "維護實驗室 IT 設備與網路環境，協助跨語言技術操作與程式學習。",
      ],
      en: [
        "Built automated data-processing tools and analysis pipelines in Python.",
        "Processed hundreds of thousands of experimental records, handling cleaning, filtering, transformation, and standardised visualisation.",
        "Maintained the lab's IT equipment and network, and supported cross-language technical operations and programming learning.",
      ],
    },
  },
];
