from __future__ import annotations

import html
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


WORK_GROUPS = [
    {
        "title": "项目作品",
        "subtitle": "AI 原型、前端演示和工具项目",
        "items": [
            {
                "slug": "qianzhi-ai-platform",
                "canonical_slug": "qianzhi-ai-platform",
                "title": "QianMind",
                "category": "AI Agent 服务平台",
                "year": "2026",
                "role": "产品策略 / 前端原型 / 交易流程设计",
                "client": "乾智 QianMind",
                "image": "",
                "image_alt": "",
                "source_label": "官网文案 + 产品 Demo 整理",
                "cover_kind": "brand",
                "logo": "/external-assets/qianzhi/logo.png",
                "headline": "专业 Agent，按结果交付",
                "subhead": "描述目标，乾智把任务、权限、证据和结算整理成一条清晰路径。",
                "summary": "QianMind 让用户按结果付费，让 Agent 替创作者接任务赚钱。平台负责匹配、托管、证据和结算。",
                "links": [
                    {"label": "官网", "href": "https://qianmind-official-site.netlify.app"},
                    {"label": "产品 Demo", "href": "https://qianzhi-agent-demo.netlify.app"},
                    {"label": "GitHub", "href": "https://github.com/strangeman-aboy/qianzhi-ai-platform"},
                ],
                "badges": [
                    "按结果付费",
                    "资金先托管",
                    "证据可追溯",
                    "创作者保留能力包",
                ],
                "flow": [
                    "描述目标",
                    "匹配 Agent",
                    "托管预算",
                    "验收结算",
                ],
                "gallery_title": "产品演示",
                "gallery_intro": "把核心链路拆成三个可看的界面：任务录入、证据复核、创作者控制台。",
                "gallery": [
                    {
                        "image": "/external-assets/qianzhi/hero-task-intake.png",
                        "alt": "QianMind task intake screen",
                        "caption": "Task Intake / 创建一笔可验收的 Agent 服务交易",
                    },
                    {
                        "image": "/external-assets/qianzhi/hero-evidence-review.png",
                        "alt": "QianMind evidence review screen",
                        "caption": "Evidence Review / 交付物、运行记录与证据绑定",
                    },
                    {
                        "image": "/external-assets/qianzhi/hero-creator-console.png",
                        "alt": "QianMind creator console screen",
                        "caption": "Creator Console / 创作者收益与能力边界",
                    },
                ],
                "sections": [
                    {
                        "eyebrow": "做什么",
                        "title": "把复杂任务交给专业 Agent。",
                        "body": "用户说清目标，平台整理需求、权限、预算和验收标准。",
                    },
                    {
                        "eyebrow": "怎么做",
                        "title": "先托管，再交付，最后按结果结算。",
                        "items": [
                            "任务需求进入托管单。",
                            "Agent 按能力和边界匹配。",
                            "交付物、证据和结算状态同步留痕。",
                        ],
                    },
                    {
                        "eyebrow": "为什么",
                        "title": "让 AI 服务更像一笔可信交易。",
                        "body": "用户不用买月费，创作者保留能力包，平台只负责调用、证据、仲裁和分账。",
                    },
                ],
                "tags": ["任务需求", "Agent 市场", "任务托管", "交易保障", "证据验收", "收益台账"],
            },
            {
                "slug": "act-responsable",
                "canonical_slug": "agent-memory-skill",
                "title": "Agent Memory Skill",
                "category": "Agent 工具",
                "year": "2026",
                "role": "Python CLI / Skill 设计",
                "client": "个人开源工具",
                "image": "/external-assets/project-screens/agent-memory-github.png",
                "image_alt": "Agent Memory Skill GitHub repository screenshot",
                "source_label": "GitHub 仓库实拍截图",
                "summary": "一个为长任务 AI Agent 设计的本地记忆与交接工具。它关注上下文压缩、模型切换、任务中断后的恢复，以及多人协作时如何保留真正有用的状态。",
                "links": [
                    {"label": "GitHub", "href": "https://github.com/strangeman-aboy/agent-memory-skill"},
                ],
                "sections": [
                    {
                        "eyebrow": "背景",
                        "title": "AI Agent 越长时间工作，越需要可靠的记忆和交接方式。",
                        "body": "很多长任务不是输在模型能力，而是输在上下文丢失、任务恢复困难和交接信息过载。这个工具试图把“有用状态”变成结构化资产。",
                    },
                    {
                        "eyebrow": "我负责",
                        "title": "把记忆流程设计成可以被 CLI 和 Codex Skill 调用的工具链。",
                        "items": [
                            "设计 candidate、promote、select、compact、redact、forget 等记忆流程。",
                            "用 Python CLI 和 JSON Schema 保持输入输出稳定。",
                            "围绕多代理协作、模型迁移和上下文压缩补行为级测试。",
                        ],
                    },
                    {
                        "eyebrow": "结果",
                        "title": "它更像一个工程化工具，而不是单次对话里的 prompt 技巧。",
                        "body": "项目保留了明确的命令边界、数据结构和测试入口，适合继续扩展成长期 AI 工作流中的基础能力。",
                    },
                ],
                "tags": ["Python", "Codex Skill", "CLI", "JSON Schema", "Agent Workflow"],
            },
            {
                "slug": "les-indecis",
                "canonical_slug": "longmo-store-demo",
                "title": "Longmo Store Demo",
                "category": "门店演示",
                "year": "2026",
                "role": "静态前端演示 / 商业方案表达",
                "client": "龙膜全球臻选店演示",
                "image": "/external-assets/project-screens/longmo-live-demo.png",
                "image_alt": "Longmo Store Demo live page screenshot",
                "source_label": "GitHub Pages 线上页面实拍截图",
                "summary": "一个面向本地门店的静态前端演示页，把获客诊断、内容增长、车主转化和经营看板串成一条可以讲清楚的业务方案。",
                "links": [
                    {"label": "线上演示", "href": "https://strangeman-aboy.github.io/hemingdemo/"},
                    {"label": "GitHub", "href": "https://github.com/strangeman-aboy/hemingdemo"},
                ],
                "sections": [
                    {
                        "eyebrow": "背景",
                        "title": "门店经营方案需要被快速看懂，而不是只写在文档里。",
                        "body": "这个 demo 把试点目标、获客诊断、内容生产、转化路径和后续运营拆成可浏览的页面结构，让方案更容易被客户或团队理解。",
                    },
                    {
                        "eyebrow": "我负责",
                        "title": "用静态前端把商业叙事整理成可上线页面。",
                        "items": [
                            "用 HTML、CSS 和 JavaScript 完成页面搭建和视觉层级。",
                            "把门店经营方案拆成定位、AI 搜索、能力、获客、转化、后续等模块。",
                            "通过 GitHub Pages 形成可直接访问的线上演示路径。",
                        ],
                    },
                    {
                        "eyebrow": "结果",
                        "title": "它更适合展示页面组织、商业表达和静态部署能力。",
                        "body": "目前这页已经换成真实线上 demo 截图，不再使用仓库 Open Graph 小图。",
                    },
                ],
                "tags": ["HTML", "CSS", "JavaScript", "GitHub Pages", "Business Demo"],
            },
        ],
    },
    {
        "title": "实践经历",
        "subtitle": "实习、公益、电商运营和真实业务实践",
        "items": [
            {
                "slug": "innostic-internship",
                "canonical_slug": "innostic-internship",
                "title": "Innostic Internship",
                "category": "医疗实习",
                "year": "2025.06 - 2025.09",
                "role": "商务实习生",
                "client": "上海建发致新医疗科技有限公司",
                "image": "/external-assets/experience/innostic-official-site.png",
                "image_alt": "Innostic official website screenshot",
                "source_label": "建发致新官网截图",
                "summary": "在医疗 SPD 供应链业务中参与全流程商务协作，对接院内需求、筛选供应商并推进合规合作；同时带队完成商业计划书撰写与汇报，方案获得集团 1 万元商业奖金。",
                "links": [
                    {"label": "官网", "href": "https://www.innostic.com/"},
                ],
                "sections": [
                    {
                        "eyebrow": "场景",
                        "title": "医疗供应链业务要求流程清楚、沟通稳定、合规意识强。",
                        "body": "我在实习中接触的是医疗 SPD 供应链场景，需要在院方需求、供应商资料、法务财务要求之间做信息对接和推进。",
                    },
                    {
                        "eyebrow": "我负责",
                        "title": "从需求对接到商业计划，我承担了偏执行也偏表达的工作。",
                        "items": [
                            "负责院内需求对接，完成供应商筛选与资质初核。",
                            "作为院方与供应商之间的核心对接人，联动法务、财务保障合作合规推进。",
                            "带队完成商业计划书撰写与汇报，把业务理解转成可被评审的方案。",
                        ],
                    },
                    {
                        "eyebrow": "结果",
                        "title": "商业计划方案获得集团 1 万元奖金。",
                        "body": "这段经历补足了我对 B 端业务流程、医疗供应链、合规协作和商业表达的理解。",
                    },
                ],
                "tags": ["医疗供应链", "SPD", "B 端流程", "合规协作", "商业计划"],
            },
            {
                "slug": "shude-foundation",
                "canonical_slug": "shude-foundation",
                "title": "Shude Foundation",
                "category": "公益经历",
                "year": "2024.09 - 至今",
                "role": "上海理工大学负责人",
                "client": "上海淑德公益基金会",
                "image": "/external-assets/experience/shude-official-site.png",
                "image_alt": "Shanghai Shude Foundation official website screenshot",
                "source_label": "上海淑德公益基金会官网截图",
                "summary": "统筹高校公益项目，围绕困难社区儿童的学业辅导与主题活动做策划落地，搭建志愿者招募、筛选、排班管理体系，并协调基金会、学校、社区三方。",
                "links": [
                    {"label": "官网", "href": "http://www.shshude.com/"},
                ],
                "sections": [
                    {
                        "eyebrow": "场景",
                        "title": "公益项目真正难的不是一次活动，而是稳定、持续、有人负责。",
                        "body": "淑德这段经历让我持续接触教育公平、儿童成长和志愿者组织，也成为我后来做教育场景 AI 原型时很重要的现实来源。",
                    },
                    {
                        "eyebrow": "我负责",
                        "title": "把高校侧志愿者组织和社区儿童服务串起来。",
                        "items": [
                            "统筹上海理工大学侧公益项目，负责志愿者招募、筛选与排班管理。",
                            "围绕困难社区儿童的学业辅导和主题活动做策划、协调与落地。",
                            "协调基金会、学校、社区三方，保障项目稳定高效开展。",
                        ],
                    },
                    {
                        "eyebrow": "收获",
                        "title": "这段经历训练的是责任感、沟通和长期组织能力。",
                        "body": "它不像一个短期项目能马上用数字收尾，但它让我更清楚真实人群、真实组织和真实约束是什么样子。",
                    },
                ],
                "tags": ["公益组织", "教育公平", "志愿者协作", "活动策划", "儿童成长"],
            },
            {
                "slug": "xianyu-auto-reply",
                "canonical_slug": "xianyu-auto-reply",
                "title": "Xianyu Store Ops",
                "category": "电商运营",
                "year": "2025.05 - 至今",
                "role": "自营店铺运营 / 客服自动化",
                "client": "电商平台自营店铺",
                "image": "",
                "image_alt": "",
                "source_label": "真实业务经历，待补充后台或流程截图",
                "summary": "从零搭建行李箱品类供应链，自主对接厂家，负责淘宝、拼多多、小红书等平台运营，并围绕高频客服问题探索自动回复工具落地。店铺累计营业额突破 7 万元。",
                "links": [],
                "sections": [
                    {
                        "eyebrow": "场景",
                        "title": "这是一个真实的自营业务，不是练习项目。",
                        "body": "我需要面对选品、供应链、平台规则、流量逻辑、客服问题和转化效率，而这些问题都不像课堂作业那样有标准答案。",
                    },
                    {
                        "eyebrow": "我负责",
                        "title": "从供应链到多平台运营，我把店铺从 0 跑起来。",
                        "items": [
                            "从零搭建行李箱品类供应链，自主对接优质厂家。",
                            "负责淘宝、拼多多、小红书等多平台全流程运营。",
                            "围绕高频客服问题整理话术，并探索开源自动回复工具的落地边界。",
                        ],
                    },
                    {
                        "eyebrow": "结果",
                        "title": "店铺累计营业额突破 7 万元。",
                        "body": "这段经历让我对真实用户反馈、重复劳动、自动化价值和商业闭环有了更直接的体感。",
                    },
                ],
                "tags": ["电商运营", "供应链", "客服自动化", "多平台运营", "用户反馈"],
            },
        ],
    },
]


