import type { Profile } from "./types";

export const profile: Profile = {
  // TODO(spec §9): confirm the final display format of the name.
  name: {
    "zh-TW": "蘇信信",
    en: "su-xinxin",
  },
  title: {
    "zh-TW": "軟體工程師",
    en: "Software Engineer",
  },
  tagline: {
    "zh-TW":
      "專注於 AI 自動化、資料處理與系統整合；以工程思維將複雜流程轉化為可靠的軟體解法。",
    en: "Focused on AI automation, data processing, and systems integration - turning complex workflows into reliable software solutions.",
  },
  // TODO(spec §9): set the public GitHub URL once the account is confirmed.
  githubUrl: null,
};
