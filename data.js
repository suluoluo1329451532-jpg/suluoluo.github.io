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
    category: "UE5 地编",
    filter: "game-art-scenes",
    year: "",
    summary:
      "以废弃科考站为主题的 UE5 场景练习，重点展示地编、模块化资产、体积雾、灯光氛围与镜头构图。",
    cover: "./assets/work-ue5-scene.png",
    media: [],
    tools: ["UE5", "Blender", "Substance 3D Painter"],
    role: "",
    status: "练习作品",
    modules: {},
    links: [],
    featured: true,
  },
  {
    id: "unity-puzzle-proto",
    slug: "interactive-puzzle-prototype",
    title: "交互解谜原型",
    category: "Unity 游戏",
    filter: "game-development",
    year: "",
    summary:
      "Unity 制作的第三人称交互原型，包含基础角色控制、机关触发、UI 状态反馈和关卡流程。",
    cover: "./assets/work-unity-game.png",
    media: [],
    tools: ["Unity", "C#"],
    role: "",
    status: "练习作品",
    modules: {},
    links: [],
    featured: true,
  },
  {
    id: "prop-gen-asset",
    slug: "nextgen-prop-asset",
    title: "次世代道具资产",
    category: "次世代建模",
    filter: "3d-work",
    year: "",
    summary:
      "完整高低模与 PBR 贴图流程练习，展示资产轮廓、材质磨损、法线细节和游戏引擎预览效果。",
    cover: "./assets/work-prop-model.png",
    media: [],
    tools: ["Blender", "ZBrush", "Substance 3D Painter"],
    role: "",
    status: "练习作品",
    modules: {},
    links: [],
    featured: true,
  },
  {
    id: "poster-city-rhythm",
    slug: "city-rhythm-poster",
    title: "城市节奏海报",
    category: "平面设计",
    filter: "animation-visual",
    year: "",
    summary:
      "围绕数字城市与青年文化主题制作的视觉海报，强调信息层级、构图张力和视觉记忆点。",
    cover: "./assets/work-poster.png",
    media: [],
    tools: ["Photoshop", "Illustrator"],
    role: "",
    status: "课程作品",
    modules: {},
    links: [],
    featured: true,
  },
  {
    id: "ue5-roam-video",
    slug: "ue5-scene-roaming-video",
    title: "UE5 场景漫游视频",
    category: "UE5 场景漫游",
    filter: "game-art-scenes",
    year: "",
    summary:
      "用于展示场景完整空间关系、镜头运动、灯光变化和最终画面表现的视频入口。",
    cover: "./assets/work-video.png",
    media: [],
    tools: ["UE5", "Premiere"],
    role: "",
    status: "练习作品",
    modules: {},
    links: [],
    featured: false,
  },
  {
    id: "ue5-open-world",
    slug: "open-world-landscape",
    title: "开放世界地编练习",
    category: "UE5 地编",
    filter: "game-art-scenes",
    year: "",
    summary:
      "围绕自然地貌、路径引导和远中近景关系进行的地编练习，包含植被散布、材质混合与氛围设计。",
    cover: "./assets/work-landscape.png",
    media: [],
    tools: ["UE5"],
    role: "",
    status: "练习作品",
    modules: {},
    links: [],
    featured: false,
  },
];

/* Category definitions for the filter bar.
 * Categories with no matching projects will render as empty states. */
const categories = [
  { key: "all",                label: "全部作品" },
  { key: "game-development",   label: "游戏开发" },
  { key: "game-art-scenes",    label: "游戏美术与场景" },
  { key: "3d-work",            label: "三维作品" },
  { key: "animation-visual",   label: "动画与视觉" },
  { key: "ai-lab",             label: "AI 实验室" },
];

/* Personal profile data (used by About page and Terminal). */
const profile = {
  name: "杨蕙咛",
  en: "YHN®",
  title: "数字艺术家 / 游戏美术 / 环境设计",
  bio: "数字媒体专业学生，专注 Unity 与 UE5 游戏制作、UE5 地编、次世代场景全流程、建模与视觉海报设计。",
  email: "",           // TODO: fill in real email
  social: {
    bilibili: "",     // TODO: fill in
    artstation: "",   // TODO: fill in
    behance: "",      // TODO: fill in
  },
  resume: "",          // TODO: place resume PDF at assets/resume.pdf and set path here
  education: [],       // TODO: fill in
  experience: [],      // TODO: fill in
  awards: [],          // TODO: fill in
  skills: [
    "Unreal Engine 5", "Unity", "Environment Art", "3D Modeling",
    "PBR Workflow", "Poster Design", "Video Editing",
  ],
};
