# 個人介紹網站程式規格書

## 1. 文件資訊

| 項目     | 內容                                         |
| -------- | -------------------------------------------- |
| 專案名稱 | 個人介紹網站（暫定）                         |
| 版本     | v0.1                                         |
| 狀態     | 可開始建立專案骨架；內容與帳號資訊待補       |
| 目標     | 以單頁網站清楚介紹個人背景、經驗與精選專案。 |

## 2. 專案定位

### 2.1 個人定位

- 主要職稱：**Software Engineer**
- 輔助專長：AI 自動化、資料處理、系統整合、跨領域工程。
- 敘事主軸：從機械工程背景跨域至軟體工程，以程式與資料處理解決實際流程問題。

### 2.2 目標訪客與目標

目標訪客為想快速認識作者背景的招募者、合作對象與一般訪客。訪客應可在單次瀏覽中理解作者的專業定位、主要工作經驗、技術能力與代表專案，並可前往 GitHub 聯絡或查看作品。

### 2.3 首頁文案（初稿）

**中文主標**：Software Engineer

**中文副標**：專注於 AI 自動化、資料處理與系統整合；以工程思維將複雜流程轉化為可靠的軟體解法。

**英文主標**：Software Engineer

**英文副標**：Focused on AI automation, data processing, and systems integration—turning complex workflows into reliable software solutions.

## 3. 功能範圍

### 3.1 必要功能

1. 單頁滾動式導覽，導覽列可平滑捲動至各區塊。
2. 中、英文內容切換；首次開啟時偵測瀏覽器語言，使用者可手動覆寫。
3. 深淺色模式切換；首次預設深色模式。
4. 手動選擇的語言與主題必須以 `localStorage` 保存。
5. RWD：桌機、平板與手機均可閱讀與操作。
6. 專案卡片以資料檔渲染，後續新增專案不應修改版面元件。
7. GitHub 連結作為首版公開聯絡入口；尚未提供帳號前，連結不得顯示為可點擊按鈕。
8. GitHub Actions 於推送至 `master` 後建置並部署至 GitHub Pages 的 `gh-pages` 分支。

### 3.2 不在首版範圍

- 個人照片、專案圖片或影片。
- 可下載履歷 PDF。
- 聯絡表單、後端 API、資料庫與 CMS。
- 部落格、登入系統與獨立專案詳情頁。

## 4. 資訊架構與內容規格

| 順序 | 區塊       | 內容                                                                                                                    | 驗收條件                                             |
| ---- | ---------- | ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 1    | Header     | 姓名／網站名稱、區塊導覽、語言切換、主題切換。                                                                          | 手機版可收合；所有控制項有可辨識標籤。               |
| 2    | Hero       | Software Engineer、定位文案、前往經驗與專案的錨點連結。                                                                 | 首屏可辨識定位；不使用照片。                         |
| 3    | About      | 機械工程跨域軟體工程的背景敘事與工作方式。                                                                              | 中英文語意對等，不使用逐字機翻式文案。               |
| 4    | Experience | 中原大學先進數位智能製造研究室：網路管理工程師／軟體開發（2022–2025）。                                                 | 呈現職稱、期間、工作內容與量化成果。                 |
| 5    | Skills     | AI Automation、Data Processing、Systems Integration、Python、React、TypeScript、Git、GitHub Actions、Docker、Linux 等。 | 技能須分群，避免僅堆疊標籤。                         |
| 6    | Projects   | 兩張精選專案卡片。                                                                                                      | 每張可顯示技術、職責、成果與選用的外部連結。         |
| 7    | Contact    | GitHub 入口與簡短 CTA。                                                                                                 | GitHub 尚未設定時顯示「Coming soon」，不使用假連結。 |
| 8    | Footer     | 姓名、年份、GitHub 連結（設定後）。                                                                                     | 不重複暴露電話、地址或其他私密履歷資訊。             |

### 4.1 已確認的經驗內容

**中原大學先進數位智能製造研究室**  
網路管理工程師／軟體開發｜2022–2025

- 以 Python 建置自動化資料處理工具與資料分析流程。
- 處理數十萬筆實驗資料，完成清理、篩選、轉換與標準化視覺化。
- 維護實驗室 IT 設備與網路環境，協助跨語言技術操作與程式學習。

### 4.2 已確認的專案內容

#### Project 01：AI Agent 工具整合與大量資料處理優化

- 摘要：以 Python 設計 AI Agent 工具串接架構，串接內外部系統與資料庫，支援大量查詢與自動化任務。
- 已確認成果：將大批量檔案下載流程從約 1 小時縮短至 10–15 分鐘，效能提升約 75–83%。
- 待補：使用技術、個人具體職責、可公開的架構描述、GitHub／Demo／截圖連結。

#### Project 02：Python 自動化批改系統

- 摘要：處理 40 位學生的原始程式碼與測資，建立輸出驗證與錯誤比對流程。
- 已確認成果：人工處理作業時間降低超過 80%。
- 待補：使用技術、個人具體職責、可公開的架構描述、GitHub／Demo／截圖連結。

## 5. UX 與視覺規格

- 視覺方向：簡潔、專業、工程導向；避免過度使用終端機、齒輪或程式碼雨等裝飾。
- 預設模式：深色模式。淺色模式必須維持文字與背景的足夠對比。
- 色彩：以深灰／近黑作底色，搭配低飽和藍色或青色作為互動與重點色；最終色碼於設計階段定義為 Bootstrap CSS variables 覆寫值。
- 字體：優先採系統字體堆疊，確保繁體中文與英文可讀性及載入效能。
- 無照片：Hero 改以排版、細緻格線或抽象資料流點綴建立識別，不新增圖片資產。
- 動畫：僅可使用短暫的 hover、focus 與平滑捲動效果；不得加入影響閱讀或造成暈眩的大型動畫。
- 行動版：導覽列收合；卡片單欄排列；互動目標最小 44 × 44 CSS px。

