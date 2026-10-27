/* ============================================================
 * YHN® Digital Art Archive — Project Data
 * All project content lives here.
 * Replace placeholder values with real data when available.
 * Fields marked with "TODO:" are pending real content.
 * ============================================================ */

const projects = [
  {
    id: "ue5-ruins-lab",
    slug: "ruins-research-lab",
    title: "遗迹研究站",
    category: "UE5 地编 / 环境设计",
    filter: "ue5-environment",
    year: "2026",
    summary: "",
    cover: "./assets/ruins-research-station.png",
    coverPlaceholder: false,
    media: [],
    tools: [],
    role: "",
    status: "",
    modules: {},
    links: [],
    featured: true,
  },
  {
    id: "unity-puzzle-proto",
    slug: "interactive-puzzle-prototype",
    title: "交互解谜原型",
    category: "Unity 游戏",
    filter: "unity-game",
    year: "",
    summary: "",
    cover: "",
    coverPlaceholder: true,
    media: [],
    tools: [],
    role: "",
    status: "",
    modules: {},
    links: [],
    featured: true,
  },
  {
    id: "prop-gen-asset",
    slug: "nextgen-prop-asset",
    title: "次世代道具资产",
    category: "次世代建模",
    filter: "3d-modeling",
    year: "",
    summary: "",
    cover: "",
    coverPlaceholder: true,
    media: [],
    tools: [],
    role: "",
    status: "",
    modules: {},
    links: [],
    featured: true,
  },
  {
    id: "poster-city-rhythm",
    slug: "city-rhythm-poster",
    title: "城市节奏海报",
    category: "Photoshop 平面设计",
    filter: "photoshop-design",
    year: "",
    summary: "",
    cover: "",
    coverPlaceholder: true,
    media: [],
    tools: [],
    role: "",
    status: "",
    modules: {},
    links: [],
    featured: true,
  },
  {
    id: "ue5-roam-video",
    slug: "ue5-scene-roaming-video",
    title: "UE5 场景漫游视频",
    category: "UE5 地编 / 环境设计",
    filter: "ue5-environment",
    year: "",
    summary: "",
    cover: "",
    coverPlaceholder: true,
    media: [],
    tools: [],
    role: "",
    status: "",
    modules: {},
    links: [],
    featured: false,
  },
  {
    id: "ue5-open-world",
    slug: "open-world-landscape",
    title: "开放世界地编练习",
    category: "UE5 地编 / 环境设计",
    filter: "ue5-environment",
    year: "",
    summary: "",
    cover: "",
    coverPlaceholder: true,
    media: [],
    tools: [],
    role: "",
    status: "",
    modules: {},
    links: [],
    featured: false,
  },
];

/* Category definitions for the filter bar.
 * Categories with no matching projects will render as empty states. */
const categories = [
  { key: "all",                label: "全部作品" },
  { key: "unity-game",         label: "Unity 游戏开发" },
  { key: "ue5-game",           label: "UE5 游戏项目" },
  { key: "ue5-environment",    label: "UE5 地编与环境设计" },
  { key: "photoshop-design",   label: "Photoshop 平面设计" },
  { key: "3d-modeling",        label: "三维建模" },
  { key: "blender-animation",  label: "Blender 动画" },
  { key: "ai-project",         label: "AI 小项目" },
];

