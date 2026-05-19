# ascolor-minimal テンプレート仕様

**バージョン:** v1.0  
**作成:** 2026-05-19  
**ベース:** monotone-minimal / カラー変換: アートソウル コーポレートカラー  
**用途:** AS社主催・共催セミナー、AS社ブランドが前面に出る資料

---

## カラースキーム（アートソウル コーポレートカラー固定）

| 変数名 | 値 | 用途 |
|--------|-----|------|
| `--c-primary` | `#6f911d` | メインアクセント（オリーブグリーン） |
| `--c-primary-dark` | `#4a6214` | ホバー・押下時 |
| `--c-primary-mid` | `#837c75` | グレーブラウン（サブ） |
| `--c-primary-light` | `#b0be90` | ライトオリーブ |
| `--c-primary-pale` | `#e8f1d8` | 薄い背景色（ペールグリーン） |
| `--c-accent` | `#dd2c2c` | アクセント（レッド） |
| `--c-accent-blue` | `#fabe00` | 差し色（イエロー） |
| `--c-dark` | `#6f911d` | セクション背景（グリーン） |
| `--c-mid` | `#3d5411` | より濃いグリーン（Impact/Ending 背景） |
| `--c-text` | `#1A1A1A` | 本文テキスト |
| `--c-text-sub` | `#837c75` | サブテキスト |
| `--c-line` | `#c5d9a8` | 区切り線 |
| `--c-base` | `#FFFFFF` | スライド背景 |

**ボディ背景（スライド外）:** `#111`  
**フォント:** Noto Sans JP / Hiragino Sans / Meiryo

---

## デザイン原則

- **パレット**: `#6f911d`（オリーブグリーン）、`#e8f1d8`（ペールグリーン）、`#837c75`（グレーブラウン）、`#dd2c2c`（アクセント）、`#fabe00`（差し色）
- カバーバー・セクション背景: `#6f911d`（グリーン）
- Impact/Ending 背景: `#3d5411`（濃いグリーン）
- 見出しライン・番号・ラベル: `#6f911d`
- 薄い背景エリア: `#e8f1d8`
- サブテキスト・小見出し: `#837c75`
- em 強調下線: `#fabe00`（差し色）

---

## スライドタイプ

### `slide-cover` — タイトルスライド
```html
<section class="slide slide-cover" data-section="cover" data-title="タイトル" data-notes="スクリプト">
  <div class="slide-cover-bar">
    <div class="slide-cover-tag">有限会社アートソウル AI導入支援事業</div>
    <h1 class="slide-cover-title">セミナータイトル</h1>
  </div>
  <div class="slide-cover-body">
    <p class="slide-cover-sub">サブタイトル</p>
    <div class="slide-cover-meta">YYYY.MM ｜ 開催情報</div>
  </div>
</section>
```
カバーバーは `#6f911d`（グリーン）。

---

### `slide-section` — セクション区切り
```html
<section class="slide slide-section" data-section="part1" data-title="パート名" data-notes="">
  <div class="slide-content">
    <div class="s-section-accent-bar"></div>
    <div class="s-section-chapter">SECTION</div>
    <h1 class="s-section-title">パートタイトル</h1>
    <p class="s-section-lead">サブタイトル</p>
  </div>
</section>
```
背景 `#6f911d`。SECTION ラベルは `rgba(255,255,255,.65)`。

---

### `slide-impact` — インパクト一言
```html
<section class="slide slide-impact" data-section="cover" data-title="タイトル" data-notes="スクリプト">
  <div class="slide-content slide-content-center">
    <div class="s-impact-tag">TODAY</div>
    <p class="s-impact-main">インパクトになる一文。<br>改行で強調。</p>
  </div>
</section>
```
背景 `#3d5411`（濃いグリーン）。em 強調: 下線 `#fabe00`。

---

### `slide-metric` — 数字強調
```html
<section class="slide slide-metric" data-section="part1" data-title="タイトル" data-notes="スクリプト">
  <div class="slide-content slide-content-center">
    <p class="s-metric-lead">リード文</p>
    <div class="s-metric-value">数値</div>
    <p class="s-metric-desc">説明</p>
    <p class="s-metric-source">出典</p>
  </div>
</section>
```
背景 `#6f911d`。数値色は白 `#FFFFFF`。

---

### `slide-quote` — 引用・格言
```html
<section class="slide slide-quote" data-section="part1" data-title="タイトル" data-notes="">
  <div class="slide-content slide-content-center">
    <blockquote class="s-quote">引用文。<br>改行で強調。</blockquote>
  </div>
</section>
```
背景 `#e8f1d8`（ペールグリーン）。

---

### 標準スライド — H() ヘッダー + コンテンツ
```html
<section class="slide" data-section="part1" data-title="タイトル" data-notes="スクリプト">
  H('スライドタイトル')
  <div class="slide-content">
    <!-- コンポーネント -->
  </div>
</section>
```
ヘッダーライン・h2 テキスト: `#6f911d`。

---

## AS カラー専用コンポーネント

### ラベルタグ `.s-label-tag`
```html
<span class="s-label-tag">LABEL</span>
```
グリーン地白文字（`#6f911d` 背景）。

### 番号付きリスト `.s-num-list`
```html
<ul class="s-num-list">
  <li class="s-num-item">
    <span class="s-num">01</span>
    <div>
      <div class="s-num-title">項目タイトル</div>
      <div class="s-num-desc">説明文</div>
    </div>
  </li>
</ul>
```
番号色: `#6f911d`、セパレーター: `#c5d9a8`。

---

## 共通コンポーネント

| クラス | 用途 |
|--------|------|
| `.s-list` + `.s-list-callout` | コールアウト（`#e8f1d8` 背景 + `#6f911d` ボーダー） |
| `.s-list` + `.s-list-arrow` | 通常項目（→ アイコン） |
| `.s-steps` / `.s-step-row` | ステップ（グリーン丸番号） |
| `.s-compare` | 比較（positive: グリーン枠） |
| `.s-flow` | プロセスフロー（グリーン番号） |
| `.s-point-list` | ポイントリスト（グリーンバッジ） |
| `.s-callout` | ハイライトボックス（ペールグリーン） |

---

## 適性ケース

| ケース | 理由 |
|--------|------|
| AS社主催セミナー（全テーマ） | ブランドカラーで統一 |
| AS社営業資料・提案書スライド | コーポレートアイデンティティ |
| クライアント向け AI 導入説明会 | AS社ブランドを前面に出したい案件 |
| セミナーマーケティング資料 | 認知度・ブランド構築 |

---

## ファイル構成

```
ascolor-minimal/
├── css/
│   ├── style.css        ← ASコーポレートカラーデザイン
│   └── presenter.css    ← プレゼンター画面（共通）
├── js/
│   ├── app.js           ← ビューア・操作ロジック（共通）
│   ├── presenter.js     ← プレゼンター機能（共通）
│   └── slides-template.js ← slides.js の骨格
├── viewer.html
├── presenter.html
├── admin.html
└── index.html
```

---

## バージョン履歴

| バージョン | 日付 | 変更内容 |
|-----------|------|---------|
| v1.0 | 2026-05-19 | monotone-minimal から分岐。ASコーポレートカラーを全面適用 |
