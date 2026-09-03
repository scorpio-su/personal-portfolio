# 個人介紹網站 / Personal Portfolio

單頁滾動式個人介紹網站。以工程思維呈現背景、經驗與精選專案；支援中英文切換與深淺色模式。

依據 `spec.md`（v0.1）建置。

## 技術堆疊

| 類別     | 選擇                               |
| -------- | ---------------------------------- |
| UI 框架  | React 18                           |
| 語言     | TypeScript                         |
| 建置工具 | Create React App / `react-scripts` |
| 路由     | `react-router-dom` v6（`HashRouter`） |
| UI 樣式  | Bootstrap 5（CSS，含深色模式 `data-bs-theme`） |
| 圖示     | `bootstrap-icons`                  |
| 靜態部署 | GitHub Pages（`gh-pages` 分支）    |
| CI/CD    | GitHub Actions                     |

## 本機開發

```bash
npm install
npm start        # http://localhost:3000
npm test         # 一次性執行（--watchAll=false）
npm run build    # 產生 build/ 靜態檔
```

需求：Node.js 20.x 或以上。

## 目錄結構

```text
src/
  components/    Header / Hero / About / Experience / Skills / Projects / Contact / Footer
  data/          profile.ts / experience.ts / projects.ts / skills.ts（內容資料檔）
  i18n/          zh-TW.ts / en.ts（雙語字典）
  contexts/      ThemeContext.tsx / LocaleContext.tsx
  styles/        variables.css（Bootstrap 變數覆寫）/ global.css
.github/workflows/deploy.yml
```

新增專案只需編輯 `src/data/projects.ts`，不需修改版面元件。

## 部署（GitHub Pages）

1. 建立 GitHub repository，預設分支 `master`。
2. `git push` 到 `master`。GitHub Actions（`.github/workflows/deploy.yml`）會 `npm ci` → `build` → `test`，`build` job 全部成功後才跑 `deploy` job，用內建的 `GITHUB_TOKEN`（需 `permissions: contents: write`，已設定）把 `build/` 推到 `gh-pages` 分支。不需要另外建 PAT secret。
3. 第一次部署成功後：Settings → Pages → Source 設為 **Deploy from a branch**，選 `gh-pages` 分支、`/(root)`。
4. （可選）帳號／repo 確定後，更新 `package.json` 的 `homepage`（見下方待補項目）。

> 若採 spec §7.3 原始做法（自建 `GH_PAGES_TOKEN` PAT），把 deploy step 的 `GH_TOKEN` 改回 `${{ secrets.GITHUB_TOKEN }}` → `${{ secrets.GH_PAGES_TOKEN }}`，並在 repo secrets 新增該 token（Fine-grained：Contents = Read and write；Classic：`repo` scope）。

## 待補項目（spec.md §9）

以下為刻意保留的佔位內容，實際上線前必須替換。程式碼中對應處皆標註 `TODO(spec §9)`。

| 項目 | 檔案 / 位置 | 目前佔位值 |
| ---- | ---------- | --------- |
| GitHub 使用者名稱、Repository 名稱 | `package.json` → `homepage` | 目前為 `"."`（相對路徑，可部署到任意 Pages 路徑）；帳號／repo 確定後可依 spec §7.1.4 改為 `https://<github-username>.github.io/<repository-name>` |
| GitHub URL（Contact / Footer 公開入口） | `src/data/profile.ts` → `githubUrl` | `null`（畫面顯示 “Coming soon”，不使用假連結） |
| 最終姓名顯示格式（Header / Footer / metadata） | `src/data/profile.ts` → `name` | `（姓名待補）` / `(Your Name)` |
| 兩張專案的「使用技術、個人職責、可公開架構描述」 | `src/data/projects.ts` | 已填入 `spec.md` 已確認之摘要與成果；`tech` / `responsibilities` 為暫定值 |
| 專案 Demo／截圖／GitHub URL | `src/data/projects.ts` → `githubUrl` / `demoUrl` | `null`（未提供時卡片不顯示對應 CTA） |

> 已確認且不得變更的數字：Project 01 效能提升約 75–83%（下載流程 1 小時 → 10–15 分鐘）；Project 02 人工作業時間降低超過 80%。