WORK_DETAILS = [item for group in WORK_GROUPS for item in group["items"]]


CSS = r"""
@font-face {
  font-family: "Studio Feixen";
  src: url("/fonts/studio-feixen-sans-variable.woff2") format("woff2");
  font-display: swap;
}

:root {
  --ink: #565f7f;
  --ink-strong: #424965;
  --paper: #f4f5f6;
  --line: rgba(86, 95, 127, 0.62);
  --soft: rgba(86, 95, 127, 0.12);
  --gold: #b89a48;
  --shadow: 0 24px 64px rgba(50, 58, 78, 0.14);
}

* {
  box-sizing: border-box;
}

html {
  min-height: 100%;
  background: var(--paper);
  color: var(--ink);
  font-size: 62.5%;
  letter-spacing: 0;
}

body {
  min-height: 100vh;
  margin: 0;
  overflow-x: hidden;
  color: var(--ink);
  background: var(--paper);
  font-family: "Studio Feixen", Inter, "Microsoft YaHei", "PingFang SC", system-ui, sans-serif;
}

body::after {
  content: "";
  position: fixed;
  inset: 0;
  z-index: 20;
  pointer-events: none;
  background-image: url("/noise.png");
  background-repeat: repeat;
  opacity: 0.18;
  mix-blend-mode: multiply;
}

a {
  color: inherit;
}

img {
  display: block;
  max-width: 100%;
}

.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: clamp(2.2rem, 4vw, 4.8rem) clamp(2.2rem, 6vw, 8rem);
  pointer-events: none;
}

.site-header a {
  pointer-events: auto;
  text-decoration: none;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  font-size: clamp(1.4rem, 1.15vw, 1.8rem);
  font-weight: 760;
  line-height: 1;
  text-transform: uppercase;
}

.brand-mark {
  width: 3.2rem;
  height: 3.2rem;
  border: 2px solid currentColor;
  border-radius: 50%;
  position: relative;
}

.brand-mark::before,
.brand-mark::after {
  content: "";
  position: absolute;
  border: 2px solid currentColor;
  border-radius: 50%;
}

.brand-mark::before {
  width: 1.2rem;
  height: 1.2rem;
  left: 0.6rem;
  top: 0.5rem;
}

.brand-mark::after {
  width: 0.55rem;
  height: 0.55rem;
  right: 0.65rem;
  bottom: 0.7rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: clamp(1.4rem, 2.4vw, 3.2rem);
  font-size: clamp(1.2rem, 1vw, 1.5rem);
  font-weight: 640;
  text-transform: uppercase;
}

.nav-links a {
  opacity: 0.78;
}

.nav-links a[aria-current="page"],
.nav-links a:hover {
  opacity: 1;
}

.work-shell {
  min-height: 100vh;
  display: grid;
  grid-template-columns: minmax(0, 0.96fr) minmax(48rem, 0.7fr);
  gap: clamp(4rem, 5vw, 8rem);
  align-items: center;
  padding: clamp(10rem, 13vw, 16rem) clamp(2.2rem, 6vw, 8rem) clamp(5rem, 8vw, 8rem);
}

.preview-pane {
  min-height: min(68rem, 72vh);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.preview-card {
  position: relative;
  width: min(62rem, 100%);
  margin-left: auto;
  overflow: hidden;
  border: 1px solid rgba(86, 95, 127, 0.28);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.62);
  box-shadow: var(--shadow);
  aspect-ratio: 16 / 10;
}

.preview-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top left;
}

.preview-copy {
  height: 100%;
  padding: clamp(2.2rem, 3.4vw, 4.2rem);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1.4rem;
  background: rgba(255, 255, 255, 0.66);
}

.preview-copy span {
  font-size: clamp(1.1rem, 1vw, 1.3rem);
  font-weight: 760;
  line-height: 1;
  text-transform: uppercase;
  color: var(--gold);
}

.preview-copy strong {
  display: block;
  color: var(--ink-strong);
  font-size: clamp(3.2rem, 4.2vw, 6rem);
  line-height: 0.92;
  text-transform: uppercase;
}

.preview-copy p {
  max-width: 34em;
  margin: 0;
  font-size: clamp(1.35rem, 1.3vw, 1.7rem);
  line-height: 1.55;
}

.preview-caption {
  width: min(62rem, 100%);
  margin: 1.4rem 0 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 1.4rem;
  font-size: clamp(1.15rem, 1vw, 1.45rem);
  line-height: 1.4;
}

.preview-caption strong {
  color: var(--ink-strong);
  font-weight: 760;
}

.preview-caption span {
  text-align: right;
  opacity: 0.74;
}

.work-list-panel {
  width: 100%;
  max-width: 68rem;
}

.page-head {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: end;
  gap: 2rem;
  border-bottom: 2px solid var(--line);
  padding-bottom: 2.2rem;
  margin-bottom: 1.6rem;
}

.page-head h1 {
  margin: 0;
  color: var(--ink-strong);
  font-size: clamp(4.4rem, 5.4vw, 7.8rem);
  font-weight: 860;
  line-height: 0.86;
  text-transform: uppercase;
}

.page-head span {
  font-size: clamp(2.2rem, 2vw, 3rem);
  font-weight: 700;
  line-height: 1;
}

.work-groups {
  display: grid;
  gap: clamp(2.2rem, 3vw, 3.6rem);
}

.work-group-head {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1.2rem;
  align-items: end;
  margin: 0 0 0.4rem;
  color: var(--gold);
}

.work-group-head h2 {
  margin: 0;
  font-size: clamp(1.25rem, 1.1vw, 1.55rem);
  line-height: 1;
  text-transform: uppercase;
}

.work-group-head p {
  margin: 0;
  font-size: clamp(1.1rem, 0.95vw, 1.35rem);
  line-height: 1.35;
  text-align: right;
}

.work-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.work-item {
  border-bottom: 1px solid var(--line);
}

.work-link {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(11rem, 0.42fr);
  align-items: center;
  gap: 1.6rem;
  min-height: clamp(5.8rem, 5.8vw, 7.6rem);
  padding: 1.1rem 0;
  text-decoration: none;
  outline: none;
}

.work-title {
  display: grid;
  grid-template-columns: 2.2rem minmax(0, 1fr);
  align-items: baseline;
  gap: 0.9rem;
  min-width: 0;
}

.work-title span {
  transform: translateX(-1rem);
  opacity: 0;
  font-size: clamp(1.8rem, 2vw, 2.8rem);
  transition: opacity 180ms ease, transform 180ms ease;
}

.work-title strong {
  min-width: 0;
  color: var(--ink-strong);
  font-size: clamp(2rem, 2.05vw, 3.2rem);
  font-weight: 780;
  line-height: 1.05;
  overflow-wrap: anywhere;
}

.work-category {
  margin: 0;
  text-align: right;
  font-size: clamp(1.2rem, 1.12vw, 1.65rem);
  line-height: 1.25;
}

.work-link:hover .work-title span,
.work-link:focus-visible .work-title span,
.work-link.is-active .work-title span {
  opacity: 1;
  transform: translateX(0);
}

.work-link:hover .work-title strong,
.work-link:focus-visible .work-title strong,
.work-link.is-active .work-title strong {
  color: #2f3857;
}

.project-shell {
  width: min(122rem, calc(100vw - clamp(4.4rem, 12vw, 16rem)));
  margin: 0 auto;
  padding: clamp(11rem, 13vw, 16rem) 0 clamp(6rem, 8vw, 9rem);
}

.back-link {
  display: inline-block;
  margin-bottom: clamp(3rem, 4vw, 5.2rem);
  color: var(--ink-strong);
  font-size: clamp(1.25rem, 1vw, 1.55rem);
  font-weight: 760;
  text-decoration: none;
  text-transform: uppercase;
}

.case-cover {
  margin: 0 0 clamp(3.2rem, 5vw, 5.8rem);
}

.case-cover-brand {
  display: grid;
  gap: 1rem;
}

.case-brand-cover {
  min-height: clamp(34rem, 42vw, 52rem);
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(24rem, 0.5fr);
  gap: clamp(2.2rem, 5vw, 6rem);
  align-items: end;
  padding: clamp(2.4rem, 5vw, 5.6rem);
  border: 1px solid rgba(86, 95, 127, 0.26);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: var(--shadow);
}

.case-brand-main {
  display: grid;
  gap: clamp(1.4rem, 2vw, 2.2rem);
  align-content: end;
}

.case-brand-logo {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  color: var(--gold);
  font-size: clamp(1.1rem, 1vw, 1.35rem);
  font-weight: 780;
  line-height: 1;
  text-transform: uppercase;
}

.case-brand-logo img {
  width: auto;
  height: clamp(2.6rem, 3vw, 4rem);
  object-fit: contain;
}

.case-brand-main h2 {
  max-width: 10em;
  margin: 0;
  color: var(--ink-strong);
  font-size: clamp(4.4rem, 7.2vw, 9.2rem);
  font-weight: 880;
  line-height: 0.92;
  overflow-wrap: anywhere;
}

.case-brand-main p {
  max-width: 38em;
  margin: 0;
  font-size: clamp(1.55rem, 1.6vw, 2.2rem);
  line-height: 1.5;
}

.case-brand-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.case-brand-badges span {
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 0.62em 0.85em;
  font-size: clamp(1.1rem, 1vw, 1.35rem);
  font-weight: 720;
  line-height: 1;
}

.case-brand-flow {
  list-style: none;
  display: grid;
  gap: 0;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--line);
}

.case-brand-flow li {
  display: grid;
  grid-template-columns: 4.2rem minmax(0, 1fr);
  gap: 1rem;
  align-items: center;
  min-height: 6.4rem;
  border-bottom: 1px solid var(--line);
}

.case-brand-flow span {
  color: var(--gold);
  font-size: 1.25rem;
  font-weight: 780;
}

.case-brand-flow strong {
  color: var(--ink-strong);
  font-size: clamp(1.65rem, 1.8vw, 2.4rem);
  line-height: 1;
}

.case-cover-note {
  margin: 0;
  font-size: clamp(1.1rem, 1vw, 1.35rem);
  line-height: 1.35;
  opacity: 0.72;
}

.case-cover-frame {
  overflow: hidden;
  border: 1px solid rgba(86, 95, 127, 0.26);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.62);
  box-shadow: var(--shadow);
}

.case-cover-frame img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  object-position: top left;
}

.case-cover-placeholder {
  min-height: clamp(34rem, 42vw, 56rem);
  padding: clamp(2.6rem, 5vw, 5.6rem);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1.6rem;
  background: rgba(255, 255, 255, 0.64);
}

.case-cover-placeholder span {
  color: var(--gold);
  font-size: clamp(1.1rem, 1vw, 1.4rem);
  font-weight: 780;
  text-transform: uppercase;
}

.case-cover-placeholder strong {
  color: var(--ink-strong);
  font-size: clamp(4rem, 7vw, 10rem);
  line-height: 0.86;
  text-transform: uppercase;
}

.case-cover figcaption {
  margin-top: 1.2rem;
  font-size: clamp(1.15rem, 1vw, 1.4rem);
  line-height: 1.4;
  opacity: 0.76;
}

.case-title {
  border-bottom: 2px solid var(--line);
  padding-bottom: clamp(2.4rem, 4vw, 4.5rem);
}

.case-title .project-kicker {
  margin-bottom: 1.4rem;
  color: var(--gold);
  font-size: clamp(1.15rem, 1vw, 1.45rem);
  font-weight: 780;
  line-height: 1;
  text-transform: uppercase;
}

.case-title h1 {
  margin: 0;
  color: var(--ink-strong);
  max-width: none;
  font-size: clamp(4.2rem, 6.2vw, 8.6rem);
  font-weight: 880;
  line-height: 0.86;
  overflow-wrap: anywhere;
  text-transform: uppercase;
}

.case-intro {
  display: grid;
  grid-template-columns: minmax(22rem, 0.36fr) minmax(0, 1fr);
  gap: clamp(3rem, 6vw, 7rem);
  margin-top: clamp(3.2rem, 5vw, 6rem);
}

.meta-list {
  display: grid;
  gap: 2rem;
  margin: 0;
}

.meta-list div {
  border-top: 1px solid var(--line);
  padding-top: 1.2rem;
}

.meta-list dt {
  margin: 0 0 0.6rem;
  font-size: clamp(1.1rem, 1vw, 1.35rem);
  font-weight: 780;
  line-height: 1;
  text-transform: uppercase;
  opacity: 0.72;
}

.meta-list dd {
  margin: 0;
  color: var(--ink-strong);
  font-size: clamp(1.35rem, 1.25vw, 1.7rem);
  line-height: 1.35;
}

.case-description {
  max-width: none;
}

.case-description p {
  margin: 0;
  font-size: clamp(1.55rem, 1.45vw, 2rem);
  line-height: 1.56;
}

.case-metrics {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1px;
  margin: clamp(2.6rem, 5vw, 5.2rem) 0 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.case-metrics div {
  min-height: 8.2rem;
  padding: 1.6rem 1.35rem;
  border-right: 1px solid var(--line);
}

.case-metrics div:last-child {
  border-right: 0;
}

.case-metrics strong {
  display: block;
  color: var(--ink-strong);
  font-size: clamp(3rem, 4.4vw, 6rem);
  line-height: 0.9;
}

.case-metrics span {
  display: block;
  margin-top: 0.8rem;
  font-size: clamp(1.15rem, 1vw, 1.4rem);
  line-height: 1.25;
  opacity: 0.72;
}

.case-demo {
  margin: clamp(2.4rem, 5vw, 5rem) 0 0;
}

.case-demo-head {
  display: grid;
  grid-template-columns: minmax(12rem, 0.22fr) minmax(0, 1fr);
  gap: clamp(2rem, 5vw, 6rem);
  border-top: 1px solid var(--line);
  padding-top: 1.6rem;
  margin-bottom: clamp(1.4rem, 2.5vw, 2.8rem);
}

.case-demo-head span {
  color: var(--gold);
  font-size: clamp(1.15rem, 1vw, 1.45rem);
  font-weight: 780;
  line-height: 1;
  text-transform: uppercase;
}

.case-demo-head p {
  margin: 0;
  color: var(--ink-strong);
  font-size: clamp(1.5rem, 1.45vw, 2rem);
  line-height: 1.48;
}

.case-gallery {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1.1rem, 2vw, 2rem);
}

.case-gallery figure {
  margin: 0;
}

.case-gallery figure:first-child {
  grid-row: auto;
}

.case-gallery img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  object-position: top center;
  border: 1px solid rgba(86, 95, 127, 0.28);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.62);
  box-shadow: 0 18px 44px rgba(50, 58, 78, 0.1);
}

.case-gallery figcaption {
  margin-top: 0.72rem;
  font-size: clamp(1.05rem, 0.9vw, 1.25rem);
  line-height: 1.25;
  opacity: 0.72;
}

.project-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2.6rem;
}

.pill-link {
  border: 1px solid currentColor;
  border-radius: 999px;
  padding: 0.75em 1em;
  font-size: clamp(1.15rem, 1vw, 1.4rem);
  font-weight: 760;
  line-height: 1;
  text-decoration: none;
  text-transform: uppercase;
}

.pill-link:hover,
.pill-link:focus-visible {
  color: var(--paper);
  background: var(--ink-strong);
  outline: none;
}

.case-story {
  margin-top: clamp(4.5rem, 7vw, 8rem);
  display: grid;
  gap: clamp(2.6rem, 4vw, 4.6rem);
}

.case-block {
  display: grid;
  grid-template-columns: minmax(12rem, 0.22fr) minmax(0, 1fr);
  gap: clamp(2rem, 5vw, 6rem);
  border-top: 1px solid var(--line);
  padding-top: clamp(2rem, 3vw, 3rem);
}

.case-block h2 {
  margin: 0;
  color: var(--gold);
  font-size: clamp(1.15rem, 1vw, 1.45rem);
  line-height: 1.2;
  text-transform: uppercase;
}

.case-block-content h3 {
  margin: 0 0 1.4rem;
  color: var(--ink-strong);
  font-size: clamp(2.4rem, 3vw, 4.6rem);
  line-height: 0.98;
  text-transform: uppercase;
}

.case-block-content p,
.case-block-content li {
  font-size: clamp(1.45rem, 1.3vw, 1.8rem);
  line-height: 1.58;
}

.case-block-content p {
  max-width: 44em;
  margin: 0;
}

.case-block-content ul {
  display: grid;
  gap: 0.9rem;
  margin: 0;
  padding-left: 1.15em;
}

.chip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: clamp(3rem, 5vw, 5rem);
  border-top: 1px solid var(--line);
  padding-top: 2rem;
}

.chip {
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 0.6em 0.85em;
  font-size: clamp(1.15rem, 1vw, 1.35rem);
  font-weight: 700;
  line-height: 1;
}

.next-project {
  margin-top: clamp(5rem, 7vw, 9rem);
  border-top: 2px solid var(--line);
  padding-top: 2rem;
}

.next-project a {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  color: var(--ink-strong);
  text-decoration: none;
}

.next-project span {
  font-size: clamp(1.1rem, 1vw, 1.35rem);
  font-weight: 760;
  text-transform: uppercase;
  opacity: 0.72;
}

.next-project strong {
  font-size: clamp(2.4rem, 3.2vw, 4.6rem);
  line-height: 0.96;
  text-transform: uppercase;
  text-align: right;
}

@media (max-width: 980px) {
  .site-header {
    position: static;
  }

  .work-shell {
    grid-template-columns: 1fr;
    padding-top: 2rem;
  }

  .preview-pane {
    min-height: auto;
  }

  .preview-card,
  .preview-caption {
    width: 100%;
    margin-left: 0;
  }

  .work-list-panel {
    max-width: none;
  }

  .case-intro,
  .case-block,
  .case-brand-cover,
  .case-demo-head {
    grid-template-columns: 1fr;
  }

  .case-metrics,
  .case-gallery {
    grid-template-columns: 1fr;
  }

  .case-metrics div {
    border-right: 0;
    border-bottom: 1px solid var(--line);
  }

  .case-metrics div:last-child {
    border-bottom: 0;
  }

  .case-gallery figure:first-child {
    grid-row: auto;
  }
}

@media (max-width: 660px) {
  .site-header {
    flex-wrap: wrap;
    align-items: flex-start;
  }

  .nav-links {
    width: 100%;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 1rem 2.4rem;
  }

  .nav-links a {
    font-size: 1.1rem;
  }

  .project-shell {
    width: calc(100vw - 3.2rem);
    padding-top: 3rem;
  }

  .case-brand-cover {
    min-height: auto;
    padding: 1.8rem;
    overflow: hidden;
  }

  .case-brand-main h2 {
    max-width: 100%;
    font-size: clamp(3.6rem, 13vw, 5.6rem);
    line-height: 0.95;
  }

  .case-brand-main p {
    font-size: 1.45rem;
  }

  .case-brand-badges {
    gap: 0.55rem;
  }

  .case-brand-badges span {
    max-width: 100%;
    font-size: 1.05rem;
  }

  .case-brand-flow li {
    grid-template-columns: 3.2rem minmax(0, 1fr);
    min-height: 5.4rem;
  }

  .case-brand-flow strong {
    font-size: 1.7rem;
  }

  .work-link {
    grid-template-columns: 1fr;
    gap: 0.4rem;
  }

  .work-category {
    padding-left: 3.1rem;
    text-align: left;
  }

  .work-group-head {
    grid-template-columns: 1fr;
  }

  .work-group-head p {
    text-align: left;
  }

  .preview-caption {
    display: block;
  }

  .preview-caption span {
    display: block;
    margin-top: 0.4rem;
    text-align: left;
  }

  .project-shell {
    width: min(100% - 4.4rem, 122rem);
  }
}
"""


