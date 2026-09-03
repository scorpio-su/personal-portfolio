import type { SkillGroup } from "./types";

export const skillGroups: readonly SkillGroup[] = [
  {
    name: { "zh-TW": "專注領域", en: "Focus areas" },
    items: ["AI automation", "Data processing", "Systems integration"],
  },
  {
    name: { "zh-TW": "程式語言", en: "Languages" },
    items: ["Python", "TypeScript"],
  },
  {
    name: { "zh-TW": "框架與函式庫", en: "Frameworks & libraries" },
    items: ["React"],
  },
  {
    name: { "zh-TW": "工具與基礎設施", en: "Tooling & infrastructure" },
    items: ["Git", "GitHub Actions", "Docker", "Linux"],
  },
];
