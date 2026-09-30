import type { AcademicItem } from "./types";

export const academic: readonly AcademicItem[] = [
  {
    title: {
      "zh-TW": "基於遠端控制與影像辨識之無人自走車系統開發",
      en: "Development of an Unmanned Autonomous Vehicle System Based on Remote Control and Image Recognition",
    },
    kind: {
      "zh-TW": "畢業專題",
      en: "Capstone",
    },
    summary: {
      "zh-TW":
        "自行設計與開發無人小車，整合硬體設計、驅動模組與遠端控制；結合 AI 影像辨識與判讀，涵蓋硬體架構、韌體驅動、遠端操控介面與 AI 模型整合。",
      en: "Designed and built an unmanned vehicle end to end—hardware, drive modules, and remote control—with AI image recognition; owned hardware architecture, firmware drivers, remote UI, and AI model integration.",
    },
    bullets: {
      "zh-TW": [
        "硬體架構設計與驅動模組開發",
        "遠端技術控制小車方向",
        "AI 影像辨識與判讀整合",
        "遠端操控介面與全流程開發",
      ],
      en: [
        "Hardware architecture and drive-module development",
        "Remote directional control of the vehicle",
        "AI-based image recognition and interpretation",
        "Remote-control interface and full-stack integration",
      ],
    },
  },
  {
    title: {
      "zh-TW": "基於濾波和自注意力機制預測多輸入多輸出銑床之研究",
      en: "Predicting Multi-Input Multi-Output Milling Performance Using Filtering and Self-Attention Mechanisms",
    },
    kind: {
      "zh-TW": "論文",
      en: "Thesis",
    },
    summary: {
      "zh-TW":
        "針對 CNC 加工，分析加速度與能耗數據以預測表面粗糙度與能耗；前處理採小波濾波（CWT、DWT）與 FFT；以 PyTorch 建置 Transformer；田口法評估濾波對預測效能影響。",
      en: "Analyzed CNC acceleration and energy data to predict surface roughness and energy use; preprocessed with wavelet filters (CWT, DWT) and FFT; built a Transformer in PyTorch; used Taguchi methods to assess filter effects on prediction.",
    },
    bullets: {
      "zh-TW": [
        "CNC 加速度／能耗數據分析與預測目標（表面粗糙度、能耗）",
        "小波濾波（CWT、DWT）與傅立葉轉換（FFT）前處理",
        "PyTorch Transformer 預測模型",
        "田口法評估不同濾波對預測效能之影響",
      ],
      en: [
        "CNC acceleration/energy analysis for surface roughness and energy prediction",
        "Wavelet filtering (CWT, DWT) and FFT preprocessing",
        "Transformer prediction model in PyTorch",
        "Taguchi evaluation of filtering impact on prediction performance",
      ],
    },
  },
  {
    title: {
      "zh-TW": "智慧機器人跨領域學分學程",
      en: "Interdisciplinary Credit Program in Intelligent Robotics",
    },
    kind: {
      "zh-TW": "學分學程",
      en: "Credit Program",
    },
    bullets: {
      "zh-TW": [
        "學習機器人學理論與應用，涵蓋運動學、動力學、控制系統與感測技術。",
        "修習影像處理課程，掌握影像擷取、特徵萃取、目標辨識與應用技術。",
        "具備基礎的機器人路徑規劃、感知系統整合與影像資訊分析能力。",
      ],
      en: [
        "Studied robotics theory and applications, including kinematics, dynamics, control systems, and sensing.",
        "Completed coursework in image processing covering acquisition, feature extraction, object recognition, and applications.",
        "Gained foundational skills in robot path planning, perception-system integration, and image-based analysis.",
      ],
    },
    logoSrc: "licenses/cycu.png"
  },
  {
    title: {
      "zh-TW": "國際菁英人才培育計畫 GCSP（Grand Challenges Scholars Program）",
      en: "GCSP — Grand Challenges Scholars Program",
    },
    kind: {
      "zh-TW": "國際菁英人才培育計畫",
      en: "Scholars Program",
    },
    bullets: {
      "zh-TW": [
        "由美國國家工程院（NAE）倡議。",
        "聚焦全球 14 大關鍵領域（如個人化學習、能源擴散、網路安全、碳捕獲等）。",
        "本校推動此計畫，培育專業知識、跨領域能力、社會參與、國際視野及創新創業素養。",
        "自 108-2 至 110-2 學期，共 14 位工學院及電資學院學生參與。",
        "於 110-2 學期誕生首位完成 GCSP 全項能力認證的學生。",
        "本校與陽明交大為國內少數通過 NAE 認證之學校，展現全人教育與跨域學習成果。",
      ],
      en: [
        "Initiated by the U.S. National Academy of Engineering (NAE).",
        "Focuses on 14 global grand-challenge areas (e.g., personalized learning, energy access, cybersecurity, and carbon capture).",
        "Our university runs the program to build professional knowledge, interdisciplinary skills, civic engagement, global perspective, and innovation/entrepreneurship.",
        "From the 108-2 to 110-2 semesters, 14 students from the College of Engineering and the College of Electrical Engineering & Computer Science took part.",
        "In 110-2, the first student completed full GCSP competency certification.",
        "Our university and National Yang Ming Chiao Tung University are among the few NAE-certified programs in Taiwan, reflecting whole-person education and interdisciplinary learning.",
      ],
    },
    logoSrc: "licenses/nae.png"
  },
];