JS = r"""
(function () {
  const rows = Array.from(document.querySelectorAll("[data-preview-row]"));
  const frame = document.querySelector("[data-preview-frame]");
  const captionTitle = document.querySelector("[data-preview-title]");
  const captionSource = document.querySelector("[data-preview-source]");

  if (!rows.length || !frame) return;

  function escapeText(value) {
    return String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function setActive(row) {
    rows.forEach((item) => item.classList.toggle("is-active", item === row));

    const image = row.dataset.previewImage;
    const title = row.dataset.previewTitle || "";
    const category = row.dataset.previewCategory || "";
    const summary = row.dataset.previewSummary || "";
    const source = row.dataset.previewSource || "";

    if (image) {
      frame.innerHTML = `<img src="${escapeText(image)}" alt="${escapeText(title)} preview" />`;
    } else {
      frame.innerHTML = `
        <div class="preview-copy">
          <span>${escapeText(category)}</span>
          <strong>${escapeText(title)}</strong>
          <p>${escapeText(summary)}</p>
        </div>
      `;
    }

    if (captionTitle) captionTitle.textContent = title;
    if (captionSource) captionSource.textContent = source;
  }

  rows.forEach((row) => {
    row.addEventListener("mouseenter", () => setActive(row));
    row.addEventListener("focus", () => setActive(row));
  });

  setActive(rows[0]);
})();
"""


