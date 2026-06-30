import html
import json
import re
import shutil
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BUILD_ID = "AhbE58sRRhFwvHuK-o8Ak"
DATA_ROOT = ROOT / "_next" / "data" / BUILD_ID

PROFILE_PHOTO = "/external-assets/github/strangeman-aboy.png"

PROJECTS = [
    {
        "slug": "sharlee",
        "title": "AI Volunteer Assistant",
        "display": "ai volunteer assistant",
        "category": ["aiPrototype", "mobileDevelopment"],
        "year": 2026,
        "repo": "gaokao-volunteer-APP",
        "cover": "/external-assets/github/gaokao-volunteer-APP.png",
        "color": "#4f6ee8",
        "colorDark": "#9fb2ff",
        "website": "https://github.com/strangeman-aboy/gaokao-volunteer-APP",
        "description": (
            "一个面向高考志愿填报场景的移动端 AI 顾问原型。我负责从问题拆解、"
            "交互流程、Expo 前端、FastAPI 接口到部署骨架的搭建，让原型从本地演示"
            "推进到可继续部署和迭代的工程形态。"
        ),
    },
    {
        "slug": "act-responsable",
        "title": "Agent Memory Skill",
        "display": "agent memory skill",
        "category": ["openSource", "aiPrototype"],
        "year": 2026,
        "repo": "agent-memory-skill",
        "cover": "/external-assets/github/agent-memory-skill.png",
        "color": "#5b677a",
        "colorDark": "#a9d7ff",
        "website": "https://github.com/strangeman-aboy/agent-memory-skill",
        "description": (
            "一个为长任务 AI Agent 设计的本地记忆工具，帮助 Agent 在模型切换、"
            "上下文压缩、任务中断和多人协作时保留高信号状态。我把它做成了可安装的"
            " Codex Skill、Python CLI 和 JSON Schema，并补了行为级评测来验证核心流程。"
        ),
    },
    {
        "slug": "cocolyze",
        "title": "Qianzhi AI Platform",
        "display": "qianzhi ai platform",
        "category": ["aiPrototype", "productDesign"],
        "year": 2026,
        "repo": "qianzhi-ai-platform",
        "cover": "/external-assets/github/qianzhi-ai-platform.png",
        "color": "#7357d9",
        "colorDark": "#c7b8ff",
        "website": "https://github.com/strangeman-aboy/qianzhi-ai-platform",
        "description": (
            "一个探索 AI Agent 任务市场的交易闭环原型，重点放在任务状态机、"
            "交付验收、争议处理和审计记录。项目不只做页面演示，也把平台运行时"
            "需要面对的信任边界和状态流转拆出来。"
        ),
    },
    {
        "slug": "les-indecis",
        "title": "Longmo Store Demo",
        "display": "longmo store demo",
        "category": ["webDevelopment", "productDesign"],
        "year": 2026,
        "repo": "hemingdemo",
        "cover": "/external-assets/github/hemingdemo.png",
        "color": "#247f78",
        "colorDark": "#9be4d8",
        "website": "https://github.com/strangeman-aboy/hemingdemo",
        "description": (
            "一个面向本地门店的静态前端演示页，用网页把获客诊断、内容增长、"
            "车主转化和经营看板串成完整方案。这个项目适合展示页面组织、商业表达"
            "和静态站部署能力。"
        ),
    },
]