## 6. 技術規格（已確認，不替換）

| 類別     | 選擇                               |
| -------- | ---------------------------------- |
| UI 框架  | React 18                           |
| 語言     | TypeScript                         |
| 建置工具 | Create React App / `react-scripts` |
| 路由     | `react-router-dom` v6              |
| UI 樣式  | Bootstrap 5                        |
| 圖示     | `bootstrap-icons`                  |
| 靜態部署 | GitHub Pages                       |
| 部署套件 | `gh-pages`                         |
| CI/CD    | GitHub Actions                     |

### 6.1 路由規則

首版僅需 `/` 首頁。`react-router-dom` v6 需以 `HashRouter` 初始化，以相容 GitHub Pages 靜態主機與日後新增前端路由的需求。首版區塊導覽使用 `#about`、`#experience`、`#projects`、`#contact` 錨點，不應建立多餘路由。

### 6.2 建議目錄結構

```text
src/
  components/
    Header/
    Hero/
    About/
    Experience/
    Skills/
    Projects/
    Contact/
    Footer/
  data/
    profile.ts
    experience.ts
    projects.ts
    skills.ts
  i18n/
    zh-TW.ts
    en.ts
  contexts/
    ThemeContext.tsx
    LocaleContext.tsx
  styles/
    variables.css
    global.css
  App.tsx
  index.tsx
.github/workflows/
  deploy.yml
```

### 6.3 資料模型要求

- `profile.ts`：姓名、職稱、雙語簡介與聯絡連結。
- `experience.ts`：組織、職稱、期間、雙語職責與成果。
- `projects.ts`：id、雙語名稱、摘要、技術陣列、職責、成果、GitHub URL、Demo URL、是否公開。
- 所有外部 URL 需經型別檢查；未提供時使用 `null`，不得以 `#` 作替代連結。

## 7. GitHub Pages 與 CI/CD 規格

### 7.1 前置設定

1. 建立 GitHub repository，預設分支為 `master`。
2. GitHub Pages 的 Source 設為 **Deploy from a branch**，選擇 `gh-pages` branch 與 `/(root)` 資料夾。
3. 在 repository secrets 新增 `GH_PAGES_TOKEN`。此 token 必須具備推送至此 repository 的權限，且僅供部署使用。
4. 於 CRA 的 `package.json` 設定 `homepage`：

```json
"homepage": "https://<github-username>.github.io/<repository-name>"
```

若 repository 名稱為 `<github-username>.github.io`，則 `homepage` 改為 `https://<github-username>.github.io`。

### 7.2 NPM scripts

```json
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --watchAll=false",
    "deploy": "gh-pages -d build"
  }
}
```

### 7.3 GitHub Actions 工作流程要求

- 觸發條件：push 至 `master`，以及手動觸發。
- 使用單一 Node.js 版本（初版：20.x）。
- 執行 `npm ci`、`npm run build`、`npm run test`。
- 僅在建置與測試成功後執行 `npm run deploy`。
- 部署須使用 `GH_PAGES_TOKEN`，不得將 token 寫入 repository 或輸出至 log。
- 成功後 `gh-pages` branch 內容必須為 CRA 產生的 `build/` 靜態檔案。

範例 workflow：

```yaml
name: Deploy GitHub Pages

on:
  push:
    branches: [master]
  workflow_dispatch:

jobs:
  build-test-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20.x
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Test
        run: npm run test

      - name: Deploy to gh-pages
        env:
          GH_TOKEN: ${{ secrets.GH_PAGES_TOKEN }}
        run: npm run deploy -- -r "https://x-access-token:${GH_TOKEN}@github.com/${{ github.repository }}.git"
```

## 8. 非功能需求與驗收

### 8.1 可用性與無障礙

- 所有圖片（未來若加入）必須提供有意義的 `alt`；純裝飾使用空 `alt`。
- 色彩不可為唯一資訊傳達方式；鍵盤可操作導覽、主題、語言與連結。
- 焦點樣式不可移除。
- 手機寬度 320 px 以上不得出現水平捲軸。

### 8.2 效能與品質

- 初版不得載入未使用的相片、影片或大型字型檔。
- `npm run build` 與 `npm run test` 必須在乾淨環境成功。
- 主要內容於 JavaScript 載入後可直接閱讀，不依賴外部 API。
- 外部連結使用 `target="_blank"` 時必須搭配 `rel="noreferrer"`。

### 8.3 上線驗收清單

- [ ] 中英切換正確且重新整理後保留選擇。
- [ ] 首次進站為深色模式；切換後重新整理保留選擇。
- [ ] 桌機、平板、手機版導覽及所有區塊均正常。
- [ ] 兩項專案成果數字與履歷一致。
- [ ] 未公開電話、地址、履歷 PDF、推薦人資料。
- [ ] `master` push 後 Actions 綠燈，`gh-pages` branch 已更新。
- [ ] GitHub Pages URL 可正常開啟，靜態資產不出現 404。

## 9. 待補項目

| 項目                        | 用途                                        |
| --------------------------- | ------------------------------------------- |
| GitHub 使用者名稱           | 產生公開連結與 `homepage`。                 |
| Repository 名稱             | 產生 GitHub Pages URL 與 CRA 靜態資產路徑。 |
| GitHub URL                  | Contact 區塊的公開入口。                    |
| 專案技術、職責與公開限制    | 完成兩張專案卡片的內容。                    |
| 專案 Demo／截圖／GitHub URL | 視公開狀態加入卡片 CTA。                    |
| 最終姓名顯示格式            | Header、Footer 與 metadata。                |