def esc(value: str) -> str:
    return html.escape(value, quote=True)


def header(current: str) -> str:
    home_current = ' aria-current="page"' if current == "home" else ""
    work_current = ' aria-current="page"' if current == "work" else ""
    about_current = ' aria-current="page"' if current == "about" else ""
    contact_current = ' aria-current="page"' if current == "contact" else ""
    return f"""
    <header class="site-header">
      <a class="brand" href="/" aria-label="Dongchen Hao home">
        <span class="brand-mark" aria-hidden="true"></span>
        <span>Dongchen Hao</span>
      </a>
      <nav class="nav-links" aria-label="Primary navigation">
        <a href="/"{home_current}>首页</a>
        <a href="/work/"{work_current}>作品</a>
        <a href="/about/"{about_current}>关于我</a>
        <a href="/contact/"{contact_current}>联系</a>
      </nav>
    </header>
    """


def html_page(title: str, description: str, body: str, script: bool = False) -> str:
    script_tag = '<script src="/work/work-stable.js" defer></script>' if script else ""
    return f"""<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{esc(title)}</title>
    <meta name="description" content="{esc(description)}" />
    <meta name="theme-color" content="#f4f5f6" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="preload" href="/fonts/studio-feixen-sans-variable.woff2" as="font" crossorigin type="font/woff2" />
    <link rel="stylesheet" href="/work/work-stable.css" />
  </head>
  <body>
{body}
{script_tag}
  </body>
</html>
"""