COMMON = {
    "homeDescription": (
        "Dongchen Hao is a front-end developer and AI prototype builder "
        "focused on turning real problems into interactive Web and mobile demos."
    ),
    "workDescription": "Selected prototypes and front-end experiments by Dongchen Hao.",
    "aboutDescription": "关于郝东晨：前端开发、AI 原型、真实场景实践与项目经历。",
    "contactDescription": "联系郝东晨的邮箱、GitHub 与公开链接。",
    "loading": "Materializing ideas",
    "introTextLine1": "Hey, I’m ",
    "introTextLine2": "But you can call me ",
    "introRoleLine1": "I’m a front-end developer",
    "introRoleLine2": "& AI prototype builder",
    "seeMore": "See my projects",
    "knowMoreAboutMe": "More about me",
    "getInTouch": "Let’s get in touch",
    "credit": "Adapted by Dongchen",
    "aboutText": (
        "你好，我是郝东晨，上海理工大学生物医学工程本科在读。"
        "我更喜欢把自己放在真实问题里做前端和 AI 原型：从移动端交互、"
        "后端接口、Agent 调用链路，到部署骨架和验证脚本。"
        "我关注教育、公益、医疗供应链和真实业务自动化，希望把问题先做成"
        "可交互、可演示、可继续迭代的产品形态。"
    ),
    "resumeName": "简历",
    "profilePic": "郝东晨的照片",
    "mail": "Mail",
    "socials": "Links",
    "aiPrototype": "AI Prototype",
    "mobileDevelopment": "Mobile App",
    "openSource": "Open Source",
    "productDesign": "Product Design",
    "automation": "Automation",
}

TEXT_REPLACEMENTS = {
    "Sharlee / Charles Bruyerre is a graphic designer, UX/UI designer &amp; front-end web developer from France with an interest in making portraits and listening to pop music": COMMON["homeDescription"],
    "Sharlee / Charles Bruyerre is a graphic designer, UX/UI designer \\u0026 front-end web developer from France with an interest in making portraits and listening to pop music": COMMON["homeDescription"],
    "A selection of Sharlee&#x27;s projects including portraits, branding, UX/UI design and more": COMMON["workDescription"],
    "A selection of Sharlee's projects including portraits, branding, UX/UI design and more": COMMON["workDescription"],
    "Know more by discovering Sharlee&#x27;s resume and what he&#x27;s listening to": COMMON["aboutDescription"],
    "Know more by discovering Sharlee's resume and what he's listening to": COMMON["aboutDescription"],
    "The different ways of contacting Sharlee": COMMON["contactDescription"],
    "Materializing shapes": COMMON["loading"],
    "Designed and coded by Sharlee": COMMON["credit"],
    "Designed and Coded by Sharlee": "Adapted by Dongchen",
    "Designed and Coded by Sharlee ": "Adapted by Dongchen ",
    "Charles Bruyerre": "Hao Dongchen",
    "Charles": "Hao",
    "Bruyerre": "Dongchen",
    "But you can call me <div class=\"name\">Sharlee": "But you can call me <div class=\"name\">Dongchen",
    "I’m a graphic designer, UX/UI designer": COMMON["introRoleLine1"],
    "&amp; front-end web developer": "&amp; AI prototype builder",
    "& front-end web developer": "& AI prototype builder",
    "Hey, my name is Hao Dongchen and I use Dongchen Hao as my nickname across social medias. I’m a graphic designer, UX/UI designer &amp; AI prototype builder from France. I’m also passionate about pop music and make portraits and universes around what I listen to and I’m always curious to learn more when it comes to new technologies and creative coding.": COMMON["aboutText"],
    "hello@itssharl.ee": "hdc15592413430@qq.com",
    "mailto:hello@itssharl.ee": "mailto:hdc15592413430@qq.com",
    "https://www.instagram.com/itssharl.ee/": "https://github.com/strangeman-aboy",
    "Instagram": "GitHub",
    "https://www.behance.net/itssharlee": "mailto:hdc15592413430@qq.com",
    "Behance": "Email",
    "Sharlee": "Dongchen Hao",
}

