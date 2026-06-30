(function () {
  "use strict";

  const email = "hdc15592413430@qq.com";
  const github = "https://github.com/strangeman-aboy";
  const repo = (name) => `${github}/${name}`;
  const officialSources = [
    {
      title: "上海淑德公益基金会官网",
      label: "Education charity",
      href: "http://www.shshude.com/",
      image: "/external-assets/experience/shude-official-site.png"
    },
    {
      title: "建发致新官网",
      label: "Healthcare supply chain",
      href: "https://www.innostic.com/",
      image: "/external-assets/experience/innostic-official-site.png"
    }
  ];

  const projects = [
    {
      slug: "act-responsable",
      oldTitles: ["ACT Responsable"],
      title: "Agent Memory Skill",
      category: "Agent Tooling",
      year: "2026",
      cover: "/external-assets/github/agent-memory-skill.png",
      link: repo("agent-memory-skill"),
      summary:
        "一个为长任务 AI Agent 设计的本地记忆与交接工具。它关注上下文压缩、模型切换、任务中断后的恢复，以及多人协作时如何保留真正有用的状态。",
      highlights: [
        "提供 Codex Skill、Python CLI 与 JSON Schema",
        "支持候选记忆、promote、select、compact、redact、forget 等流程",
        "行为级评测覆盖 13 个场景，本地评测 13/13 通过"
      ],
      stack: ["Python", "Codex Skill", "CLI", "JSON Schema", "Agent Workflow"]
    },
    {
      slug: "qianzhi-ai-platform",
      oldTitles: ["Cocolyze", "Qianzhi AI Platform"],
      title: "QianMind",
      category: "AI Agent Service",
      year: "2026",
      cover: "/external-assets/qianzhi/logo.png",
      link: "https://qianmind-official-site.netlify.app",
      productLink: "https://qianzhi-agent-demo.netlify.app",
      githubLink: repo("qianzhi-ai-platform"),
      linkLabel: "Official Site",
      kicker: "QianMind / 乾智",
      caseTitle: "专业 Agent，按结果交付",
      caseLead:
        "描述目标，乾智把任务、权限、证据和结算整理成一条清晰路径。",
      summary:
        "QianMind 让用户按结果付费，让 Agent 替创作者接任务赚钱。平台负责匹配、托管、证据和结算。",
      metrics: [
        { value: "Escrow", label: "资金先托管" },
        { value: "Evidence", label: "证据可追溯" },
        { value: "Outcome", label: "按结果结算" }
      ],
      highlights: [
        "用户描述目标，平台生成任务契约",
        "预算先托管，交付后再结算",
        "证据、验收和争议处理放在同一条链路里"
      ],
      stack: ["任务需求", "Agent 市场", "任务托管", "交易保障", "证据验收", "收益台账"],
      visuals: [
        {
          src: "/external-assets/qianzhi/hero-task-intake.png",
          alt: "QianMind task intake screen",
          caption: "Task Intake / 创建一笔可验收的 Agent 服务交易"
        },
        {
          src: "/external-assets/qianzhi/hero-evidence-review.png",
          alt: "QianMind evidence review screen",
          caption: "Evidence Review / 交付物、运行记录与证据绑定"
        },
        {
          src: "/external-assets/qianzhi/hero-creator-console.png",
          alt: "QianMind creator console screen",
          caption: "Creator Console / 创作者收益与能力边界"
        }
      ],
      narrativeBlocks: [
        {
          label: "Task",
          title: "描述目标",
          body: "用户说清目标、材料、预算和验收标准。"
        },
        {
          label: "Escrow",
          title: "托管预算",
          body: "资金先进入托管，结果通过后再放款。"
        },
        {
          label: "Creator",
          title: "创作者接单",
          body: "创作者保留能力包，平台负责交易保障。"
        }
      ]
    },
    {
      slug: "les-indecis",
      oldTitles: ["Les Indécis"],
      title: "Longmo Store Demo",
      category: "Store Demo",
      year: "2026",
      cover: "/external-assets/github/hemingdemo.png",
      link: repo("hemingdemo"),
      summary:
        "一个面向本地门店的静态前端演示页，把获客诊断、内容增长、车主转化和经营看板串成一条可以讲清楚的业务方案。它更适合展示页面组织、商业表达和静态部署能力。",
      highlights: [
        "HTML / CSS / JavaScript 完成静态站演示",
        "把复杂经营方案拆成可浏览的信息层级",
        "配合 GitHub Pages / Actions 形成部署路径"
      ],
      stack: ["HTML", "CSS", "JavaScript", "GitHub Pages", "Business Demo"]
    }
  ];

  const projectBySlug = Object.fromEntries(projects.map((project) => [project.slug, project]));

  const experiences = [
    {
      id: "experience-shude",
      title: "上海淑德公益基金会",
      workTitle: "Shude Foundation",
      workCategory: "Charity",
      role: "上海理工大学负责人",
      period: "2024.09 - 至今",
      cover: "/external-assets/experience/shude-official-site.png",
      body:
        "负责高校侧公益项目组织与落地，参与志愿者招募、筛选、排班与活动执行，围绕困难家庭儿童的学业辅导和主题活动做协调。这段经历让我持续接触教育公平、儿童成长和公益协作，也成为我做教育场景 AI 原型时很重要的现实来源。",
      tags: ["公益组织", "教育公平", "志愿者协调", "儿童成长"]
    },
    {
      id: "experience-innostic",
      title: "上海建发致新医疗科技有限公司",
      workTitle: "Innostic Internship",
      workCategory: "Medical",
      role: "商务实习生",
      period: "2025.06 - 2025.09",
      cover: "/external-assets/experience/innostic-official-site.png",
      body:
        "在医疗 SPD 供应链业务中参与院内需求对接、供应商筛选与资质初核，联动法务、财务推进合作合规落地；同时带队完成商业计划书撰写与汇报，方案获得集团 1 万元商业奖金。这段经历补足了我对 B 端流程、合规协作和商业表达的理解。",
      tags: ["医疗供应链", "SPD", "B 端流程", "商业计划"]
    },
    {
      id: "experience-xianyu",
      title: "闲鱼自动回复客服 / 自营电商",
      workTitle: "Xianyu Auto Reply",
      workCategory: "Automation",
      role: "真实业务自动化实践",
      period: "2025.05 - 至今",
      cover: null,
      body:
        "运营行李箱品类自营店铺，覆盖淘宝、拼多多、小红书等平台，累计营业额突破 10 万元。为了降低重复客服成本，我检索并部署开源自动回复程序，整理高频问答话术和自动化边界。这让我更清楚：工具不是为了炫技，而是要接住真实重复劳动。",
      tags: ["电商运营", "客服自动化", "开源工具部署", "用户反馈"]
    }
  ];

  const workItems = [
    ...projects.map((project) => ({
      title: project.title,
      category: project.category,
      href: `/work/${project.slug}`,
      cover: project.cover,
      alt: `Cover of the project ${project.title}`
    })),
    ...experiences.map((experience) => ({
      title: experience.workTitle,
      category: experience.workCategory,
      href: `/about/#${experience.id}`,
      cover: experience.cover,
      alt: `${experience.title} official source visual`
    }))
  ];

  function setText(selector, value, root = document) {
    root.querySelectorAll(selector).forEach((node) => {
      node.textContent = value;
    });
  }

  function setAnchor(anchor, href, label) {
    if (!anchor) return;
    anchor.href = href;
    anchor.textContent = label;
    if (href.startsWith("http")) {
      anchor.target = "_blank";
      anchor.rel = "noreferrer";
    }
  }

  function normalizeHeader() {
    setText(".full-identity .nickname", "dongchen");
    setText(".full-identity .fullname", "hao");
    setText(".credits p", "Adapted by Dongchen © 2026");
    document.querySelectorAll(".language-switch").forEach((node) => {
      node.style.display = "none";
    });
  }

  function localizeNonHomeNavigation() {
    if (document.querySelector(".home")) return;

    const labels = new Map([
      ["/", "首页"],
      ["/work", "作品"],
      ["/work/", "作品"],
      ["/about", "关于我"],
      ["/about/", "关于我"],
      ["/contact", "联系"],
      ["/contact/", "联系"]
    ]);

    document.querySelectorAll(".menu-items a, .nav-links a").forEach((anchor) => {
      const path = new URL(anchor.getAttribute("href"), window.location.origin).pathname;
      const label = labels.get(path);
      if (!label) return;
      const heading = anchor.querySelector("h1");
      if (heading) {
        heading.textContent = label;
      } else {
        anchor.textContent = label;
      }
    });
  }

  function normalizeLinks() {
    document.querySelectorAll('a[href*="twitter"], a[href*="instagram"], a[href*="last.fm"], a[href*="dribbble"]').forEach((anchor) => {
      setAnchor(anchor, github, "↗ GitHub");
    });
    document.querySelectorAll('a[href^="mailto:"]').forEach((anchor) => {
      setAnchor(anchor, `mailto:${email}`, `↗ ${email}`);
    });
  }

  function updateHome() {
    const home = document.querySelector(".home");
    document.body.classList.toggle("personal-home", Boolean(home));
    if (!home) return;
    setText(".intro-id .intro-line:first-child", "HEY, I’M HAO DONGCHEN");
    setText(".intro-id .intro-line:nth-child(2)", "BUT YOU CAN CALL ME 清城山下郝半仙");
    setText(".intro-role .intro-line:first-child", "I’m a front-end developer");
    setText(".intro-role .intro-line:nth-child(2)", "& AI prototype builder");
    updateHomeIntroNames(home);
    const links = Array.from(document.querySelectorAll(".intro-links a"));
    setAnchor(links[0], "/work", "See my projects");
    setAnchor(links[1], "/about", "More about me");
    setAnchor(links[2], "/contact", "Let’s get in touch");
    installHomeShapeOverlay(home);
  }

  function updateHomeIntroNames(home) {
    const headings = home.querySelectorAll(".intro-id");
    const setLeadingText = (node, text) => {
      if (!node) return;
      const textNode = Array.from(node.childNodes).find((child) => child.nodeType === Node.TEXT_NODE);
      if (textNode) {
        textNode.nodeValue = text;
      } else {
        node.prepend(document.createTextNode(text));
      }
    };
    const setNameText = (node, text) => {
      if (!node) return;
      const textNode = Array.from(node.childNodes).find((child) => child.nodeType === Node.TEXT_NODE);
      if (textNode) {
        textNode.nodeValue = text;
      } else {
        node.prepend(document.createTextNode(text));
      }
    };

    setLeadingText(headings[0], "Hey, I’m ");
    const fullNameParts = headings[0] ? headings[0].querySelectorAll(".name") : [];
    if (fullNameParts.length > 1) {
      setNameText(fullNameParts[0], "Hao");
      setNameText(fullNameParts[1], "Dongchen");
    } else {
      setNameText(fullNameParts[0], "Hao Dongchen");
    }

    setLeadingText(headings[1], "But you can call me ");
    const nickname = headings[1] ? headings[1].querySelector(".name") : null;
    setNameText(nickname, "清城山下郝半仙");
  }

  function installHomeShapeOverlay(home) {
    if (!home) return;
    if (home.querySelector(".personal-home-shape-overlay")) {
      installHomeShapeEvents(home);
      return;
    }

    const shapeSpecs = {
      sphere: { symbol: "home-shape-sphere", size: 84 },
      magnet1: { symbol: "home-shape-magnet1", size: 154 },
      wave: { symbol: "home-shape-wave", size: 184 },
      magnet2: { symbol: "home-shape-magnet2", size: 154 },
      openloop: { symbol: "home-shape-openloop", size: 184 }
    };

    const layouts = {
      fullname: [
        { id: "full-sphere-1", type: "sphere", x: 632, y: 404, scale: 1.8, rotation: 0, z: 11 },
        { id: "full-openloop-1", type: "openloop", x: 865, y: 319, scale: 1.68, rotation: 128, z: 12 },
        { id: "full-magnet2-1", type: "magnet2", x: 744, y: 358, scale: 2.1, rotation: 37, z: 13 },
        { id: "full-wave-1", type: "wave", x: 496, y: 392, scale: 1.04, rotation: -137, z: 14 },
        { id: "full-sphere-2", type: "sphere", x: 623, y: 379, scale: 1.8, rotation: 0, z: 16 },
        { id: "full-sphere-3", type: "sphere", x: 641, y: 431, scale: 1.81, rotation: 0, z: 17 },
        { id: "full-sphere-4", type: "sphere", x: 651, y: 456, scale: 1.8, rotation: 0, z: 18 },
        { id: "full-wave-2", type: "wave", x: 552, y: 373, scale: 1, rotation: -137, z: 19 },
        { id: "full-sphere-5", type: "sphere", x: 525, y: 435, scale: 1, rotation: 0, z: 20 },
        { id: "full-sphere-6", type: "sphere", x: 535, y: 430, scale: 1, rotation: 0, z: 21 },
        { id: "full-sphere-7", type: "sphere", x: 545, y: 424, scale: 1, rotation: 0, z: 22 }
      ],
      nickname: [
        { id: "nick-sphere-1", type: "sphere", x: 162, y: 121, scale: 1, rotation: 0, z: 23 },
        { id: "nick-sphere-2", type: "sphere", x: 213, y: 119, scale: 1, rotation: 0, z: 24 },
        { id: "nick-magnet1-1", type: "magnet1", x: 146, y: 179, scale: 1.14, rotation: -13, z: 25 },
        { id: "nick-wave-1", type: "wave", x: 197, y: 76, scale: 0.59, rotation: -20, z: 27 }
      ]
    };

    const overlay = document.createElement("div");
    overlay.className = "personal-home-shape-overlay";
    overlay.setAttribute("aria-hidden", "true");
    overlay.innerHTML = `
      <svg class="personal-home-shape-defs" aria-hidden="true">
        <defs>
          <linearGradient id="homeShapeGradient" x1="0%" y1="15%" x2="100%" y2="90%">
            <stop offset="0%" stop-color="#75f0bd" />
            <stop offset="42%" stop-color="#91e8ff" />
            <stop offset="70%" stop-color="#f5a9ce" />
            <stop offset="100%" stop-color="#ecff84" />
          </linearGradient>
          <filter id="homeShapeGlow" x="-35%" y="-35%" width="170%" height="170%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
            <feOffset dx="0" dy="4" result="offset" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.22" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <symbol id="home-shape-sphere" viewBox="0 0 72 72"><circle cx="31.019" cy="18.93" r="3.555"></circle></symbol>
          <symbol id="home-shape-magnet1" viewBox="0 0 72 72"><path d="M61.028,23.378a3.555,3.555,0,0,0-6.682-2.432,4.39,4.39,0,0,1-8.25-3,3.555,3.555,0,1,0-6.682-2.432,11.5,11.5,0,0,0,21.614,7.867Z"></path></symbol>
          <symbol id="home-shape-wave" viewBox="0 0 72 72"><path d="M24.221,27.153a4.387,4.387,0,0,1-5.607-1.76A11.436,11.436,0,0,0,13.56,20.8a3.555,3.555,0,1,0-3.005,6.444,4.358,4.358,0,0,1,1.925,1.748,11.5,11.5,0,0,0,14.7,4.627,4.389,4.389,0,0,1,5.608,1.759,11.43,11.43,0,0,0,5.053,4.595,3.556,3.556,0,0,0,3.006-6.445,4.353,4.353,0,0,1-1.926-1.747,11.5,11.5,0,0,0-14.7-4.627Z"></path></symbol>
          <symbol id="home-shape-magnet2" viewBox="0 0 72 72"><path d="M13.411,43.392a3.555,3.555,0,0,0,5.825,4.078,4.39,4.39,0,1,1,7.191,5.036,3.555,3.555,0,0,0,5.825,4.078A11.5,11.5,0,1,0,13.411,43.392Z"></path></symbol>
          <symbol id="home-shape-openloop" viewBox="0 0 72 72"><path d="M61.5,47.329A11.5,11.5,0,0,0,50,35.829a3.556,3.556,0,1,0,0,7.111,4.389,4.389,0,1,1-4.39,4.389,3.556,3.556,0,0,0-7.111,0,11.5,11.5,0,0,0,23,0Z"></path></symbol>
        </defs>
      </svg>
    `;

    Object.entries(layouts).forEach(([layoutName, items]) => {
      const layer = document.createElement("div");
      layer.className = `personal-home-shape-layer personal-home-shape-layer-${layoutName}`;
      const scatterSlots = [
        { x: -560, y: -320, rotation: -72 },
        { x: 560, y: -300, rotation: 68 },
        { x: -560, y: 310, rotation: 48 },
        { x: 560, y: 310, rotation: -58 },
        { x: -120, y: -360, rotation: 28 },
        { x: 180, y: 360, rotation: -32 },
        { x: -380, y: -250, rotation: 82 },
        { x: 390, y: 250, rotation: -86 }
      ];
      items
        .slice()
        .sort((a, b) => a.z - b.z)
        .forEach((item, index) => {
          const spec = shapeSpecs[item.type];
          const scatter = scatterSlots[index % scatterSlots.length];
          const shape = document.createElement("span");
          shape.className = `personal-home-shape personal-home-shape-${item.type}`;
          shape.style.setProperty("--shape-x", `${item.x - 462}px`);
          shape.style.setProperty("--shape-y", `${item.y - 260}px`);
          shape.style.setProperty("--shape-start-x", `${scatter.x}px`);
          shape.style.setProperty("--shape-start-y", `${scatter.y}px`);
          shape.style.setProperty("--shape-size", `${spec.size * item.scale}px`);
          shape.style.setProperty("--shape-rotate", `${item.rotation}deg`);
          shape.style.setProperty("--shape-start-rotate", `${scatter.rotation}deg`);
          shape.style.setProperty("--shape-delay", `${Math.min(index * 34, 240)}ms`);
          shape.style.zIndex = String(item.z);
          shape.innerHTML = `<svg viewBox="0 0 72 72" aria-hidden="true"><use href="#${spec.symbol}"></use></svg>`;
          layer.appendChild(shape);
        });
      overlay.appendChild(layer);
    });

    home.prepend(overlay);
    installHomeShapeEvents(home);
  }

  function installHomeShapeEvents(home) {
    if (!home || home.dataset.personalShapeEvents === "1") return;
    home.dataset.personalShapeEvents = "1";
    const clear = () => {
      document.body.classList.remove("personal-shapes-fullname", "personal-shapes-nickname");
    };
    const show = (state) => {
      document.body.classList.toggle("personal-shapes-fullname", state === "fullname");
      document.body.classList.toggle("personal-shapes-nickname", state === "nickname");
    };
    const showForName = (target) => {
      const line = target.closest(".intro-id");
      if (!line || !home.contains(line)) return;
      const firstLine = home.querySelector(".intro-id:first-of-type");
      show(line === firstLine ? "nickname" : "fullname");
    };
    const leave = () => {
      window.setTimeout(() => {
        if (!home.querySelector(".name:hover")) clear();
      }, 40);
    };

    home.addEventListener("pointerover", (event) => {
      const target = event.target.closest && event.target.closest(".name");
      if (!target || !home.contains(target)) return;
      showForName(target);
    });
    home.addEventListener("focusin", (event) => {
      const target = event.target.closest && event.target.closest(".name");
      if (!target || !home.contains(target)) return;
      showForName(target);
    });
    home.addEventListener("pointerout", (event) => {
      const target = event.target.closest && event.target.closest(".name");
      if (!target || !home.contains(target)) return;
      if (event.relatedTarget && target.contains(event.relatedTarget)) return;
      leave();
    });
    home.addEventListener("focusout", clear);
  }

  function replacePersonalLogo() {
    const replaceSvg = (svg, className) => {
      if (!svg || svg.parentElement.querySelector(".personal-logo-type")) return;
      const logo = document.createElement("span");
      logo.className = `personal-logo-type ${className}`;
      logo.setAttribute("aria-label", "HDC");
      logo.textContent = "HDC";
      svg.replaceWith(logo);
    };

    replaceSvg(document.querySelector('.splashscreen svg[data-name="deconstructedLogo"]'), "personal-logo-splash");
    replaceSvg(document.querySelector('header .logo svg[data-name="logoItem"]'), "personal-logo-header");
  }

  function updateWorkList() {
    if (!document.querySelector(".projects")) return;
    setText(".projects .elements-number", String(workItems.length));
    const rows = Array.from(document.querySelectorAll(".projects-right li"));
    rows.forEach((row, index) => {
      const item = workItems[index];
      if (!item) {
        row.classList.add("personal-hidden");
        return;
      }
      row.classList.remove("personal-hidden");
      const anchor = row.querySelector("a");
      if (anchor) anchor.href = item.href;
      setText(".projects-title", item.title, row);
      setText(".projects-category", item.category, row);
    });

    const images = Array.from(document.querySelectorAll(".projects-left .projects-image-wrapper"));
    images.forEach((wrapper, index) => {
      const item = workItems[index];
      if (!item || !item.cover) {
        wrapper.classList.add("personal-hidden");
        return;
      }
      wrapper.classList.remove("personal-hidden");
      const image = wrapper.querySelector("img");
      if (image) {
        image.src = item.cover;
        image.alt = item.alt;
      }
    });
  }

  function updateAbout() {
    if (!document.querySelector(".about")) return;
    setText(".about .page-title", "关于我");
    setText(
      ".presentation-text",
      "你好，我是郝东晨，上海理工大学生物医学工程本科在读。我更喜欢把自己放在真实问题里做前端和 AI 原型：从移动端交互、后端接口、Agent 调用链路，到部署骨架和验证脚本。我关注教育、公益、医疗供应链和真实业务自动化，希望把问题先做成可交互、可演示、可继续迭代的产品形态。"
    );
    const resume = document.querySelector(".resume-link a");
    setAnchor(resume, github, "↗ GitHub");
    addExperienceSection();
  }

  function addExperienceSection() {
    const aboutLeft = document.querySelector(".about-left");
    if (!aboutLeft || aboutLeft.querySelector(".personal-experience")) return;
    const section = document.createElement("section");
    section.className = "personal-experience";
    section.innerHTML = `
      <div class="personal-section-head">
        <h3>Experience</h3>
        <p>这些经历不只是简历里的时间线，它们解释了我为什么会关注教育、医疗供应链和真实业务自动化。</p>
      </div>
      <div class="personal-source-grid" aria-label="Official source visuals">
        ${officialSources
          .map(
            (source) => `
              <a class="personal-source-card" href="${source.href}" target="_blank" rel="noreferrer">
                <img src="${source.image}" alt="${source.title} screenshot" loading="lazy" />
                <span>${source.label}</span>
                <strong>${source.title}</strong>
              </a>
            `
          )
          .join("")}
        <div class="personal-source-card personal-source-note">
          <span>Owned business</span>
          <strong>自营电商素材待补</strong>
          <p>这一段先不放外部图片，后续更适合用你自己的店铺截图、自动回复后台或订单数据截图。</p>
        </div>
      </div>
      <div class="personal-experience-list">
        ${experiences
          .map(
            (experience) => `
              <article class="personal-experience-item" id="${experience.id}">
                <div class="personal-experience-meta">
                  <p>${experience.period}</p>
                  <span>${experience.role}</span>
                </div>
                <div class="personal-experience-body">
                  <h4>${experience.title}</h4>
                  <p>${experience.body}</p>
                  <div class="personal-chip-row">
                    ${experience.tags.map((tag) => `<span class="personal-chip">${tag}</span>`).join("")}
                  </div>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
      <div class="personal-life-note">
        <p>后面这里还可以继续扩展成“灵智空间”的生活入口：朋友、日常照片、公益活动、折腾过的小工具、喜欢的音乐和一些不那么正式但很像你的片段。</p>
      </div>
    `;
    aboutLeft.appendChild(section);
  }

  function updateContact() {
    if (!document.querySelector(".contact")) return;
    setText(".page-title", "联系");
    document.querySelectorAll(".contact a").forEach((anchor) => {
      const text = anchor.textContent.toLowerCase();
      if (text.includes("mail") || text.includes("email") || anchor.href.startsWith("mailto:")) {
        setAnchor(anchor, `mailto:${email}`, `↗ ${email}`);
      } else {
        setAnchor(anchor, github, "↗ GitHub");
      }
    });
    replaceTextNodes(document.querySelector(".contact"), {
      "Social medias": "链接",
      "SOCIAL MEDIAS": "链接",
      "Mail": "邮箱",
      "MAIL": "邮箱"
    });
  }

  function getCurrentProject() {
    const match = window.location.pathname.match(/\/work\/([^/]+)/);
    return match ? projectBySlug[match[1]] : null;
  }

  function updateProjectDetail() {
    const project = getCurrentProject();
    if (!project) return;
    document.title = `${project.title} | Dongchen Hao`;
    replaceTextNodes(document.body, projectReplacementMap(project));
    setText(".project-title .page-title", project.title);
    rewriteProjectData(project);
    setText(".project-description", project.summary);

    const hero = document.querySelector(".project-hero img, .hero-image img, img.project-image, main img");
    if (hero) {
      hero.src = project.cover;
      hero.alt = `Cover of the project ${project.title}`;
      hero.style.objectFit = "contain";
    }

    const allLinks = Array.from(document.querySelectorAll("main a"));
    const websiteLink = allLinks.find((anchor) => /website|github|view|visit|site/i.test(anchor.textContent));
    setAnchor(websiteLink, project.link, `↗ ${project.linkLabel || "View GitHub"}`);
    addProjectSummary(project);
  }

  function rewriteProjectData(project) {
    const tableBody = document.querySelector(".project-data tbody");
    if (!tableBody) return;
    const links = [
      project.link ? `<a href="${project.link}" target="_blank" rel="noreferrer">${project.linkLabel || "GitHub"}</a>` : "",
      project.productLink ? `<a href="${project.productLink}" target="_blank" rel="noreferrer">Product Demo</a>` : "",
      project.githubLink ? `<a href="${project.githubLink}" target="_blank" rel="noreferrer">GitHub</a>` : ""
    ].filter(Boolean);
    tableBody.innerHTML = `
      <tr><td><h6>Category</h6></td><td><p>${project.category}</p></td></tr>
      <tr><td><h6>Year</h6></td><td><p>${project.year}</p></td></tr>
      <tr><td><h6>Role</h6></td><td><p>Product thinking / Front-end / Prototype engineering</p></td></tr>
      <tr><td><h6>Link</h6></td><td><p>${links.join(" · ")}</p></td></tr>
    `;
  }

  function projectReplacementMap(project) {
    const map = {
      "Branding": project.category,
      "UX/UI Design": project.category,
      "Web Development": project.category,
      "2022": project.year,
      "2023": project.year,
      "2024": project.year,
      "View the website": "View GitHub",
      "Next project": "Next project",
      "Charles Bruyerre": "郝东晨",
      "charles bruyerre": "hao",
      "A colorful brand universe": project.summary,
      "Hey, my name is Hao Dongchen and I use Dongchen Hao as my nickname across social medias.": project.summary
    };
    project.oldTitles.forEach((oldTitle) => {
      map[oldTitle] = project.title;
      map[oldTitle.toUpperCase()] = project.title.toUpperCase();
      map[oldTitle.toLowerCase()] = project.title.toLowerCase();
    });
    return map;
  }

  function addProjectSummary(project) {
    const projectRoot = document.querySelector(".project");
    const main = projectRoot || document.querySelector("main .page-content") || document.querySelector("main");
    if (!main || main.querySelector(".project-personal-summary")) return;
    const section = document.createElement("section");
    section.className = "project-personal-summary";
    if (project.visuals || project.metrics || project.narrativeBlocks) {
      const metrics = project.metrics || [];
      const visuals = project.visuals || [];
      const blocks = project.narrativeBlocks || [];
      const links = [
        project.link ? { href: project.link, label: project.linkLabel || "Official Site" } : null,
        project.productLink ? { href: project.productLink, label: "Product Demo" } : null,
        project.githubLink ? { href: project.githubLink, label: "GitHub" } : null
      ].filter(Boolean);
      section.innerHTML = `
        <div class="project-case-intro">
          <p class="project-case-kicker">${project.kicker || project.category}</p>
          <h2>${project.caseTitle || project.title}</h2>
          <p>${project.caseLead || project.summary}</p>
        </div>
        ${
          metrics.length
            ? `<div class="project-case-metrics">${metrics
                .map((item) => `<div><strong>${item.value}</strong><span>${item.label}</span></div>`)
                .join("")}</div>`
            : ""
        }
        ${
          visuals.length
            ? `<div class="project-case-visuals">${visuals
                .map(
                  (item) => `
                    <figure>
                      <img src="${item.src}" alt="${item.alt}">
                      <figcaption>${item.caption}</figcaption>
                    </figure>
                  `
                )
                .join("")}</div>`
            : ""
        }
        ${
          blocks.length
            ? `<div class="project-case-blocks">${blocks
                .map(
                  (item) => `
                    <article>
                      <span>${item.label}</span>
                      <h3>${item.title}</h3>
                      <p>${item.body}</p>
                    </article>
                  `
                )
                .join("")}</div>`
            : ""
        }
        <ul class="project-case-highlights">${project.highlights.map((item) => `<li>${item}</li>`).join("")}</ul>
        <div class="project-case-links">${links
          .map((item) => `<a href="${item.href}" target="_blank" rel="noreferrer">↗ ${item.label}</a>`)
          .join("")}</div>
        <div class="personal-chip-row">${project.stack.map((item) => `<span class="personal-chip">${item}</span>`).join("")}</div>
      `;
    } else {
      section.innerHTML = `
        <ul>${project.highlights.map((item) => `<li>${item}</li>`).join("")}</ul>
        <div class="personal-chip-row">${project.stack.map((item) => `<span class="personal-chip">${item}</span>`).join("")}</div>
      `;
    }
    const intro = main.querySelector(".project-intro");
    if (intro) {
      intro.insertAdjacentElement("afterend", section);
    } else {
      main.appendChild(section);
    }
  }

  function replaceTextNodes(root, replacements) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const parent = node.parentElement;
        if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      let value = node.nodeValue;
      Object.entries(replacements).forEach(([from, to]) => {
        value = value.split(from).join(to);
      });
      node.nodeValue = value;
    });
  }

  function apply() {
    document.body.classList.add("personalized");
    installStableWorkNavigation();
    replacePersonalLogo();
    normalizeHeader();
    localizeNonHomeNavigation();
    normalizeLinks();
    updateHome();
    updateWorkList();
    updateAbout();
    updateContact();
    updateProjectDetail();
  }

  let stableWorkNavigationInstalled = false;

  function installStableWorkNavigation() {
    if (stableWorkNavigationInstalled) return;
    stableWorkNavigationInstalled = true;

    document.addEventListener(
      "click",
      (event) => {
        const anchor = event.target.closest && event.target.closest("a[href]");
        if (!anchor) return;

        const url = new URL(anchor.getAttribute("href"), window.location.origin);
        if (url.origin !== window.location.origin) return;
        if (url.pathname !== "/work" && url.pathname !== "/work/") return;

        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        window.location.assign("/work/");
      },
      true
    );

    document.querySelectorAll('a[href="/work"], a[href="/work/"]').forEach((anchor) => {
      anchor.setAttribute("href", "/work/");
      anchor.setAttribute("data-stable-nav", "true");
    });
  }

  let applyTimer = 0;

  const scheduleApply = (delay = 120) => {
    window.clearTimeout(applyTimer);
    applyTimer = window.setTimeout(apply, delay);
  };

  const scheduleRouteApply = () => {
    [80, 260, 700, 1400].forEach((delay) => window.setTimeout(apply, delay));
  };

  const installRouteApplyHooks = () => {
    if (window.__personalRouteApplyHooksInstalled) return;
    window.__personalRouteApplyHooksInstalled = true;

    ["pushState", "replaceState"].forEach((method) => {
      const original = window.history[method];
      window.history[method] = function (...args) {
        const result = original.apply(this, args);
        scheduleRouteApply();
        return result;
      };
    });

    window.addEventListener("popstate", scheduleRouteApply);
    document.addEventListener(
      "click",
      (event) => {
        const anchor = event.target.closest && event.target.closest("a[href]");
        if (!anchor) return;
        const url = new URL(anchor.getAttribute("href"), window.location.origin);
        if (url.origin === window.location.origin && url.pathname === "/") {
          scheduleRouteApply();
        }
      },
      true
    );
  };

  const scheduleInitialApply = () => {
    installRouteApplyHooks();
    scheduleApply(180);
  };

  if (document.readyState === "complete") {
    scheduleInitialApply();
  } else {
    window.addEventListener("load", scheduleInitialApply, { once: true });
  }

  [600, 1600, 3200, 7000, 12000].forEach((delay) => {
    window.setTimeout(apply, delay);
  });
})();