def render_work_row(item: dict) -> str:
    return f"""
          <li class="work-item">
            <a class="work-link" href="/work/{esc(item['slug'])}/" data-preview-row
              data-preview-title="{esc(item['title'])}"
              data-preview-category="{esc(item['category'])}"
              data-preview-image="{esc(item.get('image', ''))}"
              data-preview-summary="{esc(item['summary'])}"
              data-preview-source="{esc(item['source_label'])}">
              <div class="work-title">
                <span aria-hidden="true">→</span>
                <strong>{esc(item['title'])}</strong>
              </div>
              <p class="work-category">{esc(item['category'])}</p>
            </a>
          </li>
    """


def render_preview_frame(item: dict) -> str:
    if item.get("image"):
        return f'<img src="{esc(item["image"])}" alt="{esc(item["title"])} preview" />'
    return f"""
          <div class="preview-copy">
            <span>{esc(item['category'])}</span>
            <strong>{esc(item['title'])}</strong>
            <p>{esc(item['summary'])}</p>
          </div>
    """


def render_work_page() -> str:
    first = WORK_DETAILS[0]
    groups_html = []
    for group in WORK_GROUPS:
        rows = "".join(render_work_row(item) for item in group["items"])
        groups_html.append(
            f"""
          <section class="work-group">
            <div class="work-group-head">
              <h2>{esc(group['title'])}</h2>
              <p>{esc(group['subtitle'])}</p>
            </div>
            <ol class="work-list">
{rows}
            </ol>
          </section>
            """
        )

    body = f"""
{header("work")}
    <main class="work-shell">
      <aside class="preview-pane" aria-label="作品预览">
        <div class="preview-card" data-preview-frame>
{render_preview_frame(first)}
        </div>
        <div class="preview-caption">
          <strong data-preview-title>{esc(first['title'])}</strong>
          <span data-preview-source>{esc(first['source_label'])}</span>
        </div>
      </aside>
      <section class="work-list-panel" aria-label="作品列表">
        <div class="page-head">
          <h1>作品</h1>
          <span>{len(WORK_DETAILS)}</span>
        </div>
        <div class="work-groups">
{''.join(groups_html)}
        </div>
      </section>
    </main>
    """
    return html_page("Dongchen Hao | 作品", "郝东晨的项目、实习经历与真实业务实践。", body, script=True)


