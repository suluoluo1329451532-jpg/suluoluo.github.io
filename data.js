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
    category: "UE5 地编与Niagara特效",
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
          { label: "项目类别", value: "UE5 地编与Niagara特效" },
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
    id: "unreal-secret-treasure",
    slug: "secret-treasure",
    title: "秘境寻宝",
    category: "Unreal 游戏项目",
    code: "WORKS / UNREAL GAMEPLAY",
    filter: "ue5-game",
    year: "",
    summary: "《秘境寻宝》是一款使用 Unreal Engine 4 制作的 3D 寻宝闯关游戏。玩家需要先回答关卡老者提出的问题，再进入地图探索并收集指定数量的金币以完成挑战。游戏设置简单与困难两种难度：简单关卡侧重基础问答与金币收集，困难关卡则加入更具挑战性的问题和炸弹陷阱，结合关卡探索、资源收集与风险规避，构建完整的闯关体验。",
    cover: "./assets/images/secret-treasure-cover.png",
    coverPlaceholder: false,
    media: [
      {
        type: "video",
        src: "./assets/videos/secret-treasure-demo.mp4",
        poster: "./assets/images/secret-treasure-cover.png",
        title: "GAMEPLAY / 玩法演示",
        alt: "秘境寻宝 3D 寻宝闯关游戏玩法演示视频"
      },
      {
        type: "image",
        src: "./assets/images/secret-treasure-menu.png",
        alt: "秘境寻宝主菜单场景"
      },
      {
        type: "image",
        src: "./assets/images/secret-treasure-difficulty.png",
        alt: "秘境寻宝简单、困难与返回难度选择界面"
      },
      {
        type: "image",
        src: "./assets/images/secret-treasure-pause.png",
        alt: "秘境寻宝暂停游戏菜单"
      },
      {
        type: "image",
        src: "./assets/images/secret-treasure-cover.png",
        alt: "秘境寻宝关卡实机画面，角色在森林场景中收集金币"
      }
    ],
    tools: ["UNREAL ENGINE 4", "3D GAME", "关卡设计", "金币收集", "问答机制", "难度设计"],
    role: "个人项目",
    status: "",
    modules: {
      overview: {
        label: "PROJECT OVERVIEW / 项目介绍",
        body: "《秘境寻宝》是一款使用 Unreal Engine 4 制作的 3D 寻宝闯关游戏。游戏采用明亮清新的卡通 3D 美术风格，以场景探索、知识问答和金币收集为核心玩法。玩家需要根据不同关卡的挑战要求完成寻宝任务。\n项目包含主菜单、难度选择、简单地图和困难地图四个主要场景，并配有暂停界面及菜单交互，形成了从进入游戏、选择挑战难度，到探索地图并达成通关目标的相对完整的游戏流程。",
        facts: [
          { label: "项目名称", value: "秘境寻宝" },
          { label: "项目类别", value: "Unreal 游戏项目" },
          { label: "游戏类型", value: "3D 寻宝闯关游戏" },
          { label: "开发引擎", value: "Unreal Engine 4" },
          { label: "美术风格", value: "明亮清新的卡通 3D 风格" },
          { label: "关卡难度", value: "简单 / 困难" }
        ]
      },
      technical: {
        label: "TECHNICAL BREAKDOWN / 玩法说明",
        items: [
          {
            title: "问答解锁与关卡挑战",
            body: "玩家进入关卡后，需要先回答老者提出的问题，完成问答环节后才能开始金币收集挑战。问答环节承担关卡引入和挑战解锁的作用。",
            tags: ["问答机制", "关卡挑战"]
          },
          {
            title: "金币收集与通关目标",
            body: "玩家需要在 3D 场景中探索并收集金币，达到关卡指定的金币数量要求后完成通关目标。场景中的金币位置引导玩家穿行并观察关卡空间。",
            tags: ["金币收集", "场景探索", "通关目标"]
          },
          {
            title: "双难度关卡设计",
            body: "简单关卡以较基础的问题和无炸弹陷阱的金币收集为主，帮助玩家熟悉玩法；困难关卡使用难度更高的问题，并在地图中加入炸弹陷阱，要求玩家在收集过程中兼顾环境风险。",
            tags: ["简单难度", "困难难度", "炸弹陷阱"]
          },
          {
            title: "场景与界面结构",
            body: "项目包含主菜单、难度选择、简单地图和困难地图四个主要场景，并提供暂停界面及返回游戏、设置、退出到菜单等菜单交互，构成完整的游戏入口和关卡流程。",
            tags: ["主菜单", "难度选择", "暂停界面"]
          }
        ]
      }
    },
    links: [],
    featured: false,
  },
  {
    id: "unreal-desert-adventure",
    slug: "desert-adventure",
    title: "荒漠大冒险",
    category: "Unreal 游戏项目",
    code: "WORKS / UNREAL GAMEPLAY",
    filter: "ue5-game",
    year: "",
    summary: "《荒漠大冒险》是一款使用 Unreal Engine 5 制作的 2D 寻宝小游戏。通过蓝图实现角色移动、碰撞检测与状态切换等核心交互逻辑，并实践场景搭建、UI 设计、动画序列编辑及输入映射配置。完成 PC、Android 和 iOS 多平台打包，实践从游戏开发、调试到多平台构建交付的完整流程。",
    cover: "./assets/images/desert-adventure-cover.png",
    coverPlaceholder: false,
    media: [
      {
        type: "video",
        src: "./assets/videos/desert-adventure-demo.mp4",
        poster: "./assets/images/desert-adventure-cover.png",
        title: "GAMEPLAY / 玩法演示",
        alt: "荒漠大冒险 2D 寻宝小游戏玩法演示视频"
      }
    ],
    tools: ["UE5", "2D GAME", "BLUEPRINT", "角色控制", "多平台打包"],
    role: "个人项目",
    status: "",
    modules: {
      overview: {
        label: "PROJECT OVERVIEW / 项目介绍",
        body: "《荒漠大冒险》是一款使用 Unreal Engine 5 制作的 2D 寻宝小游戏。项目围绕角色控制与场景交互展开，使用蓝图可视化编程实现游戏核心逻辑，并通过场景搭建、UI 设计、动画序列编辑和输入映射配置，实践 UE5 二维游戏的开发工作流。\n项目完成了核心功能开发与运行调试，并进行了 PC、Android 和 iOS 多平台打包实践，进一步加深了对 Unreal Engine 5 项目开发与跨平台构建流程的理解。",
        facts: [
          { label: "项目名称", value: "荒漠大冒险" },
          { label: "游戏类型", value: "2D 寻宝小游戏" },
          { label: "开发引擎", value: "Unreal Engine 5" },
          { label: "编程方式", value: "蓝图 Blueprint" },
          { label: "核心开发", value: "角色移动 / 碰撞检测 / 状态切换" },
          { label: "构建平台", value: "PC / Android / iOS" }
        ]
      },
      technical: {
        label: "TECHNICAL BREAKDOWN / 玩法说明",
        items: [
          {
            title: "角色控制与交互逻辑",
            body: "使用 UE5 蓝图组织角色移动、碰撞检测和状态切换等基础逻辑，将玩家输入、场景交互和角色状态变化连接起来，实现可运行的核心玩法流程。",
            tags: ["Blueprint", "角色移动", "碰撞检测", "状态切换"]
          },
          {
            title: "场景搭建与 UI 设计",
            body: "围绕 2D 寻宝玩法进行场景搭建，并完成相应界面布局与基础交互设计，使玩家能够通过界面理解当前操作、目标和游戏状态。",
            tags: ["场景搭建", "UI 设计"]
          },
          {
            title: "动画与输入配置",
            body: "通过动画序列编辑组织角色表现，并使用输入映射配置连接玩家操作与游戏行为，实践角色动画、输入响应和玩法逻辑之间的配合。",
            tags: ["动画序列", "输入映射"]
          },
          {
            title: "PC、Android 与 iOS 多平台打包",
            body: "围绕同一个 UE5 项目分别进行 PC、Android 和 iOS 平台打包实践，了解不同目标平台的构建配置与交付流程。该经历属于多平台构建实践，不等同于应用商店正式上架或全部设备兼容性验证。",
            tags: ["PC", "Android", "iOS", "多平台打包"]
          }
        ]
      }
    },
    links: [],
    featured: false,
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
    id: "unity-shooting-game",
    slug: "shooting-game",
    title: "Shooting Game",
    category: "Unity 游戏开发",
    code: "WORKS / UNITY GAMEPLAY",
    filter: "unity-game",
    year: "",
    summary: "通过逐步学习与手动编写代码，完成 Unity 3D 俯视角射击游戏的功能搭建与实现，并在此基础上进行个性化改造，替换角色模型、整合自定义资源。进一步面向微信小游戏开展移动端适配与分包优化，完成项目部署与运行验证。",
    cover: "./assets/images/shooting-game-cover.jpg",
    coverPlaceholder: false,
    media: [
      {
        type: "video",
        src: "./assets/videos/shooting-game-demo.mp4",
        title: "GAMEPLAY / 玩法演示",
        alt: "Shooting Game 玩法演示视频"
      }
    ],
    tools: ["Unity 3D", "C#", "俯视角射击", "角色模型替换", "移动端适配", "微信小游戏", "分包优化"],
    role: "个人项目",
    status: "",
    modules: {
      overview: {
        label: "PROJECT OVERVIEW / 项目介绍",
        body: "Shooting Game 是一个围绕 Unity 3D 俯视角射击游戏开展的学习与改造实践项目。我通过逐步理解功能逻辑并手动编写代码，完成游戏核心功能的搭建与实现；在此基础上替换角色模型、整合自主准备的资源，并面向微信小游戏完成移动端适配、分包优化和部署验证。",
        facts: [
          { label: "项目名称", value: "Shooting Game" },
          { label: "游戏引擎", value: "Unity 3D" },
          { label: "编程语言", value: "C#" },
          { label: "项目类型", value: "俯视角射击游戏" },
          { label: "平台适配", value: "微信小游戏" },
          { label: "工具", value: "微信开发者工具" },
          { label: "优化实践", value: "分包优化" }
        ]
      },
      technical: {
        label: "TECHNICAL BREAKDOWN / 技术说明",
        items: [
          {
            title: "学习与功能实现",
            body: "通过逐步学习与理解游戏功能逻辑，使用 C# 手动编写代码，完成 Unity 3D 俯视角射击游戏的功能搭建与实现。",
            tags: ["C#", "Unity 3D"]
          },
          {
            title: "个性化改造与资源整合",
            body: "在已实现的游戏功能基础上进行个性化改造，替换原有角色模型，并整合自主准备的角色资源。",
            tags: ["角色模型替换", "资源整合"]
          },
          {
            title: "移动端适配",
            body: "围绕微信小游戏运行环境及移动设备的运行、交互需求，对项目进行适配与调试。",
            tags: ["移动端适配"]
          },
          {
            title: "微信小游戏分包优化",
            body: "针对微信小游戏平台的包体限制，采用分包等优化方案，调整项目资源组织与加载方式，以解决项目在微信平台部署过程中的适配问题。",
            tags: ["微信小游戏", "分包优化"]
          },
          {
            title: "构建、调试与部署",
            body: "完成项目构建、调试及微信开发者工具部署验证，实现从 Unity 项目开发到微信小游戏平台运行的完整实践流程。",
            tags: ["微信开发者工具"]
          }
        ]
      }
    },
    links: [],
    featured: false,
  },
  {
    id: "unity-playmaker-2d",
    slug: "playmaker-2d-game",
    title: "Unity 2D 小游戏｜PlayMaker 可视化编程版",
    category: "Unity 游戏开发",
    code: "WORKS / UNITY GAMEPLAY",
    filter: "unity-game",
    year: "",
    summary: "使用 Unity 2D 与 PlayMaker 可视化编程工具，实现角色控制、场景交互、敌人生成及关卡进度管理。通过有限状态机组织角色行为与游戏流程，并与 C# 脚本版本进行对照，探索可视化编程在开发效率和逻辑维护方面的特点。",
    cover: "./assets/images/playmaker-2d-game.jpg",
    coverPlaceholder: false,
    media: [
      {
        type: "video",
        src: "./assets/videos/playmaker-2d-game.mp4",
        poster: "./assets/images/playmaker-2d-game-poster.jpg",
        title: "GAMEPLAY / 玩法演示",
        alt: "PlayMaker 可视化编程版 Unity 2D 小游戏演示视频"
      }
    ],
    tools: ["Unity 2D", "PlayMaker", "FSM", "可视化编程", "游戏逻辑"],
    role: "个人项目",
    status: "",
    modules: {
      overview: {
        label: "PROJECT OVERVIEW / 项目介绍",
        body: "这是一个使用 Unity 2D 与 PlayMaker 可视化编程工具实现的个人小游戏项目。项目围绕角色控制、场景交互、敌人生成与关卡进度管理展开，通过有限状态机组织游戏行为与流程逻辑。在 C# 脚本实现版本的基础上，本项目采用 PlayMaker 探索可视化编程的实现方式，并通过同类玩法的对照，理解不同开发路线在逻辑组织、实现效率和后续维护方面的差异。",
        facts: [
          { label: "项目名称", value: "Unity 2D 小游戏" },
          { label: "项目类别", value: "Unity 游戏开发" },
          { label: "项目类型", value: "Unity 2D 小游戏" },
          { label: "开发方式", value: "PlayMaker 可视化编程" },
          { label: "项目定位", value: "个人项目 / 开发方式对比实践" }
        ]
      },
      technical: {
        label: "TECHNICAL BREAKDOWN / 技术说明",
        items: [
          {
            title: "核心玩法实现",
            body: "使用 PlayMaker 可视化状态机搭建游戏逻辑，实现角色控制与行为逻辑、场景交互、敌人生成及关卡进度管理。",
            tags: ["PlayMaker", "游戏逻辑"]
          },
          {
            title: "有限状态机与游戏流程",
            body: "利用 PlayMaker 的状态机组织角色行为和游戏流程，体现不同状态、事件及逻辑之间的关联，重点呈现可视化逻辑的组织方式。",
            tags: ["FSM", "可视化编程"]
          },
          {
            title: "开发方式对比",
            body: "本项目与此前的 C# 脚本版本采用相同的玩法作为功能对照基准。通过对比两种实现方式，探索 C# 脚本与可视化状态机的逻辑组织差异、可视化编程在逻辑搭建和调试过程中的特点，以及不同开发方式在复杂逻辑维护与后续扩展方面可能存在的差异。",
            tags: ["C# 对照", "PlayMaker"]
          }
        ]
      }
    },
    links: [],
    featured: false,
  },
  {
    id: "unity-garden-defense",
    slug: "garden-defense",
    title: "花园防守",
    category: "Unity 游戏开发",
    code: "WORKS / UNITY GAMEPLAY",
    filter: "unity-game",
    year: "",
    summary: "与 Trae AI 编程助手协作开发的 Unity 2D 塔防小游戏，采用轻松可爱的儿童简笔画风格。围绕网格化战场、阳光资源、植物选择与防守布阵等机制构建游戏玩法，在开发过程中探索 AI 辅助编程在游戏功能实现与项目迭代中的应用。",
    cover: "./assets/images/garden-defense-cover.png",
    coverPlaceholder: false,
    media: [
      {
        type: "video",
        src: "./assets/videos/garden-defense-demo.mp4",
        poster: "./assets/images/garden-defense-cover.png",
        title: "GAMEPLAY / 玩法演示",
        alt: "花园防守 Unity 2D 塔防游戏玩法演示视频"
      }
    ],
    tools: ["UNITY 2D", "TOWER DEFENSE", "TRAE AI", "植物布阵"],
    role: "个人项目",
    status: "",
    modules: {
      overview: {
        label: "PROJECT OVERVIEW / 项目介绍",
        body: "这是一款与 Trae AI 编程助手协作开发的 Unity 2D 塔防小游戏。游戏采用儿童简笔画风格，以清新明快的色彩、可爱的植物形象和直观的网格化战场，营造轻松易懂的游戏体验。玩法借鉴经典植物布阵防守类塔防游戏的设计思路，围绕阳光资源、植物选择与布阵、敌人防守等元素展开。",
        facts: [
          { label: "项目名称", value: "花园防守" },
          { label: "游戏类型", value: "Unity 2D 塔防小游戏" },
          { label: "美术风格", value: "儿童简笔画 / 卡通风格" },
          { label: "开发工具", value: "Unity / Trae AI 编程助手" },
          { label: "玩法方向", value: "植物布阵 / 阳光资源 / 塔防策略" },
          { label: "项目定位", value: "个人游戏开发实践" }
        ]
      },
      technical: {
        label: "TECHNICAL BREAKDOWN / 技术说明",
        items: [
          {
            title: "网格化战场与植物布阵",
            body: "游戏以网格化战场组织防守位置，玩家可以根据敌人的推进路线选择合适的格子布置植物，通过不同位置的安排形成防线。",
            tags: ["网格化战场", "植物布阵", "塔防策略"]
          },
          {
            title: "阳光资源与功能单位",
            body: "游戏通过阳光资源连接资源获取、植物选择和布阵决策。不同功能单位分别承担资源生产、射击防守与防御阻挡等作用，界面同时提供暂停、植物选择和移除等操作反馈。",
            tags: ["阳光资源", "植物选择", "操作反馈"]
          },
          {
            title: "Trae AI 辅助开发实践",
            body: "项目与 Trae AI 编程助手协作完成，将塔防玩法构想逐步落实为可运行功能，并结合实际画面与操作反馈持续调整和迭代。开发重点在于游戏功能整合、问题排查，以及对 AI 辅助编程工作流的实践。",
            tags: ["Trae AI", "AI 辅助编程", "功能整合"]
          }
        ]
      }
    },
    links: [],
    featured: false,
  },
  {
    id: "ue5-niagara-vfx",
    slug: "niagara-vfx-collection",
    title: "UE5 Niagara 特效合集",
    category: "UE5 地编与Niagara特效",
    filter: "ue5-environment",
    year: "",
    summary: "UE5 Niagara 特效合集，集中展示 Unreal Engine 5 中不同特效作品的实际运行效果。通过视频呈现特效的视觉表现与动态变化，记录 Niagara 实时特效的制作与实践成果。",
    cover: "./assets/images/niagara-vfx-cover.jpg",
    coverPlaceholder: false,
    media: [
      { type: "video", src: "./assets/videos/niagara/meteor-fall.mp4", poster: "./assets/images/niagara/meteor-fall-poster.jpg", title: "Niagara 特效 01", alt: "Niagara 特效演示视频 01" },
      { type: "video", src: "./assets/videos/niagara/wood-fire.mp4", poster: "./assets/images/niagara/wood-fire-poster.jpg", title: "Niagara 特效 02", alt: "Niagara 特效演示视频 02" },
      { type: "video", src: "./assets/videos/niagara/missile-rain.mp4", poster: "./assets/images/niagara/missile-rain-poster.jpg", title: "Niagara 特效 03", alt: "Niagara 特效演示视频 03" },
      { type: "video", src: "./assets/videos/niagara/rocket-burst.mp4", poster: "./assets/images/niagara/rocket-burst-poster.jpg", title: "Niagara 特效 04", alt: "Niagara 特效演示视频 04" },
      { type: "video", src: "./assets/videos/niagara/volcano-eruption.mp4", poster: "./assets/images/niagara/volcano-eruption-poster.jpg", title: "Niagara 特效 05", alt: "Niagara 特效演示视频 05" },
      { type: "video", src: "./assets/videos/niagara/niagara-editor.mp4", poster: "./assets/images/niagara/niagara-editor-poster.jpg", title: "Niagara 特效 06", alt: "Niagara 特效演示视频 06" },
      { type: "video", src: "./assets/videos/niagara/car-fire.mp4", poster: "./assets/images/niagara/car-fire-poster.jpg", title: "Niagara 特效 07", alt: "Niagara 特效演示视频 07" },
      { type: "video", src: "./assets/videos/niagara/spotlight.mp4", poster: "./assets/images/niagara/spotlight-poster.jpg", title: "Niagara 特效 08", alt: "Niagara 特效演示视频 08" }
    ],
    tools: ["UE5", "Niagara", "实时特效", "VFX"],
    role: "个人项目",
    status: "",
    modules: {
      overview: {
        label: "PROJECT OVERVIEW / 项目介绍",
        body: "UE5 Niagara 特效合集，集中展示 Unreal Engine 5 中不同特效作品的实际运行效果。通过视频呈现特效的视觉表现与动态变化，记录 Niagara 实时特效的制作与实践成果。",
        facts: [
          { label: "作品类型", value: "UE5 实时特效展示" },
          { label: "特效系统", value: "Niagara" },
          { label: "作品数量", value: "8 组" }
        ]
      }
    },
    links: [],
    featured: false,
  },
  {
    id: "photoshop-graphic-design",
    slug: "graphic-design-archive",
    title: "Photoshop 平面设计档案",
    category: "Photoshop 平面设计",
    filter: "photoshop-design",
    year: "",
    summary: "",
    cover: "./assets/images/graphic-design/海报终稿 拷贝.jpg",
    coverPlaceholder: false,
    media: [],
    tools: [],
    role: "",
    status: "",
    modules: {
      gallery: {
        label: "",
        intro: "",
        items: [
      { type: "image", src: "./assets/images/graphic-design/茶壶与茶.jpg", title: "茶壶与茶", alt: "茶壶与茶" },
      { type: "image", src: "./assets/images/graphic-design/峨眉.jpg", title: "峨眉", alt: "峨眉" },
      { type: "image", src: "./assets/images/graphic-design/复杂组合.jpg", title: "复杂组合", alt: "复杂组合" },
      { type: "image", src: "./assets/images/graphic-design/海报终稿 拷贝.jpg", title: "海报终稿 拷贝", alt: "海报终稿 拷贝" },
      { type: "image", src: "./assets/images/graphic-design/江南风景图封面.jpg", title: "江南风景图封面", alt: "江南风景图封面" },
      { type: "image", src: "./assets/images/graphic-design/江南风景图作业.jpg", title: "江南风景图作业", alt: "江南风景图作业" },
      { type: "image", src: "./assets/images/graphic-design/开关简图.jpg", title: "开关简图", alt: "开关简图" },
      { type: "image", src: "./assets/images/graphic-design/矿泉水广告图.jpg", title: "矿泉水广告图", alt: "矿泉水广告图" },
      { type: "image", src: "./assets/images/graphic-design/名片反面.jpg", title: "名片反面", alt: "名片反面" },
      { type: "image", src: "./assets/images/graphic-design/名片和纸杯设计样机展示图.jpg", title: "名片和纸杯设计样机展示图", alt: "名片和纸杯设计样机展示图" },
      { type: "image", src: "./assets/images/graphic-design/名片正面.jpg", title: "名片正面", alt: "名片正面" },
      { type: "image", src: "./assets/images/graphic-design/上升.gif", title: "上升", alt: "上升" },
      { type: "image", src: "./assets/images/graphic-design/图标设计1.jpg", title: "图标设计1", alt: "图标设计1" },
      { type: "image", src: "./assets/images/graphic-design/图标设计2.jpg", title: "图标设计2", alt: "图标设计2" },
      { type: "image", src: "./assets/images/graphic-design/图标设计3.jpg", title: "图标设计3", alt: "图标设计3" },
      { type: "image", src: "./assets/images/graphic-design/图标设计4.jpg", title: "图标设计4", alt: "图标设计4" },
      { type: "image", src: "./assets/images/graphic-design/图标设计5.jpg", title: "图标设计5", alt: "图标设计5" },
      { type: "image", src: "./assets/images/graphic-design/图标设计6.png", title: "图标设计6", alt: "图标设计6" },
      { type: "image", src: "./assets/images/graphic-design/图标设计7.jpg", title: "图标设计7", alt: "图标设计7" },
      { type: "image", src: "./assets/images/graphic-design/网页面板.jpg", title: "网页面板", alt: "网页面板" },
      { type: "image", src: "./assets/images/graphic-design/网页面板设计2.jpg", title: "网页面板设计2", alt: "网页面板设计2" },
      { type: "image", src: "./assets/images/graphic-design/网页面板设计3.jpg", title: "网页面板设计3", alt: "网页面板设计3" },
      { type: "image", src: "./assets/images/graphic-design/网页面设计1.jpg", title: "网页面设计1", alt: "网页面设计1" },
      { type: "image", src: "./assets/images/graphic-design/维纳斯.jpg", title: "维纳斯", alt: "维纳斯" },
      { type: "image", src: "./assets/images/graphic-design/小熊封面4.jpg", title: "小熊封面4", alt: "小熊封面4" },
      { type: "image", src: "./assets/images/graphic-design/学生风采子页.jpg", title: "学生风采子页", alt: "学生风采子页" },
      { type: "image", src: "./assets/images/graphic-design/幼儿园字体描边.png", title: "幼儿园字体描边", alt: "幼儿园字体描边" },
      { type: "image", src: "./assets/images/graphic-design/展示图1.jpg", title: "展示图1", alt: "展示图1" },
      { type: "image", src: "./assets/images/graphic-design/展示图2.jpg", title: "展示图2", alt: "展示图2" },
      { type: "image", src: "./assets/images/graphic-design/展示图3.jpg", title: "展示图3", alt: "展示图3" },
      { type: "image", src: "./assets/images/graphic-design/CD封面正面.jpg", title: "CD封面正面", alt: "CD封面正面" },
      { type: "image", src: "./assets/images/graphic-design/IP表情3.gif", title: "IP表情3", alt: "IP表情3" },
      { type: "image", src: "./assets/images/graphic-design/VR.jpg", title: "VR", alt: "VR" }
        ]
      }
    },
    links: [],
    featured: false,
  },
  {
    id: "3d-model-sword",
    slug: "sword",
    title: "宝剑",
    category: "三维建模",
    code: "WORKS / 3D MODEL",
    filter: "3d-modeling",
    year: "",
    summary: "",
    cover: "./assets/images/3d-models/sword/高模.png",
    coverPlaceholder: false,
    media: [],
    tools: ["3D MODEL", "FBX"],
    role: "",
    status: "",
    model3d: { src: "./assets/models/sword/sword.glb" },
    modules: {
      gallery: {
        label: "",
        intro: "",
        items: [
          { type: "image", src: "./assets/images/3d-models/sword/低模线条.png", alt: "宝剑低模线条" },
          { type: "image", src: "./assets/images/3d-models/sword/高模.png", alt: "宝剑高模" },
          { type: "image", src: "./assets/images/3d-models/sword/xuanrantu.png", alt: "宝剑渲染图" }
        ]
      }
    },
    links: [],
    featured: false
  },
  {
    id: "3d-model-bed",
    slug: "bed",
    title: "床榻",
    category: "三维建模",
    code: "WORKS / 3D MODEL",
    filter: "3d-modeling",
    year: "",
    summary: "",
    cover: "./assets/images/3d-models/bed/实物图.png",
    coverPlaceholder: false,
    media: [],
    tools: ["3D MODEL", "FBX"],
    role: "",
    status: "",
    model3d: { src: "./assets/models/bed/床榻模型.fbx" },
    modules: {
      gallery: {
        label: "",
        intro: "",
        items: [
          { type: "image", src: "./assets/images/3d-models/bed/实物图.png", alt: "床榻实物图" }
        ]
      }
    },
    links: [],
    featured: false
  },
  {
    id: "3d-model-porcelain-vase",
    slug: "porcelain-vase",
    title: "瓷器瓶",
    category: "三维建模",
    code: "WORKS / 3D MODEL",
    filter: "3d-modeling",
    year: "",
    summary: "",
    cover: "./assets/images/3d-models/porcelain-vase/ciqi.png",
    coverPlaceholder: false,
    media: [],
    tools: ["3D MODEL", "FBX"],
    role: "",
    status: "",
    model3d: { src: "./assets/models/porcelain-vase/瓷器瓶模型.fbx" },
    modules: {
      gallery: {
        label: "",
        intro: "",
        items: [
          { type: "image", src: "./assets/images/3d-models/porcelain-vase/ciqi.png", alt: "瓷器瓶模型图" }
        ]
      }
    },
    links: [],
    featured: false
  },
  {
    id: "3d-model-girl-with-pearl-earring",
    slug: "girl-with-pearl-earring",
    title: "带珍珠耳环的少女",
    category: "三维建模",
    code: "WORKS / 3D MODEL",
    filter: "3d-modeling",
    year: "",
    summary: "",
    cover: "./assets/images/3d-models/girl-with-pearl-earring/少女.png",
    coverPlaceholder: false,
    media: [],
    tools: ["3D MODEL", "FBX"],
    role: "",
    status: "",
    model3d: { src: "./assets/models/girl-with-pearl-earring/少女模型.fbx" },
    modules: {
      gallery: {
        label: "",
        intro: "",
        items: [
          { type: "image", src: "./assets/images/3d-models/girl-with-pearl-earring/少女.png", alt: "带珍珠耳环的少女模型图" }
        ]
      }
    },
    links: [],
    featured: false
  },
  {
    id: "3d-model-seismoscope",
    slug: "seismoscope",
    title: "地动仪",
    category: "三维建模",
    code: "WORKS / 3D MODEL",
    filter: "3d-modeling",
    year: "",
    summary: "",
    cover: "./assets/images/3d-models/seismoscope/地动仪整体.png",
    coverPlaceholder: false,
    media: [],
    tools: ["3D MODEL", "FBX"],
    role: "",
    status: "",
    model3d: { src: "./assets/models/seismoscope/外部结构.fbx" },
    modules: {
      gallery: {
        label: "",
        intro: "",
        items: [
          { type: "image", src: "./assets/images/3d-models/seismoscope/地动仪贴图版本.jpg", alt: "地动仪贴图版本" },
          { type: "image", src: "./assets/images/3d-models/seismoscope/地动仪整体.png", alt: "地动仪整体" },
          { type: "image", src: "./assets/images/3d-models/seismoscope/底座.jpg", alt: "地动仪底座" },
          { type: "image", src: "./assets/images/3d-models/seismoscope/高质量版本.jpg", alt: "地动仪高质量版本" },
          { type: "image", src: "./assets/images/3d-models/seismoscope/内部图片.png", alt: "地动仪内部图片" },
          { type: "image", src: "./assets/images/3d-models/seismoscope/A3版本整体.jpg", alt: "地动仪 A3 版本整体" }
        ]
      }
    },
    links: [],
    featured: false
  },
  {
    id: "3d-model-chandelier",
    slug: "chandelier",
    title: "吊灯",
    category: "三维建模",
    code: "WORKS / 3D MODEL",
    filter: "3d-modeling",
    year: "",
    summary: "",
    cover: "./assets/images/3d-models/chandelier/吊灯渲染完成2.jpg",
    coverPlaceholder: false,
    media: [],
    tools: ["3D MODEL", "FBX"],
    role: "",
    status: "",
    model3d: { src: "./assets/models/chandelier/吊灯模型.fbx" },
    modules: {
      gallery: {
        label: "",
        intro: "",
        items: [
          { type: "image", src: "./assets/images/3d-models/chandelier/吊灯渲染完成2.jpg", alt: "吊灯渲染图" }
        ]
      }
    },
    links: [],
    featured: false
  },
  {
    id: "3d-model-earring",
    slug: "earring",
    title: "耳环",
    category: "三维建模",
    code: "WORKS / 3D MODEL",
    filter: "3d-modeling",
    year: "",
    summary: "",
    cover: "./assets/images/3d-models/earring/白模.png",
    coverPlaceholder: false,
    media: [],
    tools: ["3D MODEL", "FBX"],
    role: "",
    status: "",
    model3d: { src: "./assets/models/earring/高模.fbx" },
    modules: {
      gallery: {
        label: "",
        intro: "",
        items: [
          { type: "image", src: "./assets/images/3d-models/earring/白模.png", alt: "耳环白模" },
          { type: "image", src: "./assets/images/3d-models/earring/右耳渲染完成图.png", alt: "右耳渲染完成图" },
          { type: "image", src: "./assets/images/3d-models/earring/左耳渲染完成图.png", alt: "左耳渲染完成图" }
        ]
      }
    },
    links: [],
    featured: false
  },
  {
    id: "3d-model-rv",
    slug: "rv-model",
    title: "房车模型",
    category: "三维建模",
    code: "WORKS / 3D MODEL",
    filter: "3d-modeling",
    year: "",
    summary: "",
    cover: "./assets/images/3d-models/rv-model/模型图片.png",
    coverPlaceholder: false,
    media: [],
    tools: ["3D MODEL", "FBX"],
    role: "",
    status: "",
    model3d: { src: "./assets/models/rv-model/房车模型.fbx" },
    modules: {
      gallery: {
        label: "",
        intro: "",
        items: [
          { type: "image", src: "./assets/images/3d-models/rv-model/模型图片.png", alt: "房车模型图" }
        ]
      }
    },
    links: [],
    featured: false
  },
  {
    id: "3d-model-palace",
    slug: "palace",
    title: "宫殿",
    category: "三维建模",
    code: "WORKS / 3D MODEL",
    filter: "3d-modeling",
    year: "",
    summary: "",
    cover: "./assets/images/3d-models/palace/正交视角.png",
    coverPlaceholder: false,
    media: [],
    tools: ["3D MODEL", "FBX"],
    role: "",
    status: "",
    modules: {
      gallery: {
        label: "",
        intro: "",
        items: [
          { type: "image", src: "./assets/images/3d-models/palace/顶视图.png", alt: "宫殿顶视图" },
          { type: "image", src: "./assets/images/3d-models/palace/细节展示1.png", alt: "宫殿细节展示 1" },
          { type: "image", src: "./assets/images/3d-models/palace/细节展示2.png", alt: "宫殿细节展示 2" },
          { type: "image", src: "./assets/images/3d-models/palace/细节展示3.png", alt: "宫殿细节展示 3" },
          { type: "image", src: "./assets/images/3d-models/palace/正交视角.png", alt: "宫殿正交视角" }
        ]
      }
    },
    links: [],
    featured: false
  },
  {
    id: "3d-model-ancient-architecture",
    slug: "ancient-architecture",
    title: "古建筑",
    category: "三维建模",
    code: "WORKS / 3D MODEL",
    filter: "3d-modeling",
    year: "",
    summary: "",
    cover: "./assets/images/3d-models/ancient-architecture/贴图版正面.png",
    coverPlaceholder: false,
    media: [],
    tools: ["3D MODEL", "FBX"],
    role: "",
    status: "",
    model3d: { src: "./assets/models/ancient-architecture/古建筑模型.fbx" },
    modules: {
      gallery: {
        label: "",
        intro: "",
        items: [
          { type: "image", src: "./assets/images/3d-models/ancient-architecture/贴图版正面.png", alt: "古建筑贴图版正面" },
          { type: "image", src: "./assets/images/3d-models/ancient-architecture/贴图版侧面.png", alt: "古建筑贴图版侧面" }
        ]
      }
    },
    links: [],
    featured: false
  },
  {
    id: "3d-model-vase",
    slug: "vase",
    title: "花瓶",
    category: "三维建模",
    code: "WORKS / 3D MODEL",
    filter: "3d-modeling",
    year: "",
    summary: "",
    cover: "./assets/images/3d-models/vase/我渲染的版本.png",
    coverPlaceholder: false,
    media: [],
    tools: ["3D MODEL", "FBX"],
    role: "",
    status: "",
    model3d: { src: "./assets/models/vase/花瓶.fbx" },
    modules: {
      gallery: {
        label: "",
        intro: "",
        items: [
          { type: "image", src: "./assets/images/3d-models/vase/我渲染的版本.png", alt: "花瓶渲染版本" }
        ]
      }
    },
    links: [],
    featured: false
  },
  {
    id: "3d-model-pistol",
    slug: "pistol",
    title: "手枪",
    category: "三维建模",
    code: "WORKS / 3D MODEL",
    filter: "3d-modeling",
    year: "",
    summary: "",
    cover: "./assets/images/3d-models/pistol/成品.png",
    coverPlaceholder: false,
    media: [],
    tools: ["3D MODEL", "FBX"],
    role: "",
    status: "",
    model3d: { src: "./assets/models/pistol/高模.fbx" },
    modules: {
      gallery: {
        label: "",
        intro: "",
        items: [
          { type: "image", src: "./assets/images/3d-models/pistol/成品.png", alt: "手枪成品图" },
          { type: "image", src: "./assets/images/3d-models/pistol/高模.png", alt: "手枪高模" },
          { type: "image", src: "./assets/images/3d-models/pistol/手枪初模.png", alt: "手枪初模" }
        ]
      }
    },
    links: [],
    featured: false
  },
  {
    id: "3d-model-well",
    slug: "well",
    title: "水井",
    category: "三维建模",
    code: "WORKS / 3D MODEL",
    filter: "3d-modeling",
    year: "",
    summary: "",
    cover: "./assets/images/3d-models/well/带渲染效果2.png",
    coverPlaceholder: false,
    media: [],
    tools: ["3D MODEL", "FBX"],
    role: "",
    status: "",
    model3d: { src: "./assets/models/well/水井.fbx" },
    modules: {
      gallery: {
        label: "",
        intro: "",
        items: [
          { type: "image", src: "./assets/images/3d-models/well/带渲染效果2.png", alt: "水井渲染效果图" }
        ]
      }
    },
    links: [],
    featured: false
  },
  {
    id: "3d-model-incense-burner",
    slug: "incense-burner",
    title: "香炉",
    category: "三维建模",
    code: "WORKS / 3D MODEL",
    filter: "3d-modeling",
    year: "",
    summary: "",
    cover: "./assets/images/3d-models/incense-burner/香炉图片.png",
    coverPlaceholder: false,
    media: [],
    tools: ["3D MODEL", "FBX"],
    role: "",
    status: "",
    model3d: { src: "./assets/models/incense-burner/香炉模型.fbx" },
    modules: {
      gallery: {
        label: "",
        intro: "",
        items: [
          { type: "image", src: "./assets/images/3d-models/incense-burner/香炉图片.png", alt: "香炉模型图" }
        ]
      }
    },
    links: [],
    featured: false
  },
  {
    id: "3d-model-fox-and-plants",
    slug: "fox-and-plants",
    title: "小狐狸和花花草草",
    category: "三维建模",
    code: "WORKS / 3D MODEL",
    filter: "3d-modeling",
    year: "",
    summary: "",
    cover: "./assets/images/3d-models/fox-and-plants/我渲染的小狐狸.png",
    coverPlaceholder: false,
    media: [],
    tools: ["3D MODEL", "FBX"],
    role: "",
    status: "",
    model3d: { src: "./assets/models/fox-and-plants/小狐狸模型.fbx" },
    modules: {
      gallery: {
        label: "",
        intro: "",
        items: [
          { type: "image", src: "./assets/images/3d-models/fox-and-plants/发光蘑菇.jpg", alt: "发光蘑菇" },
          { type: "image", src: "./assets/images/3d-models/fox-and-plants/龟背竹原模型.png", alt: "龟背竹原模型" },
          { type: "image", src: "./assets/images/3d-models/fox-and-plants/建模合集.png", alt: "建模合集" },
          { type: "image", src: "./assets/images/3d-models/fox-and-plants/未命名.png", alt: "小狐狸和花花草草未命名图" },
          { type: "image", src: "./assets/images/3d-models/fox-and-plants/我渲染的渐变花花.jpg", alt: "渐变花花渲染图" },
          { type: "image", src: "./assets/images/3d-models/fox-and-plants/我渲染的小狐狸.png", alt: "小狐狸渲染图" }
        ]
      }
    },
    links: [],
    featured: false
  },
  {
    id: "3d-model-star-ring-blade",
    slug: "star-ring-blade",
    title: "星海环刃",
    category: "三维建模",
    code: "WORKS / 3D MODEL",
    filter: "3d-modeling",
    year: "",
    summary: "",
    cover: "./assets/images/3d-models/star-ring-blade/星海环刃.jpg",
    coverPlaceholder: false,
    media: [],
    tools: ["3D MODEL", "FBX"],
    role: "",
    status: "",
    model3d: { src: "./assets/models/star-ring-blade/星海环刃.fbx" },
    modules: {
      gallery: {
        label: "",
        intro: "",
        items: [
          { type: "image", src: "./assets/images/3d-models/star-ring-blade/星海环刃.jpg", alt: "星海环刃渲染图" },
          { type: "image", src: "./assets/images/3d-models/star-ring-blade/中模.png", alt: "星海环刃中模" }
        ]
      }
    },
    links: [],
    featured: false
  },
  {
    id: "3d-model-chair",
    slug: "chair",
    title: "椅子",
    category: "三维建模",
    code: "WORKS / 3D MODEL",
    filter: "3d-modeling",
    year: "",
    summary: "",
    cover: "./assets/images/3d-models/chair/渲染完成的椅子.jpg",
    coverPlaceholder: false,
    media: [],
    tools: ["3D MODEL", "FBX"],
    role: "",
    status: "",
    model3d: { src: "./assets/models/chair/椅子模型.fbx" },
    modules: {
      gallery: {
        label: "",
        intro: "",
        items: [
          { type: "image", src: "./assets/images/3d-models/chair/渲染完成的椅子.jpg", alt: "渲染完成的椅子" }
        ]
      }
    },
    links: [],
    featured: false
  },
  {
    id: "3d-model-screen-wall",
    slug: "screen-wall",
    title: "影壁",
    category: "三维建模",
    code: "WORKS / 3D MODEL",
    filter: "3d-modeling",
    year: "",
    summary: "",
    cover: "./assets/images/3d-models/screen-wall/高质量版本.jpg",
    coverPlaceholder: false,
    media: [],
    tools: ["3D MODEL", "FBX"],
    role: "",
    status: "",
    model3d: { src: "./assets/models/screen-wall/影壁模型.fbx" },
    modules: {
      gallery: {
        label: "",
        intro: "",
        items: [
          { type: "image", src: "./assets/images/3d-models/screen-wall/高质量版本.jpg", alt: "影壁高质量版本" }
        ]
      }
    },
    links: [],
    featured: false
  },
  {
    id: "3d-model-oil-lamp",
    slug: "oil-lamp",
    title: "油灯",
    category: "三维建模",
    code: "WORKS / 3D MODEL",
    filter: "3d-modeling",
    year: "",
    summary: "",
    cover: "./assets/images/3d-models/oil-lamp/油灯图.png",
    coverPlaceholder: false,
    media: [],
    tools: ["3D MODEL", "FBX"],
    role: "",
    status: "",
    model3d: { src: "./assets/models/oil-lamp/1.0.fbx" },
    modules: {
      gallery: {
        label: "",
        intro: "",
        items: [
          { type: "image", src: "./assets/images/3d-models/oil-lamp/油灯图.png", alt: "油灯图" }
        ]
      }
    },
    links: [],
    featured: false
  },
  {
    id: "3d-model-rounded-sword",
    slug: "rounded-sword",
    title: "圆润宝剑",
    category: "三维建模",
    code: "WORKS / 3D MODEL",
    filter: "3d-modeling",
    year: "",
    summary: "",
    cover: "./assets/images/3d-models/rounded-sword/模.png",
    coverPlaceholder: false,
    media: [],
    tools: ["3D MODEL", "FBX"],
    role: "",
    status: "",
    modules: {
      gallery: {
        label: "",
        intro: "",
        items: [
          { type: "image", src: "./assets/images/3d-models/rounded-sword/低模.jpg", alt: "圆润宝剑低模" },
          { type: "image", src: "./assets/images/3d-models/rounded-sword/模.png", alt: "圆润宝剑模型图" },
          { type: "image", src: "./assets/images/3d-models/rounded-sword/ca46f3392bc9f4b23bc68de733ca8d02.png", alt: "圆润宝剑参考图" }
        ]
      }
    },
    links: [],
    featured: false
  },
];

/* Category definitions for the filter bar.
 * Categories with no matching projects will render as empty states. */
const categories = [
  { key: "all",                label: "全部作品" },
  { key: "unity-game",         label: "Unity 游戏开发" },
  { key: "ue5-game",           label: "Unreal 游戏项目" },
  { key: "ue5-environment",    label: "UE5 地编与Niagara特效" },
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
      title: "《荒漠大冒险》UE5 二维小游戏",
      category: "个人项目",
      role: "玩法实现 / 蓝图逻辑 / 多平台打包",
      featured: false,
      points: [
        "使用 UE5 蓝图实现角色移动、碰撞检测、状态切换等玩法逻辑。",
        "实践场景搭建、UI 设计、动画序列编辑和输入映射。",
        "完成 PC、Android 与 iOS 多平台打包实践。"
      ],
      tech: ["UE5", "Blueprint", "多平台打包"],
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
