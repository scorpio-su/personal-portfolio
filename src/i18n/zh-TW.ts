import type { TranslationKey } from "./index";

/**
 * Traditional Chinese (Taiwan) UI copy.
 *
 * Keys mirror `en.ts` exactly. The `Record<TranslationKey, ...>` annotation turns
 * any missing or extra key into a compile error, keeping both locales in sync.
 */
export const zhTW: Record<TranslationKey, string | readonly string[]> = {
  "meta.title": "Software Engineer · 個人網站",

  "a11y.skipToContent": "跳至主要內容",

  "nav.label": "區塊導覽",
  "nav.home": "首頁",
  "nav.about": "關於",
  "nav.experience": "經歷",
  "nav.projects": "專案",
  "nav.contact": "聯絡",

  "actions.openMenu": "開啟選單",
  "actions.closeMenu": "關閉選單",
  "actions.toggleTheme": "切換配色主題",
  "actions.themeToLight": "切換為淺色主題",
  "actions.themeToDark": "切換為深色主題",
  "actions.switchLanguage": "切換語言",
  "actions.languageShort": "EN",

  "hero.subtitle":
    "專注於 AI 自動化、資料處理與系統整合；以工程思維將複雜流程轉化為可靠的軟體解法。",
  "hero.viewExperience": "查看經歷",
  "hero.viewProjects": "查看專案",

  "about.heading": "關於我",
  "about.paragraphs": [
    "我從機械工程起步，後來轉向軟體工程；真正吸引我的，是程式能很快把繁瑣的人工流程變成穩定可靠的工具。",
    "現在我專注於 AI 自動化、資料處理與系統整合：打造串接各種系統的工具、整理大量資料，並把重複性的工作交給程式處理。",
    "我的做法很務實：先把流程弄清楚，讓方案保持精簡易讀，並確保它在日常使用中站得住腳。",
  ],
  "about.principlesHeading": "工作方式",
  "about.principles": [
    "從真實流程與關鍵數字出發，而不是先挑工具。",
    "偏好簡單、易讀、下一個人也能維護的方案。",
    "把重複的環節自動化，並實際衡量省下的時間。",
    "把可靠性與明確的錯誤處理，視為功能的一部分。",
  ],

  "experience.heading": "工作經歷",

  "skills.heading": "技術能力",
  "skills.intro": "以下依日常使用情境分群，呈現我最常投入的技術與領域。",

  "projects.heading": "精選專案",
  "projects.techLabel": "使用技術",
  "projects.responsibilitiesLabel": "負責項目",
  "projects.resultLabel": "成果",
  "projects.linksUnavailable": "連結即將公開",
  "projects.viewGithub": "查看 GitHub",
  "projects.viewDemo": "查看 Demo",

  "contact.heading": "聯絡",
  "contact.cta":
    "如果您正在招募，或想找人一起打造專案，很歡迎與我聊聊。GitHub 是了解我的作品並與我取得聯繫的最佳管道。",
  "contact.comingSoon": "GitHub 連結即將公開。",
  "contact.viewGithub": "造訪我的 GitHub",

  "footer.tagline":
    "以 React、TypeScript 與 Bootstrap 製作；沒有追蹤程式、沒有照片，只保留必要內容。",
  "footer.githubLabel": "GitHub",
};