OLD_PROFILE_PHOTO = "/external-assets/eu-central-1.graphassets.com/1abdd6a8a49147-cm7rst67bqmro07urdf8a8sgu.webp"
OLD_COVERS = {
    "/external-assets/eu-central-1.graphassets.com/0bfcde3c679311-cm7rr38gep0kx08ur49lovevv.webp": PROJECTS[0]["cover"],
    "/external-assets/eu-central-1.graphassets.com/729f3a0944d47d-cm7rq5glpo27o07ukwp1itrg2.webp": PROJECTS[1]["cover"],
    "/external-assets/eu-central-1.graphassets.com/8c6ad95c74dc5e-cm7rqa5voo2gj08urw6x6qk8w.webp": PROJECTS[2]["cover"],
    "/external-assets/eu-central-1.graphassets.com/f975b28f262ae6-cm7rs8yutpyup07ursumcy3r7.webp": PROJECTS[3]["cover"],
}


def download_assets() -> None:
    asset_dir = ROOT / "external-assets" / "github"
    asset_dir.mkdir(parents=True, exist_ok=True)
    downloads = {
        "strangeman-aboy.png": "https://github.com/strangeman-aboy.png",
    }
    for project in PROJECTS:
        downloads[f"{project['repo']}.png"] = (
            f"https://opengraph.githubassets.com/hdc-portfolio/strangeman-aboy/{project['repo']}"
        )
    opener = urllib.request.build_opener()
    opener.addheaders = [("User-Agent", "Codex local portfolio personalization")]
    for name, url in downloads.items():
        out = asset_dir / name
        if out.exists() and out.stat().st_size > 1000:
            continue
        try:
            with opener.open(url, timeout=30) as response:
                out.write_bytes(response.read())
        except Exception as exc:
            print(f"asset download skipped: {url} ({exc})")
    make_fallback_covers(asset_dir)


def make_fallback_covers(asset_dir: Path) -> None:
    try:
        from PIL import Image, ImageDraw, ImageFont
    except Exception as exc:
        print(f"fallback cover generation skipped: {exc}")
        return

    palette = [
        ("#4f6ee8", "#9fb2ff"),
        ("#5b677a", "#a9d7ff"),
        ("#7357d9", "#c7b8ff"),
        ("#247f78", "#9be4d8"),
    ]
    try:
        title_font = ImageFont.truetype("arial.ttf", 64)
        meta_font = ImageFont.truetype("arial.ttf", 28)
    except Exception:
        title_font = ImageFont.load_default()
        meta_font = ImageFont.load_default()

    for index, project in enumerate(PROJECTS):
        out = asset_dir / f"{project['repo']}.png"
        if out.exists() and out.stat().st_size > 1000:
            continue
        start, end = palette[index % len(palette)]
        start_rgb = tuple(int(start[i : i + 2], 16) for i in (1, 3, 5))
        end_rgb = tuple(int(end[i : i + 2], 16) for i in (1, 3, 5))
        width, height = 1200, 630
        image = Image.new("RGB", (width, height), start_rgb)
        pixels = image.load()
        for y in range(height):
            for x in range(width):
                mix = (x / width * 0.65) + (y / height * 0.35)
                pixels[x, y] = tuple(
                    int(start_rgb[channel] * (1 - mix) + end_rgb[channel] * mix)
                    for channel in range(3)
                )
        draw = ImageDraw.Draw(image)
        draw.rounded_rectangle((70, 70, width - 70, height - 70), radius=42, fill=(245, 246, 250))
        draw.text((120, 170), project["title"], fill=(55, 64, 91), font=title_font)
        tags = " / ".join(COMMON.get(cat, cat) for cat in project["category"])
        draw.text((120, 270), tags, fill=(93, 104, 135), font=meta_font)
        draw.text((120, 390), "strangeman-aboy", fill=(93, 104, 135), font=meta_font)
        draw.text((120, 445), project["website"].replace("https://", ""), fill=(93, 104, 135), font=meta_font)
        image.save(out)


def update_common(page_props: dict) -> None:
    namespaces = page_props.get("__namespaces")
    if not isinstance(namespaces, dict):
        return
    common = namespaces.get("common")
    if not isinstance(common, dict):
        return
    common.update(COMMON)