/* Personal profile data (used by About page and Terminal). */
const profile = {
  name: "杨蕙咛",
  en: "YHN®",
  title: "数字艺术家 / 游戏美术 / 环境设计",
  bio: "数字媒体专业学生，专注 Unity 与 UE5 游戏制作、UE5 地编、次世代场景全流程、建模与视觉海报设计。",
  email: "1329451532@qq.com",
  social: {
    bilibili: "",     // TODO: fill in
    artstation: "",   // TODO: fill in
    behance: "",      // TODO: fill in
  },
  resume: "./assets/Yang-Huining-Resume.pdf",
  education: [],       // TODO: fill in
  experience: [
    {
      title: "Unity / UE5 多类型小游戏项目",
      category: "个人项目",
      role: "游戏玩法实践 / 程序实现 / 项目落地",
      featured: true,
      points: [
        "自主跟练研究并完成 5 个游戏项目，涵盖 UE5 二维游戏、Unity 二维游戏和 Unity 三维游戏。",
        "使用 C#、PlayMaker 和 UE5 实现不同类型的玩法。",
        "完成《空洞骑士》风格二维动作探索游戏复刻，以及类《胡闹厨房》的 Unity 3D 单人模拟经营小游戏。",
        "熟悉项目开发、调试及 PC、Android、微信小游戏发布流程。"
      ],
      result: ""
    },
    {
      title: "中国国际大学生创新创业大赛",
      category: "创新创业项目",
      role: "核心成员 / 联合创始人",
      featured: true,
      points: [
        "负责产品 3D 模型搭建、PBR 贴图、场景渲染与展示动画制作。",
        "参与产品需求分析、商业逻辑梳理和商业计划书撰写。",
        "项目转化为成都驭源科技有限公司的核心产品；根据简历记录，作为公司股东持续参与产品美术优化与内容迭代。",
        "配合团队完成路演答辩和项目协调。"
      ],
      result: "2025 年职教赛道全国金奖"
    },
    {
      title: "2025 华迪杯计算机设计大赛",
      category: "团队竞赛项目",
      role: "项目主要负责人",
      featured: false,
      points: [
        "提出项目创意，负责整体规划、任务分配和团队协调。",
        "围绕地动仪主题，完成核心模型制作、贴图、材质表现和场景渲染。",
        "协调技术实现与最终视觉展示，推进项目落地。"
      ],
      result: "四川省一等奖"
    },
    {
      title: "2026 华迪杯计算机设计大赛",
      category: "AI 科普动画项目",
      role: "项目主要负责人",
      featured: false,
      points: [
        "负责项目创意规划、内容结构、剧本撰写与分镜设计。",
        "面向中小学生设计植物蒸腾、光合和呼吸作用的科普动画。",
        "使用 AI 工具辅助内容生产与视觉呈现，探索 AI 在创意设计和动画制作中的应用。"
      ],
      result: "四川省三等奖"
    },
    {
      title: "峨眉山研学课程包微信小程序",
      category: "微信小程序 Demo / 产品设计 / AI 辅助开发",
      role: "原型设计与开发实践",
      featured: false,
      points: [
        "使用 Claude Code 辅助开展小程序 Demo 开发。",
        "规划景区导览、课程学习、研学任务、路线探索和学习成就等功能。",
        "梳理首页、导览、学习、个人中心的信息架构与用户流程，通过需求拆解、功能测试和迭代完善原型。"
      ],
      result: ""
    },
    {
      title: "腾讯一站式小龙虾活动日",
      category: "活动实践 / AI 应用部署 / 用户技术支持",
      role: "现场工作人员",
      featured: false,
      points: [
        "为参与用户提供腾讯 WorkBuddy 本地部署和使用支持。",
        "协助完成环境配置、软件安装、初始化及运行问题排查，并参与腾讯云端部署实践。",
        "面向非技术用户解释操作步骤，锻炼用户沟通、需求理解和问题解决能力。"
      ],
      result: ""
    }
  ],
  awards: [
    {
      year: "2025",
      title: "中国国际大学生创新创业大赛（原“互联网+”）职教赛道",
      level: "全国金奖",
      featured: true,
      contributions: [
        "产品 3D 建模、PBR 贴图、渲染与展示动画",
        "商业计划书"
      ]
    },
    {
      title: "第十二届中国青年创青春大赛",
      level: "铜奖"
    },
    {
      year: "2025",
      title: "华迪杯计算机设计大赛",
      level: "四川省一等奖",
      contributions: [
        "项目创意、项目规划与团队协调",
        "地动仪建模与视觉呈现"
      ]
    },
    {
      year: "2026",
      title: "华迪杯计算机设计大赛",
      level: "四川省三等奖",
      contributions: [
        "AI 科普动画的创意规划",
        "剧本和分镜设计"
      ]
    },
    {
      year: "2025",
      title: "三创赛",
      level: "四川省一等奖"
    },
    {
      year: "2024",
      title: "农业创意设计大赛",
      level: "四川省三等奖"
    }
  ],
  honors: [
    {
      year: "2025–2026",
      title: "国家奖学金",
      level: "奖学金",
      amount: "¥10,000",
      featured: true
    },
    {
      year: "2024–2025",
      title: "国家励志奖学金",
      amount: "¥6,000"
    },
    {
      year: "2026",
      title: "校级特等奖学金",
      amount: "¥1,200"
    },
    {
      year: "2025",
      title: "校级一等奖学金",
      amount: "¥1,000"
    },
    {
      title: "企业二等奖学金",
      amount: "¥300"
    }
  ],
  supplements: [
    {
      title: "4 项发明专利申请已受理",
      note: "申请受理状态，非已授权专利"
    },
    {
      title: "2025 成都世界运动会志愿者",
      note: "补充经历"
    },
    {
      title: "班级班长",
      note: "校园服务"
    }
  ],
  skills: [
    "Unreal Engine 5", "Unity", "Environment Art", "3D Modeling",
    "PBR Workflow", "Poster Design", "Video Editing",
  ],
};
