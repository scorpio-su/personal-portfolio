import type { SkillGroup } from "./types";

export const skillGroups: readonly SkillGroup[] = [
  {
    name: { "zh-TW": "軟體應用", en: "Software Applications" },
    items: {
      "zh-TW": [
        "C++",
        "Golang",
        "HTML/CSS",
        "React.js",
        "Network Management",
        "CNC Machine",
        "AutoCAD",
        "SolidWorks",
        "MasterCAM",
      ],
      en: [
        "C++",
        "Golang",
        "HTML/CSS",
        "React.js",
        "Network Management",
        "CNC Machine",
        "AutoCAD",
        "SolidWorks",
        "MasterCAM",
      ],
    },
  },
  {
    name: { "zh-TW": "DevOps", en: "DevOps" },
    items: {
      "zh-TW": [
        "Git",
        "CI/CD (GitHub Actions)",
        "Docker",
        "Linux Shell",
        "Clean Code Architecture",
        "Unit Testing and Deployment",
      ],
      en: [
        "Git",
        "CI/CD (GitHub Actions)",
        "Docker",
        "Linux Shell",
        "Clean Code Architecture",
        "Unit Testing and Deployment",
      ],
    },
  },
  {
    name: { "zh-TW": "數據分析", en: "Data Analysis" },
    intro: {
      "zh-TW":
        "Python 數據分析與建模，含清理、統計、視覺化與預測；具大數據競賽經驗。",
      en: "Python data analysis and modeling—cleaning, statistics, visualization, and prediction; big-data contest experience.",
    },
    items: {
      "zh-TW": [
        "NumPy",
        "pandas",
        "matplotlib",
        "scikit-learn",
        "PyTorch",
        "資料清理與統計分析",
        "資料視覺化",
        "預測模型建構",
        "大數據競賽",
      ],
      en: [
        "NumPy",
        "pandas",
        "matplotlib",
        "scikit-learn",
        "PyTorch",
        "Data Cleaning & Statistical Analysis",
        "Data Visualization",
        "Predictive Modeling",
        "Big-Data Contests",
      ],
    },
  },
  {
    name: { "zh-TW": "跨部門溝通", en: "Cross-team Collaboration" },
    items: {
      "zh-TW": [
        "Project Management",
        "Communication",
        "Cross-team Collaboration",
        "Solutions to Problems",
      ],
      en: [
        "Project Management",
        "Communication",
        "Cross-team Collaboration",
        "Solutions to Problems",
      ],
    },
  },
  {
    name: { "zh-TW": "網頁開發與部署經驗", en: "Web Development & Deployment" },
    intro: {
      "zh-TW":
        "熟悉 HTML/CSS 切版與 React 元件開發；能在 Linux 伺服器部署維護，並實作基本 CI/CD。",
      en: "HTML/CSS layout and React components; Linux server deploy/maintain; basic CI/CD in practice.",
    },
    items: {
      "zh-TW": [
        "HTML/CSS 切版",
        "React 元件式前端",
        "Linux 網站部署與維護",
        "CI/CD 流程設計與實作",
      ],
      en: [
        "HTML/CSS Layout",
        "React Component Front-end",
        "Linux Site Deploy & Maintain",
        "CI/CD Pipeline Design & Implementation",
      ],
    },
  },
];