def render_links(project: dict) -> str:
    if not project["links"]:
        return '<span class="pill-link" aria-disabled="true">真实链接待补充</span>'
    return "".join(
        f'<a class="pill-link" href="{esc(link["href"])}" target="_blank" rel="noreferrer">{esc(link["label"])} ↗</a>'
        for link in project["links"]
    )


def render_cover(project: dict) -> str:
    if project.get("cover_kind") == "brand":
        badges = "".join(f"<span>{esc(item)}</span>" for item in project.get("badges", []))
        flow = "".join(
            f"""
              <li>
                <span>{index:02d}</span>
                <strong>{esc(item)}</strong>
              </li>
            """
            for index, item in enumerate(project.get("flow", []), start=1)
        )
        logo = project.get("logo")
        logo_html = f'<img src="{esc(logo)}" alt="{esc(project["title"])} logo" />' if logo else ""
        return f"""
      <section class="case-cover case-cover-brand" aria-label="项目封面">
        <div class="case-brand-cover">
          <div class="case-brand-main">
            <div class="case-brand-logo">{logo_html}<span>{esc(project['category'])}</span></div>
            <h2>{esc(project.get('headline', project['title']))}</h2>
            <p>{esc(project.get('subhead', project['summary']))}</p>
            <div class="case-brand-badges">{badges}</div>
          </div>
          <ol class="case-brand-flow">
{flow}
          </ol>
        </div>
        <p class="case-cover-note">{esc(project['source_label'])}</p>
      </section>
    """
    if project["image"]:
        visual = f"""
        <div class="case-cover-frame">
          <img src="{esc(project['image'])}" alt="{esc(project['image_alt'])}" />
        </div>
        """
    else:
        visual = f"""
        <div class="case-cover-frame">
          <div class="case-cover-placeholder">
            <span>{esc(project['category'])}</span>
            <strong>{esc(project['title'])}</strong>
          </div>
        </div>
        """
    return f"""
      <figure class="case-cover">
{visual}
        <figcaption>{esc(project['source_label'])}</figcaption>
      </figure>
    """