def project_summary(project: dict) -> dict:
    return {
        "slug": project["slug"],
        "locale": "en",
        "title": project["title"],
        "metadata": [{"category": project["category"]}, {"year": project["year"]}],
        "coverImage": {
            "localizations": [{"locale": "en", "url": project["cover"]}],
            "altText": f"Cover of the project {project['title']}",
            "width": 1200,
            "height": 630,
        },
        "color": {"hex": project["color"]},
        "colorDark": {"hex": project["colorDark"]},
        "state": "normal",
    }


def project_detail(project: dict) -> dict:
    return {
        "title": project["title"],
        "orderNumber": PROJECTS.index(project),
        "coverImage": {
            "localizations": [{"locale": "en", "url": project["cover"]}],
            "altText": f"Cover of the project {project['title']}",
            "width": 1200,
            "height": 630,
        },
        "color": {"hex": project["color"]},
        "colorDark": {"hex": project["colorDark"]},
        "metadata": [{"category": project["category"]}, {"year": project["year"]}],
        "description": project["description"],
        "website": project["website"],
        "content": {
            "json": {
                "children": [
                    {"type": "heading-six", "children": [{"text": "项目定位"}]},
                    {"type": "paragraph", "children": [{"text": project["description"]}]},
                    {"type": "heading-six", "children": [{"text": "技术与方法"}]},
                    {
                        "type": "paragraph",
                        "children": [
                            {
                                "text": "关键词："
                                + " / ".join(COMMON.get(cat, cat) for cat in project["category"])
                                + " / GitHub / 可演示原型。"
                            }
                        ],
                    },
                    {"type": "heading-six", "children": [{"text": "下一步"}]},
                    {
                        "type": "paragraph",
                        "children": [
                            {
                                "text": "后续可以继续补充真实截图、交互录屏、关键代码片段和项目复盘，让详情页从文字介绍升级成完整案例。"
                            }
                        ],
                    },
                ]
            },
            "references": [],
        },
    }


def infer_slug(data: dict, source_path: Path | None = None) -> str | None:
    query_slug = data.get("query", {}).get("slug")
    if isinstance(query_slug, str):
        return query_slug
    props = data.get("pageProps", {})
    project_slug = props.get("project", {}).get("slug")
    if isinstance(project_slug, str):
        return project_slug
    if source_path and source_path.suffix == ".json" and source_path.parent.name == "work":
        return source_path.stem
    return None


def update_data(data: dict, source_path: Path | None = None) -> dict:
    props = data.get("pageProps", {})
    update_common(props)
    if "projects" in props:
        props["projects"] = [project_summary(project) for project in PROJECTS]
    if "project" in props:
        slug = infer_slug(data, source_path)
        project = next((item for item in PROJECTS if item["slug"] == slug), None)
        if project:
            props["project"]["slug"] = project["slug"]
            props["project"].update(project_detail(project))
            props["nextProject"] = [project_summary(item) for item in PROJECTS]
    return data


