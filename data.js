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