def render_case_section(section: dict) -> str:
    if section.get("items"):
        content = "<ul>" + "".join(f"<li>{esc(item)}</li>" for item in section["items"]) + "</ul>"
    else:
        content = f"<p>{esc(section.get('body', ''))}</p>"
    return f"""
          <article class="case-block">
            <h2>{esc(section['eyebrow'])}</h2>
            <div class="case-block-content">
              <h3>{esc(section['title'])}</h3>
              {content}
            </div>
          </article>
    """


def render_case_metrics(project: dict) -> str:
    stats = project.get("stats") or []
    if not stats:
        return ""
    rows = "".join(
        f"""
          <div>
            <strong>{esc(item['value'])}</strong>
            <span>{esc(item['label'])}</span>
          </div>
        """
        for item in stats
    )
    return f"""
      <section class="case-metrics" aria-label="项目指标">
{rows}
      </section>
    """


def render_case_gallery(project: dict) -> str:
    gallery = project.get("gallery") or []
    if not gallery:
        return ""
    figures = "".join(
        f"""
          <figure>
            <img src="{esc(item['image'])}" alt="{esc(item['alt'])}" />
            <figcaption>{esc(item['caption'])}</figcaption>
          </figure>
        """
        for item in gallery
    )
    return f"""
      <section class="case-demo" aria-label="产品演示">
        <div class="case-demo-head">
          <span>{esc(project.get('gallery_title', 'Demo'))}</span>
          <p>{esc(project.get('gallery_intro', ''))}</p>
        </div>
        <div class="case-gallery">
{figures}
        </div>
      </section>
    """