def update_json_files() -> None:
    for path in DATA_ROOT.rglob("*.json"):
        data = json.loads(path.read_text(encoding="utf-8"))
        new_data = update_data(data, path)
        path.write_text(json.dumps(new_data, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")


def update_next_data_in_html(text: str) -> str:
    pattern = re.compile(
        r'(<script id="__NEXT_DATA__" type="application/json">)(.*?)(</script>)',
        re.DOTALL,
    )

    def repl(match: re.Match) -> str:
        raw = html.unescape(match.group(2))
        try:
            data = json.loads(raw)
        except json.JSONDecodeError:
            return match.group(0)
        data = update_data(data)
        return match.group(1) + json.dumps(data, ensure_ascii=False, separators=(",", ":")) + match.group(3)

    return pattern.sub(repl, text)


def update_html_files() -> None:
    replacements = dict(TEXT_REPLACEMENTS)
    replacements[OLD_PROFILE_PHOTO] = PROFILE_PHOTO
    replacements.update(OLD_COVERS)
    project_text_pairs = {
        ">sharlee<": ">ai volunteer assistant<",
        ">act responsable<": ">agent memory skill<",
        ">cocolyze<": ">qianzhi ai platform<",
        ">les indécis<": ">longmo store demo<",
        ">SHARLEE<": ">AI VOLUNTEER ASSISTANT<",
        ">ACT RESPONSABLE<": ">AGENT MEMORY SKILL<",
        ">COCOLYZE<": ">QIANZHI AI PLATFORM<",
        ">LES INDÉCIS<": ">LONGMO STORE DEMO<",
        "Cover of the project Dongchen Hao": "Cover of the project AI Volunteer Assistant",
        "Cover of the project ACT Responsable": "Cover of the project Agent Memory Skill",
        "Cover of the project Cocolyze": "Cover of the project Qianzhi AI Platform",
        "Cover of the project Les Indécis": "Cover of the project Longmo Store Demo",
    }
    replacements.update(project_text_pairs)

    for path in ROOT.rglob("*.html"):
        if any(part in {"qa-screenshots", "draft-before-sharlee-20260614-182428"} for part in path.parts):
            continue
        text = path.read_text(encoding="utf-8", errors="ignore")
        text = update_next_data_in_html(text)
        for old, new in replacements.items():
            text = text.replace(old, new)
        path.write_text(text, encoding="utf-8")


def update_js_chunks() -> None:
    files = [
        ROOT / "_next/static/chunks/pages/index-7bb605ed2190261c.js",
        ROOT / "_next/static/chunks/pages/about-f04402673b663e65.js",
        ROOT / "_next/static/chunks/pages/contact-02bc48060920780c.js",
        ROOT / "_next/static/chunks/pages/work-9646427a659c48f8.js",
        ROOT / "_next/static/chunks/pages/work/[slug]-3861f179314f30ed.js",
        ROOT / "_next/static/chunks/pages/_app-5ce8ba272da3b0fe.js",
    ]
    replacements = {
        'text:"Charles Bruyerre"': 'text:"Hao Dongchen"',
        'text:"Charles"': 'text:"Hao"',
        'text:"Bruyerre"': 'text:"Dongchen"',
        'text:"Sharlee"': 'text:"Dongchen"',
        '"Sharlee"': '"Dongchen Hao"',
        "Designed and Coded by Sharlee": "Adapted by Dongchen",
        "hello@itssharl.ee": "hdc15592413430@qq.com",
        "mailto:hello@itssharl.ee": "mailto:hdc15592413430@qq.com",
        OLD_PROFILE_PHOTO: PROFILE_PHOTO,
        'socialItems:[{name:"Instagram",url:"https://www.instagram.com/itssharl.ee/"},{name:"Behance",url:"https://www.behance.net/itssharlee"},]': 'socialItems:[{name:"GitHub",url:"https://github.com/strangeman-aboy"},{name:"Email",url:"mailto:hdc15592413430@qq.com"},]',
    }
    for path in files:
        if not path.exists():
            continue
        text = path.read_text(encoding="utf-8", errors="ignore")
        for old, new in replacements.items():
            text = text.replace(old, new)
        path.write_text(text, encoding="utf-8")


def main() -> None:
    download_assets()
    update_json_files()
    update_html_files()
    update_js_chunks()
    # Keep English default-locale data in sync for client navigation.
    en_root = DATA_ROOT / "en"
    en_root.mkdir(exist_ok=True)
    for name in ["index.json", "about.json", "contact.json", "work.json"]:
        src = DATA_ROOT / name
        dst = DATA_ROOT / ("en.json" if name == "index.json" else f"en/{name}")
        if src.exists():
            dst.parent.mkdir(parents=True, exist_ok=True)
            shutil.copyfile(src, dst)
    (en_root / "work").mkdir(exist_ok=True)
    for path in (DATA_ROOT / "work").glob("*.json"):
        shutil.copyfile(path, en_root / "work" / path.name)


if __name__ == "__main__":
    main()
