# The Curated Archive

Portfolio of **Chen See Ng** (黄靖思), designer and front-end developer, Co. Louth, Ireland.

Hand-written HTML, CSS and JavaScript. No framework, no build step, no dependencies.
Open `index.html` in a browser and it runs.

---

## Structure

```
jingsi/
├── index.html               Home
├── work.html                Catalogue, six case files plus print work
├── about.html               About
├── contact.html             Contact
├── design-system.html       Design system, documented with live components
│
├── project-still.html       File #001  Somewhere Still        Three.js · GLSL · p5.js
├── project-vault.html       File #002  Memory Vault           Astro SSR · Supabase
├── project-camus.html       File #003  Albert Camus           Vanilla, 11 pages
├── project-androids.html    File #004  Do Androids Dream?     p5.js
├── project-grifhub.html     File #005  GrifHub                Figma · UX/UI
├── project-sos.html         A-01       Ireland SOS            Campaign site
├── project-algernon.html    A-02       Flowers for Algernon   p5.js, generative
│
├── style.css                Shared stylesheet
├── main.js                  Shared script
├── favicon.svg
├── images/                  Case study figures and cover images
└── files/                   CV, PDF
```

## Design tokens

The whole theme is driven by custom properties at the top of `style.css`.
Changing those six values restyles every page.

| Token | Value | Role |
|---|---|---|
| `--bg` | `#0a0a0a` | Background, warm black |
| `--gold` | `#C88E5D` | The only accent colour |
| `--cream` | `#E8E0D0` | Card stock of the classified file |
| `--serif` | Playfair Display | Display headings |
| `--mono` | Courier New | Labels and reference numbers |
| `--sans` | Inter | Body copy |

There is a second colour, `--stamp` (`#c41e3a`), used in exactly one place: the CLASSIFIED stamp.

`design-system.html` documents all of this with real components rather than screenshots,
so anything that drifts there has drifted across the whole site.

## Notes

Responsive from 360px up, verified with no horizontal overflow at 360, 390, 768, 1024 and 1440.
`prefers-reduced-motion` is honoured throughout: the terminal sequence prints at once
and every transition collapses.

Deploy by dragging this folder onto <https://app.netlify.com/drop>, or connect the repo to Netlify.

---

# 中文说明

**Chen See Ng（黄靖思）** 的个人作品集，爱尔兰劳斯郡。

纯手写 HTML / CSS / JavaScript，无框架、无构建步骤、无依赖。浏览器直接打开 `index.html` 就能跑。

## 文件结构

结构见上面的英文目录树。六个完整案例（#001 到 #005 加两个次级条目 A-01、A-02），
每个都是独立页面，从作品目录 `work.html` 点进去。

## 设计变量

整套主题由 `style.css` 顶部的自定义属性驱动，改那六个值就能换掉全站外观，
对照表见上。另外有第二个颜色 `--stamp`（`#c41e3a`），全站只用在 CLASSIFIED 印章一处。

`design-system.html` 是这套系统的现场文档，页面上的按钮、标签、指标条都是真组件不是截图，
所以那一页出了偏差就等于全站出了偏差。

## 其他

360px 起响应式，在 360、390、768、1024、1440 五个宽度下验证过无横向溢出。
全站尊重 `prefers-reduced-motion`：开机打字序列直接整段输出，所有过渡动画关闭。

部署把整个文件夹拖进 <https://app.netlify.com/drop>，或者把仓库连到 Netlify。
# chensee-ng-portfolio
