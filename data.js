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
    title: "研究站遗迹",
    category: "UE5 地编 / 环境设计",
    code: "WORKS / UE5 ENVIRONMENT",
    filter: "ue5-environment",
    year: "2026",
    summary: "《研究站遗迹》是一项基于 Unreal Engine 5 的环境场景作品。场景以水域中的黄色研究站建筑为视觉主体，结合周围的森林、水面与环境氛围，构建具有鲜明色彩对比和空间层次的场景画面。",
    cover: "./assets/ruins-research-station.png",
    coverPlaceholder: false,
    media: [
      {
        type: "video",
        src: "./assets/videos/ruins-research-station.mp4",
        title: "SCENE SHOWREEL / 场景展示",
        alt: "研究站遗迹场景展示视频"
      },
      {
        type: "image",
        src: "./assets/ruins-research-station.png",
        alt: "研究站遗迹封面场景"
      },
      {
        type: "image",
        src: "./assets/images/ruins-research-station-01.jpg",
        alt: "研究站遗迹场景图 01"
      },
      {
        type: "image",
        src: "./assets/images/ruins-research-station-02.jpg",
        alt: "研究站遗迹场景图 02"
      },
      {
        type: "image",
        src: "./assets/images/ruins-research-station-03.jpg",
        alt: "研究站遗迹场景图 03"
      },
      {
        type: "image",
        src: "./assets/images/ruins-research-station-04.jpg",
        alt: "研究站遗迹场景图 04"
      },
      {
        type: "image",
        src: "./assets/images/ruins-research-station-05.jpg",
        alt: "研究站遗迹场景图 05"
      }
    ],
    tools: ["Unreal Engine 5"],
    role: "",
    status: "",
    modules: {
      overview: {
        label: "PROJECT OVERVIEW / 项目介绍",
        body: "《研究站遗迹》是一项基于 Unreal Engine 5 的环境场景作品。场景以水域中的黄色研究站建筑为视觉主体，结合周围的森林、水面与环境氛围，构建具有鲜明色彩对比和空间层次的场景画面。",
        facts: [
          { label: "项目名称", value: "研究站遗迹" },
          { label: "项目类别", value: "UE5 地编 / 环境设计" },
          { label: "使用引擎", value: "Unreal Engine 5" },
          { label: "创作年份", value: "2026" }
        ]
      },
      technical: {
        label: "TECHNICAL BREAKDOWN / 技术说明",
        items: [
          {
            title: "技术实现与工具",
            body: "作品基于 Unreal Engine 5 制作。",
            tags: ["Unreal Engine 5"]
          }
        ]
      }
    },
    links: [],
    featured: true,
  },
  {
    id: "unity-happy-kitchen",
    slug: "happy-kitchen",
    title: "开心厨房",
    category: "Unity 游戏开发",
    code: "WORKS / UNITY GAMEPLAY",
    filter: "unity-game",
    year: "",
    summary: "类《胡闹厨房》风格的 Unity3D 单人模拟经营小游戏，完成订单接收、食材处理、烹饪制作与出餐结算的完整流程，并实践场景交互与游戏节奏设计。",
    cover: "./assets/images/happy-kitchen-cover.png",
    coverPlaceholder: false,
    media: [
      {
        type: "video",
        src: "./assets/videos/happy-kitchen-demo.mp4",
        title: "GAMEPLAY / 玩法演示",
        alt: "开心厨房玩法演示视频"
      }
    ],
    tools: ["Unity 3D", "C#", "碰撞检测", "UI 系统", "3D 资源管理"],
    role: "个人项目",
    status: "",
    modules: {
      overview: {
        label: "PROJECT OVERVIEW / 项目介绍",
        body: "类《胡闹厨房》风格的 Unity3D 单人模拟经营小游戏。项目完成订单接收、食材处理、烹饪制作与出餐结算的完整业务流程，并通过设备交互和节奏控制搭建清晰、可玩的厨房经营体验。",
        facts: [
          { label: "项目名称", value: "开心厨房" },
          { label: "项目类别", value: "Unity 游戏开发" },
          { label: "使用引擎", value: "Unity 3D" },
          { label: "项目类型", value: "个人项目" }
        ]
      },
      technical: {
        label: "TECHNICAL BREAKDOWN / 技术说明",
        items: [
          {
            title: "核心玩法搭建",
            body: "完成订单接收、食材处理、烹饪制作与出餐结算的完整业务流程。",
            tags: ["Unity 3D", "C#"]
          },
          {
            title: "场景交互设计",
            body: "设计并实现玩家与厨房场景中各类设备的交互逻辑，确保操作流程清晰、反馈及时。",
            tags: ["碰撞检测", "UI 系统"]
          },
          {
            title: "游戏节奏控制",
            body: "通过计时器、连击机制、订单刷新等设计元素调控游戏节奏，实践“压力—奖励”机制对玩家沉浸感的驱动。",
            tags: ["3D 资源管理", "游戏节奏设计"]
          }
        ]
      }
    },
    links: [
      { label: "GitHub", url: "https://github.com/suluoluo1329451532-jpg/MyKitchenChaos" }
    ],
    featured: true,
  },
  {
    id: "unity-jys-world",
    slug: "jys-world",
    title: "JY's World",
    category: "Unity 游戏开发",
    code: "WORKS / UNITY GAMEPLAY",
    filter: "unity-game",
    year: "",
    summary: "以像素风赛博朋克视觉为主题的 Unity 2D 个人游戏项目。使用 C# 实现角色控制、物理碰撞、敌人 AI、道具拾取与计分系统，并通过有限状态机管理角色行为与动画。游戏美术资源全部由 AI 生成，再经动作 GIF 制作、抽帧和 Photoshop 处理后导入 Unity。",
    cover: "./assets/images/jys-world-cover.png",
    coverPlaceholder: false,
    media: [
      {
        type: "video",
        src: "./assets/videos/jys-world-demo.mp4",
        title: "GAMEPLAY / 玩法演示",
        alt: "JY's World 玩法演示视频"
      },
      {
        type: "image",
        src: "./assets/images/jys-world-01.png",
        alt: "JY's World 游戏画面 01"
      },
      {
        type: "image",
        src: "./assets/images/jys-world-02.png",
        alt: "JY's World 游戏画面 02"
      },
      {
        type: "image",
        src: "./assets/images/jys-world-03.png",
        alt: "JY's World 游戏画面 03"
      }
    ],
    tools: ["Unity 2D", "C#", "FSM", "AI 生成美术", "物理与碰撞", "动画系统"],
    role: "个人项目",
    status: "",
    modules: {
      overview: {
        label: "PROJECT OVERVIEW / 项目介绍",
        body: "《JY's World》是一款使用 Unity 2D 开发的个人游戏项目。项目以 C# 脚本实现核心玩法逻辑，涵盖角色控制、物理碰撞、敌人行为、道具拾取与计分系统，并尝试将 AI 生成的美术资源制作成可用于游戏的角色动画。",
        facts: [
          { label: "项目名称", value: "JY's World" },
          { label: "项目类别", value: "Unity 游戏开发" },
          { label: "项目类型", value: "Unity 2D 个人游戏项目" },
          { label: "使用引擎", value: "Unity 2D" }
        ]
      },
      technical: {
        label: "TECHNICAL BREAKDOWN / 技术说明",
        items: [
          {
            title: "核心玩法与系统",
            body: "使用 C# 从零实现游戏核心逻辑，包括角色控制与基础行为、物理系统及碰撞处理、敌人 AI 行为逻辑、道具拾取与计分系统。",
            tags: ["Unity 2D", "C#", "物理与碰撞"]
          },
          {
            title: "角色状态机与动画",
            body: "编写角色有限状态机（FSM），管理移动、跳跃、攻击、受击等状态之间的切换，并协调角色行为逻辑和动画表现，保证状态切换与动画播放相匹配。",
            tags: ["FSM", "动画系统"]
          },
          {
            title: "AI 生成美术资源",
            body: "游戏美术资源全部通过 AI 生成。角色资源经过人物形象生成、动作 GIF 生成、GIF 抽帧和 Photoshop 图像处理后，再导入 Unity 完成角色动画制作与整合。",
            tags: ["AI 生成美术", "Photoshop"]
          },
          {
            title: "技术实践",
            body: "本项目采用 C# 脚本驱动方式实现核心玩法，可作为后续 PlayMaker 可视化编程版本的功能对照基准，用于理解脚本驱动开发与可视化编程两种技术路线的差异。",
            tags: ["C#"]
          }
        ]
      }
    },
    links: [],
    featured: false,
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
      title: "类《胡闹厨房》Unity 3D 模拟经营小游戏",
      category: "个人项目",
      role: "3D 场景搭建 / 交互设计 / 游戏节奏设计",
      featured: true,
      points: [
        "实现订单接收、食材处理、烹饪制作、出餐结算的完整业务流程。",
        "设计玩家与厨房设备之间的交互逻辑。",
        "通过计时器、连击机制和订单刷新控制游戏节奏。",
        "体现对“压力—奖励”机制和玩家沉浸感的理解。"
      ],
      tech: ["Unity 3D", "C#", "碰撞检测", "UI 系统", "3D 资源管理"],
      result: ""
    },
    {
      title: "类《空洞骑士》二维动作探索游戏复刻",
      category: "个人项目",
      role: "动作设计 / 关卡体验 / 核心系统拆解",
      featured: true,
      points: [
        "实现角色移动、跳跃、冲刺、攻击、受击等动作。",
        "实现敌人 AI、伤害判定和血量管理。",
        "配合场景机关与收集要素研究“战斗—探索—奖励”的循环。",
        "从开发角度研究能力解锁、探索驱动和地图连通性。"
      ],
      tech: ["Unity 2D", "C#", "Tilemap", "Animator"],
      result: ""
    },
    {
      title: "《JY’S Wrold》Unity 二维小游戏",
      category: "个人项目",
      role: "C# 脚本开发 / AI 生成素材 / 角色控制 / 玩法实现",
      featured: false,
      points: [
        "游戏美术资源由 AI 生成。",
        "通过人物形象生成、动作 GIF 生成、抽帧、Photoshop 处理及 Unity 导入完成角色动画。",
        "使用 C# 实现角色控制、物理碰撞、敌人 AI、道具拾取及计分系统。",
        "编写有限状态机，管理角色移动、跳跃、攻击和受击等状态。"
      ],
      tech: ["Unity 2D", "C#", "动画系统", "物理系统"],
      result: ""
    },
    {
      title: "《Shooting game》Unity 3D 俯视角射击游戏",
      category: "个人项目",
      role: "项目改造 / 资源整合 / 移动端适配 / 微信小游戏发布",
      featured: true,
      points: [
        "基于原有 Unity 3D 俯视角射击游戏进行二次开发。",
        "将原有角色模型替换为自己准备的角色资源，完成资源适配与整合。",
        "针对微信小游戏运行环境适配调试，采用分包等优化方案调整资源组织与加载方式。",
        "完成项目构建、微信开发者工具部署验证，实现手机端正常游玩。"
      ],
      tech: ["Unity", "C#", "微信开发者工具", "微信小游戏分包优化"],
      result: ""
    },
    {
      title: "《沙漠寻宝》UE5 二维小游戏",
      category: "个人项目",
      role: "玩法设计 / 蓝图逻辑 / 项目打包与发布",
      featured: false,
      points: [
        "使用 UE5 蓝图实现角色移动、碰撞检测、状态切换等玩法逻辑。",
        "实践场景搭建、UI 设计、动画序列编辑和输入映射。",
        "完成 PC 端打包发布与运行验证。"
      ],
      tech: ["UE5", "Blueprint"],
      result: ""
    },
    {
      title: "Unity 二维小游戏（PlayMaker 可视化编程）",
      category: "个人项目",
      role: "玩法复刻 / 可视化逻辑 / 技术路线对比",
      featured: false,
      points: [
        "使用 PlayMaker 实现与 C# 版本相同的二维玩法。",
        "实现角色控制、场景交互、敌人生成与关卡进度管理。",
        "通过有限状态机组织角色行为和游戏流程。",
        "对比 C# 与 PlayMaker 两种实现路线在开发效率和维护方式上的差异。"
      ],
      tech: ["Unity 2D", "PlayMaker", "FSM"],
      result: ""
    },
    {
      title: "中国国际大学生创新创业大赛",
      category: "创新创业项目",
      role: "队员",
      featured: true,
      section: "competition",
      points: [
        "负责产品 3D 模型搭建、PBR 贴图制作、场景渲染与展示动画。",
        "参与产品需求分析、商业逻辑梳理和商业计划书核心板块撰写。",
        "协调项目美术品质与多模块进度，参与路演答辩。",
        "项目转化为成都驭源科技有限公司的核心产品；项目后续转化过程中，本人作为公司股东持续参与产品优化。"
      ],
      result: "2025 年职教赛道全国金奖"
    },
    {
      title: "2025 华迪杯计算机设计大赛",
      category: "团队竞赛项目",
      role: "项目主要负责人",
      featured: false,
      section: "competition",
      points: [
        "提出项目创意，负责整体规划、任务分配和团队协调。",
        "负责地动仪主题项目的核心模型、贴图、材质与场景渲染。",
        "协调项目内容、技术实现与最终展示效果。"
      ],
      result: "四川省一等奖"
    },
    {
      title: "2026 华迪杯计算机设计大赛",
      category: "AI 科普动画项目",
      role: "项目主要负责人",
      featured: false,
      section: "competition",
      points: [
        "规划 AI 植物科普动画项目。",
        "负责科普内容结构、剧本撰写与分镜设计。",
        "将植物蒸腾、光合、呼吸等知识转化为适合中小学生理解的动画内容。",
        "探索 AI 工具在内容设计、剧本和视觉制作中的应用。"
      ],
      result: "四川省三等奖"
    },
    {
      title: "峨眉山研学课程包微信小程序 Demo",
      category: "产品设计 / AI 辅助开发",
      role: "产品设计 / AI 辅助开发",
      featured: false,
      section: "aiProduct",
      points: [
        "使用 Claude Code 辅助开发微信小程序 Demo。",
        "规划景区导览、课程学习、研学任务、路线探索与学习成就功能。",
        "拆分首页、导览、学习、个人中心等模块，梳理信息架构与用户流程。",
        "通过需求拆解、功能测试和迭代优化原型。"
      ],
      result: ""
    },
    {
      title: "腾讯一站式小龙虾活动日",
      category: "活动实践 / AI 应用部署 / 用户技术支持",
      role: "活动工作人员",
      featured: false,
      section: "aiProduct",
      points: [
        "为参与用户提供腾讯 WorkBuddy 本地部署及使用支持。",
        "协助完成运行环境配置、软件安装、初始化和问题排查。",
        "参与腾讯云端部署，协助用户完成环境配置与运行。",
        "向非技术用户解释操作步骤，理解真实用户的使用问题。"
      ],
      result: ""
    }
  ],
  gameInsights: {
    description: "长期体验不同类型的游戏，并尝试从核心玩法、关卡结构、操作反馈、叙事方式、奖励机制与玩家体验等角度进行观察和分析。通过《空洞骑士》风格动作探索项目的实践，进一步从开发角度理解动作探索类游戏的设计。",
    categories: [
      {
        label: "MOBA",
        titles: ["《王者荣耀》 — 十余年游戏体验。"]
      },
      {
        label: "恐怖 / 解谜 / 剧情",
        titles: ["《寂静岭》《生化危机》《恶灵附身》《纸人》《纸嫁衣》等系列。"]
      },
      {
        label: "动作探索 / 类银河恶魔城",
        titles: ["《空洞骑士》《奥日》等。"]
      },
      {
        label: "叙事 / 探索",
        titles: ["《小小梦魇》《深海迷航》等。"]
      },
      {
        label: "其他",
        titles: ["《和平精英》《天天酷跑》《奇迹暖暖》等。"]
      }
    ]
  },
  awards: [
    {
      year: "2025",
      title: "中国国际大学生创新创业大赛（原“互联网+”）职教赛道",
      level: "全国金奖",
      role: "队员",
      featured: true,
      tier: "national"
    },
    {
      title: "第十二届中国青年创青春大赛",
      level: "全国铜奖",
      tier: "national"
    },
    {
      year: "2025",
      title: "华迪杯中国大学生计算机设计大赛",
      level: "四川省一等奖",
      role: "项目主要负责人",
      tier: "province"
    },
    {
      year: "2026",
      title: "华迪杯中国大学生计算机设计大赛",
      level: "四川省三等奖",
      role: "项目主要负责人",
      tier: "province"
    },
    {
      year: "2025",
      title: "三创赛",
      level: "四川省一等奖",
      tier: "province"
    },
    {
      year: "2024",
      title: "农业创意设计大赛",
      level: "四川省三等奖",
      tier: "province"
    }
  ],
  honors: [
    {
      year: "2025–2026",
      title: "国家奖学金",
      level: "国家级奖学金",
      amount: "¥10,000",
      featured: true
    },
    {
      year: "2024–2025",
      title: "国家励志奖学金",
      level: "国家级奖学金",
      amount: "¥6,000"
    },
    {
      year: "2026",
      title: "校级特等奖学金",
      level: "校级奖学金",
      amount: "¥1,200"
    },
    {
      year: "2025",
      title: "校级一等奖学金",
      level: "校级奖学金",
      amount: "¥1,000"
    },
    {
      title: "企业二等奖学金",
      level: "企业奖学金",
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