def render_project_page(project: dict, next_project: dict) -> str:
    sections = "".join(render_case_section(section) for section in project["sections"])
    chips = "".join(f'<span class="chip">{esc(item)}</span>' for item in project["tags"])

    body = f"""
{header("work")}
    <main class="project-shell">
      <a class="back-link" href="/work/">← 返回作品列表</a>
{render_cover(project)}
      <section class="case-title">
        <div class="project-kicker">项目 / {esc(project['category'])}</div>
        <h1>{esc(project['title'])}</h1>
      </section>
      <section class="case-intro">
        <dl class="meta-list">
          <div>
            <dt>分类</dt>
            <dd>{esc(project['category'])}</dd>
          </div>
          <div>
            <dt>时间</dt>
            <dd>{esc(project['year'])}</dd>
          </div>
          <div>
            <dt>角色</dt>
            <dd>{esc(project['role'])}</dd>
          </div>
          <div>
            <dt>对象</dt>
            <dd>{esc(project['client'])}</dd>
          </div>
        </dl>
        <div class="case-description">
          <p>{esc(project['summary'])}</p>
          <div class="project-actions">{render_links(project)}</div>
        </div>
      </section>
{render_case_metrics(project)}
{render_case_gallery(project)}
      <section class="case-story" aria-label="案例详情">
{sections}
      </section>
      <div class="chip-row">{chips}</div>
      <nav class="next-project" aria-label="下一个作品">
        <a href="/work/{esc(next_project['slug'])}/">
          <span>下一个</span>
          <strong>{esc(next_project['title'])}</strong>
        </a>
      </nav>
    </main>
    """
    return html_page(f"Dongchen Hao | {project['title']}", project["summary"], body, script=False)


def render_redirect(target: str) -> str:
    target = target.rstrip("/") + "/"
    return f"""<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="refresh" content="0; url={esc(target)}" />
    <title>Redirecting</title>
    <link rel="canonical" href="{esc(target)}" />
  </head>
  <body>
    <a href="{esc(target)}">Continue to {esc(target)}</a>
  </body>
</html>
"""


def write(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8", newline="\n")


def main() -> None:
    write(ROOT / "work" / "work-stable.css", CSS.strip() + "\n")
    write(ROOT / "work" / "work-stable.js", JS.strip() + "\n")
    write(ROOT / "work" / "index.html", render_work_page())

    for index, project in enumerate(WORK_DETAILS):
        next_project = WORK_DETAILS[(index + 1) % len(WORK_DETAILS)]
        page = render_project_page(project, next_project)
        write(ROOT / "work" / project["slug"] / "index.html", page)
        if project["canonical_slug"] != project["slug"]:
            write(ROOT / "work" / project["canonical_slug"] / "index.html", render_redirect(f"/work/{project['slug']}/"))


if __name__ == "__main__":
    main()
